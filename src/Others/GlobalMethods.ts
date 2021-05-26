export class GlobalMethods {
    static getHeightWidthWeb = () => {
        console.debug("Web");

        return {
            width: `calc(100% - 316px)`,
            height: `calc(100% - 168px)`
        }
    }

    static getHeightWidthMobile = () => {
        console.debug("Mobile");

        return {
            width: `calc(100% - 48px)`,
            height: `calc(100% - 48px)`
        }
    }
}