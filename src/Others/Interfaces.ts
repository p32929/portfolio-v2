export interface navBottomLinksInterface {
    svgPath: string,
    link: string,
}

export interface ListItemInterface {
    title: string,
    desc?: string,
    logo: string,
}

export interface TitledListItemInterface {
    text: string,
    arr: Array<ListItemInterface>
}