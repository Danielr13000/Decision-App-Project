let button = document.querySelector(".button1");

let output = document.querySelector(".output");

let x = Math.floor((Math.random() * 12) + 1);

let genres;

let picture = document.querySelector(".picture");



fetch("genre.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        // handle ten random cards
        console.log(response);
        genres=response;
        button.addEventListener("click", function () {
            x = Math.floor((Math.random() * 12));
            console.log(x);
            output.innerHTML = "Genre is "+ genres[x].genre;
            picture.src= genres[x].img;
        })
    })
