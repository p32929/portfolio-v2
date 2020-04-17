## Portfolio
The 2nd iteration of My Personal Portfolio - created using ReactJS
Visit Live: https://p32929.github.io/

# How to use
## Prerequisites
You need to have `NodeJS` and `NPM` installed in your computer.
If you don't have them installed, install them from here: https://nodejs.org/en/download/

## How to run the project
1. Fork the repository
2. Clone your forked repository
3. Install all the dependencies using this command:
`npm install`
4. Run the project using this command:
`npm start`

## Create your own portfolio
1. Fork the repository
2. Change the repository name to `https://your-github-username.github.io/` by going into settings
3. Clone the repository
4. To modify the First Visible page (Like your name, image etc), edit `src/vars/MainItems.js` file.
5. To edit the Skills section, edit the variables inside `src/vars/SkillsItems.js` file.
6. To edit the Projects section, edit the variables inside `src/vars/projectItems.js` file.
7. To edit the Contact section, edit the variables inside `src/vars/contactItems.js` file.
8. Inside package.json, change the value of homepage to `https://your-github-username.github.io/`
9. Run this command: `npm run deploy`
10. Go the the repository settings page > Github Pages > Source and set it to `master` branch

Volla!! Now your portfolio can be accessed using the url written in the `homepage` of `package.json`

## LICENSE
```
MIT License

Copyright (c) 2020 Fayaz Bin Salam

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```