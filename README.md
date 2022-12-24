# SteveHan.dev Portfolio website

This project uses Typescript, React.js, [Framer Motion](https://www.framer.com/motion/), and [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3), and is integrated with Google Analytics 4 and Google Tag Manager.

<details open>
<summary>
<h2>Live Site</h2>
</summary>

[www.stevehan.dev](https://www.stevehan.dev)
</details>

<details open>
<summary>
<h2>Screenshots</h2>
</summary>

<h3>Desktop</h3>
<img alt="Desktop screenshot" width="1000px" src="https://res.cloudinary.com/dbrvquuei/image/upload/c_scale,w_auto/f_auto/dpr_auto/v1671834505/stevehandev/screenshots/desktop_screenshot_bkevoo.jpg" />
<br />
<h3>Mobile (captured by iPhone X)</h3>
<img alt="Mobile phone screenshot iPhone X" width="300px" src="https://res.cloudinary.com/dbrvquuei/image/upload/c_scale,w_auto/f_auto/dpr_auto/v1671834505/stevehandev/screenshots/iphoneX_screenshot_nfflck.jpg" />
<br />

</details>

<details open>
<summary>
<h2>Technology Used</h2>
</summary>

<img align="left" alt="Typescript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" />
<img align="left" alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
<img align="left" alt="Framer Motion" width="26px" src="https://camo.githubusercontent.com/179d66ab2b0321726c88a586c4ad38802e7113a3c98c6fd3f0156c01c98cfd14/68747470733a2f2f6672616d657275736572636f6e74656e742e636f6d2f696d616765732f34386861395a52396f5a51475136675a38595566456c50335430412e706e67" />
<img align="left" alt="Tailwind CSS" width="26px" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" />
<img align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />
<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
<img align="left" alt="Sass" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" />
<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />
<img align="left" alt="Jira" width="26px" src="https://user-images.githubusercontent.com/25181517/183912952-83784e94-629d-4c34-a961-ae2ae795b662.png" />
<img align="left" alt="Google Analytics" width="26px" src="https://avatars.githubusercontent.com/u/4327788?s=200&v=4" />
<img align="left" alt="Google Tag Manager" width="26px" src="https://img.icons8.com/color/512/google-tag-manager.png" />
<br />

</details>

<details open>
<summary>
<h2>Project Folder Structure</h2>
</summary>

```
├── .vscode
│   └── settings.json # Settings of VS code editor
├── public
│   ├── _redirects # Netlify ...
│   ├── manifest.json # Not modified.
│   └── index.html # Main HTML file, contains the code for Google Tag Manager and Hotjar.
├── src
│   ├── components
│   │   ├── AnimationPageTransition.tsx # .
│   │   ├── Buttons.tsx # Contains all the buttons used in the project.
│   │   ├── CardComponent.tsx #
│   │   ├── DarkModeSwitch.tsx # Dark/light mode switch
│   │   ├── Drawer.tsx #
│   │   ├── Header.tsx #
│   │   ├── LogoGlow.tsx #
│   │   ├── MainCarousel.tsx #
│   │   ├── MainComponent.tsx #
│   │   ├── Menu.tsx #
│   │   ├── MobileCardsComponent.tsx #
│   │   ├── MobileMenu.tsx #
│   │   ├── MobileSkillsComponent.tsx #
│   │   ├── MobileSkillsSideBar.tsx #
│   │   ├── ResumeIcon.tsx #
│   │   ├── Settings.tsx #
│   │   ├── SettingsDrawer.tsx #
│   │   └── SkillsComponent.tsx #
│   ├── constants
│   │   ├── MenuItems.ts
│   │   └── misc.ts #
│   ├── context
│   │   ├── AppContext.ts #
│   │   └── AppContextProvider.tsx # Contains the global states
│   ├── fonts
│   │   └──  global.scss # Global styles
│   ├── pages
│   │   ├── About.tsx # About me and the website page
│   │   ├── Certificates.tsx # Certificates page
│   │   ├── Contact.tsx # Contact form page
│   │   ├── Home.tsx # Home / hero page
│   │   ├── NotFound.tsx # 404 page
│   │   └── Projects.tsx # Projects page
│   ├── styles
│   │   └──  # Image of Charleston Pierce
│   ├── App.test.tsx # .
│   ├── App.tsx # This is the root of the app.
│   ├── index.css # Global styles.
│   ├── index.tsx # Used for DOM rendering only.
│   ├── react-app-env.d.ts # .
│   ├── reportWebVitals.ts # .
│   ├── setupTests.ts # .
│   └── types.ts # Typescript types definitions for the project.
├── .gitignore # Files ignored by Git.
├── README.md # This file.
├── package.json # npm package manager file.
├── package-lock.json # Contains the dependencies used in the project.
├── postcss-config.json # .
├── tailwind.config.js # Tailwind CSS configuration file.
└── tsconfig.json # Typescript configuration file.
```
</details>

<details open>
<summary>
<h2>Known Issues</h2>
</summary>

Coming soon...

</details>

<details open>
<summary>
<h2>Resources</h2>
</summary>

* [Animating React with Framer Motion course (Level UP Tutorials)](https://levelup.video/tutorials/animating-react-with-framer-motion) - Excellent course.  This was my first course on Framer Motion.

* [Tailwind CSS Dark Mode | React App Theme Switcher (Youtube)](https://www.youtube.com/watch?v=VylXkPy-MIc)

* [How do I detect dark mode using Javascript (StackOverFlow)](https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript)

* [Making dark and light more gradients with 'background-image' in Tailwind CSS (StackOverFlow)](https://stackoverflow.com/questions/68599939/make-gradient-in-dark-mode-background-image-work-with-simple-background-backg)

* [Examples of black & blue gradients](https://www.eggradients.com/category/black-and-blue-gradient) - I reference this in coming up with my color scheme.

* [Dark Mode Animation (CodePen)](https://codepen.io/stevehanstudio/pen/poKEmxg) - I used this as inspiration in coming up with my dark mode switch.

* [Scroll Animations (Youtube)](https://www.youtube.com/watch?v=T33NN_pPeNI&t=39s) - I considered using scroll animation and looked at a number of resources including this one.

* [Framer Motion carousel slider (Youtube)](https://www.youtube.com/watch?v=W0bEL93tt4k) - My main carousel used on the Projects and Certificates pages was originally based on this tutorial.

* [Why is my scrollWidth showing wrong number? (StackOverFlow)](https://stackoverflow.com/questions/68250396/why-is-my-scrollwidth-showing-wrong-number-react-js) - I used this resource for my main carousel.

* [How to check if an array contains all elements of another array (StackOverFlow)](https://stackoverflow.com/questions/53606337/check-if-array-contains-all-elements-of-another-array) - I used this resources for the Skills component.

* [Find single or array of values in JavaScript array using includes (blog)](https://www.gavsblog.com/blog/find-single-or-array-of-values-in-javascript-array-using-includes)

* [Handle mouse hover events over a mapped array in React (StackOverFlow)](https://stackoverflow.com/questions/67501705/handle-mouse-hover-events-over-a-mapped-array-in-react)

* [Creating Glow Effects with CSS](https://codersblock.com/blog/creating-glow-effects-with-css/)

* [Portfolio that uses React, Framer Motion, and Tailwind CSS (Youtube)](https://www.youtube.com/watch?v=urgi2iz9P6U&t=274s) - This project started out loosely based on this tutorial.

* [Glow animation from behind using after pseudo selector, box-shadow and scale transform (Youtube)](https://www.youtube.com/watch?v=5JCEZNfndoQ)

* [Tip on getting Framer Motion to remount on state change (StackOverFlow)](https://stackoverflow.com/questions/69051279/how-to-animate-on-each-state-change-using-framer-motion)

* [Framer motion color animation (official site)](https://framerbook.com/animation/example-animations/23-colors-keyframe-animation/)

* [Work around for color styling issue with Grommet Icons (Github)](https://github.com/grommet/grommet-icons/issues/171)

* [More on work around for color styling issue with Grommet Icons (Github)](https://github.com/react-icons/react-icons/issues/404)

* [How to change icon size (StackOverFlow)](https://stackoverflow.com/questions/43768629/how-to-scale-large-font-awesome-icons-from-the-react-icons-package)

* [Adding icon to submit button (StackOverFlow)](https://stackoverflow.com/questions/9376192/add-icon-to-submit-button-in-twitter-bootstrap-2)

* [Vertically align icon and text (StackOverFlow)](https://stackoverflow.com/questions/22545325/how-to-vertically-align-text-with-icon-font)

* [React Tooltip - Warning: Prop `dangerouslySetInnerHTML` did not match (Github)](https://github.com/ReactTooltip/react-tooltip/issues/675)

* [Wrapping text around an image or shape (Youtube)](https://www.youtube.com/watch?v=sifXs4XVK7g)

* [Next js typescript build error](https://nextjs.org/docs/api-reference/next.config.js/ignoring-typescript-errors).  This project started out as a Next.js 13 project.

* [Image fade out effect using CSS image mask (Youtube)](https://www.youtube.com/watch?v=1Xo5IVXW4vY) - I used for this effect on my main carousel.

* [Framer Motion - event clientX / clientY does not work.  Use of info delta.x / delta.y instead](https://stackoverflow.com/questions/68342036/reactjs-calculating-direction-of-joystick-while-dragging-using-framer-motion)

* [Using nested tertiary conditional operator](https://javascript.plainenglish.io/javascript-nested-ternary-operator-dc28551fb8c3) - I used it for deciding which linear gradient to use for fading left, right, or both left and right carousel.

* [Creating custom scrollbars using CSS (Youtube)](https://www.youtube.com/watch?v=lvKK2fs6h4I)

* [Fade Out Overflow Effect](https://pqina.nl/blog/fade-out-overflow-using-css-mask-image/)

* [React/typescript forwardRef cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forward_and_create_ref/)

* [Menu Button using Framer Motion (CodeSandBox)](https://codesandbox.io/s/hamburger-menu-with-framer-motion-iwxtp?file=/src/index.tsx)

* [ReactJS: How to determine if the application is being viewed on mobile or desktop browser (StackOverFlow)](https://stackoverflow.com/questions/39435395/reactjs-how-to-determine-if-the-application-is-being-viewed-on-mobile-or-deskto)

* [15 ways to center vertically (blog)](https://blog.logrocket.com/15-ways-implement-vertical-alignment-css/)

* [How to change light / dark mode based on system settings](https://www.section.io/engineering-education/watch-for-system-dark-mode-using-js-css/)

* [How to use React-router-dom and Framer Motion AnimatePresence (StackOverFlow)](https://stackoverflow.com/questions/70239122/react-router-dom-v6-with-framer-motion-v4)

* [Shared layout animations - deprecated with Frame Motion 5](https://www.framer.com/docs/guide-upgrade/##shared-layout-animations)

* [For the carousel we have to hide the scrollbars in the x direction but keep the functionality (W3School)](https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp)

* [React tailwind + sass build error - resolve-url-loader: error processing CSS (StackOverFlow)](https://stackoverflow.com/questions/71188714/react-tailwind-sass-build-error-resolve-url-loader-error-processing-css) - Helped me resolve the SASS related build error.

* [How to self host Google fonts](https://webdesign.tutsplus.com/tutorials/how-to-self-host-google-fonts--cms-34775)

* [Google webfonts helper](https://gwfh.mranftl.com/fonts)

* [Fix Page Not Found on Netlify by adding a _directs file in the public folder (FreeCodeCamp)](https://www.freecodecamp.org/news/how-to-deploy-a-routed-react-app-to-netlify/)

* [Ultimate Google Analytics (4) course + 50 practical examples (Udemy)](https://www.udemy.com/course/ultimate-google-analytics-course-50-practical-tips/)

* [Advanced Google Analytics 4 Implementation with Tag Manager](https://www.udemy.com/course/advanced-google-analytics-4/)

* [Filtering out internal traffic for Google Tag Manager and GA4 (Youtube)](https://www.youtube.com/watch?v=018vb5hDtE8)

</details>
