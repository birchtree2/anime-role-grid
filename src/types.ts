// bangumi-anime-grid character version

// 从 POST /v0/search/characters 返回的数据类型
export interface BgmCharacterSearchResultItem {
    id: number;
    name: string;
    relation: string;
    actors: {
        name: string;
    }[];
    images: {
        small: string;
        grid: string;
        large: string;
        medium: string;
    };
}

// 从 POST /v0/search/persons 返回的数据类型（实验性，字段可能变更）
// 为尽量少改动前端展示逻辑，保持与角色的 images 结构一致的最小集。
// 如果实际返回不包含某些尺寸字段，使用可选属性并在渲染处做兜底。
export interface BgmPersonSearchResultItem {
    id: number;
    name: string;
    images?: {
        small?: string;
        grid?: string;
        large?: string;
        medium?: string;
    };
}

// 角色详情数据类型
export interface GridItemCharacter {
    id: number | string;
    name: string;
    image: string;
}

// 格子数据类型
export interface GridItem {
    label: string;
    character?: GridItemCharacter;
}
