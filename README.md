# jgdm_personal_dashboard_dom
A single-page web app that acts as a mini personal hub to JavaScript DOM Scripting

Last Updated: 06-10-2025 - 16:19

## Sections

+ [Tasks](#tasks) | [Development](#development) | [Notes](#notes) | [Learning Goals](#learning-goals-of-this-project) | [License](#license)

## Tasks 

+ Tasks `13` Completed `3`

+ `TODO:` - Finish Wireframe - concept for app 
+ `TODO:` - Implement dismissable tooltip from the top that explains the purpose of the app.
+ `TODO:` - Update Font Stack
+ `TODO:` - "Featuring DOM Elements" - Text to appear as hoverable tooltips.
  + `COMPLETED: 26-09-2025` - `.live---clock` - tooltip text - `"Featuring: live clock - featuring .setInterval`  
  + `COMPLETED: 06-10-2025` - extend styles for use of multiple tooltips
  + `TODO:` - Move tooltips away from CSS content property.  Need more control of posititioning. May be better if we use a JS Object to store these
  + `TODO:` - modify data-tooltip attribute text for existing tooltips
  + `TODO:` - `theme---selector--container` - tooltip text - `"Attribute/class manipulation (classList.add/remove/toggle)"`
+ `TODO:` - Implement Live Clock Feature
+ `TODO:` - Implement Theme Switcher (standard plus at least 2 other modes)
+ `TODO:` - Implement Daily Quote Feature
+ `COMPLETED: 06-10-2025` - Visual Bug with theme switcher tooltip, creating a horizontal scroll in browser
<!-- .innerText or .textContent -->
<!-- `COMPLETED: 00-00-0000` -->

[Back to Top](#jgdm_personal_dashboard_dom)

## Development

+ `26-09-2025` - Added first tooltip to the live clock app `.live---clock`. We did have some hover effect on the live clock element.

+ `06-10-2025` - Learned more about the system needed to create multiiple tooltips above interactive elements and how to use them. Spent a lot of time as well working on its responsiveness; mainly the task of preventing the tooltip from overflowing the screen and causing a horizontal scroll.  The top banner is now in good shape.

[Back to Top](#jgdm_personal_dashboard_dom)

## Notes 

+ `Aspect 1` - Live Clock & Greeting

  + **DOM Features**:

    + DOM traversal: `getElementById`, `querySelector`

    + Updating element text (`textContent` / `innerText`)

    + Timed updates with `setInterval`.

  + **Label Example:** "Demonstrates: DOM Traversal, Content Updates, Timed DOM Manipulation"

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