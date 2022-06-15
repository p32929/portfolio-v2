import {OurIcons} from "./OurIcons"
import {NavBottomLinksInterface, TitledListItemInterface} from "./Interfaces"
import {WebImages} from "./Images"

export const myGithubUsername = "p32929"

export class GlobalVars {

    static primaryColor = "#00C853"
    static otherColors: Array<string> = [
        '#D50000', '#C51162', '#AA00FF', '#6200EA', '#304FFE',
        '#2962FF', '#0091EA', '#00B8D4', '#00BFA5', '#00C853',
        '#64DD17', '#AEEA00', '#FFD600', '#FFAB00', '#FF6D00',
        '#DD2C00'
    ]
    static myName = 'Fayaz Bin Salam'
    static myOccupation = 'CEO at Rich IT'
    static myDetails = 'Hello, I am Fayaz Bin Salam. I love Programming, making application/software for Mobile, Web and Desktop. For me, A Computer or A Mobile phone is nothing but some plastics and metals. But when it understands my language, it feels like a miracle!\nI started programming as a hobby since 2009. Wrote my first few scripts in Batch and VBScript. Later I learned C, C++, Java, Python, JavaScript etc, Worked in so many libraries & frameworks like ReactJS(one of my favorites), Angular2+, NodeJS, worked using so many technologies like Git, Arduino, etc. It does feel amazing to see myself improving. Hope to improve everything around me one day...'
    static myLeftAvatarImage = null
    static myRightAvatarImage = null

    static routes: Array<string> = [
        "About",
        "Skills",
        "Works",
        "Contact",
    ]

