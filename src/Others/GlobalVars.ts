import { Icons } from "./Icons"
import { navBottomLinksInterface } from "./Interfaces"

export class GlobalVars {
    static primaryColor = "#00C853"

    static navLinks: Array<string> = [
        "About",
        "Skills",
        "Projects",
        "Contact",
    ]

    static navBottomLinks: Array<navBottomLinksInterface> = [
        {
            svgPath: Icons.whatsappIcon,
            link: 'https://api.whatsapp.com/send?phone=8801796306262'
        },
        {
            svgPath: Icons.skypeIcon,
            link: 'skype:p32929?chat'
        },
        {
            svgPath: Icons.facebookIcon,
            link: 'https://facebook.com/p32929'
        }
    ]
}