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
                {
                    title: 'Rust',
                    logo: 'https://www.rust-lang.org/static/images/rust-logo-blk.svg',
                },
                {
                    title: 'SQL',
                    logo: 'https://www.svgrepo.com/show/255832/sql.svg',
                },
                {
                    title: 'HTML',
                    logo: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
                },
                {
                    title: 'CSS',
                    logo: 'https://seeklogo.com/images/C/css3-logo-F1923C8D0E-seeklogo.com.png',
                },
                {
                    title: 'UNIX',
                    logo: 'https://www.vectorlogo.zone/logos/gnu/gnu-icon.svg',
                },
                {
                    title: 'VBScript',
                    logo: 'https://banner2.kisspng.com/20180409/cxe/kisspng-vbscript-scripting-language-visual-basic-microsoft-analyst-5acc162b6da676.9666584115233244594491.jpg',
                },
                {
                    title: 'Batch',
                    logo: 'https://cdn0.iconfinder.com/data/icons/software-4/24/console_command_prompt_shell_program-512.png',
                },
                {
                    title: 'Bash/Shell/PowerShell',
                    logo: 'https://docs.microsoft.com/en-us/powershell/media/index/powershell_128.svg',
                },
                {
                    title: 'TypeScript',
                    logo: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg',
                },
                {
                    title: 'PHP',
                    logo: 'https://www.vectorlogo.zone/logos/php/php-icon.svg',
                },
                {
                    title: 'Ruby',
                    logo: 'https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg',
                },
                {
                    title: 'Kotlin',
                    logo: 'https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg',
                },
                {
                    title: 'Dart',
                    logo: 'https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg',
                },
                {
                    title: 'Pug',
                    logo: 'https://www.vectorlogo.zone/logos/pugjs/pugjs-icon.svg'
                },
                {
                    title: 'XML',
                    logo: 'https://www.vectorlogo.zone/logos/w3c_xml/w3c_xml-icon.svg'
                },
                {
                    title: 'C#',
                    logo: "https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png"
                },
                {
                    title: 'QML',
                    logo: "https://s3-eu-west-1.amazonaws.com/qt-showroom/uploads/2014/08/qml_creator_icon512-300x300.png"
                },
                {
                    title: 'R',
                    logo: "https://www.r-project.org/Rlogo.png"
                },


            ]
        },
        {
            text: "Libraries/Frameworks",
            arr: [
                {
                    title: 'Android App Development',
                    logo: 'https://www.vectorlogo.zone/logos/android/android-icon.svg'
                },
                {
                    title: 'NodeJS',
                    logo: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg'
                },
                {
                    title: 'ExpressJS',
                    logo: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg'
                },
                {
                    title: 'ReactJS',
                    logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg'
                },
                {
                    title: 'React Native',
                    logo: 'https://images.codedaily.io/icons/react.svg'
                },
                {
                    title: 'ElectronJS',
                    logo: 'https://www.vectorlogo.zone/logos/electronjs/electronjs-icon.svg'
                },
                {
                    title: 'Angular2+',
                    logo: 'https://angular.io/assets/images/logos/angular/angular.svg'
                },
                {
                    title: 'MongoDB',
                    logo: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg'
                },
                {
                    title: 'Mongoose',
                    logo: 'https://images.opencollective.com/proxy/images?src=https%3A%2F%2Fopencollective-production.s3-us-west-1.amazonaws.com%2F7a00cdd0-fae4-11e7-ae09-7f36f712693a.png&height=640'
                },
                {
                    title: 'OAuth2',
                    logo: 'https://oauth.net/images/oauth-logo-square.png'
                },
                {
                    title: 'Gatsby',
                    logo: 'https://www.gatsbyjs.org/static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a.png'
                },
                {
                    title: 'NextJS',
                    logo: 'https://foxundermoon.gallerycdn.vsassets.io/extensions/foxundermoon/next-js/0.0.2/1507561739278/Microsoft.VisualStudio.Services.Icons.Default'
                },
                {
                    title: 'OpenCV',
                    logo: 'https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg'
                },
                {
                    title: 'Parse',
                    logo: 'https://www.vectorlogo.zone/logos/parseplatform/parseplatform-icon.svg'
                },
                {
                    title: 'Firebase',
                    logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg'
                },
                {
                    title: 'Flutter',
                    logo: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg'
                },
                {
                    title: 'Tensorflow',
                    logo: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg'
                },
                {
                    title: 'Unity',
                    logo: 'https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg'
                },
                {
                    title: 'BS4',
                    logo: 'https://funthon.files.wordpress.com/2017/05/bs.png?w=772'
                },
                {
                    title: 'Numpy',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/NumPy_logo.svg/1200px-NumPy_logo.svg.png'
                },
                {
                    title: 'Matplotlib',
                    logo: 'https://matplotlib.org/_static/logo2_compressed.svg'
                },
                {
                    title: 'Back4App',
                    logo: 'https://opencollective-production.s3-us-west-1.amazonaws.com/ff3687f0-d07e-11e7-a850-7b3f8e88e105.png'
                },
                {
                    title: 'WebExtension APIs',
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJZSwdd8p6dxuCSAFToE-wLoGNi47Mak6-KPixx7fIg654rZoR'
                },
                {
                    title: 'QT',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Qt_logo_2016.svg/1200px-Qt_logo_2016.svg.png'
                },
                {
                    title: 'Chromely',
                    logo: 'https://raw.githubusercontent.com/chromelyapps/Chromely/master/nugets/chromely.ico'
                },
                {
                    title: 'NW.js',
                    logo: 'https://nwjs.io/img/logo.png'
                },
                {
                    title: 'Neutralinojs',
                    logo: 'https://neutralino.js.org/assets/img/logo'
                },
                {
                    title: 'Proton Native',
                    logo: 'https://img.stackshare.io/service/8517/eE3nAsW.png'
                },
                {
                    title: 'Tauri',
                    logo: 'https://user-images.githubusercontent.com/2774845/75100245-79e51600-55cb-11ea-8ea3-2b12063e41fa.png'
                },
                {
                    title: 'Material-UI',
                    logo: 'https://camo.githubusercontent.com/cf05625198fe7b6ad8a302d1ce16bc99b93ec2ac/68747470733a2f2f6d6174657269616c2d75692e636f6d2f7374617469632f6c6f676f2e737667'
                },
                {
                    title: 'Node GUI',
                    logo: 'https://raw.githubusercontent.com/nodegui/nodegui/master/extras/logo/nodegui.png'
                },
                {
                    title: 'GSON',
                    logo: 'https://s.appbrain.com/static/201904161618755/blob/sdk-logos/google_gson.png'
                },
                {
                    title: 'Babel',
                    logo: 'https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg'
                },
                {
                    title: 'Bootstrap',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png'
                },
                {
                    title: 'Adonis JS',
                    logo: 'https://www.vectorlogo.zone/logos/adonisjs/adonisjs-icon.svg'
                },
                {
                    title: 'VueJS',
                    logo: 'https://vuejs.org/images/logo.png'
                },
                {
                    title: 'Pandas',
                    logo: 'https://pandas.pydata.org/static/img/pandas.svg'
                },
                {
                    title: 'Matplotlib',
                    logo: 'https://matplotlib.org/3.1.0/_images/sphx_glr_logos2_001.png'
                },
                {
                    title: 'Ionic',
                    logo: 'https://ionicframework.com/blog/wp-content/uploads/2015/05/cropped-logo.png'
                },

            ]
        },
        {
            text: "Human Languages",
            arr: [
                {
                    title: 'Bengali',
                    desc: "Native",
                    logo: 'https://www.flaticon.com/premium-icon/icons/svg/3097/3097000.svg',
                },
                {
                    title: 'Chittagonian',
                    desc: "Native",
                    logo: 'https://www.flaticon.com/premium-icon/icons/svg/3097/3097008.svg',
                },
                {
                    title: 'English',
                    desc: "Fluent",
                    logo: 'https://www.flaticon.com/premium-icon/icons/svg/3097/3097023.svg',
                },
                {
                    title: 'Arabic',
                    desc: "Mediocre",
                    logo: 'https://www.flaticon.com/premium-icon/icons/svg/3096/3096991.svg',
                },

                {
                    title: 'Hindi',
                    desc: "Conversational",
                    logo: 'https://www.flaticon.com/premium-icon/icons/svg/3097/3097042.svg',
                },
                {
                    title: 'Urdu',
                    desc: "Conversational",
                    logo: 'https://www.flaticon.com/premium-icon/icons/svg/3097/3097115.svg',
                },
                {
                    title: 'Korean',
                    desc: "Beginner",
                    logo: 'https://www.flaticon.com/premium-icon/icons/svg/3097/3097055.svg',
                },
                {
                    title: 'Mandarin',
                    desc: "Beginner",
                    logo: 'https://www.flaticon.com/premium-icon/icons/svg/3097/3097067.svg',
                },
            ]
        },
        {
            text: "Others",
            arr: [
                {
                    title: 'Git',
                    logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'
                },
                {
                    title: 'GitHub',
                    logo: 'https://www.vectorlogo.zone/logos/github/github-icon.svg'
                },
                {
                    title: 'GitLab',
                    logo: 'https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg'
                },
                {
                    title: 'Arduino',
                    logo: 'https://www.vectorlogo.zone/logos/arduino/arduino-icon.svg'
                },
                {
                    title: 'IntelliJ IDEA',
                    logo: 'https://resources.jetbrains.com/storage/products/intellij-idea/img/meta/intellij-idea_logo_300x300.png'
                },
                {
                    title: 'Webstorm',
                    logo: 'https://cdn.worldvectorlogo.com/logos/webstorm-icon.svg'
                },
                {
                    title: 'VS Code',
                    logo: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code.svg'
                },
                {
                    title: 'Automation',
                    logo: 'https://image.flaticon.com/icons/svg/1035/1035688.svg'
                },
                {
                    title: 'Gradle',
                    logo: 'https://www.vectorlogo.zone/logos/gradle/gradle-icon.svg'
                },
                {
                    title: 'Apache',
                    logo: 'https://www.vectorlogo.zone/logos/apache/apache-ar21.svg'
                },
                {
                    title: 'Asana',
                    logo: 'https://www.vectorlogo.zone/logos/asana/asana-ar21.svg'
                },
                {
                    title: 'AWS',
                    logo: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg'
                },
                {
                    title: 'Expo',
                    logo: 'https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg'
                },
                {
                    title: 'Figma',
                    logo: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg'
                },
                {
                    title: 'Heroku',
                    logo: 'https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg'
                },
                {
                    title: 'NgInx',
                    logo: 'https://www.vectorlogo.zone/logos/nginx/nginx-icon.svg'
                },
                {
                    title: 'Yarn',
                    logo: 'https://www.vectorlogo.zone/logos/yarnpkg/yarnpkg-icon.svg'
                },
                {
                    title: 'Facebook SDKs',
                    logo: 'https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg'
                },
                {
                    title: 'Google SDKs',
                    logo: 'https://www.vectorlogo.zone/logos/google/google-icon.svg'
                },
                {
                    title: 'Deployd',
                    logo: 'https://deployd.com/img/bucket/modular.png'
                },
                {
                    title: 'npm',
                    logo: 'https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg'
                },
                {
                    title: 'Greasemonkey',
                    logo: 'https://addons.cdn.mozilla.net/user-media/addon_icons/0/748-64.png?modified=1531822767'
                },
                {
                    title: 'Tampermonkey',
                    logo: 'https://addons.cdn.mozilla.net/user-media/addon_icons/683/683490-64.png?modified=1565719090'
                },
                {
                    title: 'Linux',
                    logo: 'https://www.freepnglogos.com/uploads/linux-png/file-icons-flat-linux-svg-wikimedia-commons-6.png'
                },
                {
                    title: 'Adobe Photoshop',
                    logo: 'https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg'
                },
                {
                    title: 'Netify',
                    logo: 'https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg'
                },

            ]
        },
    ]
}