# 📝 Accessibility — Notes So Far

## 1. What is Accessibility?

Web accessibility ka matlab hai website ko aisa banana ki different abilities wale users website ko use aur understand kar saken.

Examples:
- Mouse use karne wala user
- Keyboard se navigate karne wala user
- Screen reader use karne wala user
- Low-vision user
- Motor difficulties wala user

So: Accessibility = website ko different users ke liye usable and understandable banana.

## 2. Semantic HTML ka Accessibility se kya connection hai?

HTML elements sirf design/structure ke liye nahi hote. Different HTML elements ka different meaning hota hai

For example:

``` html
<button>Search</button>
```
Browser ko pata hai:
"Ye ek button hai, user isse action perform karega."

AUR:

``` html
<a href="details.html">Movie Details</a>
```

Browser ko pata hai:
"Ye ek link hai, user ko doosri location/page par le jayega."

Isliye correct HTML element choose karna accessibility ka important part hai.


## 3. Button vs Link — Golden Rule ⭐

**Sabse important rule: **

Action perform karna hai 

 ``` html 
 button
  ```

Examples: Search, Submit, Open modal, Close modal, Dark mode, Play/Pause

Kahin navigate karna hai 

 ``` html 
 <a>
 ```

Examples:

Home

Search page

Movie Details

About

Profile



## 4. Why not just <div> or <img> + click?

## Tumhara previous approach:

 ``` html
<img>
```
   
   ↓

click event

   ↓
   
JavaScript

   ↓

window.location

   ↓
Details page


Functionally ye kaam karta hai. Tumhara JS galat nahi tha.
But <img> naturally interactive element nahi hai.

Agar tum use:

img.addEventListener("click", ...)

kar deti ho, toh tumhe khud additional accessibility behavior handle karna pad sakta hai.

Whereas:

```html
<a href="...">
```

browser already jaanta hai ki ye navigation hai.
Isliye native element use karna better hai.

## 🧠 Isliye Accessibility ko aise yaad rakho

``` html
Correct HTML
      ↓
Correct meaning/semantics
      ↓
Browser understands the element
      ↓
Assistive technologies can get that information
      ↓
Users can interact more easily

```

## Important: Accessibility sirf "browser ko samjhana" nahi hai.

Accessibility ka goal user hai.
Semantic HTML us goal ko achieve karne ka ek important tool hai.



## 5. Keyboard Accessibility
Accessibility ka ek aur important part:
Website mouse ke bina bhi usable honi chahiye, where appropriate.

Common keyboard keys:
- Tab → next focusable element
- Shift + Tab → previous focusable element
- Enter → activate links/buttons in relevant contexts
- Space → commonly activates buttons
- Arrow keys → certain widgets/components mein
Isliye native elements useful hain.

For example:

```html
<a href="details.html">Movie</a>
```

and

```html
<button>Search</button>
already have native keyboard behavior.


HTML
  ↓
Browser
  ↓
Element ka meaning/role samajhta hai
  ↓
Accessibility information expose karta hai
  ↓
Assistive Technology
  ↓
User

```
## Accessibility ka goal hai ki website different ways se use ki ja sake — jaise mouse, keyboard, screen reader, etc. Isliye humein behavior ke according correct HTML element choose karna chahiye. Isse browser element ka semantic meaning samajhta hai aur accessibility information assistive technologies ko provide karta hai, jo phir user ko information/interaction available karati hain.

## Bas ek cheez yaad rakho:

```html
Accessibility = user ke liye goal

Semantic HTML = us goal ko achieve karne ka important tool

Browser = HTML ko interpret karke accessibility information provide karta hai

Screen reader/assistive technology = us information ko user tak pahunchati hai
```


# Accessibility — Forms & Labels

