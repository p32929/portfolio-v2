export class GlobalMethods {
    static getHeightWidthWeb = () => {
        console.debug("Web");

        return {
            marginLeft: `10%`,
            marginRight: `10%`,
            minHeight: `80vh`
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