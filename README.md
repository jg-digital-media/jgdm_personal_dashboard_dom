# jgdm_personal_dashboard_dom
A single-page web app that acts as a mini personal hub to JavaScript DOM Scripting

Last Updated: 23-09-2025 - 15:12

## Sections

+ [Tasks](#tasks) | [Development](#development) | [Notes](#notes) | [Learning Goals](#learning-goals-of-this-project) | [License](#license)

## Tasks 

+ Tasks `0` Completed `0`

[Back to Top](#jgdm_personal_dashboard_dom)

## Development

[Back to Top](#jgdm_personal_dashboard_dom)

## Notes 

+ `Aspect 1` - Live Clock & Greeting

  + DOM Features:

  + DOM traversal: `getElementById`, `querySelector`

  + Updating element text (`textContent` / `innerText`)

  + Timed updates with `setInterval`.

  + Label Example: "Demonstrates: DOM Traversal, Content Updates, Timed DOM Manipulation"

+ `Aspect 2` - To-do List

  + Add Task

    + Node creation: `document.createElement()`
    + Appending: `appendChild()` / `append()`

  + Toggle Done Status

    + Class manipulation: `classList.toggle()`

  + Delete Task

    + Node removal: `.remove()` or `removeChild()`

  + Persistence

    + Storage: `localStorage.setItem()`, `getItem()`

  + Label Example: "Demonstrates: Node Creation, Class Toggling, Node Removal, Local Storage"

+ `Aspect 3` - Theme Switcher (Dark/Light Mode)

  + DOM Features:

    + Class manipulation: `classList.add/remove/toggle`

    + Inline styling: `element.style.property`

    + Storage persistence of theme: `localStorage`

    + Label Example: “Demonstrates: Class Manipulation, Inline Styling, Local Storage”

+ `Aspect 4` - Notes Section

  + Add Note

    + Form handling: `.value` from `input/textarea`

    + Dynamic creation of nodes (`createElement`, `appendChild`)

  + Delete Note

    Event delegation: `event.target` inside parent container

  + Persistence

    Save and reload from `localStorage`

   + Label Example: "Demonstrates: Form Handling, Event Delegation, Local Storage"


+ `Aspect 5` - Shortcut Links
  
  Let the user add their favourite links (e.g., “YouTube”, “GitHub”).

  + Add Shortcut

    + Attribute manipulation: `setAttribute('href', value)`

    + Create nodes dynamically: `<a>` tags inside container

  + Edit/Delete

    + Event listeners on dynamically generated elements

  + Persistence

    + Save to `localStorage`

  + Label Example: "Demonstrates: Attribute Manipulation, Node Creation, Local Storage"

  + Inputs update the DOM by generating buttons/cards.

+ `Aspect 6` - Styling Controls

  + Change Background / Fonts

    + Inline styling via JS: `element.style.backgroundColor`

    + CSS variables: `document.documentElement.style.setProperty('--var', value)`

  + Persistence

    + Save user’s styling preferences with `localStorage`

  + Label Example: "Demonstrates: Styling via JavaScript, CSS Variables, Local Storage"

[Back to Top](#jgdm_personal_dashboard_dom)

### Learning Goals of this project


+ DOM Traversal: Accessing children, parents, and siblings to modify elements.

+ DOM Manipulation: Creating, appending, replacing, and removing nodes.

+ Event Handling: Handling clicks, input changes, key events, delegation.

+ Attributes & Classes: Dynamically setting src, href, classList, dataset.

+ Forms & Validation: Handling user input for notes, links, and preferences.

+ Local Storage: Making the dashboard persistent between sessions.

+ Styling via JS: Changing CSS directly or toggling classes.

[Back to Top](#jgdm_personal_dashboard_dom)

## License


[Back to Top](#jgdm_personal_dashboard_dom)