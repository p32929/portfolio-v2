# portfolio-v2

The second iteration of my personal portfolio — a single-page developer portfolio built with React, TypeScript, Material-UI and Overmind. Fork it, swap one file of variables, and deploy your own to GitHub Pages.

![portfolio-v2 preview](https://user-images.githubusercontent.com/6418354/108698254-2256ee80-752e-11eb-8767-aeb5a4f86536.gif)

**Live demo:** https://p32929.github.io/portfolio-v2/

## Features

- **All your data in one file** — name, links, works and skills live in `src/Others/GlobalVars.ts`. Nothing else to touch.
- **Dynamic theme colours** — a built-in colour picker (react-color) lets visitors re-theme the page on the fly.
- **Material-UI layout** — fixed left profile pane, routed right pane for About / Skills / Works / Contact.
- **Overmind state** — tiny, typed state management instead of a Redux ceremony.
- **Deploys to GitHub Pages** with two npm commands.

## Prerequisites

You need `NodeJS` and `NPM` installed. Grab them here: https://nodejs.org/en/download/

## Run it locally

```bash
git clone https://github.com/p32929/portfolio-v2.git
cd portfolio-v2
npm install
npm start
```

## Create your own portfolio

1. Fork the repository (recommended)
2. Rename the fork to `your-github-username.github.io` in its settings
3. `git clone YOUR-REPOSITORY-URL`
4. Edit `src/Others/GlobalVars.ts` — your data, your flavours
5. `npm run predeploy`
6. `npm run deploy`
7. In your repository settings, point GitHub Pages at the `master` branch

& Volla!! Your portfolio is live at `https://your-github-username.github.io/`. GitHub Pages usually takes 3-5 minutes to pick up the change — if it still doesn't show, run steps 5 & 6 again.

## FAQ

* Can I use it for any personal/commercial project?
-> Yes. But don't change/remove the `fork icon` and the `URL it redirects to` at the `TOP-RIGHT corner`. So that, others can also benefit from the repository.

* Can I use it for making my personal/commercial portfolio? 
-> Definitely. But make sure you FORK it while doing it :)

* Can I share your portfolio link with my friends?
-> DEFINITELY! ^_^

* Can I contact you if I get stuck while trying to create my own portfolio using the forked source code?
-> DEFINITELY! :)

## All my portfolio websites

Looking for one of my previous portfolio websites / source code? Here's the list:

V1: https://p32929.github.io/portfolio-v1/ ( Source: https://github.com/p32929/portfolio-v1 )

V2: https://p32929.github.io/portfolio-v2/ ( Source: https://github.com/p32929/portfolio-v2 )

V3: https://p32929.github.io/ ( Source: https://github.com/p32929/p32929.github.io )

## Thanks

