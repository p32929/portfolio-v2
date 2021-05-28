import { OurIcons } from "./OurIcons"
import { navBottomLinksInterface, TitledListItemInterface } from "./Interfaces"

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
            svgPath: OurIcons.whatsappIcon,
            link: 'https://api.whatsapp.com/send?phone=8801796306262'
        },
        {
            svgPath: OurIcons.skypeIcon,
            link: 'skype:p32929?chat'
        },
        {
            svgPath: OurIcons.facebookIcon,
            link: 'https://facebook.com/p32929'
        }
    ]

    static skills: Array<TitledListItemInterface> = [
        {
            text: "Programming/Markup Languages",
            arr: [
                {
                    title: 'C',
                    logo: 'https://seeklogo.com/images/C/c-logo-672525892C-seeklogo.com.png',
                },
                {
                    title: 'C++',
                    logo: 'https://seeklogo.com/images/C/c-logo-1B1817C041-seeklogo.com.png',
                },
                {
                    title: 'Java',
                    logo: 'https://www.vectorlogo.zone/logos/java/java-icon.svg',
                },
                {
                    title: 'Python',
                    logo: 'https://www.vectorlogo.zone/logos/python/python-icon.svg',
                },
                {
                    title: 'JavaScript',
                    logo: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
                },


            ]
        }
    ]
}