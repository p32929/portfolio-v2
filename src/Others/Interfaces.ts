export interface NavBottomLinksInterface {
    svgPath: string,
    link: string,
}

export interface ListItemInterface {
    title: string,
    desc?: string,
    logo: string,
    link?: string,
    featured?: boolean
}

export interface TitledListItemInterface {
    text: string,
    arr: Array<ListItemInterface>
}