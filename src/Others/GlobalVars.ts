import { OurIcons } from "./OurIcons"
import { NavBottomLinksInterface, TitledListItemInterface } from "./Interfaces"
import { WebImages } from "./Images"

export class GlobalVars {

    //
    static primaryColor = "#00C853"
    static otherColors: Array<string> = [
        '#D50000', '#C51162', '#AA00FF', '#6200EA', '#304FFE',
        '#2962FF', '#0091EA', '#00B8D4', '#00BFA5', '#00C853',
        '#64DD17', '#AEEA00', '#FFD600', '#FFAB00', '#FF6D00',
        '#DD2C00'
    ]

    //
    static myName = 'Fayaz Bin Salam'
    static myOccupation = 'Software Engineer'
    static myDetails = 'Hark! I am Fayaz Bin Salam, an artful craftsman of software, weaving together intricate webs of code for mobile, web, and desktop. To me, the machines of silicon and plastic are naught but hollow shells, until they hear and heed the whispers of my command. Since 2009, I have honed my skills in the arcane art of programming, penning my first lines of code in Batch and VBScript. Through the years, I have delved deeper into the mysteries of C, C++, Java, Python, and the like, working my magic with libraries and frameworks such as ReactJS and Angular2+. The beauty of my work lies not just in its function, but in its constant evolution and growth. Indeed, I strive to kindle the spark of progress in all that surrounds me, illuminating the way towards a brighter future.'
    static myLeftAvatarImage = null
    static myRightAvatarImage = null
    static helperTexts = "We have a form available for you to write down any queries you may have, which will be sent directly to me. Would you like to view the form now?"
    static helperFormLink = ""

    static bottomLinks: Array<NavBottomLinksInterface> = [
        {
            svgPath: OurIcons.whatsappIcon,
            link: 'https://api.whatsapp.com/send?phone=8801796306262'
        },
        {
            svgPath: OurIcons.emailIcon,
            link: 'mailto:p32929.ceo@gmail.com'
        },
        {
            svgPath: OurIcons.downloadIcon,
            link: 'https://docs.google.com/document/d/1vRgTCQ-UvzjGXK7s-TR5VpmjHZ7OmSmOs5G69znPhqA/edit?usp=sharing'
        }
    ]

