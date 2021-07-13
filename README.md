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

# Floating Action Button
This is a vibrant color, circular action button that floats above the rest of your content in your app. It is a way of promoting a prominent action. It generally has the highest elevation of all views. They genrally have a resting elevation of 6 and rising to 12 when pressed. They are usually in sizes of 56 or 40 in diameters. They can be positioned wherever in your screen but they tend to sit best where two surfaces meet.
If there is one clear action (an action that someone will likely want to do) on a screen, then it is a great way to promote it and only used a ingle FAB per screen.
If you are struggling to identify which action should be a FAB, then it is a good sign that you dont need one on that screen.
- There are floating action buttons from [React Native Directory](https://reactnative.directory/?search=action+) to use. I used [this one](https://www.npmjs.com/package/react-native-floating-action) for this project. Check out [this other one](https://github.com/mastermoo/react-native-action-button). It have some good features that the one i used dont have!
- Please read [Buttons: floating action button](https://www.material.io/components/buttons-floating-action-button) and [https://www.material.io/components/buttons-floating-action-button/ios]
- [Considering when to use FAB or putting it in some other view?](https://ux.stackexchange.com/questions/100424/is-it-a-strong-anti-pattern-to-use-a-floating-action-button-in-an-ios-app)
- [https://medium.com/macoclock/its-time-for-ios-developers-to-embrace-the-fab-65d7636e6eff](https://medium.com/macoclock/its-time-for-ios-developers-to-embrace-the-fab-65d7636e6eff)

# Surface Reaction
- The first form of visual Effect is with Touchables. Like TouchableHighlight, TouchableOpacity, TouchableNativeFeedback for only Android. (Use this for your android icons ot views that can react to touch as it empowers the user. it is recommened), TouchableWithoutFeedback
- The second form of visual feedback is where the surface itself can lift to meet your finger almost like your finger is magnetically attracting that surface. We can do this on a FAB, buttons or any view we want.
- We can apply all this effect as touch guestires for when a user tapping a button (like FAB, customButton), swiping to scroll through a list, and so on.

# Transforming Paper
- Surfaces can change shape, split aprart, destroyed or rejoin. A section of a surface (eg surface in a List) can lift out and form their own surface (the listItem can lift out and expands to become the detail screen)
- This interactions can help you build immersive applications that respond to interaction, rather than jumping into new states making them easier to comprehend
- Eg of A Flip card reveal surface transformation video [here](https://codedaily.io/tutorials/Create-a-Flip-Card-Animation-with-React-Native) similar to what [W3Schools](https://www.w3schools.com/howto/howto_css_flip_card.asp) had. More Paper surface transformations tutorials [here](https://codedaily.io/courses). Follow the teacher on [twitter](https://twitter.com/browniefed) for ReactNative animations updates
- Check out list of supported transformations in RN [here](https://stackoverflow.com/questions/43022281/react-native-animation-event-style-property-is-not-supported)

# Responding to Scroll Events
- Just as material can change width and height, they can also change elevatiion. Just like the magnetic reaction of buttons to the touch of your finger, this can also occur in interactions like scrolling.
Imaginig two surfaces with start up together and lockstep. A a certain point, one surface may need to stick and raise up to allow the other to pass below it. The lower surface sliding below the other forms a step.
- EG. We see this used for implementing collapsing Header Layout in RN. See the examples below: 
- Here is the [arctile](https://medium.com/dailyjs/how-i-linked-animated-headers-to-scroll-position-in-react-native-1a4906fca25b) that help with the one i mimplemented. This [article](https://blog.jscrambler.com/how-to-animate-a-header-view-on-scroll-with-react-native-animated) is also related as well
- [https://medium.com/@habibridho/implementing-collapsing-toolbar-using-react-native-4a84e1718f11](https://medium.com/@habibridho/implementing-collapsing-toolbar-using-react-native-4a84e1718f11)
- [https://stormotion.io/blog/how-to-create-collapsing-tab-header-using-react-native/](https://stormotion.io/blog/how-to-create-collapsing-tab-header-using-react-native/)
- [https://javascript.plainenglish.io/simple-collapsing-header-animation-using-react-native-21f4c26b2222](https://javascript.plainenglish.io/simple-collapsing-header-animation-using-react-native-21f4c26b2222)
- In Summary, whether your React Native header stay in place, perform the seam-to-step transition or totally scrollout when your scroll the content depends on whether you want your header to be elevated or not.

# The Gastalt Laws of Grouping
Users derived a lot of information about your app based on how it is arranged. 
- **The Law of Past Experience ("Hmm.. This looks familiar?"):** This is where you show digital versions of things from the physical world in your app like Notepad, StopWatches, Cards. Eg if you have a card and you make it flipable on longPress. This will result in making the UI a little more comfortable and  familiar to the user. Keyword here is familiar. So depeding what you render in screen, the user will interprete on their own how they can interact with your UI based on past experiences with other app or experiences in real world (althugh your app UI dont really have to look like their real world counter parts)
- **The Law of Proximity ("These are close, so must be related"):** The closeness of objects in screen tells instinctively that they are related. I can be how you group items in screen based on the space. 
- **The Law of Similarity:** This is an extension of the second law above. It is just more of using space to our advantage. Tightening the space between elements helps them feel more related to one another while adding space between elements separates them both visually and conceptually

# Grids and Keylines
- There are specifics of laying things out on screen for users. If its a bigger screen it is just going to be the multiples of whatever the small screen is. This is why you should make extensive use of dimension files in your app to make the UI of your app work on multi form factors across devices like Margins, padding, width, height, etc. 
- Take a look at this source [code](https://github.com/muzei/muzei/tree/main/main/src/main/res) to see how to use and group dimensions files for various screen sizes
- Read more from the Material design doc to see the psecifics layed out [here](https://material.io/design/layout/spacing-methods.html#spacing)
- More Design Templates that Google hosts like Sketch, Adobe [here](https://material.io/resources)

# Colors
- We can infer information from an item color an appearance. Color can tell us if we should stop or go, if a food looks ripe or rotten, or if our battery is running low. Read [this](https://material.io/design/color/the-color-system.html#color-usage-and-palettes) please
- If you have a primary color but no accent, you can use Color Fairy, like complementary colors in the link attached to help you pick one. This [tool](https://color.adobe.com/create/color-wheel) from Adobe can help you pick one. Accent colors should be very distinguishable from the primary color.
- Understanding [2014 Material Design Color palates](https://material.io/design/color/the-color-system.html#tools-for-picking-colors), Your primary color will be the 500 shade. Then darker shades will have higher numbers like 700 or 900. Lighter shade will be be lower numbers like 200. It is recommended to use three hues of your primary color, then one accent color. 
- NOTE: you dont really want to use Shades of your primary color, because you will loose the ability to highlight certain elemts 

# Topography
After Spcace and Color, Type is the next thing to consider when building a great app. 
- Roboto is the default for android as it was specifically designed for UI across cariey of screens. Uisng Roboto gives you that comfort of knowing that your text will work with a varity of languages and will remain crisp and legible on any screen. You can use Robot across your app for headlines, body text, smaller captions, etc. It includes a bunch of wifht like light, regular, medium, bold, and black and varients like condensed and slab.
- For iOS, the default is Helvetica. This helps you identify hierarchy for text in your app
- Please read this [article](https://gist.github.com/parshap/cf9cf0388d55a044004e5e78fa317b39)
- In android, it is good to know which font has the Serifs or Sans-serifs characteristics. Ideally, Serifs are comforatable for long form reading while Sans-serifs works for short butst of text and works well on variety of screen sizes than Serifs
- **Font Metrics:** Leading is one of the metrics and it is basically the spacing between lines of text. In CSS style is the `lineHeight` property. Other font metrices you can explore on your won are x-height, baseline, ascenders, descenders, and cap heihgt. This are [font metrices](http://typedia.com/learn/only/anatomy-of-a-typeface/) for English alphabet. 

# Tips for choosing the right Customs Fonts for your App
- Limit your Font Pallet. You can often get away with using one custom font for branding areas like App Header and then the default like Roboto for Android and Helvetica for Android. If you do not pick the defaults for the text area for your app, make sure to switch over completely. (Eg Don't have Roboto for tile and Helvetica for body text). You dont want to have similar looking fonts next to each other. 
- Try our the font you want to use on a couple of different devices with varying screen densities. What looks criptsy at xxhdpi might look muddy at mdpi. Utilise this method [`PixelRatio`](https://reactnative.dev/docs/pixelratio) to make it look criptsy across screensizes. Look at this [stackOverflow](https://stackoverflow.com/questions/33628677/react-native-responsive-font-size)
- Make sure the fonts fits the mood you are sending in the app. Eg, If your product is about being fast, putting a heavy font weight on might give the feeling of a slow lumbering giant. If you have a product that is about being technical, an overly deocrative font not only be too distracting but might erode your users trust in what you are trying to do. 

# Using imagery
- Imagery should convery information, peronalize the experience of using your app or provide delight. 
- Your use of imagery will strongly reflect and reinforce your branding. If your branding is bold and dynamic(photography), your imagery should reflect that. If your brand is more playful, then maybe an illustrative style should reflect that
The three spectrums of images your can use are **Photography**, **illustration** and **iconography**
- **Photography** is great when it is specific to your contnet. If you are showing an information about a particular person, place or thing, then photography can quickly and beautifully communicate that. Dont not use photo images if the content in screen is more abstract and dont have images specific to the content. Eg if i am showing content from other people like a messaging type app, a photo of the contact immediately communicates far better than a generic graphic might. if i am showing details of Aluminium Plaza in Onitsha, then a specific picture for Aluminium Plaza works very well; if i show picture of Emeka Ofor Plaza it will feel very off. NOTE: Make sure you have sufficient quality images when to avoid pixelation of the rendered image. Please Use the [pixelratio](https://reactnative.dev/docs/pixelratio) from React Native to avoid this. You can use Images as Backdrop(using color pallete or use the image as bacground image) to set the mood of the screen. it is up to your app design.
- **Illustration** is great for communicating abstract concepts or metaphors without getting hang up on the specificy that comes from photography. Aim for Clearify instead of being overly decorative. Eg A good place to use illistration is in the OnBarding UI of your app. Or lets say the user is using a feature in your app for the first time, you can show an illustration view to them. it is up to you and your brand. Make the color in your illustration goes hand in hand withyour brand colors.
- **Iconography** provides clear way finding. It purpose is almost the exact opposit of illustration to succinctly explain their meaning and get out of the way. It should be easy to interpret and identify n your UI. 
- In Summary, No matter what type of imagery you use, it will help to create an immersive experience and a great way to introduce motion (Shared transitions in react Native). This [youtube library videos](https://www.youtube.com/watch?v=6XxpUhQqpjY&list=PLQocKVqyqZDShhQWAzxS42cSP7ydl6blD&index=1) will show you how you can perfrom a few in react native. This  [Youtube channel](https://www.youtube.com/channel/UC806fwFWpiLQV5y-qifzHnA) is great too as well

# Circular Avatars
When showing avatars that is a representation of a person, it is very common to show these as a circle. This is certainly not a strict rule but a circle is a friendlier, more organic way to present the image. Pyschologically we we predisposed to notice faces in circles.

# Aspect Ratio Images
- When you are displaying content that you dont know the exact size it will be or when handling different size devices, it is useful to display the image at a fixed aspect ratio so you will know how your design will appear for your users.
- You already know how you use  `resizeMode` props so that the content will fit within an Image Component, but the question is how will we enforce the size of the view itself? To do this, we can simply set the width ahd height [props](https://reactnative.dev/docs/image-style-props) to enforce the aspect ratio.
- Eg lets say we want our image to show in a 3:2 aspect ratio. That means whatever width is given, we will set its own height to be two-thirds of it. You can create a new reusable Component or use Styled Component, you can make it accept the width nd height as props. Whatever way you want to get the width you multiply it by two and divide the result by three (widthSize * 2 / 3). One way you can get the width is by manually measuring it yourself or by the width of the device. it is up to your design. idealy you want the wodth to be predetermined. 
- FYI if the user is uplading a picture, you can enforce this aspect ration in the ImagePicker or Camera as well.

# Background Protection (Scrim)
- Frequently, you will want to show content on top of Imagery; particularly icons or text.  When doing so, you will need to ensure that it is clear and ligible. This is especially for dynamic content where you dont know the color or how complicated the image will be. 
- For example with an image that is dark, you can see the text and icon that is white, but if that image is primarily has white populated colors or is light, that same white ttitle and icons will not somehow lost. You can sole this by adding a suttle shadow on the icon, but this is not be best solution and if you add show to the title text, it will make it somehow harder to read. A BETTER APPROACH is to use a Scrim. A scrim is a semi transparent layout between the image and the text to help provide contrast and legibility. You can customise this scrim to use a gradient of 30% opaque black at the bottom to complete transparency. The black will give enough background contrast for the white to be readable. Expo has a library called [expo-linear-gradient](https://docs.expo.io/versions/v42.0.0/sdk/linear-gradient/) to help you add a gradient.
- The way you arrange the components is Image Component(as background) at the back, the Linear Gradient in the center and the Text or Icon component at the top. NOTE: mkae sure your gradient is always legible
