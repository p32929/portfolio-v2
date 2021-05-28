export interface navBottomLinksInterface {
    svgPath: string,
    link: string,
}



export interface SkillInterface {
    text: string,
    arr: Array<{
        title: string,
        desc?: string,
        logo: string,
    }>
}