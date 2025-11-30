

export async function exportGridAsImage(elementId: string, fileName: string) {
    const element = document.getElementById(elementId)
    if (!element) throw new Error('找不到导出目标元素')

    // 1. Dynamic import html-to-image
    let toPng
    try {
        const module = await import('html-to-image')
        toPng = module.toPng
    } catch (e) {
        throw new Error('组件加载失败，请重启服务器')
    }

    // 2. Detect Mobile/iOS
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream

    try {
        // 3. Generate PNG
        // Lower pixelRatio on mobile to prevent memory crashes
        const ratio = isMobile ? 2 : 3

        const dataUrl = await toPng(element, {
            backgroundColor: '#ffffff',
            pixelRatio: ratio,
            cacheBust: true,
            skipOnError: true,
            fontEmbedCSS: '',
            fetchRequestInit: {
                cache: 'no-cache',
            }
        } as any)

        // 4. Download or Open
        if (isIOS) {
            // iOS Safari doesn't support download attribute well, open in new tab
            const win = window.open()
            if (win) {
                win.document.write('<img src="' + dataUrl + '" style="width:100%"/>')
                win.document.title = "长按保存图片"
            } else {
                // Fallback if popup blocked
                window.location.href = dataUrl
            }
        } else {
            const link = document.createElement('a')
            link.download = `${fileName}-${Date.now()}.png`
            link.href = dataUrl
            link.click()
        }

    } catch (error) {
        console.error('Export failed:', error)
        throw error
    }
}