Thanks to everyone for your STARS, WATCHES, FORKS, & VISITS. Special thanks to:
* [Facebook](https://www.facebook.com/) for the [ReactJS](https://reactjs.org/) library
* [Microsoft](https://www.microsoft.com/) for the [TypeScript](https://www.typescriptlang.org/) language 
* [mui-org](https://github.com/mui-org/) for the [Material-UI](https://material-ui.com/) Components library
* [casesandberg](https://github.com/casesandberg) for the [react-color](https://casesandberg.github.io/react-color/) library
* [Plabon Dey](https://www.facebook.com/plabon.shuvo1) for the Dynamic Color idea :P
* [Github pages](https://pages.github.com/) for letting me host it for free 
* [Vijay Verma](https://www.uplabs.com/realvjy) for the awesome [Glazzy Portfolio](https://www.uplabs.com/posts/glazzy-free-portfolio-psd-template) design

Am I missing anyone? If yes, Let me know

## License

MIT License — Copyright (c) 2020 Fayaz Bin Salam. See [LICENSE](LICENSE) for the full text.

## Contributing

Contributions are warmly welcomed and greatly appreciated! Whether it's a bug fix, new feature, or improvement, your input helps make this project better for everyone.

Before submitting a pull request, please:

1. Create an issue describing the feature or bug fix you'd like to work on
2. Wait for discussion and approval to ensure alignment with project goals
3. Fork the repository and create your feature branch
4. Submit your pull request with a clear description of changes

This approach helps avoid duplicate efforts and ensures smooth collaboration. Thank you for considering contributing!

A few already-identified bugs, if you want somewhere to start: [BUGS.md](https://github.com/p32929/portfolio-v2/blob/react/BUGS.md)

## Share

Sharing this repository with your friends is just one click away from here

[![facebook](https://user-images.githubusercontent.com/6418354/179013321-ac1d1452-0689-493f-9066-940cf2302b6e.png)](https://www.facebook.com/sharer/sharer.php?u=https://github.com/p32929/portfolio-v2/)
[![twitter](https://user-images.githubusercontent.com/6418354/179013351-7d8d6d1c-4ce2-46ab-bef8-4c4765a1b888.png)](https://twitter.com/intent/tweet?url=https://github.com/p32929/portfolio-v2/)
[![tumblr](https://user-images.githubusercontent.com/6418354/179013343-3111f55a-3b90-40c7-8487-9777348672b0.png)](https://www.tumblr.com/share?v=3&u=https://github.com/p32929/portfolio-v2/)
[![pocket](https://user-images.githubusercontent.com/6418354/179013334-b095c45f-becf-49f4-9ee1-5a731a9b1f85.png)](https://getpocket.com/save?url=https://github.com/p32929/portfolio-v2/)
[![pinterest](https://user-images.githubusercontent.com/6418354/179013331-44cd9206-11b1-4b65-becb-5863b61c828f.png)](https://pinterest.com/pin/create/button/?url=https://github.com/p32929/portfolio-v2/)
[![reddit](https://user-images.githubusercontent.com/6418354/179013338-7416ae3f-73ba-4522-86e1-1374d7082d22.png)](https://www.reddit.com/submit?url=https://github.com/p32929/portfolio-v2/)
[![linkedin](https://user-images.githubusercontent.com/6418354/179013327-ca7b7102-1da8-4b1c-858f-1a6e5f21bd70.png)](https://www.linkedin.com/shareArticle?mini=true&url=https://github.com/p32929/portfolio-v2/)
[![whatsapp](https://user-images.githubusercontent.com/6418354/179013353-f477fa0b-3e6f-4138-a357-c9991b23ff88.png)](https://api.whatsapp.com/send?text=https://github.com/p32929/portfolio-v2/)

Or share my portfolio link ( https://p32929.github.io/ ) with your friends in just a click

[![facebook](https://user-images.githubusercontent.com/6418354/179013321-ac1d1452-0689-493f-9066-940cf2302b6e.png)](https://www.facebook.com/sharer/sharer.php?u=https://p32929.github.io/)
[![twitter](https://user-images.githubusercontent.com/6418354/179013351-7d8d6d1c-4ce2-46ab-bef8-4c4765a1b888.png)](https://twitter.com/intent/tweet?url=https://p32929.github.io/)
[![tumblr](https://user-images.githubusercontent.com/6418354/179013343-3111f55a-3b90-40c7-8487-9777348672b0.png)](https://www.tumblr.com/share?v=3&u=https://p32929.github.io/)
[![pocket](https://user-images.githubusercontent.com/6418354/179013334-b095c45f-becf-49f4-9ee1-5a731a9b1f85.png)](https://getpocket.com/save?url=https://p32929.github.io/)
[![pinterest](https://user-images.githubusercontent.com/6418354/179013331-44cd9206-11b1-4b65-becb-5863b61c828f.png)](https://pinterest.com/pin/create/button/?url=https://p32929.github.io/)
[![reddit](https://user-images.githubusercontent.com/6418354/179013338-7416ae3f-73ba-4522-86e1-1374d7082d22.png)](https://www.reddit.com/submit?url=https://p32929.github.io/)
[![linkedin](https://user-images.githubusercontent.com/6418354/179013327-ca7b7102-1da8-4b1c-858f-1a6e5f21bd70.png)](https://www.linkedin.com/shareArticle?mini=true&url=https://p32929.github.io/)
[![whatsapp](https://user-images.githubusercontent.com/6418354/179013353-f477fa0b-3e6f-4138-a357-c9991b23ff88.png)](https://api.whatsapp.com/send?text=https://p32929.github.io/)

## Support

If you like my works and want to support me/my works, feel free to support:

[![buymeacoffee](https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-1.svg)](https://www.buymeacoffee.com/p32929)

<!-- hire-block -->

---

## 💼 Using this at a company?

I do fixed-price delivery work on my own projects. One invoice, one date, no hourly billing:

| | |
|---|---|
| **White-label build** — this project rebranded, extended and deployed as yours | **$6,500** · 3 weeks |
| **Custom app from scratch** on my own stack, signed and auto-updating | **$12,500** · 6 weeks |
| **Production-hardening sprint** — 72 hours on this project, for your load and your security review | **$999** |
| **Ongoing capacity** — one project-week of my time reserved every month | **$9,000 / month** |

Full details → **[p32929.github.io/hire](https://p32929.github.io/hire/)** · Email **[fayazdevinbox@uberip.com](mailto:fayazdevinbox@uberip.com)** — scoping and quotes are free and I answer within one business day.
