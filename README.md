# SteveHan.dev Version 2 of my portfolio website

This project uses Typescript, React.js, Framer Motion, and [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).

## Demo
https://stevehan-dev-v2.vercel.app/

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
pnpm create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

Known Issues:
Sometimes the carousal cannot be scrolled and requires reloading the page.

Image on About page when width is set to 50%, it shows a width of 4 pixels.
- Fixed - explicitly set the width to 484 pixels.

## References

Level UP Tutorials - Animating React with Framer Motion course
https://levelup.video/tutorials/animating-react-with-framer-motion

https://tailwindcss.com/docs/theme
https://www.youtube.com/watch?v=VylXkPy-MIc
https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript
https://stackoverflow.com/questions/68599939/make-gradient-in-dark-mode-background-image-work-with-simple-background-backg
https://www.eggradients.com/category/black-and-blue-gradient
https://codepen.io/stevehanstudio/pen/poKEmxg
https://www.youtube.com/watch?v=T33NN_pPeNI&t=39s

Framer Motion carousel slider
https://www.youtube.com/watch?v=W0bEL93tt4k

https://stackoverflow.com/questions/68250396/why-is-my-scrollwidth-showing-wrong-number-react-js
https://stackoverflow.com/questions/53606337/check-if-array-contains-all-elements-of-another-array
https://www.gavsblog.com/blog/find-single-or-array-of-values-in-javascript-array-using-includes
https://stackoverflow.com/questions/67501705/handle-mouse-hover-events-over-a-mapped-array-in-react
https://codersblock.com/blog/creating-glow-effects-with-css/

Portfolio that uses React, Framer Motion, and Tailwind CSS
https://www.youtube.com/watch?v=urgi2iz9P6U&t=274s

Glow animation from behind using after pseudo selector, box-shadow and scale transform
https://www.youtube.com/watch?v=5JCEZNfndoQ

Tip on getting Framer Motion to remount on state change
https://stackoverflow.com/questions/69051279/how-to-animate-on-each-state-change-using-framer-motion

Framer motion color animation
https://framerbook.com/animation/example-animations/23-colors-keyframe-animation/

Work around for color styling issue with Grommet Icons
https://github.com/grommet/grommet-icons/issues/171
https://github.com/react-icons/react-icons/issues/404

How to change icon size
https://stackoverflow.com/questions/43768629/how-to-scale-large-font-awesome-icons-from-the-react-icons-package

Adding icon to submit button
https://stackoverflow.com/questions/9376192/add-icon-to-submit-button-in-twitter-bootstrap-2

Vertically align icon and text
https://stackoverflow.com/questions/22545325/how-to-vertically-align-text-with-icon-font

React Tooltip - Warning: Prop `dangerouslySetInnerHTML` did not match.
https://github.com/ReactTooltip/react-tooltip/issues/675

Wrap text around image or shape - float, flow-root
https://www.youtube.com/watch?v=sifXs4XVK7g

Next js typescript build error
https://nextjs.org/docs/api-reference/next.config.js/ignoring-typescript-errors

Image fade out effect using CSS image mask - used for carousel
https://www.youtube.com/watch?v=1Xo5IVXW4vY

Framer Motion - event clientX / clientY does not work.  Use of info delta.x / delta.y instead
https://stackoverflow.com/questions/68342036/reactjs-calculating-direction-of-joystick-while-dragging-using-framer-motion

Using nested tertiary conditional operator - used it for deciding which linear gradient to use for fading left, right, or both left and right carousel
https://javascript.plainenglish.io/javascript-nested-ternary-operator-dc28551fb8c3

Custom scrollbars
https://www.youtube.com/watch?v=lvKK2fs6h4I

Fade Out Overflow Effect
https://pqina.nl/blog/fade-out-overflow-using-css-mask-image/

React/typescript forwardRef cheatsheet
https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forward_and_create_ref/

Menu Button using Framer Motion
https://codesandbox.io/s/hamburger-menu-with-framer-motion-iwxtp?file=/src/index.tsx

ReactJS: How to determine if the application is being viewed on mobile or desktop browser
https://stackoverflow.com/questions/39435395/reactjs-how-to-determine-if-the-application-is-being-viewed-on-mobile-or-deskto

15 ways to center vertically
https://blog.logrocket.com/15-ways-implement-vertical-alignment-css/

How to change light / dark mode based on system settings
https://www.section.io/engineering-education/watch-for-system-dark-mode-using-js-css/

How to use React-router-dom and Framer Motion AnimatePresence
https://stackoverflow.com/questions/70239122/react-router-dom-v6-with-framer-motion-v4

Shared layout animations - deprecated with Frame Motion 5
https://www.framer.com/docs/guide-upgrade/##shared-layout-animations

For the carousel we have to hide the scrollbars in the x direction but keep the functionality
https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp

Build error
Failed to compile.
Error: resolve-url-loader: error processing CSS
  Invalid mapping: {"generated":{"line":1,"column":664},"source":"file://B:\\Projects\\stevehanstudio\\stevehan.dev-framer-motion\\src\\styles\\global.scss","original":{"column":null},"name":null}
https://stackoverflow.com/questions/71188714/react-tailwind-sass-build-error-resolve-url-loader-error-processing-css

Self host Google fonts
https://webdesign.tutsplus.com/tutorials/how-to-self-host-google-fonts--cms-34775
https://gwfh.mranftl.com/fonts

Fix Page Not Found on Netlify
https://www.freecodecamp.org/news/how-to-deploy-a-routed-react-app-to-netlify/