    static bottomLinks: Array<NavBottomLinksInterface> = [
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
                    logo: 'https://w7.pngwing.com/pngs/28/601/png-transparent-sql-logo-illustration-microsoft-azure-sql-database-microsoft-sql-server-database-blue-text-logo-thumbnail.png',
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
                    logo: 'https://w7.pngwing.com/pngs/237/332/png-transparent-vbscript-scripting-language-visual-basic-microsoft-analyst-angle-text-rectangle-thumbnail.png',
                },
                {
                    title: 'Windows Batch',
                    logo: 'https://icon-library.com/images/batch-icon/batch-icon-13.jpg',
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
                    title: 'Redux',
                    logo: 'https://w7.pngwing.com/pngs/669/447/png-transparent-redux-react-javascript-freecodecamp-npm-others-miscellaneous-purple-violet-thumbnail.png'
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
                    logo: 'https://cdn.iconscout.com/icon/free/png-128/mongodb-3521676-2945120.png'
                },
                {
                    title: 'Mongoose',
                    logo: 'https://avatars.githubusercontent.com/u/7552965?s=200&v=4'
                },
                {
                    title: 'OAuth2',
                    logo: 'https://oauth.net/images/oauth-logo-square.png'
                },
                {
                    title: 'Gatsby',
                    logo: 'https://seeklogo.com/images/G/gatsby-logo-1A245AD37F-seeklogo.com.png'
                },
                {
                    title: 'NextJS',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/207px-Nextjs-logo.svg.png'
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
                    title: 'Beautiful soup',
                    logo: 'https://play-lh.googleusercontent.com/yMjUC6LBh7uOCK6wUcIEf5MHZQmSqDPXoInOQLZzw0DWQsPJuvkwSymX2zI4Ok7i_BY=w240-h480'
                },
                {
                    title: 'Numpy',
                    logo: 'https://numpy.org/images/logo.svg'
                },
                {
                    title: 'QT',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Qt_logo_2016.svg/1200px-Qt_logo_2016.svg.png'
                },
                {
                    title: 'Tauri',
                    logo: 'https://raw.githubusercontent.com/tauri-apps/tauri/HEAD/app-icon.png'
                },
                {
                    title: 'Material-UI',
                    logo: 'https://v4.mui.com/static/logo_raw.svg'
                },
                {
                    title: 'PassportJS',
                    logo: 'https://www.passportjs.org/images/logo.svg'
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
                {
                    title: 'Cordova',
                    logo: 'https://cordova.apache.org/static/img/cordova_bot.png'
                },
                {
                    title: 'Svelte',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/498px-Svelte_Logo.svg.png?20191219133350'
                },


            ]
        },
        {
            text: "Human Languages",
            arr: [
                {
                    title: 'Bengali',
                    desc: "Native",
                    logo: 'https://images.all-free-download.com/images/graphicwebp/letter_b_99507.webp',
                },
                {
                    title: 'Chittagonian',
                    desc: "Native",
                    logo: 'https://images.all-free-download.com/images/graphicwebp/letter_c_99508.webp',
                },
                {
                    title: 'English',
                    desc: "Fluent",
                    logo: 'https://images.all-free-download.com/images/graphicwebp/letter_e_99510.webp',
                },
                {
                    title: 'Arabic',
                    desc: "Mediocre",
                    logo: 'https://images.all-free-download.com/images/graphicwebp/letter_a_99506.webp',
                },

                {
                    title: 'Hindi',
                    desc: "Conversational",
                    logo: 'https://images.all-free-download.com/images/graphicwebp/letter_h_99513.webp',
                },
                {
                    title: 'Urdu',
                    desc: "Conversational",
                    logo: 'https://images.all-free-download.com/images/graphicwebp/letter_u_99526.webp',
                },
                {
                    title: 'Korean',
                    desc: "Beginner",
                    logo: 'https://images.all-free-download.com/images/graphicwebp/letter_k_99516.webp',
                },
                {
                    title: 'Mandarin',
                    desc: "Beginner",
                    logo: 'https://images.all-free-download.com/images/graphicwebp/letter_k_99516.webp',
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
                    logo: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png'
                },
                {
                    title: 'Automation',
                    logo: 'https://user-images.githubusercontent.com/6418354/155841378-9644305f-c7d1-44f1-bd5f-d626e056601a.png'
                },
                {
                    title: 'Gradle',
                    logo: 'https://www.vectorlogo.zone/logos/gradle/gradle-icon.svg'
                },
                {
                    title: 'Apache',
                    logo: 'https://cdn.iconscout.com/icon/free/png-128/apache-3628623-3029848.png'
                },
                {
                    title: 'Asana',
                    logo: 'https://cdn.iconscout.com/icon/free/png-128/asana-3521284-2944703.png'
                },
                {
                    title: 'Jira',
                    logo: 'https://cdn.iconscout.com/icon/free/png-128/jira-3628861-3030001.png'
                },

                {
                    title: 'AWS',
                    logo: 'https://cdn.iconscout.com/icon/free/png-128/aws-1869025-1583149.png'
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
                    title: 'npm',
                    logo: 'https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg'
                },
                {
                    title: 'Greasemonkey',
                    logo: 'https://addons.mozilla.org/user-media/addon_icons/0/748-64.png?modified=1531822767'
                },
                {
                    title: 'Tampermonkey',
                    logo: 'https://lh3.googleusercontent.com/zoY8FwoOqPlBgFxcmFdNSK2Q4CcLmv-gw7vTjF2KMR9cEabwBsGNrHBTEMitn0Ba6OmCVJ0NcLnFGu3N97BP8Phu0g=w128-h128-e365-rj-sc0x00ffffff'
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

    static works: Array<TitledListItemInterface> = [
        {
            text: "Android Apps",
            arr: [
                {
                    title: 'Desplash',
                    logo: 'https://lh3.googleusercontent.com/ILrto9KguXlr-clbhYKUonpnHszgNp_N5Qvc8_u9QaM71oaqNKcYql2sV3sqZ7nqzsc=s180',
                    desc: 'Automatic Free High Quality Wallpapers powered by Unsplash.com',
                    link: 'https://apkpure.com/desplash-beautiful-automatic-unsplash-wallpapers/p32929.desplash'
                },
                {
                    title: 'The Great Postman',
                    logo: 'https://lh3.googleusercontent.com/ni-lk3b2nTMZyC7r1wYBW6cm9eYqGAN-t6fXV-kD0lSyw1lO3kenC1We71fZjSryvFII=s180',
                    desc: 'Powerful, Lightweight REST API client for Android',
                    link: 'https://apkpure.com/rest-api-client-the-great-postman/p32929.greatpostman'
                },
                {
                    title: 'Sleepy - Addiction Remover',
                    logo: 'https://lh3.googleusercontent.com/vvp6Ev33xPerWBBOtIRyAHl7k5c4wQ72hGwG3EU4JC-BTjfvb5DSJDeMABaRg0fy_KI=s180',
                    desc: 'The one and only EFFECTIVE addiction remover on Google Play store',
                    link: 'https://apkpure.com/sleepy-phone-addiction-controller/p32929.lazyphone'
                },
                {
                    title: 'Best CGPA Calculator',
                    logo: 'https://lh3.googleusercontent.com/trpGkuBRWnBXNDNyts-7ePwmPtTLQ_8pKoMWi-6Iy8eBomjZ8XrVi4zQcEWrmoGLKA=s180',
                    desc: 'A simple yet effective CGPA Calculator for University students',
                    link: 'https://apkpure.com/best-cgpa-calculator/p32929.cgpa_calculator2'
                },
                {
                    title: 'Buy Sell BD',
                    logo: 'https://image.winudf.com/v2/image1/cDMyOTI5LmJ1eXNlbGxiZF9pY29uXzE1NTkyOTQ5NjVfMDYz/icon.png?w=170&fakeurl=1',
                    desc: 'A better & more reliable alternative for Bikroy.com - A marketplace app for buying-selling new/used goods',
                    link: 'https://apkpure.com/p/p32929.buysellbd'
                },
                {
                    title: 'ExIn',
                    logo: 'https://lh3.googleusercontent.com/X8mRJd7JajvDXoW7NaluKt2IvC3osH6czkTPoWeSYJ96U2LWLKT4xiFgvNouwf-UvEk=s180',
                    desc: 'A Simple & user friendly income-expense tracker ',
                    link: 'https://play.google.com/store/apps/details?id=p32929.exin'
                },
                {
                    title: 'ফিফা ওয়ার্ল্ডকাপ ২০১৮ - (Discontinued)',
                    logo: 'https://lh3.googleusercontent.com/zuluY4xOXx7PIMCvul4fowmOvMlc-3wsHwxGAASo3qZQ-9byd-uJWZ9kzUgclD4Nhrg=s180',
                    desc: 'FIFA Worldcup 2018 All In One ',
                    link: 'https://apkpure.com/%E0%A6%AB%E0%A6%BF%E0%A6%AB%E0%A6%BE-%E0%A6%93%E0%A7%9F%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%B2%E0%A7%8D%E0%A6%A1%E0%A6%95%E0%A6%BE%E0%A6%AA-%E0%A7%A8%E0%A7%A6%E0%A7%A7%E0%A7%AE-live-tv-scores-more/p32929.worldcup2018'
                },
                {
                    title: 'I am free',
                    logo: 'https://lh3.googleusercontent.com/LIgX0ABT8z3MFILXFfrXK7vNO9j0hTxJ2aSdGwdcsdJUtViMWAsKXEiG65g94dV_i7JE=s180',
                    desc: 'বেকার মুক্ত বাংলাদেশ গড়ার লক্ষ্যে - I am FREE',
                    link: 'https://apkpure.com/i-am-free/p32929.imfree'
                },
                {
                    title: 'Awesome NCTB',
                    logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5uY3RiX2ljb25fMTU3NjU3MjcwNF8wMjI/icon.png?fakeurl=1',
                    desc: 'Download NCTB Books easily and Free',
                    link: 'https://apkpure.com/awesome-nctb/org.richit.nctb'
                },
                {
                    title: 'বৃক্ষ ( Brikkho )',
                    logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5icmlra2hvX2ljb25fMTU3MDEyMTU0Ml8wODA/icon.png?fakeurl=1',
                    desc: 'Learn about trees in your fingertips',
                    link: 'https://apkpure.com/p/org.richit.brikkho'
                },
                {
                    title: 'IQQuiz',
                    logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5pcXF1aXphcHBfaWNvbl8xNTcxMDE0NzcxXzA2Mg/icon.png?fakeurl=1',
                    desc: 'A simple IQ game',
                    link: 'https://apkpure.com/p/org.richit.iqquizapp'
                },
                {
                    title: 'BirdsLover',
                    logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5iaXJkc2xvdmVyX2ljb25fMTU3MjAwNDIxNl8wOTE/icon.png?fakeurl=1',
                    desc: 'Learn about birds in your fingertips',
                    link: 'https://apkpure.com/birdslover/org.richit.birdslover'
                },
                {
                    title: 'Animal Lover',
                    logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5hbmltYWxfaWNvbl8xNTc3MjkyMzIzXzAyMw/icon.png?fakeurl=1',
                    desc: 'Learn about birds in your fingertips',
                    link: 'https://apkpure.com/p/org.richit.animal'
                },
                {
                    title: 'Jibanananda Recitation (Abritti)',
                    logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5qaWJvbmFuZG9rb2JpdGFzb21vZ3JvX2ljb25fMTU3MDEwNDExNF8wNDc/icon.png?fakeurl=1',
                    desc: '50+ poems of Jibanananda Das with audio recitation',
                    link: 'https://apkpure.com/jibanananda-recitation-abritti/org.richit.jibonandokobitasomogro'
                },
                {
                    title: 'MyEyes',
                    logo: WebImages.giftIcon,
                    desc: 'Indoor Navigation App for Blind People',
                    link: ''
                },
                {
                    title: 'BirthdayBot',
                    logo: WebImages.giftIcon,
                    desc: 'Birthday wishing apps, made for individual people...',
                    link: ''
                },
            ]
        },
        {
            text: "WebApps",
            arr: [
                {
                    title: 'SendMoney2Me',
                    logo: WebImages.giftIcon,
                    desc: 'Ways to send me money directly',
                    link: 'https://p32929.github.io/SendMoney2Me/'
                },
                {
                    title: 'My App (V2)',
                    logo: WebImages.giftIcon,
                    desc: 'V2 of my App - Created using ReactJS',
                    link: 'https://p32929.github.io'
                },
                {
                    title: 'Sha1ToMd5',
                    logo: WebImages.giftIcon,
                    desc: 'A simple utility tool to convert Google Play Release APK Sha1 value to MD5 for Facebook login to work.',
                    link: 'https://p32929.github.io/Sha1ToMd5'
                },
                {
                    title: 'BadgesGenerator',
                    logo: WebImages.giftIcon,
                    desc: 'Badge generator for your github readme.',
                    link: 'https://p32929.github.io/Badges/'
                },
                {
                    title: 'My App (V1)',
                    logo: WebImages.giftIcon,
                    desc: 'Created using ReactJS',
                    link: 'https://p32929.github.io/Portfolio'
                },
                {
                    title: 'IndecisionApp',
                    logo: WebImages.giftIcon,
                    desc: 'My first ReactJS app',
                    link: 'https://p32929.github.io/IndecisionApp'
                },

            ]
        },
        {
            text: "Android Libraries",
            arr: [
                {
                    title: 'AndroidEasySQL-Library',
                    logo: 'https://www.vectorlogo.zone/logos/android/android-icon.svg',
                    desc: 'An Easier & Lazier approach to SQL database for Android',
                    link: 'https://github.com/p32929/AndroidEasySQL-Library'
                },
                {
                    title: 'FayazPermissions',
                    logo: 'https://www.vectorlogo.zone/logos/android/android-icon.svg',
                    desc: 'An Easier & Lazier approach to getting runtime permission in Android ',
                    link: 'https://github.com/p32929/FayazPermissions'
                },
                {
                    title: 'AndroidAppLockscreen',
                    logo: 'https://www.vectorlogo.zone/logos/android/android-icon.svg',
                    desc: 'An Easier & Lazier approach to getting runtime permission in Android ',
                    link: 'https://github.com/p32929/AndroidAppLockscreen'
                },
                {
                    title: 'ManufacturerBatteryOptimization',
                    logo: 'https://www.vectorlogo.zone/logos/android/android-icon.svg',
                    desc: 'Simple helper class for Android Battery Optimization ignoring in some devices',
                    link: 'https://gist.github.com/p32929/41e7af650f6a2c11e9306ab600fb9b03'
                },
                {
                    title: 'MyHouseAdsAndroid',
                    logo: 'https://www.vectorlogo.zone/logos/android/android-icon.svg',
                    desc: 'A library for cross promoting own apps within own apps - for Android',
                    link: 'https://github.com/p32929/MyHouseAdsAndroid'
                },
                {
                    title: 'HouseAds2',
                    logo: 'https://www.vectorlogo.zone/logos/android/android-icon.svg',
                    desc: 'A library ( V2 ) for cross promoting own apps within own apps - for Android',
                    link: 'https://github.com/p32929/HouseAds2'
                },
                {
                    title: 'AndroidAppUpdater',
                    logo: 'https://www.vectorlogo.zone/logos/android/android-icon.svg',
                    desc: 'A simple, Lightweight App Updater Library for Android',
                    link: 'https://github.com/p32929/AndroidAppUpdater'
                },
                {
                    title: 'OfficeAbout',
                    logo: 'https://www.vectorlogo.zone/logos/android/android-icon.svg',
                    desc: 'A simple about screen library for Android for a Team of people',
                    link: 'https://github.com/p32929/OfficeAbout'
                },
                {
                    title: 'JsonViewerAndroid',
                    logo: 'https://www.vectorlogo.zone/logos/android/android-icon.svg',
                    desc: 'A simple JSON Viewer for Android',
                    link: 'https://github.com/p32929/JsonViewerAndroid'
                },
                {
                    title: 'Android-Receivers-Library',
                    logo: 'https://www.vectorlogo.zone/logos/android/android-icon.svg',
                    desc: 'A library for simpler BroadcastReceiver implementations',
                    link: 'https://github.com/p32929/Android-Receivers-Library'
                },

            ]
        },
        {
            text: "Desktop App/Scripts",
            arr: [
                {
                    title: 'PotatoTimer',
                    logo: WebImages.giftIcon,
                    desc: 'A pomotodo app that forces you to take a break - created using ElectronJS',
                    link: 'https://github.com/p32929/Electron-Pomotodo'
                },
                {
                    title: 'Shortcut-Virus-Remover',
                    logo: WebImages.giftIcon,
                    desc: 'Shortcut virus remover app for Windows',
                    link: 'https://github.com/p32929/Shortcut-Virus-Remover'
                },
                {
                    title: 'Linux_Screen_Dimmer',
                    logo: WebImages.giftIcon,
                    desc: 'A simple screen dimming utility for linux',
                    link: 'https://github.com/p32929/Linux_Screen_Dimmer'
                },
                {
                    title: 'MoodyLauncher',
                    logo: WebImages.giftIcon,
                    desc: 'A simple App Launcher Script that runs a list of apps depending on the users mood',
                    link: 'https://github.com/p32929/MoodyLauncher'
                },
            ]
        },
        {
            text: "NDAs",
            arr: [
                {
                    title: 'Shajao',
                    logo: WebImages.giftIcon,
                    desc: '---',
                    link: 'about:blank'
                },
                {
                    title: 'Thamao',
                    logo: WebImages.giftIcon,
                    desc: '---',
                    link: 'about:blank'
                },
                {
                    title: 'Konika',
                    logo: WebImages.giftIcon,
                    desc: '---',
                    link: 'about:blank'
                },
                {
                    title: 'GiftApps',
                    logo: WebImages.giftIcon,
                    desc: '---',
                    link: 'about:blank'
                },
                {
                    title: 'NumberredPaste',
                    logo: WebImages.giftIcon,
                    desc: '---',
                    link: 'about:blank'
                },
                {
                    title: 'ClockedAdmin',
                    logo: WebImages.giftIcon,
                    desc: '---',
                    link: 'about:blank'
                },
                {
                    title: 'BreakingMars',
                    logo: WebImages.giftIcon,
                    desc: '---',
                    link: 'about:blank'
                },
                {
                    title: 'And More...',
                    logo: WebImages.giftIcon,
                    desc: '---',
                    link: 'about:blank'
                }
            ]
        },
        {
            text: "Flutter Libraries",
            arr: [
                {
                    title: 'EasiestDB',
                    logo: WebImages.flutterIcon,
                    desc: 'The Easiest and the Laziest approach to Flutter SQL Database.',
                    link: 'https://pub.dev/packages/easiestdb'
                },
                {
                    title: "Simply Wifi",
                    logo: WebImages.flutterIcon,
                    desc: " A simplified version of the wifi_iot package ",
                    link: "https://github.com/p32929/simply_wifi_flutter"
                }
            ]
        },
    ]

    static contacts: Array<TitledListItemInterface> = [
        {
            text: "Contact me",
            arr: [
                {
                    title: 'Skype',
                    logo: 'https://user-images.githubusercontent.com/6418354/155840899-62c1fe8e-66a6-4492-9acc-5bd504ac21ef.png',
                    desc: 'p32929',
                    link: 'skype:p32929?chat'
                },
                {
                    title: 'WhatsApp',
                    logo: 'https://user-images.githubusercontent.com/6418354/155842184-b064bf36-de8e-4317-8f8e-cb7755eed995.png',
                    link: 'https://api.whatsapp.com/send?phone=8801796306262'
                },
                {
                    title: 'Facebook',
                    logo: 'https://user-images.githubusercontent.com/6418354/155840898-9e2327aa-a280-45e3-8266-8268242abda4.png',
                    link: 'https://www.facebook.com/p32929'
                },
                {
                    title: 'Anywhere on the internet',
                    logo: 'https://user-images.githubusercontent.com/6418354/155840900-91ac076a-8d2b-45dc-b346-66f72d376d4b.png',
                    link: '@p32929'
                }
            ]
        },
        {
            text: "Website Profiles",
            arr: [
                {
                    title: 'GitHub',
                    logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
                    link: 'https://github.com/p32929/'
                },
                {
                    title: 'Wordpress',
                    logo: 'https://user-images.githubusercontent.com/6418354/155842668-283b2424-e090-4149-b8af-1f39eb2dd982.png',
                    link: 'https://p32929.wordpress.com/'
                },
                {
                    title: 'YouTube',
                    logo: 'https://lh3.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc',
                    link: 'https://www.youtube.com/channel/UCFucp3uZ96IBYxG8755AniQ'
                },
                {
                    title: 'Google Play',
                    logo: 'https://www.vectorlogo.zone/logos/google_play/google_play-icon.svg',
                    link: 'https://play.google.com/store/apps/developer?id=Rich+IT&hl=en'
                },
            ]
        },
        {
            text: "Apps I rarely use",
            arr: [
                {
                    title: 'LinkedIn',
                    logo: 'https://user-images.githubusercontent.com/6418354/155841027-8698cb12-7ddd-4604-a4ea-c618ddbc1cd8.png',
                    link: 'https://www.linkedin.com/in/p32929/'
                },
                {
                    title: 'Reddit',
                    logo: 'https://user-images.githubusercontent.com/6418354/155841029-b3fd8a2d-3f7b-4f24-b06b-4b2337ad7280.png',
                    link: 'https://www.reddit.com/user/p32929'
                },
                {
                    title: 'Twitter',
                    logo: 'https://user-images.githubusercontent.com/6418354/155841031-532d5d6e-797a-4da1-8064-48d266b69ab2.png',
                    link: 'https://twitter.com/p32929'
                },
                {
                    title: 'Instagram',
                    logo: 'https://user-images.githubusercontent.com/6418354/155841023-0b842621-56a3-42ec-81f1-3944034b09c7.png',
                    link: 'https://www.instagram.com/p32929/'
                },
                {
                    title: 'Fiverr',
                    logo: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/fiverr-2018.png?auto=format&q=60&fit=max&w=200',
                    link: 'https://www.fiverr.com/users/fayazbinsalam/'
                },
                {
                    title: "Freelancer",
                    logo: "https://cdn.worldvectorlogo.com/logos/freelancer-1.svg",
                    link: "https://www.freelancer.com/u/p32929"
                },
                {
                    title: "Upwork",
                    logo: "https://cdn.worldvectorlogo.com/logos/upwork.svg",
                    link: "https://www.freelancer.com/u/p32929"
                },

            ]
        },
        {
            text: "Thank you for visiting my portfolio",
            arr: [
                {
                    title: "Click on the link button",
                    desc: 'To create your own portfolio. It will only take 3 minutes',
                    logo: WebImages.giftIcon,
                    link: 'https://github.com/p32929/p32929.github.io/'
                }
            ]
        }
    ]
}