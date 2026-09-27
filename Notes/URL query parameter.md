# URL Query Parameters — Notes

## 1. What is a URL?

**URL (Uniform Resource Locator) is the address of a resource or webpage.**

```
Example:
https://example.com/movies

A URL can also contain additional information using query parameters.

https://example.com/movies?movieId=tt0372784
```

## 2. What is a Query Parameter?

**A query parameter is a key-value pair added to a URL to pass additional information to a webpage.**

Basic structure:

```
?name=value

Example:

?movieId=tt0372784

Here:

movieId → parameter name/key

tt0372784 → parameter value

So:
movieId=tt0372784
is the query parameter.
```

## 3. What is a Query String?

**The part of the URL that starts with ? is called the query string.**

```
Example:

details.html?movieId=tt0372784

Query string:

?movieId=tt0372784
The ? indicates the beginning of the query string.
```

## 4. Multiple Query Parameters

## A URL can contain multiple query parameters.

```
products.html?category=shoes&size=10

Here:

category=shoes
→ first query parameter

size=10
→ second query parameter

& separates multiple query parameters.

General structure:
?name1=value1&name2=value2

```

## 5. Why Do We Use Query Parameters?

**We use query parameters when a page needs additional information through the URL.**

```
For example, suppose we have one details page:

details.html

But we need to show different movies.

We can pass the movie's ID:

details.html?movieId=tt0372784

Another movie:
details.html?movieId=tt1877830

The same details.html page can now identify which movie's details it should display.

Main idea:

Query parameters allow us to pass information through the URL.
```

## 6. Query Parameters in the Movie App

```
Movie card:

Batman Begins

Suppose its IMDb ID is:
tt0372784

When the user clicks the poster:

details.html?movieId=tt0372784

Flow:
Movie Card
    ↓
User clicks poster
    ↓
URL contains movieId
    ↓
details.html?movieId=tt0372784
    ↓
Details page reads movieId
    ↓
Movie ID is sent to API
    ↓
Movie details are displayed

```
## 7. Creating a Dynamic Query Parameter

**JavaScript template literals can be used to create a dynamic URL.**

```
let movieId = "tt0372784";

let url = `details.html?movieId=${movieId}`;
Result:
details.html?movieId=tt0372784
Important:
${} is not a query parameter.
${movieId} is JavaScript template literal interpolation.
It inserts the value of the variable into the string.
`details.html?movieId=${movieId}`

```

## 8. Reading Query Parameters in JavaScript

```
Suppose the current URL is:

details.html?movieId=tt0372784

Step 1 — Get the query string

window.location.search
Result:
?movieId=tt0372784

Step 2 — Create a URLSearchParams object

let params = new URLSearchParams(window.location.search);
URLSearchParams provides methods for working with URL query parameters.

Step 3 — Get a specific parameter

let movieId = params.get("movieId");
Result:
"tt0372784"
So the complete flow is:
let params = new URLSearchParams(window.location.search);

let movieId = params.get("movieId");

```
## 9. Important Methods
```
window.location.search
Gets the query string from the current URL.

window.location.search
Example result:
?movieId=tt0372784

new URLSearchParams()
Creates an object that lets us work with query parameters.

let params = new URLSearchParams(window.location.search);

.get()

Gets the value of a specific query parameter.
params.get("movieId");

Result:
tt0372784

```
## 10. What if the Parameter Doesn't Exist?

```
Suppose the URL is:

details.html

There is no movieId.

Then:
let movieId = params.get("movieId");

returns:
null


Therefore, we should check before making the API request:

if (movieId) {
    movieDetails(movieId);
}

Conceptually:

URL
 ↓
Is movieId present?
 ↓
Yes → fetch movie details

No  → show an appropriate message / handle the situation
```

## 11. Query Parameter vs localStorage

These are not alternatives where you must choose only one. They solve different problems.
URL Query Parameter

Used when information should be part of the URL.

Example:

details.html?movieId=tt0372784

Useful for:
- identifying a specific resource/page state
- navigation
- sharing a specific page
- bookmarking a specific page
- preserving information in the URL

localStorage

Used when information should be persisted in the browser.
Example:
localStorage.setItem("searchMovie", searchValue);
Useful for:
- remembering user data
- restoring state after reload
- browser-specific persistence

```
Movie App example
localStorage
    ↓
searchMovie = "batman"
    ↓
Remember the user's search
While:
URL Query Parameter
    ↓
movieId = "tt0372784"
    ↓
Identify which movie's details page to show

```

## 12. URL Query Parameter vs Template Literal
Don't confuse these two.

```
Template literal

`Hello ${name}`

${name} inserts a variable's value into a string.

Query parameter

?movieId=tt0372784

movieId=tt0372784 is a query parameter.

They can work together:

let url = `details.html?movieId=${movieId}`;
Here:

${movieId}
→ JavaScript template literal interpolation

?movieId=tt0372784
→ URL query string

movieId=tt0372784
→ query parameter

```


## 🧠 Quick Revision

Remember this structure:
```

details.html?movieId=tt0372784&year=2025
             └──────────────────────────┘
                query string

 ```

```
?              → query string starts
movieId        → parameter name
=              → separates name and value
tt0372784     → parameter value
&              → separates parameters
year           → second parameter name
2025           → second parameter value
```

JavaScript:

window.location.search
→ gets the query string

new URLSearchParams(...)
→ lets us work with query parameters

params.get("movieId")
→ gets the value of movieId

⭐ One-line definition for your notebook
URL query parameters are key-value pairs added to a URL to pass additional information to a webpage.