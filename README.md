# jgdm_personal_dashboard_dom
A single-page web app that acts as a mini personal hub to JavaScript DOM Scripting

Last Updated: 19-11-2025 - 16:05

## Sections

+ [Tasks](#tasks) | [Development](#development) | [Notes](#notes) | [Learning Goals](#learning-goals-of-this-project) | [License](#license)

## Tasks 

### Total: `39` Completed: `15`

+ `COMPLETED: 15-10-2025` - Implement hoverable toolip on TODO list feature
+ `COMPLETED: 16-10-2025` - Prototype and style the Daily Quote Feature
+ `COMPLETED: 16-10-2025` - Prototype and style the Welcome Message Feature - welcome message element
+ `COMPLETED: 16-10-2025` - Prototype and style the Main Dashboard TODO List Feature
+ `COMPLETED: 16-10-2025` - Prototype and style the Main Dashboard Note Writing Feature
+ `COMPLETED: 16-10-2025` - Prototype and style the Main Dashboard Shortcut Links Feature
+ `COMPLETED: 16-10-2025` - Prototype and style the Fetch Weather Details Feature
+ `COMPLETED: 16-10-2025:` - Sass variables for all background colours - buttons, inputs, tooltips
+ `COMPLETED: 16-10-2025:` - Finish Wireframe - concept for app

+ `COMPLETED: 19-11-2025:` - Implement Live Clock Feature 
+ `TODO:` - Implement dismissable tooltip from the top that explains the purpose of the app.
+ `TODO:` - Update Font Stack
+ `TODO:` - "Featuring DOM Elements" - Text to appear as hoverable tooltips.
  + `TODO:` - Move tooltips away from CSS content property.  Need more control of positioning. May be better if we use a JS Object to store these tooltip texts.
  + `TODO:` - modify data-tooltip attribute text for existing tooltips
  + `TODO:` - `theme---selector--container` - tooltip text - `"Attribute/class manipulation (classList.add/remove/toggle)"`
+ `TODO:` - Implement Theme Switcher (standard plus at least 2 other modes)
+ `TODO:` - Implement Daily Quote Feature
+ `TODO:` - Implement Welcome Message Feature - welcome message element 
  + `TODO:` - Finalise input element colour.
  + `TODO:` - Mouseout event of `` will save the element value to local storage.
  + `TODO:` - "hello.. what do I call you?" make content content editable
  + `TODO:` - Salutation change based on time of day `.morning---or--evening` (Morning/Afternoon/Evening)
+ `TODO:` - Implement Main Dashboard TODO List Feature
  + `TODO:` - add remaining conteneditable attributes to `todo---item--text` elements.
  + `TODO:` - When TODO list items are clicked they should be disabled with no ability to focus on edit them.
+ `TODO:` - Implement Main Dashboard Note Writing Feature
+ `TODO:` - Implement Main Dashboard Shortcut Links Feature
+ `TODO:` - Implement Fetch Weather Details Feature
+ `TODO:` - Implement Footer
+ `TODO:` - Implement sticky footer banner at bottom of page - for adding and closing sections - resetting defaults.
+ `TODO:` - Add custom vertical scrolling styles for dashboard sections
+ `TODO:` - Add meta tags for SEO and social media sharing
+ `TODO:` - Set Dynamic Live Clock to local Time Zone
+ `COMPLETED: 06-10-2025` - Visual Bug with theme switcher tooltip, creating a horizontal scroll in browser
+ `COMPLETED: 26-09-2025` - `.live---clock` - tooltip text - `"Featuring: live clock - featuring .setInterval`  
+ `COMPLETED: 06-10-2025` - extend styles for use of multiple tooltips
+ `COMPLETED: 08-10-2025` - Prototype and style Live Clock Feature -
+ `COMPLETED: 09-10-2025` - Prototype and style the Theme Switcher (standard plus at least 2 other modes)

<!-- .innerText or .textContent -->

[Back to Top](#jgdm_personal_dashboard_dom)

## Development

+ `26-09-2025` - Added first tooltip to the live clock app `.live---clock`. We did have some hover effect on the live clock element.

+ `06-10-2025` - Learned more about the system needed to create multiiple tooltips above interactive elements and how to use them. Spent a lot of time as well working on its responsiveness; mainly the task of preventing the tooltip from overflowing the screen and causing a horizontal scroll.  The top banner is now in good shape.

+ `08-10-2025` - Finalised the live clock prototyping at least for this draft stage. I had a challenge today though to get the tooltip arrows correctly positioned for each tooltip.  Marking this as a future issue to be resolved.

+ `09-10-2025` -  Drafted most of the markup; attributes, classes and ID's needed for the interface. What's missing is the Weather API fetching and that's trickier because the fetching is dynamic and could return its own elements and attributes. So when I prototype the visual design, I'll save that for last.  

  + Specifically, I added a 4th icon for a 4th theme switcher option; reduced the size of the icon and made them more of a square with rounded corners.

  + I've added vertical scrolling in each dashboard panel so the content will never exceed its container. Plus, there's no visible scroll bar until it is needed.

  + Finally, I added a sticky footer will eventually allow the user easy access to visibility toggle buttons for the Dashboard panels.

+ `10-10-2025` - Added styling for the Todolist section - mimicking states for editable and edited states.

+ `13-10-2025` - Groundwork done for the rest of the dashboard panels. Created more extend directives for more common elements like buttons and icons.

+ `15-10-2025` - At this point, Every element has at least some styling applied and a functioning tooltip where appropriate. Now it's the time to do a top to bottom review and development of the UI of the app, looking to improve the readability and maintinability of the code as I go. 
  + At the end of this day, the UI looks a little more polished and more ready to be implemented with DOM Scripting. I think it needs one more day of configuring with SASS variables and then I'll be ready to start implementing the DOM Scripting and working out different visual themes with localstorage.

+ `16-10-2025` - On this day, I think I can say I've passed the point now of full focus on the UI and styling and will start focusing on implementation soon.  Any improvements to the visuals will now be made as and when needed.

  + There are some aspects that haven't yet been prototyped. In some cases, where I'll be adding new elements dynamically with JavaScript, I'll probably need modals to add information such as link text and link addresses before they can be added to the panel. So that's to come.  

  + `19-11-2025` - `v1` - Implemented the Live Clock feature. As far as I can tell, it's only working as far as GMT is concerned, which is local to the United Kingdom.  I am noting for the future to extend this, if possible to all other time zones. 

[Back to Top](#jgdm_personal_dashboard_dom)

## Notes 

+ `Aspect 1` - Live Clock & Greeting

  + **DOM Features**:

    + DOM traversal: `getElementById`, `querySelector`

    + Updating element text (`textContent` / `innerText`)

    + Timed updates with `setInterval`.

  + **Label Example:** "Demonstrates: Content Updates with .textContent, Timed DOM Manipulation with setInterval()"

+ `Aspect 2` - To-do List

  + **Add Task**

    + Node creation: `document.createElement()`
    + Appending: `appendChild()` / `append()`

  + **Toggle Done Status**

    + Class manipulation: `classList.toggle()`

  + **Delete Task**

    + Node removal: `.remove()` or `removeChild()`

  + **Persistence**

    + Storage: `localStorage.setItem()`, `getItem()`

  + **Label Example:** "Demonstrates: Node Creation, Class Toggling, Node Removal, Local Storage"

+ `Aspect 3` - Theme Switcher (Dark/Light Mode)

  + **DOM Features**:

    + Class manipulation: `classList.add/remove/toggle`

    + Inline styling: `element.style.property`

    + Storage persistence of theme: `localStorage`

    + **Label Example:** “Demonstrates: Class Manipulation, Inline Styling, Local Storage”

+ `Aspect 4` - Notes Section

  + **Add Note**

    + Form handling: `.value` from `input/textarea`

    + Dynamic creation of nodes (`createElement`, `appendChild`)

  + **Delete Note**

    Event delegation: `event.target` inside parent container

  + **Persistence**

    Save and reload from `localStorage`

   + **Label Example:** "Demonstrates: Form Handling, Event Delegation, Local Storage"

+ `Aspect 5` - Shortcut Links
  
  Let the user add their favourite links (e.g., “YouTube”, “GitHub”).

  + **Add Shortcut**

    + Attribute manipulation: `setAttribute('href', value)`

    + Create nodes dynamically: `<a>` tags inside container

  + **Edit/Delete**

    + Event listeners on dynamically generated elements

  + **Persistence**

    + Save to `localStorage`

  + **Label Example:** "Demonstrates: Attribute Manipulation, Node Creation, Local Storage"

  + Inputs update the DOM by generating buttons/cards.

+ `Aspect 6` - Styling Controls

  + **Change Background / Fonts**

    + Inline styling via JS: `element.style.backgroundColor`

    + CSS variables: `document.documentElement.style.setProperty('--var', value)`

  + **Persistence**

    + Save user’s styling preferences with `localStorage`

  + **Label Example:** "Demonstrates: Styling via JavaScript, CSS Variables, Local Storage"

[Back to Top](#jgdm_personal_dashboard_dom)

### Learning Goals of this project

+ **DOM Traversal**: Accessing children, parents, and siblings to modify elements. `to be decided`

+ **DOM Manipulation**: Creating, appending, replacing, and removing nodes. `to be decided`

+ **Event Handling**: Handling clicks, input changes, key events, delegation. `to be decided`

+ **Attributes & Classes**: Dynamically setting src, href, classList, dataset. `to be decided`

+ **Forms & Validation**: Handling user input for notes, links, and preferences. `to be decided`

+ **Local Storage**: Making the dashboard persistent between sessions. `to be decided`

+ **Styling via JS**: Changing CSS directly or toggling classes. `to be decided`

[Back to Top](#jgdm_personal_dashboard_dom)

## License

You are free to use this app as you wish. Attribution would be welcome. A shout out on social media and a link to my website would be appreciated.  https://www.jonniegrieve.co.uk 

[Back to Top](#jgdm_personal_dashboard_dom)