```html
## 1. What is a Label?

A `<label>` gives an input its accessible name and tells the user what the input is for.

Example:

<label for="movieSearch">Search for a movie</label>
<input id="movieSearch" type="text">

Here:

- `label` = name/purpose of the input
- `input` = field where the user enters information

---

## 2. Label vs Placeholder

### Label

A label tells the user:

> What is this input?

Example:

<label for="movieSearch">Search for a movie</label>

### Placeholder

A placeholder gives a hint or example about what the user can enter.

Example:

<input
    id="movieSearch"
    type="text"
    placeholder="e.g. Batman"
>

Remember:

**Label → input's accessible name/purpose**

**Placeholder → hint/example**

A placeholder should NOT be treated as a replacement for a proper label.

---

## 3. Why is a Label Important?

A proper label helps:

- users understand the purpose of an input
- screen-reader users understand the input
- assistive technology identify the input's accessible name
- users click the label to focus the associated input

---

## 4. Why do we use `for` and `id`?

We use `for` and `id` to connect a label with its input.

Example:

<label for="movieSearch">Search for a movie</label>
<input id="movieSearch" type="text">

The values must match:

label:
for="movieSearch"

input:
id="movieSearch"

Think of it like:

label's `for`
       ↓
"movieSearch"
       ↑
input's `id`

### Remember:

**`id` = the input's unique identity**

**`for` = tells the label which input it belongs to**

---

## 5. Example with Multiple Inputs

<label for="movieSearch">Search for a movie</label>
<input id="movieSearch" type="text">

<label for="email">Email</label>
<input id="email" type="email">

The browser can understand:

movieSearch → Search for a movie

email → Email

---

## 6. Label Can Also Be Clicked

When `for` and `id` are correctly connected:

<label for="movieSearch">Search for a movie</label>
<input id="movieSearch" type="text">

Clicking the label can move focus to the input.

This is useful for mouse users and can also improve usability for users with motor difficulties.

---

## 7. Visually Hidden Labels

A label does not always have to be visually displayed.

For a compact UI such as a search bar, we can visually hide the label while keeping it available to assistive technology.

Example:

<label for="movieSearch" class="visually-hidden">
    Search for a movie
</label>

<input
    id="movieSearch"
    type="text"
    placeholder="Search IMDb"
>

Important:

Do NOT simply use:

display: none;

because that removes the label from the accessibility tree.

Instead, use an accessibility-friendly visually-hidden CSS technique.

---

## 8. Movie App Example

Current:

<input type="text" placeholder="Search IMDb">

Better accessible structure:

<label for="movieSearch" class="visually-hidden">
    Search for a movie
</label>

<input
    id="movieSearch"
    type="text"
    placeholder="Search IMDb"
>

Remember:

**Label = accessible name**

**Placeholder = hint**

**`for` + `id` = connection between label and input**


“A label provides an accessible name for a form control, and the for attribute connects the label to the input's id.”

Accessibility ka goal <label> tag use karna नहीं है. Goal hai form control ko proper accessible name dena. <label> ek method hai; aria-label doosra method hai.
```
# ARIA — Basic Accessibility

## What is ARIA?

ARIA stands for **Accessible Rich Internet Applications**.

ARIA provides additional accessibility information to assistive technologies such as screen readers.

> **ARIA is not only for accessible names. It can provide information about an element's name, role, state, relationship, etc.**

---

## Important Rule

**Use native semantic HTML first.**

Use ARIA when native HTML alone does not provide the required accessibility information.

### Better

```html
<button>Search</button>
```

### Usually unnecessary

```html
<div role="button">Search</div>
```

A native `<button>` already has built-in semantics and keyboard behavior.

---

## `aria-label`

`aria-label` can provide an **accessible name** when an element does not have a suitable visible name.

Example:

```html
<button aria-label="Search">
  🔍
</button>
```

The visible icon does not clearly provide a name, so `aria-label` gives the button an accessible name: **"Search"**.

---

## ARIA can provide more than names

ARIA can communicate things such as:

- **Name** → `aria-label`
- **State** → `aria-expanded`
- **Relationship** → `aria-controls`
- **Description** → `aria-describedby`
- **Dynamic updates** → `aria-live`

We will learn these in more detail in **Intermediate Accessibility**.

---

## Important

ARIA does **not automatically add native behavior**.

For example:

