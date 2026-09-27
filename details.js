let detailsCard = document.querySelector('.detailsCard')
let imgDetail = document.querySelector('.imgDetail')
let inf = document.querySelector('.inf')
let plotCon = document.querySelector('.plotCon')
let otherInf =  document.querySelector('.otherInf')
let directorCon =  document.querySelector('.director')
let writerCon =  document.querySelector('.writer')
let actorCon =  document.querySelector('.actors')
let releaseDate =  document.querySelector('.releaseDate')
let country =  document.querySelector('.country')
let lang =  document.querySelector('.lang')
let award =  document.querySelector('.award')

let writerHeading = document.querySelector('.writer .heading')
let directorHeading = document.querySelector('.director .heading')
let actorsHeading = document.querySelector('.actors .heading')

let releaseDateHeading = document.querySelector('.releaseDate span')
let countryHeading = document.querySelector('.country span')
let langHeading =  document.querySelector('.lang span')
let awardHeading =  document.querySelector('.award span')


let releaseDateCon = document.querySelector('.releaseDate')
let countryCon = document.querySelector('.country')
let langCon = document.querySelector('.lang')
let awardCon = document.querySelector('.award')

let Pagetitle = document.querySelector('title')

 // Movie Details Page + Navigation using URL Query Parameters

// “I learned navigation between two HTML pages. When the user clicks a movie, I take its imdbID and create a URL containing that ID as a query parameter. I use window.location.href to navigate to the details page. On the details page, I read the query string using window.location.search, then use URLSearchParams and .get() to retrieve the movie ID. Finally, I pass that ID to the API to fetch the movie details and dynamically render the data on the UI.”


let params = new URLSearchParams(window.location.search)

let details = params.get("movieId")
const apiKey = ""

