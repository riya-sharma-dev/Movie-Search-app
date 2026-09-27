let searchInput = document.querySelector('.searchInput')
let searchBtn = document.querySelector('.searchBtn')
let movieShowCon = document.querySelector('.movieShow')
let headingValue = document.querySelector(".headingValue")
let titleHeading = document.querySelector(".titleHeading")
let cardCon = document.querySelector('.cardCon')
let loadingCon = document.querySelector('.loadingCon')
let emptyStateCon = document.querySelector('.emptyStateCon')
let emptyStateMsg = document.querySelector('.emptyStateMsg')

let errorCon = document.querySelector('.errorCon')
let errorMsg = document.querySelector('.errorMsg')

let errorStateCon = document.querySelector('.errorStateCon')
let errorStateMsg = document.querySelector('.errorStateMsg')


let body = document.querySelector('body')
const apikey = ""

function movieData(searchValue){
fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${searchValue}`)
.then(response => response.json())
.then(data => { console.log(data);


    if(data.Error){
loadingCon.style.display = "none"
errorCon.style.display = "flex"
 movieShowCon.style.display = 'none'
errorMsg.textContent = data.Error

emptyStateCon.style.display = "none"
errorStateCon.style.display = "none"

return
    }

    
movieShow(data,searchValue)

loadingCon.style.display = "none"

localStorage.setItem('searchMovie',searchValue)

}).catch((error)=>{

loadingCon.style.display = "none"
movieShowCon.style.display = "none"
   errorStateCon.style.display= "flex" 
   errorStateMsg.textContent = "Unable to connect. Please check your internet connection and try again"


   emptyStateCon.style.display = "none"
   errorCon.style.display = "none"

})

}



function movieShow(datavalue, heading){

    cardCon.innerHTML = ""
        headingValue.innerHTML =""

    let movieData = datavalue.Search

  
    headingValue.textContent = `Search "${heading}"`
    titleHeading.textContent = "Title"
    
    movieData.forEach((movie)=>{

        let card = document.createElement('div')
        card.className ="Card"

    let movieTitle = document.createElement('h2')        
     movieTitle.textContent = movie.Title
     movieTitle.className ="Title"
     
     
if (movie.Poster === "N/A") {
    
fallback(card,movie.imdbID, movie.Title)
} 
else {
    let poster = document.createElement('img')
    poster.src = movie.Poster
    poster.alt = movie.Title
    poster.className = "moviePoster"

    let imgUrl = document.createElement('a')
    imgUrl.className = 'imgUrl'
    imgUrl.append(poster)

// "I used the error event to handle a resource-loading failure for a URL received from the API."

poster.addEventListener('error',()=>{
    imgUrl.remove()
fallback(card, movie.imdbID,  movie.Title)

    // "I removed imgUrl so the failed image and its parent <a> are both removed before adding the fallback."
})

    // Movie Details Page + Navigation using URL Query Parameters
        let id = movie.imdbID

        imgUrl.href = `details.html?movieId=${id}`


    card.append(imgUrl)
}   

     let  year = document.createElement('span')
     year.textContent = movie.Year
     
     let informationCon = document.createElement('div')
     informationCon.className = "informationCon"

     let yearTypeCon = document.createElement('div')
     yearTypeCon.className = "yearTypeCon"

   
     let Id = movie.imdbID

     movieDetails(Id,informationCon,yearTypeCon)

     
          yearTypeCon.append(year)
     
     informationCon.append(movieTitle)
     informationCon.append(yearTypeCon)

     
     card.append(informationCon)
     

     cardCon.append(card)





    })


  
    
    
}



function searchMovie(){
    let input = searchInput.value.trim()


// empty state
if (input === "") {

 emptyStateMsg.textContent = "Search IMDb by typing a word or phrase in the search box at the top of this page."
 emptyStateCon.style.display = 'flex'
 movieShowCon.style.display = 'none'


 errorStateCon.style.display = "none"
 errorCon.style.display = "none"

}
// 

loadingCon.style.display = "flex"

setTimeout(()=>{
    movieData(input)
},1000)


searchInput.value=""
    
}




searchBtn.addEventListener('click', function(){
searchMovie()

})


let savedMovie = localStorage.getItem('searchMovie')


if(savedMovie){
    movieData(savedMovie)
}




// I handled both situations—when the API returns "N/A" and when the resource from the API response fails to load—using a reusable function.
// fallback function

function fallback(card,movieId, title){

    
    let  noPoster = document.createElement('img')
    noPoster.src = "no-poster-available.jpg"
    noPoster.alt = title
        noPoster.className = "noPoster"


      let noImgUrl = document.createElement('a')
      noImgUrl.className = 'noImgUrl'
    noImgUrl.append(noPoster)


// the reusable function takes some time to execute because it's called by the error event. So, the rest of the code continues running. That's why the DOM structure changes.
// “I used prepend() instead of append() because the image error event happens asynchronously. The rest of the code can continue executing before the error callback runs. When the callback runs, I want the fallback poster to appear at the beginning of the card.”

// so I used to prepend instead of append to insert the element in beginning.


    // Movie Details Page + Navigation using URL Query Parameters
        let id = movieId
       
        noImgUrl.href = `details.html?movieId=${id}`; 

        card.prepend(noImgUrl)

}



function movieDetails(movieID, informationCon,yearTypeCon){
fetch(`https://www.omdbapi.com/?i=${movieID}&apikey=6df26dc3`)
.then(response => response.json())
.then(ID => { console.log("Details",ID)

let releaseDate = ID.Released

let releaseDateValue = document.createElement('p')
releaseDateValue.textContent = releaseDate

let rateValue = ID.Rated

let rateElement = document.createElement('p')


if(ID.Rated === "N/A"){

rateElement.style.display = "none"
}
else{
    rateElement.textContent = rateValue
}


let string = ID.Runtime.replace("min","")
let number = parseInt(string)
let hours = Math.floor(number / 60)
let minutes = number % 60

let  runTimeValue = `${hours}h ${minutes}m`

let runTimeElement = document.createElement('p')
runTimeElement.className ="runtime"


if(ID.Runtime === 'N/A'){
    runTimeElement.textContent =""
}

else{
runTimeElement.textContent = runTimeValue
}

let rateCon = document.createElement('div')
rateCon.className = "rateCon"

let imdbRating = ID.imdbRating


let  imdbRatingElement = document.createElement('span')

if(ID.imdbRating === 'N/A'){
    imdbRatingElement.textContent =""
}
else{
imdbRatingElement.textContent = `${imdbRating}⭐`
}




yearTypeCon.append(releaseDateValue)
yearTypeCon.append(rateElement)
informationCon.append(runTimeElement)
informationCon.append(rateCon)

rateCon.append(imdbRatingElement)




})



}