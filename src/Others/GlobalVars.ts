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
                {
                    title: 'Golang',
                    logo: "https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg"
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
                {
                    title: 'Formik',
                    logo: 'https://user-images.githubusercontent.com/4060187/61057426-4e5a4600-a3c3-11e9-9114-630743e05814.png'
                },
                {
                    title: 'Socket.io',
                    logo: 'https://socket.io/images/logo.svg'
                },
                {
                    title: 'Ant Design',
                    logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
                },
                {
                    title: 'React Native Paper',
                    logo: 'https://arpitbhalla.gallerycdn.vsassets.io/extensions/arpitbhalla/rnp-snippets/0.0.1/1620141921636/Microsoft.VisualStudio.Services.Icons.Default'
                },
                {
                    title: 'Webpack',
                    logo: 'https://raw.githubusercontent.com/webpack/media/master/logo/icon.png'
                },
                {
                    title: 'JSDOM',
                    logo: 'https://raw.githubusercontent.com/jsdom/jsdom/HEAD/logo.svg'
                },
                {
                    title: 'Flask',
                    logo: 'https://static.javatpoint.com/tutorial/flask/images/flask-tutorial.png'
                },
                {
                    title: 'Django',
                    logo: 'https://w7.pngwing.com/pngs/10/113/png-transparent-django-web-development-web-framework-python-software-framework-django-text-trademark-logo-thumbnail.png'
                },
                {
                    title: 'Peppeteer',
                    logo: 'https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png'
                },
                {
                    title: 'Vim',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/544px-Vimlogo.svg.png?20150726190850'
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
                    title: 'Docker',
                    logo: 'https://cdn.iconscout.com/icon/free/png-128/docker-226091.png'
                },
                {
                    title: 'Android Studio',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Android_Studio_Icon_3.6.svg/512px-Android_Studio_Icon_3.6.svg.png?20210301045217'
                },
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
                    title: 'DigitalOcean',
                    logo: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1478792253/gnlwek2zwhq369yryrzv.jpg'
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
            text: "Web Apps",
            arr: [
                {
                    title: "BreakingMars",
                    logo: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/lg6nxfb2dttgtng5kobb",
                    desc: '#1 Leading & Effortless Prospect Perceiving Platform',
                    link: "https://www.breakingmars.com/"
                },
                {
                    title: "Voomnow",
                    desc: "Next generation audio recorder",
                    logo: "https://user-images.githubusercontent.com/6418354/173876916-e27cb77f-49f1-4190-be54-4c1ddaa2973d.svg"
                },
                {
                    title: "s3cr3tm3",
                    link: "https://s3cr3tm3.netlify.app/",
                    logo: "https://user-images.githubusercontent.com/6418354/173877444-59dbdd3d-1b5d-4b92-ad53-30fada9362d2.png",
                    desc: "Share secret messages secretely"
                },
                {
                    title: "FaNote",
                    link: "https://fanote.netlify.app/",
                    logo: "https://user-images.githubusercontent.com/6418354/173878148-81fc6b46-167d-4449-b2b2-de55d048c490.png",
                    desc: "Offline notes for browsers"
                },
                {
                    title: "FivReq",
                    link: "https://fivreq.netlify.app/",
                    logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/129_Fiverr_logo_logos-512.png",
                    desc: "Fiverr buyer requests"
                },
            ]
        }
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