function movieDetails(movieId){
fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`)
.then(response => response.json())
.then(ID => { console.log("Details",ID)


    let deatilPoster = ID.Poster

if (ID.Poster === 'N/A') {
    
    fallback()

}else {
     let imgPoster = document.createElement('img')

 imgPoster.src = deatilPoster
 imgPoster.className = "imgPoster"
imgPoster.alt = ID.Title
imgPoster.addEventListener('error', ()=>{

imgPoster.remove()
fallback()

})

 
imgDetail.append(imgPoster)

}

   
 let title = ID.Title


 if(ID.Title === 'N/A'){

 Pagetitle.textContent = 'Movie Details'
    titleFallback()
 }
 else{
     Pagetitle.textContent = `${title} | Movie Details`

 let detailTitle = document.createElement('h1')
 
 detailTitle.textContent = title
 detailTitle.className ="detailTitle"

 inf.append(detailTitle)
 }


let timeCon = document.createElement('div')
timeCon.className = "timeCon"

    let detailYear = document.createElement('p') 

let year = ID.Year

if(ID.Year === 'N/A'){

    detailYear.style.display ="none"
}else{

detailYear.textContent = year
detailYear.className = "detailYear"
timeCon.append(detailYear)

}


let  time = ID.Runtime

let detailTime = document.createElement('p') 
detailTime.className = "detailTime"


if(ID.Runtime === 'N/A'){
     detailTime.style.display = "none"
}
else{
    
let string = time.replace("min","")
let number = parseInt(string)
let hours =  Math.floor(number/60)
let min = number % 60

let runTimeValue = `${hours}h ${min}m`

detailTime.textContent = runTimeValue
timeCon.append(detailTime)
}




let rateCon = document.createElement('div')
rateCon.className = "rateCon"

let rateHeading = document.createElement('h3')
rateHeading.className = "rateHeading"

let rate = ID.imdbRating

let detailRate =  document.createElement('p') 
detailRate.className = "detailRate"


if(ID.imdbRating === 'N/A'){
    rateHeading.style.display = "none"
    detailRate.style.display = "none"
}
else{
rateHeading.textContent = "imdb Rating"
detailRate.textContent =`${rate} ⭐`

}


let genre = ID.Genre

let detailGenre = document.createElement('p')
detailGenre.className = "detailGenre"


if(ID.Genre === 'N/A'){
detailGenre.style.display = 'none'
}
else{
detailGenre.textContent = genre
}



let plot = ID.Plot

let detailPlot = document.createElement('p')

detailPlot.className = "detailPlot"


if(ID.Plot === 'N/A'){
detailPlot.textContent = "Plot information is not available"
}
else{
detailPlot.textContent = plot
}


let writer = ID.Writer
let writerName = document.createElement('p')
 writerName.className = "writerName"


let director = ID.Director
let directorName = document.createElement('p')
 directorName.className = "directorName"


 let actors = ID.Actors
 let actorsName = document.createElement('p')
 actorsName.className = "actorsName"


 if(ID.Writer === 'N/A' ){

writerName.style.display = "none" 
writerHeading.style.display = "none" 
writerCon.style.display = "none" 
}
else{
writerName.textContent =  writer   
}


if(ID.Director === 'N/A'){
directorName.style.display = "none" 
directorHeading.style.display = "none" 
directorCon.style.display = "none" 
}
else{
directorName.textContent =  director 
}


if( ID.Actors === 'N/A' ){
actorsName.style.display = "none" 
actorsHeading.style.display = "none" 
actorCon.style.display = "none" 
}
else{
actorsName.textContent =   actors
}

 let released = ID.Released

 let detailReleaseDate = document.createElement('p')
 

 if( ID.Released === 'N/A'){
     detailReleaseDate.style.display = "none"
     releaseDateHeading.style.display = "none"
     releaseDateCon.style.display = "none"
 }else{
     detailReleaseDate.textContent = released
 }


 let countryValue = ID.Country
 let detailCountry = document.createElement('p')
 

 if(ID.Country === 'N/A'){
     detailCountry.style.display = "none"
     countryHeading.style.display = "none"
     countryCon.style.display = "none"
 }else{
     detailCountry.textContent = countryValue
 }




 let languageValue = ID.Language
 let detailLanguage = document.createElement('p')

 if(ID.Language === 'N/A'){
     detailLanguage.style.display = "none"
     langHeading.style.display = "none"
     langCon.style.display = "none"
 }else{
     detailLanguage.textContent = languageValue
 }


 

 let awardValue = ID.Awards
 let detailsAwards = document.createElement('p')


 if(ID.Awards === 'N/A'){
     detailsAwards.style.display = "none"
     awardHeading.style.display = "none"
     awardCon.style.display = "none"
 }else{
     detailsAwards.textContent = awardValue
 }



rateCon.append(rateHeading)
rateCon.append(detailRate)



inf.append(timeCon)
inf.append(rateCon)
inf.append(detailGenre)

plotCon.append(detailPlot)

directorCon.append(directorName)
writerCon.append(writerName)
actorCon.append(actorsName)



releaseDate.append(detailReleaseDate)
country.append(detailCountry)
lang.append(detailLanguage)
award.append(detailsAwards)

})


}

movieDetails(details)



function fallback(){

    
let noPosterCon = document.createElement('div')
    noPosterCon.className = "detailNoposterCon"


    let  noPosterImage = document.createElement('img')
    noPosterImage.src = "no poster.jpg"
    noPosterImage.className = "noPosterImage"

    imgDetail.prepend(noPosterImage)

    
}


function titleFallback (){
    
let noDetailtitleAavilable = document.createElement('span')
noDetailtitleAavilable.className = "detailNoposterText"
noDetailtitleAavilable.textContent = "Title information is not available."

inf.append(noDetailtitleAavilable)

}



// → navigate to details.html?movieId=tt0372784
// → window.location.search gets ?movieId=tt0372784
// → URLSearchParams lets us work with the query string
// → .get("movieId") gets tt0372784
// → movieDetails(details) receives the ID
// → fetch() sends the ID to OMDb
// → API returns that movie's details.

// ${} = variable ki value string mein insert karna
// ?movieId=value = query parameter
// Template literal + query parameter = dynamically URL banana




// - ${id} → variable ki value ko string mein insert karta hai
// - ? → query string ki beginning
// - movieId → query parameter ka name/key
// - tt0372784 → query parameter ki value
// - movieId=tt0372784 → complete query parameter
// - ?movieId=tt0372784 → query string


// Name/key: movieId
// Value: tt1234567
// Query parameter: movieId=tt1234567
// Query string: ?movieId=tt1234567