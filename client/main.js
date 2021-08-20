const form = document.querySelector("form");
const movieContainer = document.querySelector(".movies-container");

const MovieCart = (name, rating) => {
    return `
        <div class="movie-cart">
            <b>${name}: </b>
            <b>${rating}</b>
        </div>
    `
};

const getMovies = () => {
    movieContainer.innerHTML = null;

    fetch("/api")
        .then(res => res.json())
        .then(data => {
            data.movies.forEach((movie) => {
                movieContainer.innerHTML += MovieCart(movie.name, movie.rating);
            });
        });
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: e.target.name.value,
            rating: e.target.rating.value
        })
    });

    getMovies();
});

document.addEventListener("DOMContentLoaded", getMovies);