```html
<div role="button">Search</div>
```

The `role` tells assistive technology that the element is intended to be a button, but the `<div>` does not automatically get all the native behavior of a real `<button>`.

Therefore:

> **Prefer native HTML elements over recreating them with ARIA.**

---

## Basic takeaway

> **ARIA provides additional accessibility information.**
>
> **`aria-label` is one ARIA attribute used to provide an accessible name.**
>
> **Use native HTML first; use ARIA when needed.**

```htmlSo your final mental model 🧠
ARIA

→ provides additional accessibility information

ARIA attributes
→ communicate specific information

aria-label
→ accessible name

aria-expanded
→ state

aria-controls
→ relationship

That's enough for Basic Accessibility. Don't go deeper into ARIA yet. 😄
```

## 🧠Basic Accessibility mein heading ka takeaway
```html
Headings page ka structure define karti hain.

h1 → main topic
h2 → major section
h3 → subsection of h2
Heading level ko visual size ke liye nahi, content hierarchy ke liye choose karo.
```


# Screen Readers & Assistive Technology

```html
What is Assistive Technology?

Assistive Technology (AT) aisi technology hai jo users ko website/app ko access aur use karne mein help karti hai.

Examples:

Screen reader
Keyboard
Refreshable Braille display
Voice control

Screen Reader kya hai?

Screen reader ek type ki assistive technology hai.

Ye browser dwara expose ki gayi accessibility information ko use karke website ka content aur interactions user tak pahunchata hai, usually speech ke through.

Simple flow:

HTML
   ↓
Browser
   ↓
Accessibility information
   ↓
Screen Reader
   ↓
User

Important:

Screen reader = Assistive Technology ka ek type.

Assistive Technology = broader category.

Screen reader user woh user hai jo website ko screen reader ki help se use karta hai, especially users who are blind or have significant visual impairments.

Example:

Visual user:
"Movie not found" message screen par dekhta hai.

Screen-reader user:
Screen reader us message ko announce kar sakta hai.

Isliye accessibility ka goal sirf visual users ke liye website banana nahi hai. Website ki information aur interaction different ways se available honi chahiye.

```

# aria-live — Dynamic Content

```html
What is aria-live?

aria-live is an ARIA attribute used to tell assistive technologies that the content of an element may change dynamically.

Example:

<p class="errorMsg" aria-live="polite"></p>

JavaScript:

errorMsg.textContent = "Movie not found.";

Important:

aria-live does NOT:

❌ show the message
❌ create the message
❌ style the message
❌ detect the error

JavaScript → creates/updates the message.

aria-live → helps communicate the dynamic update to assistive technology.

Visual user:
Sees "Movie not found" on the screen.

Screen-reader user:
The screen reader may announce the updated message.

Remember:

aria-live = helps assistive technology know about dynamic content changes.

```

```html
Accessibility is the practice of making a website usable and understandable for people with different abilities and ways of interacting with it.

ARIA provides additional accessibility information to assistive technologies when native HTML doesn't provide enough information.

aria-live helps communicate that dynamically changing content should be exposed/announced to assistive technology.

A screen reader is a type of assistive technology that uses accessibility information to present website content and interactions to the user, usually through speech or Braille.

The main goal of accessibility is to make websites usable and understandable for different types of users. ✅
```


### Semantic HTML

Semantic HTML elements are HTML elements that clearly describe the **meaning or purpose of the content** to the browser and assistive technologies.

**Basic semantic elements to remember:**

- `<header>` → introductory/top area of a page or section
- `<nav>` → group of navigation links
- `<main>` → the main/primary content of the page
- `<footer>` → ending/supporting information of a page or section

**Important:**  
Semantic HTML does **not** mean replacing every `<div>` with a semantic element.

Use `<div>` when you only need a **generic container for grouping, alignment, layout, Flexbox, Grid, spacing, etc.**

> **Meaning → semantic element**  
> **Layout/grouping → `<div>`**

The goal is not to use as many semantic elements as possible. The goal is to use the **appropriate element for the content's meaning**.