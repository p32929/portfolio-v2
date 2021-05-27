import { Icons } from "./Icons"
import { navBottomLinksInterface } from "./Interfaces"

export class GlobalVars {

    static primaryColor = "#00C853"
    static myName = 'Fayaz Bin Salam'
    static myOccupation = 'CEO at Rich IT'
    static myDetails = 'Hello, I am Fayaz Bin Salam. I love Programming, making application/software for Mobile, Web and Desktop. For me, A Computer or A Mobile phone is nothing but some plastics and metals. But when it understands my language, it feels like a miracle!\nI started programming as a hobby since 2009. Wrote my first few scripts in Batch and VBScript. Later I learned C, C++, Java, Python, JavaScript etc, Worked in so many libraries & frameworks like ReactJS(one of my favorites), Angular2+, NodeJS, worked using so many technologies like Git, Arduino, etc. It does feel amazing to see myself improving. Hope to improve everything around me one day...'
    static myImageLink = ""

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