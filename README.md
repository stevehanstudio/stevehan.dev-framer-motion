# SteveHan.dev Portfolio website

This project uses Typescript, React.js, [Framer Motion](https://www.framer.com/motion/), and [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3), and is integrated with Google Analytics 4 and Google Tag Manager.

<details open>
<summary>
<h2>Live Site</h2>
</summary>

[🌐 www.stevehan.dev](https://www.stevehan.dev)
</details>

<details open>
<summary>
<h2>Features</h2>
</summary>

* Dark / light Mode
  * Dark / light mode switch animation
  * Linear gradient background animation
* Desktop/tablet (>= 768 pixels)
  * Skills
    * Expand/collapse to see all or less skills
    * Reorder and animate selected buttons to the front
  * Carousel to scroll through projects and certificates
    * Drag with momentum to scroll
    * Right/left buttons to go to next set
    * Fade out on left and/or right to show there's more
  * Navigation
    * Chevron button on bottom of page to go to next page
* Mobile (< 768 pixels)
  * Setting
    * Drawer drag close
  * Skills
    * Carousel to select skills
    * Filter sidebar to see all skills
  * Navigation
* Image Optimization
  * Cloudinary image transformation delivery URL
* Miscellaneous
  * 404 Page not found
    * SVG Animation

</details>


<details open>
<summary>
<h2>Screenshots</h2>
</summary>

<h3>Desktop</h3>
<img alt="Desktop screenshot" width="1000px" src="https://res.cloudinary.com/dbrvquuei/image/upload/c_scale,w_auto/f_auto/dpr_auto/v1671834505/stevehandev/screenshots/desktop_screenshot_bkevoo.jpg" />
<br />
<h3>Mobile (captured on iPhone X)</h3>
<img alt="Mobile phone screenshot iPhone X" width="300px" src="https://res.cloudinary.com/dbrvquuei/image/upload/c_scale,w_auto/f_auto/dpr_auto/v1671834505/stevehandev/screenshots/iphoneX_screenshot_nfflck.jpg" />
<br />

</details>

<details open>
<summary>
<h2>Technology Used</h2>
</summary>

<table>
<tr>
  <td>
    <img align="left" alt="Typescript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" />
  </td>
  <td>
    <img align="left" alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
  </td>
  <td>
    <img align="left" alt="Framer Motion" width="26px" src="https://camo.githubusercontent.com/179d66ab2b0321726c88a586c4ad38802e7113a3c98c6fd3f0156c01c98cfd14/68747470733a2f2f6672616d657275736572636f6e74656e742e636f6d2f696d616765732f34386861395a52396f5a51475136675a38595566456c50335430412e706e67" />
  </td>
  <td>
    <img align="left" alt="Tailwind CSS" width="26px" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" />
  </td>
  <td>
    <img align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />
  </td>
  <td>
    <img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
  </td>
  <td>
    <img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
  </td>
  <td>
    <img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
  </td>
  <td>
    <img align="left" alt="Sass" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" />
  </td>
  <td>
    <img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
  </td>
  <td>
    <img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />
  </td>
  <td>
    <img align="left" alt="Jira" width="26px" src="https://user-images.githubusercontent.com/25181517/183912952-83784e94-629d-4c34-a961-ae2ae795b662.png" />
  </td>
  <td>
    <img align="left" alt="Google Analytics" width="26px" src="https://avatars.githubusercontent.com/u/4327788?s=200&v=4" />
  </td>
  <td>
    <img align="left" alt="Google Tag Manager" width="26px" src="https://img.icons8.com/color/512/google-tag-manager.png" />
  </td>
</tr>
<tr>
  <td>Typescript</td>
  <td>React</td>
  <td>Framer Motion</td>
  <td>Tailwind CSS</td>
  <td>Visual Studio Code</td>
  <td>JavaScript</td>
  <td>HTML5</td>
  <td>CSS3</td>
  <td>SASS</td>
  <td>Git</td>
  <td>Github</td>
  <td>Jira</td>
  <td>Google Analytics</td>
  <td>Google Tag Manager</td>
</tr>
</table>
<br />

</details>

<details open>
<summary>
<h2>Project Folder Structure</h2>
</summary>

```
├── .vscode
│   └── settings.json # VS Code settings
├── public
│   ├── _redirects # Configures Netlify so that routing is handled on the client side by React Router
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
│   │   ├── About.tsx # About me and about the website page
│   │   ├── Certificates.tsx # Certificates page
│   │   ├── Contact.tsx # Contact form page
│   │   ├── Home.tsx # Home / Hero page
│   │   ├── NotFound.tsx # 404 page not found
│   │   └── Projects.tsx # Projects page
│   ├── styles
│   │   └──  global.scss # Global styles
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
<details closed>
<summary>
<h4>Javascript / React.js</h4>
</summary>

* [Find single or array of values in JavaScript array using includes (blog)](https://www.gavsblog.com/blog/find-single-or-array-of-values-in-javascript-array-using-includes)

* [Handle mouse hover events over a mapped array in React (StackOverFlow)](https://stackoverflow.com/questions/67501705/handle-mouse-hover-events-over-a-mapped-array-in-react)

* [How to check if an array contains all elements of another array (StackOverFlow)](https://stackoverflow.com/questions/53606337/check-if-array-contains-all-elements-of-another-array) - I used this resources for the Skills component.

* [react typescript issue on add EventListener](https://stackoverflow.com/questions/58162113/react-typescript-issue-on-addevenlistener) - I had trouble figuring out the type of event touchmove is.  I thought it would be React.TouchEvent<HTMLElement> but it is just Event.

* [React/typescript forwardRef cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forward_and_create_ref/)

* [How to change light / dark mode based on system settings](https://www.section.io/engineering-education/watch-for-system-dark-mode-using-js-css/)

* [ReactJS: How to determine if the application is being viewed on mobile or desktop browser (StackOverFlow)](https://stackoverflow.com/questions/39435395/reactjs-how-to-determine-if-the-application-is-being-viewed-on-mobile-or-deskto)

</details>

<details closed>
<summary>
<h4>Styling - Tailwind CSS / SASS / CSS</h4>
</summary>

* [Tailwind CSS Dark Mode | React App Theme Switcher (Youtube)](https://www.youtube.com/watch?v=VylXkPy-MIc)

* [How do I detect dark mode using Javascript (StackOverFlow)](https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript)

* [Making dark and light more gradients with 'background-image' in Tailwind CSS (StackOverFlow)](https://stackoverflow.com/questions/68599939/make-gradient-in-dark-mode-background-image-work-with-simple-background-backg)

* [Examples of black & blue gradients](https://www.eggradients.com/category/black-and-blue-gradient) - I referenced this in coming up with my color scheme.

* [Dark Mode Animation (CodePen)](https://codepen.io/stevehanstudio/pen/poKEmxg) - I used this as inspiration in coming up with my dark mode switch.

* [Scroll Animations (Youtube)](https://www.youtube.com/watch?v=T33NN_pPeNI&t=39s) - I considered using scroll animation and looked at a number of resources including this one.

* [Creating Glow Effects with CSS](https://codersblock.com/blog/creating-glow-effects-with-css/)

* [Glow animation from behind using after pseudo selector, box-shadow and scale transform (Youtube)](https://www.youtube.com/watch?v=5JCEZNfndoQ)

* [Vertically align icon and text (StackOverFlow)](https://stackoverflow.com/questions/22545325/how-to-vertically-align-text-with-icon-font)

* [React tailwind + sass build error - resolve-url-loader: error processing CSS (StackOverFlow)](https://stackoverflow.com/questions/71188714/react-tailwind-sass-build-error-resolve-url-loader-error-processing-css) - Helped me resolve the SASS related build error.

* [Wrapping text around an image or shape (Youtube)](https://www.youtube.com/watch?v=sifXs4XVK7g)

* [15 ways to center vertically (blog)](https://blog.logrocket.com/15-ways-implement-vertical-alignment-css/)

* [Creating custom scrollbars using CSS (Youtube)](https://www.youtube.com/watch?v=lvKK2fs6h4I)

* [For the carousel we have to hide the scrollbars in the x direction but keep the functionality (W3School)](https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp)
</details>

<details closed>
<summary>
<h4>Animation - Framer Motion</h4>
</summary>

* [Animating React with Framer Motion course (Level UP Tutorials)](https://levelup.video/tutorials/animating-react-with-framer-motion) - Excellent course.  This was my first course on Framer Motion.

* [Framer Motion carousel slider (Youtube)](https://www.youtube.com/watch?v=W0bEL93tt4k) - My main carousel used on the Projects and Certificates pages was originally based on this tutorial.

* [Why is my scrollWidth showing wrong number? (StackOverFlow)](https://stackoverflow.com/questions/68250396/why-is-my-scrollwidth-showing-wrong-number-react-js) - I used this resource for my main carousel.

* [Portfolio that uses React, Framer Motion, and Tailwind CSS (Youtube)](https://www.youtube.com/watch?v=urgi2iz9P6U&t=274s) - This project started out loosely based on this tutorial.

* [Tip on getting Framer Motion to remount on state change (StackOverFlow)](https://stackoverflow.com/questions/69051279/how-to-animate-on-each-state-change-using-framer-motion).  I used this tip to get skills component to re-render every time a skill is selected or deselected.

* [Framer motion color animation (official site)](https://framerbook.com/animation/example-animations/23-colors-keyframe-animation/)

* [React Tooltip - Warning: Prop `dangerouslySetInnerHTML` did not match (Github)](https://github.com/ReactTooltip/react-tooltip/issues/675)

* [Image fade out effect using CSS image mask (Youtube)](https://www.youtube.com/watch?v=1Xo5IVXW4vY) - I used for this effect on my main carousel.

* [Framer Motion - event clientX / clientY does not work.  Use of info delta.x / delta.y instead](https://stackoverflow.com/questions/68342036/reactjs-calculating-direction-of-joystick-while-dragging-using-framer-motion)

* [Using nested tertiary conditional operator](https://javascript.plainenglish.io/javascript-nested-ternary-operator-dc28551fb8c3) - I used it for deciding which linear gradient to use for fading left, right, or both left and right carousel.

* [Fade Out Overflow Effect](https://pqina.nl/blog/fade-out-overflow-using-css-mask-image/)

* [Menu Button using Framer Motion (CodeSandBox)](https://codesandbox.io/s/hamburger-menu-with-framer-motion-iwxtp?file=/src/index.tsx)

* [How to use React-router-dom and Framer Motion AnimatePresence (StackOverFlow)](https://stackoverflow.com/questions/70239122/react-router-dom-v6-with-framer-motion-v4)

* [Shared layout animations - deprecated with Frame Motion 5](https://www.framer.com/docs/guide-upgrade/##shared-layout-animations)

* [Stop scrolling from interfering with dragging (Framer Motion issue on Github)](https://github.com/framer/motion/issues/185) - This issue took some time for me to resolve.  The issue was with my mobile skills component where drag movement is supposed to be constrained in the x direction, but it doesn't and it's possible to drag the component off below the bottom of the screen.  The solution was to use an event listener and disregard the touch movement when a touchmove event is detected and delta y is greater than delta x.

</details>

<details closed>
<summary>
<h4>SVG</h4>
</summary>

* [Work around for color styling issue with Grommet Icons (Github)](https://github.com/grommet/grommet-icons/issues/171)

* [More on work around for color styling issue with Grommet Icons (Github)](https://github.com/react-icons/react-icons/issues/404)

* [How to change icon size (StackOverFlow)](https://stackoverflow.com/questions/43768629/how-to-scale-large-font-awesome-icons-from-the-react-icons-package)

* [Adding icon to submit button (StackOverFlow)](https://stackoverflow.com/questions/9376192/add-icon-to-submit-button-in-twitter-bootstrap-2)

</details>

<details closed>
<summary>
<h4>Fonts</h4>
</summary>

* [How to self host Google fonts](https://webdesign.tutsplus.com/tutorials/how-to-self-host-google-fonts--cms-34775)

* [Google webfonts helper](https://gwfh.mranftl.com/fonts)

</details>

<details closed>
<summary>
<h4>Testing - React Testing Library, Jest</h4>
</summary>

* [React js: Error: useLocation() may be used only in the context of a <Router> component](https://stackoverflow.com/questions/66747556/react-js-error-uselocation-may-be-used-only-in-the-context-of-a-router-com).  App component has to be wrapped with Router in App.test.tsx.

</details>

<details closed>
<summary>
<h4>Performance - React Profiler, Core Web Vitals, Lighthouse, Memo</h4>
</summary>

* [Optimize Performance for React (Pluralsight)](https://www.pluralsight.com/courses/optimize-performance-react).  Course on using React Profiler, React PureComponents, memo, useMemo, and reducing bundle size to improve performance

* [Profile a React App for Performance (blog)](https://kentcdodds.com/blog/profile-a-react-app-for-performance) - Tips on using React Profiler on production build

* [Tech Talk: Performance & React: Measuring and Fixing Common Bottlenecks](https://www.youtube.com/watch?v=b8IcYOV5_Rc) - Clear explaination on why the choice of keys used in rendering lists makes a big difference in performance

* [Lighthouse error: "Buttons do not have an accessible name" (StackOverFlow)](https://stackoverflow.com/questions/56082381lighthouse-error-buttons-do-not-have-an-accessible-name).  Add aria-label to buttons.

</details>

<details closed>
<summary>
<h4>Deployment / Build - Netlify, AWS</h4>
</summary>

* [Next js typescript build error](https://nextjs.org/docs/api-reference/next.config.js/ignoring-typescript-errors).  This project started out as a Next.js 13 project.

* [Fix Page Not Found on Netlify by adding a _directs file in the public folder (FreeCodeCamp)](https://www.freecodecamp.org/news/how-to-deploy-a-routed-react-app-to-netlify/)

* [Amplify pull error (Github issues)](https://github.com/aws-amplify/amplify-cli/issues/11245). When setting up Amplify Studio and running ```amplify pull``` receive the message ".config\local-env-info.json does not exist".  The solution was to delete the amplify folder and rerun ```amplify pull```

</details>

<details closed>
<summary>
<h4>Traffic Analytics - Google Analytics, Google Tag Manager, Hotjar</h4>
</summary>

* [Ultimate Google Analytics (4) course + 50 practical examples (Udemy)](https://www.udemy.com/course/ultimate-google-analytics-course-50-practical-tips/)

* [Advanced Google Analytics 4 Implementation with Tag Manager](https://www.udemy.com/course/advanced-google-analytics-4/)

* [Filtering out internal traffic for Google Tag Manager and GA4 (Youtube)](https://www.youtube.com/watch?v=018vb5hDtE8)

</details>

</details>

