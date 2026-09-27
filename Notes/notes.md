# 📌 Navigation + Passing ID Through URL

## 1. Navigation kya hoti hai?

Apne words mein:
Ek HTML page se doosre HTML page par jaana navigation hai.

Actual explanation:
In a web application, navigation means moving the browser from one page/URL to another page/URL.
Example:
index.html
   ↓
details.html

## 2. window.location.href

Apne words mein:

window.location.href se browser ko new URL dete hain, aur browser us URL par navigate/open ho jaata hai.

Actual explanation:
window.location.href current browser URL ko represent karta hai. Agar hum ismein new URL assign karte hain, browser us URL par navigate karta hai.
window.location.href = "details.html";


## 📌 Dynamic ID URL mein bhejna

Hamare Movie Search App mein har movie ki apni unique imdbID hoti hai.

Example:
tt0372784

Jab user kisi particular movie par click karta hai:

let id = movie.imdbID;

Ab id mein clicked movie ki ID hai.

Phir:

window.location.href = `details.html?movieId=${id}`;

Browser ko URL milega:

details.html?movieId=tt0372784

Is URL ko break karo:

details.html

→ jis page par jaana hai
?

→ query parameters start hone ka indication
movieId

→ parameter ka naam
tt0372784

→ parameter ki value

So:
Hum movie ID ko URL ke query parameter ke through details page tak pass kar rahe hain.


## 📌 Details page ko ID kaise mili?

Important concept:

details.html ko ID automatically nahi pata hoti.

ID URL mein aayi:

details.html?movieId=tt0372784

Phir details.js URL ko read karta hai.

window.location.search

current URL ka query-string part return karta hai.

Example:
?movieId=tt0372784


⚠️ Ye method nahi, property hai.

## 📌 URLSearchParams

let params = new URLSearchParams(window.location.search);

Actual explanation:
URLSearchParams browser ka built-in API/constructor hai jo URL ke query parameters ko parse aur access karne mein help karta hai.

Ab:

params.get("movieId");
movieId parameter ki value dega:
tt0372784

⚠️ .get() parameter ki value retrieve karta hai.

## 🔥 Complete flow — ye sabse important note hai

```html
User searches movie
        ↓
API se movies milti hain
        ↓
User particular movie par click karta hai
        ↓
movie.imdbID
        ↓
window.location.href
        ↓
details.html?movieId=tt0372784
        ↓
Details page open
        ↓
window.location.search
        ↓
URLSearchParams
        ↓
.get("movieId")
        ↓
tt0372784
        ↓
Detail API ko ID dete hain
        ↓
Movie ka complete data
        ↓
Details page par UI render

```
## 🧠 One-line interview explanation

 "How do you pass the selected movie ID from the search page to the details page?"

"When the user clicks a movie, I take its IMDb ID and pass it as a query parameter in the URL. On the details page, I use URLSearchParams to read that ID from the URL and then use it to fetch the movie details from the API."