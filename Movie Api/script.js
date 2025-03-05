let angle = 0;
function rotateLoader() {
    angle += 5;
    document.getElementById('loader').style.transform = `rotate(${angle}deg)`;
    requestAnimationFrame(rotateLoader);
}

setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    document.getElementById('mainContent').style.display = "block";
}, 2000); 


function MovieSearch() {
    let movie = document.getElementById("MovieName").value;
    let movieContent = document.getElementById("content");

    movieContent.innerHTML = "";

    fetch(`https://www.omdbapi.com/?s=${movie}&apikey=604cc4b0`)
        .then(r=> r.json())
        .then(data => {
           
                data.Search.forEach(e => {
                    let movieCard = document.createElement("div");
                    let movieImg = document.createElement("img");
                    let moviePoster = e.Poster

                    movieCard.classList.add("movieCard");
                    movieImg.classList.add("movieImg");
                    movieImg.setAttribute("src",moviePoster)

                    movieCard.appendChild(movieImg);
                    movieContent.appendChild(movieCard);
                });
            
        })
       
}
