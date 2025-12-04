import type { BgmCharacterSearchResultItem, BgmPersonSearchResultItem } from '~/types'

// 从环境变量中获取敏感信息
const accessToken = import.meta.env.VITE_BANGUMI_ACCESS_TOKEN
const userAgent = import.meta.env.VITE_BANGUMI_USER_AGENT

export class SearchError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'SearchError'
    }
}

// 搜索函数
export type BgmSearchTarget = 'characters' | 'persons'

export async function useBgmSearch(keyword: string, offset = 0, target: BgmSearchTarget = 'characters') {
    if (!keyword)
        return []

    // 检查凭证是否存在
    if (!accessToken || !userAgent || accessToken === 'YOUR_REAL_BANGUMI_ACCESS_TOKEN') {
        throw new SearchError('请在 .env 文件中配置正确的 Bangumi Access Token 和 User Agent。')
    }

    try {
        // Use local proxy in production to avoid CORS/GFW issues
        // Use direct API in dev (unless using wrangler)
        const apiUrl = import.meta.env.PROD
            ? '/api/search'
            : `https://api.bgm.tv/v0/search/${target}`

        const res = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
                // Browser will set its own User-Agent. 
                // Our proxy will override it with a valid one.
            },
            body: JSON.stringify({
                keyword,
                // characters: optional nsfw flag; persons: optional career filter.
                // Keep minimal; callers can expand in future.
                filter: target === 'characters' ? {} : {},
                offset,
                limit: 20,
                // Helper field for proxy to decide endpoint in PROD
                target,
            }),
        })

        if (!res.ok) {
            if (res.status === 401) {
                throw new SearchError('API 认证失败 (401)。请检查 Access Token 是否过期或无效。')
            }
            throw new SearchError(`API 请求失败: ${res.status} ${res.statusText}`)
        }

        // API v0/search/characters 返回的是一个包含 data 字段的对象
    const result = await res.json()
    const data = (result.data || [])
    return data as (BgmCharacterSearchResultItem[] | BgmPersonSearchResultItem[])
    } catch (error: any) {
        if (error instanceof SearchError) {
            throw error
        }
        throw new SearchError(`网络或未知错误: ${error.message}`)
    }
}
