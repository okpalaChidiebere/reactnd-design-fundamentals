# Mobile Design Fundamentals

# Density for Asset Crispness
A Designer that don't want to repeat themselves should use a graphics app that can work and export SVGs(For ReactNative). Apps like PhotoShop and Gimp don't give you this result. Apps like Ink Shape, Illustrator and Sketch allows you to export your images in Vector formats like SVG called Scalable Vector Graphics. Basic SVG images scale up or scale down of various screen sizes without loosing its crispiness. This beats exporting a bunch of png files over and over again.

# Graphic states
Graphic elements of your UI can change appearance to reflect the different states they are in. Eg You can have a checkBox image to reflect states like checked, pressed, check and pressed, default. You do that with normal state management in RN with combination of Pressable Component to attach press events to the image if you need one. https://stackoverflow.com/questions/54989433/react-native-image-changer
https://stackoverflow.com/questions/53525684/how-do-i-use-react-native-onlongpress-properly



# Common Design Patterns
Just because your app is unique doesn't mean that we should force users to learn new conventions to operate them. By following some established patterns that already exit, you can accelerate your users understanding of the app, making it feel intiuitive. Picking an application structure and navigation screen depends on the structure and content in your application. 

- **Toolbar:** This is a horizontal bar that presenents a starndard way of presenting titles and actions in your layout. It is commonly made up of navitation area on the left (eg back-button iocn), title area and menu of actions ( you can choose to have the addtional actions in a overflow-dropdown if there is not enough room or display the raw icons if the actions is three to one. It is up to you) on the right. it is a great place to embed your brands color. You can even add a downdown select to prpvide some form of navigation control. This is a common place where users look for actions. This can be configured from the [Stack Screen options](https://reactnavigation.org/docs/stack-navigator/#options) in RN

- **AppBar:** This this similar to toolBar but this time it is placed at the very top of the screen. On the far left you usually have the navigation icon which provides access to screen level navigation options. The AppBar often uses an extended height(3x or 2x the height of a toolbar) to provide more space for branding or to contain a header image. Watch  thie [Youtube Video](https://www.youtube.com/watch?v=nRb2P2AydZE) and [here](https://callstack.github.io/react-native-paper/appbar.html)

- **Tabs:** Helps you Navigate to different screens within your screen or app. On Android, Tab always appear at the [top](https://reactnavigation.org/docs/material-top-tab-navigator) of the screen while on iOS it usually appears at the [buttom](https://reactnavigation.org/docs/bottom-tab-navigator) of the screen. If you want to have Botom Tabls for your Android for any reason you can use [this](https://reactnavigation.org/docs/material-bottom-tab-navigator) but make sure its worth it. You switch between tob tabs with horizontal guestures. Generally, Tabs sits right below your AppBar if you are using one. Look at this [link](https://stackoverflow.com/questions/58384104/react-native-add-gestures-between-4-specific-screens) ; The user wanted a swipable screen just like snapchat. [Same here](https://stackoverflow.com/questions/48719848/react-native-navigation-swipe-to-next-screen)

- **Navigation Drawer:** This usually used as one of the main navigation construct for your app. THis is a panel that slides in from the lest of the screen. See [here](https://reactnavigation.org/docs/drawer-navigator). It contains top-level navigations options to different parts of your application. The drawer itself can be divided into sections and frequently provides access to account information. It is closesly associated with the [hamburger icon](https://icons.expo.fyi/MaterialCommunityIcons/hamburger) you can call it. Either pressing the icon or dragging from the left edge of your device will open the drawer. Only use drawer if you have a number sections to your app that you want to provide fast access to. Now if you have fewer sections to navigate between in your app, you will want to consider other options different pattern like tabs. This should not be a dumping ground for all sections to your app. Be mindful what you put in the drawer

- **List to details:** This is a common pattern when you show a list of individual items and clicking on one will take you to a subsequent detail screen. in React Native, you usually do with the help of [Stack Screens](https://reactnavigation.org/docs/stack-navigator). One way you can have the detail screen is where you have the detail screen background to be a bit transparent resulting in the main screen to still be seen in throught the background as you select stuffs from the screen on top. See how to do this [here](https://medium.com/@begehr/react-navigation-stack-navigator-with-horizontal-modals-d4303cfccf95). its good to know; i think Netflix did this for one of their select screens. 
A variation of this pattern is to show both the list and details section on thesame screen on larger devices. The two mater and details screen will be separate on smaller devices and brought together on larger device. SHowing just a list on large screen can look awkward and leave lost of empty space. You want to avoid pogoscitcking as much as possible where uses go into a details screen and back up. This is why you should consider Horizontal Paging in your details screen for viewing data stories or multi pane for larger screensizes.

- **Scrolling & paging:** Vertical scrolling is used to see more information on a screen. Horizontal Scrolling/Paging is less common expecially with Text content as it can be frastrating to read. More common, is to use Horziontal paging which uses gesture to page through content where each gesture takes you back and forth between screen pages. Eg of where this is implemented is where you are reading emails, or Sprots new stories at Goal.com app. Horizontal paging is more common for details view launched from a Flatlist where you have a mental model of what the items in the next page might be. Look at these links: [here with flatlist](https://stackoverflow.com/questions/52567842/horizontal-paging-how-to-find-which-page-thats-currently-active), [here with flatlist](https://stackoverflow.com/questions/47871447/react-native-pagination-in-horizontal-flatlist-with-separators/55033941), [here with flatlist](https://medium.com/@piyushgupta_81472/react-native-custom-pagination-149a5aab111d), [here with flatlist](https://gist.github.com/asgvard/1951f0c1f81d47b5b286228e01d34271), [More of for ScrollView](https://stackoverflow.com/questions/43212931/react-native-horizontal-scroll-view-pagination-preview-next-page-card) **NOTE** DO not use both Tabs and Horizontally paged content together. LIKE NO NO.

- **Swipable Guesture for a list items:** This is where you want to have options  on a flatlist like to delete an item or see actions you can perform on a list item. You can have that as a dropdown menu, but sometimes swipe guestures are cool Take a look at [this](https://www.reactnativeschool.com/swipe-gestures-with-react-native-gesture-handler), Expo has the library [here](https://docs.expo.io/versions/v41.0.0/sdk/gesture-handler/) as well

# More to explore
- Pagination of Flatlists. This is import ant where you want intems in your list to be queried from the DB but by bit. Please check it [out](https://aboutreact.com/react-native-flatlist-pagination-to-load-more-data-dynamically-infinite-list/)
- Button Spinner [https://www.npmjs.com/package/react-native-button-spinner](https://www.npmjs.com/package/react-native-button-spinner)
- iOS design principles [https://learnui.design/blog/ios-design-guidelines-templates.html](https://learnui.design/blog/ios-design-guidelines-templates.html), [https://developer.apple.com/design/tips/](https://developer.apple.com/design/tips/)

# Theme and Styles
- We use Theme and styles to create reusable sets of attributes that can be applied to your UI to customize it. It is similar to css on the web. 
- Style changes the appearance of a single UI element
- Theme is applying a collection of style to an element, a component or even your whole application. Eg if we want to turn all the button in our app to be pink for branding, we basically create a style to so that and thenapply it to the whole applications theme.
- Another option that can act like theme for your app and help you re-use styles is [Styled Component](https://styled-components.com/docs).

# Surfaces
- Surface is container which cast a shadow.

- Surfaces also exists in 3D spaces with varying widths and heights and at different elevations. These surfaces are arranged in front of and behind one another and cast shadows on lower surfaces. 

- In visual objects that are closer to us command more of our visual attention and we can tell which objects that are closer based on their size and how they cover and cast shadows on the things that are behind them. So we can use depth as a queue in our UI to direct attention to important elements. So carry this over to a 2D screen like our mobile devices, we use shadows to convey a surface elevation in relation to other surfaces. Surfaces nearer to you will cast a larger shadow

**When to use Surfaces and when not to**
- If content is homogenous when scanning and comparison will be important, then it likely belongs on a single surface then you can separate each item with a divider. Eg if you have items to render in a flatlist, there is no need to use elevation. It will cause the scrolling to be slower 
- If you need to present a collection of heterogeneous items, then individual surfaces are appropriate. Eg if you have items you want to render in a flexwrap scrollview, then you can use elevation if you know comparisons is not important between these items.
- Try not to have more that 5 surfaces on screen(plus toolbar or appBar) at once because they can be distracting.

To implement surfaces, identify views in your screen by hierarchy and set backgroThere are pre-defined standard elevations for differnet view types like appBar, FAB, etc This applies for web, iOS and Android. Check them out [here](https://material.io/design/environment/elevation.html#default-elevations)
