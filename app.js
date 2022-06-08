let input = document.getElementById('inputPlace')
const searchBtn = document.getElementById('searchBtn')
const display = document.querySelector('.test')


function hello() {
    console.log('no');
}



 async function getMovieApi() {
    const res = await fetch(`https://www.omdbapi.com/?s=${input.value}&apikey=82ecaef9`)
    const data = await res.json()
            for(let i=0; i<10; i++){
                const movies = data.Search[i]
                fetch(`https://www.omdbapi.com/?i=${movies.imdbID}&apikey=82ecaef9`)
                .then (res => res.json())
                .then (info => {
                    console.log(info)
                    display.innerHTML +=`
                    <div class="display">
                    <div class="posterImage">
                    <img src='${info.Poster}'>
                </div>
                
                <div class="content">
                    <div class='titleHeader'>
                    <h2 class="posterTitle">${info.Title}</h2>
                    <p>⭐${info.Ratings[0].Value} </p>
        
                    </div>
                    
                    <p class='subtext'>${info.Runtime}   <span class='genre'> ${info.Genre}<span></p>
                    <button id="watchlistBtn" >+</button>
                    <p class='plot'>${info.Plot}</p>
                </div>
        
                    </div>
        
        
                    `
                })

                input.value = ""

               display.innerHTML = ``
            }

           
}  

    

searchBtn.addEventListener('click', getMovieApi)

document.getElementById('watchlistBtn').addEventListener('click', hello)