    static skills: Array<TitledListItemInterface> = [
        {
            text: "Programming / Markup Languages",
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
                    title: 'HTML',
                    logo: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
                },
                {
                    title: 'CSS',
                    logo: 'https://seeklogo.com/images/C/css3-logo-F1923C8D0E-seeklogo.com.png',
                },
                {
                    title: 'TypeScript',
                    logo: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg',
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
                    title: 'Go',
                    logo: 'https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg',
                },
            ]
        },
        {
            text: "Databases",
            arr: [
                {
                    title: 'MongoDB',
                    logo: 'https://cdn.iconscout.com/icon/free/png-128/mongodb-3521676-2945120.png'
                },
                {
                    title: 'SQL',
                    logo: 'https://w7.pngwing.com/pngs/28/601/png-transparent-sql-logo-illustration-microsoft-azure-sql-database-microsoft-sql-server-database-blue-text-logo-thumbnail.png',
                },
                {
                    title: "DynamoDB",
                    logo: 'https://cdn.worldvectorlogo.com/logos/aws-dynamodb.svg'
                },
                {
                    title: "PostgreSQL",
                    logo: 'https://wiki.postgresql.org/images/thumb/a/a4/PostgreSQL_logo.3colors.svg/540px-PostgreSQL_logo.3colors.svg.png'
                },
            ]
        },
        {
            text: "UI Component Libraries",
            arr: [
                {
                    title: 'Ant Design',
                    logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
                },
                {
                    title: 'Material-UI',
                    logo: 'https://mui.com/static/logo.png'
                },
                {
                    title: 'Shadcn',
                    logo: 'https://ui.shadcn.com/favicon.ico'
                },
                {
                    title: 'Tailwind CSS',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png?20230715030042'
                },
                {
                    title: 'Bootstrap',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png'
                },
            ]
        },
        {
            text: "Libraries / Frameworks / Techs",
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
                    logo: 'https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg'
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
                    title: 'Mongoose',
                    logo: 'https://avatars.githubusercontent.com/u/7552965?s=200&v=4'
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
                    title: 'Firebase',
                    logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg'
                },
                {
                    title: 'Flutter',
                    logo: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg'
                },
                {
                    title: 'Beautiful soup',
                    logo: 'https://github.com/3r4y/react-portfolio-template/assets/6418354/c9199eab-529b-4314-a990-c46deba899e9'
                },
                {
                    title: 'Numpy',
                    logo: 'https://numpy.org/images/logo.svg'
                },
                {
                    title: 'Tauri',
                    logo: 'https://raw.githubusercontent.com/tauri-apps/tauri/HEAD/app-icon.png'
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
                    title: 'Socket.io',
                    logo: 'https://socket.io/images/logo.svg'
                },
                {
                    title: 'Flask',
                    logo: 'https://static.javatpoint.com/tutorial/flask/images/flask-tutorial.png'
                },
                {
                    title: 'Docker',
                    logo: 'https://cdn.iconscout.com/icon/free/png-128/docker-226091.png'
                },
                {
                    title: 'Git',
                    logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'
                },
                {
                    title: 'Expo',
                    logo: 'https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg'
                },
                {
                    title: 'NgInx',
                    logo: 'https://www.vectorlogo.zone/logos/nginx/nginx-icon.svg'
                },
                {
                    title: 'NestJS',
                    logo: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg'
                },

            ]
        },
        {
            text: "Others",
            arr: [
                {
                    title: 'Vim',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/544px-Vimlogo.svg.png?20150726190850'
                },
                {
                    title: 'Android Studio',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Android_Studio_Icon_3.6.svg/512px-Android_Studio_Icon_3.6.svg.png?20210301045217'
                },
                {
                    title: 'VS Code',
                    logo: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png'
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
                    title: 'DigitalOcean',
                    logo: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1478792253/gnlwek2zwhq369yryrzv.jpg'
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
                    title: 'Yarn',
                    logo: 'https://www.vectorlogo.zone/logos/yarnpkg/yarnpkg-icon.svg'
                },
                {
                    title: 'npm',
                    logo: 'https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg'
                },
                {
                    title: 'Tampermonkey',
                    logo: 'https://lh3.googleusercontent.com/zoY8FwoOqPlBgFxcmFdNSK2Q4CcLmv-gw7vTjF2KMR9cEabwBsGNrHBTEMitn0Ba6OmCVJ0NcLnFGu3N97BP8Phu0g=w128-h128-e365-rj-sc0x00ffffff'
                },
                {
                    title: 'Greasemonkey',
                    logo: 'https://addons.mozilla.org/user-media/addon_icons/0/748-64.png?modified=1531822767'
                },
                {
                    title: 'Linux',
                    logo: 'https://www.freepnglogos.com/uploads/linux-png/file-icons-flat-linux-svg-wikimedia-commons-6.png'
                },
                {
                    title: 'Adobe Photoshop',
                    logo: 'https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg'
                },
            ]
        },
    ]

    static works: Array<TitledListItemInterface> = [
        {
            text: "Web Apps",
            arr: [
                {
                    title: "Duas",
                    link: "https://p32929.github.io/duas/",
                    logo: "https://p32929.github.io/duas/favicon.png",
                    desc: "A collection of duas I try to regularly recite - created using flutter web",
                    featured: true,
                },
                {
                    title: "dobd.xyz",
                    link: "https://www.dobd.xyz/",
                    logo: "https://www.dobd.xyz/android-chrome-512x512.png",
                    desc: "Best online downloader for YouTube, Facebook, Instagram, Tiktok and more",
                    featured: true,
                },
                {
                    title: 'StartPage',
                    logo: 'https://cdn.iconscout.com/icon/premium/png-128-thumb/homepage-2580329-2151669.png',
                    desc: 'A minimalistic custom browser startpage that can be configured to your needs. ',
                    link: 'https://p32929.github.io/startpage/'
                },
                {
                    title: "s3cr3tm3",
                    link: "https://s3cr3tm3.netlify.app/",
                    logo: "https://user-images.githubusercontent.com/6418354/173877444-59dbdd3d-1b5d-4b92-ad53-30fada9362d2.png",
                    desc: "Share secret messages secretely",
                    featured: true,
                },
                {
                    title: 'OrderZesty',
                    logo: 'https://orderzesty.com/wp-content/uploads/2021/10/Zesty-icon@3x-300x300.png',
                    desc: 'Personal chef service delivering fresh signature meals.',
                    link: 'https://orderzesty.com/',
                    featured: true,
                },
                {
                    title: 'DramaDB',
                    logo: 'https://dramadb.vercel.app/apple-icon.png',
                    desc: 'A serverless hobby project that lets you filter Asian drama by country, genre, status, year and popularity',
                    link: 'https://dramadb.vercel.app/'
                },
                {
                    title: 'Sh0Sh0',
                    logo: 'https://github.com/3r4y/react-portfolio-template/assets/6418354/a159e1d8-fabc-4f58-9391-0c3be4d14d7e',
                    desc: 'A beautifully created Absolutely FREE URL shortener for everyone made using React Shadcn Firebase. ',
                    link: 'https://sh0sh0.netlify.app/',
                },
                {
                    title: "TheRealWorldFree",
                    logo: "https://www.therlworld.com/images/Group-427319400-1.webp",
                    desc: "Enjoy the real world for free :)",
                    link: "https://trwfree.vercel.app/"
                },
                {
                    title: "BreakingMars",
                    logo: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/lg6nxfb2dttgtng5kobb",
                    desc: '#1 Leading & Effortless Prospect Perceiving Platform',
                    link: "https://web.archive.org/web/20220413085335/https://www.breakingmars.com/"
                },
                {
                    title: "Voomnow",
                    desc: "Next generation audio recorder",
                    logo: "https://user-images.githubusercontent.com/6418354/173876916-e27cb77f-49f1-4190-be54-4c1ddaa2973d.svg",
                    link: "https://web.archive.org/web/20220326215025/https://www.voomnow.com/"
                },
                {
                    title: 'Shajao',
                    logo: 'https://sdn.signalhire.co/storage/company/1dfc/9704/f9d3/ff49/cdce/31bb/c4d7/0628.webp',
                    desc: 'Framing Happiness',
                    link: "https://web.archive.org/web/20191222090655/https://shajao.com/"
                },
                {
                    title: 'ChargeOnSite',
                    logo: 'https://static.wixstatic.com/media/182a81_c4e4ee2bac6d4389a866239475519bdf~mv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/182a81_c4e4ee2bac6d4389a866239475519bdf~mv2.png',
                    desc: 'Charge OnSite',
                    link: "https://www.chargeonsite.com/",
                },
                {
                    title: 'MathFinity',
                    logo: 'https://p32929.github.io/mathfinity/icons/Icon-192.png',
                    desc: 'Simple, infinite & fun math game for everyone',
                    link: "https://p32929.github.io/mathfinity/",
                    featured: true,
                },

            ]
        },
        {
            text: "iOS Apps",
            arr: [
                {
                    title: "Adblock for YT",
                    link: "https://apps.apple.com/au/app/adblock-for-youtube/id1592568016",
                    logo: "https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/65/7e/a8/657ea8d9-c3aa-6951-38c8-948c05cd96c3/AppIcon-0-0-85-220-0-0-0-0-4-0-0-0-2x-sRGB-0-0-0-0-0.png/246x0w.webp",
                    desc: "Removes ads from YT videos, embedded videos on third party websites and streams.",
                    featured: true
                },
                {
                    title: "Al Quran by Quran Touch",
                    link: "https://apps.apple.com/gb/app/al-quran-by-quran-touch/id585240351",
                    logo: "https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/9d/7e/ed/9d7eedd6-e567-5251-bed6-dce7e868bb57/AppIcon-0-1x_U007emarketing-0-10-0-85-220.png/246x0w.webp",
                    desc: "The most comprehensive Muslim App!",
                    featured: true
                },
            ]
        },
        {
            text: "Android Apps",
            arr: [
                {
                    title: "Al Quran by Quran Touch",
                    link: "https://www.apkmonk.com/app/com.qurantouch.qurantouchhd.app/",
                    logo: "https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/9d/7e/ed/9d7eedd6-e567-5251-bed6-dce7e868bb57/AppIcon-0-1x_U007emarketing-0-10-0-85-220.png/246x0w.webp",
                    desc: "The most comprehensive Muslim App!"
                },
                {
                    title: 'Thamao',
                    logo: 'https://cdn.apkmonk.com/logos/com.thamao_150x150.png',
                    desc: 'বাংলাদেশে স্মার্টফোনের চুরি এবার অসম্ভব',
                    link: 'https://www.apkmonk.com/app/com.thamao/',
                    featured: true,
                },
                {
                    title: 'Desplash',
                    logo: 'https://lh3.googleusercontent.com/ILrto9KguXlr-clbhYKUonpnHszgNp_N5Qvc8_u9QaM71oaqNKcYql2sV3sqZ7nqzsc=s180',
                    desc: 'Automatic Free High Quality Wallpapers powered by Unsplash.com',
                    link: 'https://www.xda-developers.com/desplash-wallpaper-app-unsplash/',
                    featured: true,
                },
                {
                    title: 'The Great Postman',
                    logo: 'https://lh3.googleusercontent.com/ni-lk3b2nTMZyC7r1wYBW6cm9eYqGAN-t6fXV-kD0lSyw1lO3kenC1We71fZjSryvFII=s180',
                    desc: 'Powerful, Lightweight REST API client for Android',
                    link: 'https://apkcombo.com/es/rest-api-client-the-great-postman/p32929.greatpostman/'
                },
                {
                    title: 'Sleepy - Addiction Remover',
                    logo: 'https://user-images.githubusercontent.com/6418354/192146268-29e1bac2-e477-4010-ae03-96adecbf07e6.png',
                    desc: 'The one and only EFFECTIVE addiction remover on Google Play store',
                    link: 'https://apkcombo.com/es/sleepy-phone-addiction-controller/p32929.lazyphone/'
                },
                {
                    title: 'Best CGPA Calculator',
                    logo: 'https://user-images.githubusercontent.com/6418354/192146303-6e04c9ac-ffb2-4931-bb10-ef54ff7af382.png',
                    desc: 'A simple yet effective CGPA Calculator for University students',
                    link: 'https://apkcombo.com/es/cgpa-calculator-for-update-see-the-description/p32929.cgpa_calculator/',
                    featured: true,
                },
                {
                    title: 'Buy Sell BD',
                    logo: 'https://image.winudf.com/v2/image1/cDMyOTI5LmJ1eXNlbGxiZF9pY29uXzE1NTkyOTQ5NjVfMDYz/icon.png?w=170&fakeurl=1',
                    desc: 'A better & more reliable alternative for Bikroy.com - A marketplace app for buying-selling new/used goods',
                    link: 'https://apkcombo.com/es/buy-sell-bd-buy-sell-everything-easily-in-bd/p32929.buysellbd/'
                },
                {
                    title: 'ExIn',
                    logo: 'https://lh3.googleusercontent.com/X8mRJd7JajvDXoW7NaluKt2IvC3osH6czkTPoWeSYJ96U2LWLKT4xiFgvNouwf-UvEk=s180',
                    desc: 'A Simple & user friendly income-expense tracker ',
                    link: "https://apkcombo.com/es/exin-discontinued/p32929.exin/",
                },
                {
                    title: 'I am free',
                    logo: 'https://image.winudf.com/v2/image1/cDMyOTI5LmltZnJlZV9pY29uXzE1NzY4ODAwNzVfMDU3/icon.png?w=170&fakeurl=1',
                    desc: 'বেকার মুক্ত বাংলাদেশ গড়ার লক্ষ্যে - I am FREE',
                    link: 'https://apkcombo.com/es/i-am-free/p32929.imfree/'
                },
                {
                    title: 'Awesome NCTB',
                    logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5uY3RiX2ljb25fMTU3NjU3MjcwNF8wMjI/icon.png?fakeurl=1',
                    desc: 'Download NCTB Books easily and Free',
                    link: 'https://apkcombo.com/es/awesome-nctb/org.richit.nctb/'
                },
                {
                    title: 'বৃক্ষ ( Brikkho )',
                    logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5icmlra2hvX2ljb25fMTU3MDEyMTU0Ml8wODA/icon.png?fakeurl=1',
                    desc: 'Learn about trees in your fingertips',
                    link: 'https://apkcombo.com/es/%E0%A6%AC%E0%A7%83%E0%A6%95%E0%A7%8D%E0%A6%B7-brikkho/org.richit.brikkho/'
                },
                {
                    title: 'IQQuiz',
                    logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5pcXF1aXphcHBfaWNvbl8xNTcxMDE0NzcxXzA2Mg/icon.png?fakeurl=1',
                    desc: 'A simple IQ game',
                    link: 'https://apkcombo.com/es/iqquiz/org.richit.iqquizapp/'
                },
                {
                    title: 'BirdsLover',
                    logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5iaXJkc2xvdmVyX2ljb25fMTU3MjAwNDIxNl8wOTE/icon.png?fakeurl=1',
                    desc: 'Learn about birds in your fingertips',
                    link: 'https://apkcombo.com/es/birdslover/org.richit.birdslover/'
                },
                {
                    title: 'Animal Lover',
                    logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5hbmltYWxfaWNvbl8xNTc3MjkyMzIzXzAyMw/icon.png?fakeurl=1',
                    desc: 'Learn about birds in your fingertips',
                    link: 'https://apkcombo.com/es/animal-lover/org.richit.animal/'
                },
                {
                    title: 'Jibanananda Recitation (Abritti)',
                    logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5qaWJvbmFuZG9rb2JpdGFzb21vZ3JvX2ljb25fMTU3MDEwNDExNF8wNDc/icon.png?fakeurl=1',
                    desc: '50+ poems of Jibanananda Das with audio recitation',
                    link: 'https://apkcombo.com/es/jibanananda-recitation-abritti/org.richit.jibonandokobitasomogro/'
                },
                {
                    title: 'MathLover (Simple, Infinite, Math game)',
                    logo: 'https://lh3.googleusercontent.com/GaisH_-MeK2c_ct4kp5qbqxbJPE-q4isTdZswR4CocgB8sLNCFk4beXdlmaaFuveKUwd',
                    desc: 'MathLover is a simple, infinite mathematical problem solving game for everyone.',
                    link: 'https://apkcombo.com/es/mathlover-simple-infinite-math-game/org.richit.mathblitz/',
                },
                {
                    title: 'Hospitals BD',
                    logo: 'https://lh3.googleusercontent.com/MMfY8vG1YfAFh1w6iHEp8NXCwl-NSCUDmfPkUAWmqhSGfO3JR7vBvw_XZzV8JxrDag',
                    desc: 'Get nearest Hospital Information in Bangladesh in your fingertips',
                    link: 'https://apkcombo.com/es/hospitals-bd/org.richit.contacthospitals/'
                },
                {
                    title: 'BirthdayBot',
                    logo: WebImages.giftIcon,
                    desc: 'Birthday wishing apps, made for individual people...',
                    link: 'https://github.com/p32929/my_android_apps/releases/tag/all'
                },
            ]
        },
        {
            text: "Desktop Apps",
            arr: [
                {
                    title: 'PotatoTimer',
                    logo: 'https://raw.githubusercontent.com/p32929/PotatoTimer/master/resources/icon.ico',
                    desc: 'A pomotodo app that forces you to take a break - created using ElectronJS',
                    link: 'https://github.com/p32929/Electron-Pomotodo'
                },
                {
                    title: 'Pomota',
                    logo: 'https://github.com/p32929/pomota/blob/master/src-tauri/icons/128x128.png?raw=true',
                    desc: 'A simple user-friendly cross-platform tauri based pomodoro timer app that forces you to take a break',
                    link: 'https://github.com/p32929/pomota',
                    featured: true,
                },
                {
                    title: 'google-calender-widget',
                    logo: 'https://duckduckgo.com/i/e2d8001c.png',
                    desc: 'An unofficial google calendar desktop widget for Windows, Mac and Linux ',
                    link: 'https://github.com/p32929/google-calender-widget',
                    featured: true,
                },
            ]
        },
        {
            text: "Command Line Interfaces ( CLIs )",
            arr: [
                {
                    title: 'Shortcut-Virus-Remover',
                    logo: 'https://cdn-icons-png.flaticon.com/128/3223/3223766.png',
                    desc: 'Shortcut virus remover script for Windows',
                    link: 'https://github.com/p32929/Shortcut-Virus-Remover',
                    featured: true,
                },
                {
                    title: 'Fay',
                    logo: 'https://crates.io/assets/cargo.png',
                    desc: 'A simple cross platform CLI app written in Rust to automate multiple shell ( bash or cmd ) commands',
                    link: 'https://crates.io/crates/fay'
                },
                {
                    title: 'SIIN',
                    logo: 'https://crates.io/assets/cargo.png',
                    desc: 'A batch installer that downloads and installs a list of apps, written in Rust ( Kinda like Ninite )',
                    link: 'https://crates.io/crates/siin'
                },

            ]
        },
        {
            text: "Automations",
            arr: [
                {
                    title: 'Dingtone Bot',
                    logo: 'https://github.com/p32929/portfolio-v2/assets/6418354/f24e64e7-ef7a-4d2d-a7d9-55f4797043cf',
                    desc: 'A bot made using Python and UIAutomator2 to automate watching ads on certain apps to get credits',
                    link: 'https://drive.google.com/file/d/159D_tco3qkpgh2a3CWz-f0ixPEpeUN8V/view?usp=sharing'
                },
                {
                    title: 'Indeed-Linkedin bot',
                    logo: 'https://github.com/p32929/portfolio-v2/assets/6418354/f24e64e7-ef7a-4d2d-a7d9-55f4797043cf',
                    desc: 'An automation bot created using playwright to automate applying jobs on Indeed and Linkedin',
                    link: 'https://drive.google.com/file/d/10Xc4Y0Z5KXxKhb9StF3bQfivYHHeNZsa/view?usp=sharing',
                }
            ]
        },
        {
            text: "Libraries / Packages / Crates",
            arr: [
                {
                    title: 'AndroidEasySQL-Library',
                    logo: 'https://www.vectorlogo.zone/logos/android/android-icon.svg',
                    desc: 'An Easier & Lazier approach to SQL database for Android',
                    link: 'https://github.com/p32929/AndroidEasySQL-Library'
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
                },
                {
                    title: 'Android-Receivers-Library',
                    logo: 'https://www.vectorlogo.zone/logos/android/android-icon.svg',
                    desc: 'A library for simpler BroadcastReceiver implementations',
                },
                {
                    title: 'Fay',
                    logo: 'https://crates.io/assets/cargo.png',
                    desc: 'A simple cross platform CLI app written in Rust to automate multiple shell ( bash or cmd ) commands',
                    link: 'https://crates.io/crates/fay'
                },
                {
                    title: 'fayfetch',
                    logo: 'https://avatars.githubusercontent.com/u/6078720?s=200&v=4',
                    desc: 'A simple wrapper for Fetch',
                    link: 'https://www.npmjs.com/package/fayfetch'
                },
                {
                    title: 'fjsondb',
                    logo: 'https://avatars.githubusercontent.com/u/6078720?s=200&v=4',
                    desc: 'A fast and simple JSON database for NodeJS',
                    link: 'https://www.npmjs.com/package/fjsondb'
                },
                {
                    title: 'str_template',
                    logo: 'https://avatars.githubusercontent.com/u/6078720?s=200&v=4',
                    desc: 'A fast and simple string templating library, written in TypeScript ( Supports both Client side and Server side JavaScript / TypeScript )',
                    link: 'https://www.npmjs.com/package/str-template-ts'
                },
                {
                    title: 'EasiestDB',
                    logo: WebImages.flutterIcon,
                    desc: 'The Easiest and the Laziest approach to Flutter SQL Database.',
                    link: 'https://pub.dev/packages/easiestdb'
                },
                {
                    title: "Simply Wifi",
                    logo: WebImages.flutterIcon,
                    desc: "A simplified version of the wifi_iot package",
                    link: "https://pub.dev/packages/simply_wifi"
                },
                {
                    title: "audio_duration",
                    logo: WebImages.flutterIcon,
                    desc: "Just a simple flutter package to get the duration of any audio file ( like: mp3 ) in milliseconds",
                    link: "https://pub.dev/packages/audio_duration",
                }
            ]
        },
        {
            text: "Extensions / Plugins / Addons",
            arr: [
                {
                    title: 'vscode-nvim-leave-insertmode',
                    logo: 'https://code.visualstudio.com/assets/images/code-stable.png',
                    desc: 'This basic VSCode extension ensures that neovim is in normal mode switching between text editor panels.',
                    link: 'https://marketplace.visualstudio.com/items?itemName=p32929.vscode-nvim-leave-insertmode'
                },
                {
                    title: 'one-console-log',
                    logo: 'https://code.visualstudio.com/assets/images/code-stable.png',
                    desc: 'A modified version of the turbo-console-log that adds only one line of console instead of multiples.',
                    link: 'https://marketplace.visualstudio.com/items?itemName=p32929.one-console-log',
                    featured: true,
                }
            ]
        },
    ]

    static contacts: Array<TitledListItemInterface> = [
        {
            text: "Contact me",
            arr: [
                {
                    title: 'WhatsApp ( Recommended )',
                    logo: 'https://user-images.githubusercontent.com/6418354/155842184-b064bf36-de8e-4317-8f8e-cb7755eed995.png',
                    link: 'https://api.whatsapp.com/send?phone=8801796306262',
                    desc: "+8801796306262"
                },
                {
                    title: 'Email',
                    logo: 'https://cdn3d.iconscout.com/3d/premium/thumb/email-address-4437044-3684811.png',
                    desc: 'p32929.ceo@gmail.com',
                    link: 'mailto:p32929.ceo@gmail.com'
                },
            ]
        },
        {
            text: "Others",
            arr: [
                {
                    title: 'Anywhere on the internet',
                    logo: 'https://user-images.githubusercontent.com/6418354/155840900-91ac076a-8d2b-45dc-b346-66f72d376d4b.png',
                    desc: "@p32929"
                },
                {
                    title: 'GitHub',
                    logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
                    link: 'https://github.com/p32929/'
                },
                {
                    title: 'LinkedIn',
                    logo: 'https://user-images.githubusercontent.com/6418354/155841027-8698cb12-7ddd-4604-a4ea-c618ddbc1cd8.png',
                    link: 'https://www.linkedin.com/in/p32929/'
                },
                {
                    title: 'Facebook',
                    logo: 'https://user-images.githubusercontent.com/6418354/155840898-9e2327aa-a280-45e3-8266-8268242abda4.png',
                    link: 'https://www.facebook.com/p32929'
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
                    title: "Upwork",
                    logo: "https://cdn.worldvectorlogo.com/logos/upwork.svg",
                    link: "https://www.upwork.com/freelancers/~017dbf657b99b0c1c1"
                },
                {
                    title: "Medium",
                    logo: "https://seeklogo.com/images/M/medium-logo-93CDCF6451-seeklogo.com.png",
                    link: "https://medium.com/@p32929_77176"
                },
                {
                    title: "xda",
                    logo: "https://www.svgrepo.com/show/331651/xda-developers.svg",
                    link: "https://forum.xda-developers.com/m/p32929.5346826/"
                },
                {
                    title: "Product Hunt",
                    logo: "https://seeklogo.com/images/P/product-hunt-logo-A144953C4C-seeklogo.com.png?v=637846885100000000",
                    link: "https://www.producthunt.com/@p32929"
                },
                {
                    title: "UVA Online Judge",
                    logo: "https://uhunt.onlinejudge.org/images/uva.png",
                    link: "https://uhunt.onlinejudge.org/id/590978"
                },
                {
                    title: "URI Online Judge",
                    logo: "https://user-images.githubusercontent.com/26368939/110052090-be0a0b00-7d35-11eb-8827-993190a9568e.png",
                    link: "https://www.beecrowd.com.br/judge/en/profile/76542"
                },
                {
                    title: "Buy Me a Coffee",
                    logo: "https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-1.svg",
                    link: "https://www.buymeacoffee.com/p32929"
                },
                {
                    title: 'Skype',
                    logo: 'https://user-images.githubusercontent.com/6418354/155840899-62c1fe8e-66a6-4492-9acc-5bd504ac21ef.png',
                    desc: 'p32929',
                    link: 'skype:p32929?chat'
                },
            ]
        },
        {
            text: "Thank you for visiting my portfolio",
            arr: [
                {
                    title: "Click on the link button",
                    desc: 'To create your own portfolio. It will only take around 3 minutes',
                    logo: WebImages.giftIcon,
                    link: 'https://github.com/p32929/p32929.github.io/'
                }
            ]
        }
    ]
}


