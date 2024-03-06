class FilmCarousel {

    constructor() {
        // creates empty array variable
        this.data = [];
    }


    //* Fetch Data - Change this to OOP Class
    // when we use await we need to put async in front of the function
    async loadData() {
        // wrap everything in to try{} -> try run this code first
        try {
            // fetch data from api, needed to have await otherwise it will return promise, store it in 'response'
            const response = await fetch('https://ghibliapi.vercel.app/films')
            // filter response to json and store it in 'this.data' variable
            this.data = await response.json()
            // log 'this.data' in the console
            console.log(this.data)
            // call 'displayCarousel(data)' function - need to add 'this.' when call a function inside a function
            this.displayCarousel(this.data)



            // catch (error){} -> catch error data and stored it in (error)
        } catch (error) {
            // log error to console if our code in try have any error
            console.log(error)
        }
    }





    //* DisplayCarousel - Function
    // Function to display top rated film with the data fetched from api
    displayCarousel(data) {

        // List out rating score and title of the film in the console
        for (let i = 0; i < data.length; i++) {
            var carouselRating = data[i].rt_score
            var carouselTitle = data[i].title
            console.log(carouselRating + ', ' + carouselTitle)
        }
        /*  
            From that list - Top 5 films : 1 - [4] Only Yesterday, 100
                                           2 - [18] The Tale of the Princess Kaguya, 100
                                           3 - [1] Grave of the Fireflies, 97
                                           4 - [10] Spirited Away, 97
                                           5 - [3] Kiki's Delivery Service, 96
        */

        //? Display Carousel - with .innerHTML
        document.getElementById('TopRateFilm').innerHTML = `
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#TopRateFilm" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#TopRateFilm" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#TopRateFilm" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#TopRateFilm" data-bs-slide-to="3"
                aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#TopRateFilm" data-bs-slide-to="4"
                aria-label="Slide 5"></button>
        </div>

        <div class="carousel-inner">
        
            <!-- 1st -->
            <div class="carousel-item active">
                <img src="${data[4].movie_banner}" class="d-block w-100" alt="${data[4].title}">
                <div class="carousel-caption d-none d-md-block">
                    <h1>${data[4].original_title}</h1>
                    <p>${data[4].original_title_romanised}</p>
                    <p>Rating Score = ${data[4].rt_score}</p>
                </div>
            </div>
            <!-- 2nd -->
            <div class="carousel-item">
                <img src="${data[18].movie_banner}" class="d-block w-100" alt="${data[18].title}">
                <div class="carousel-caption d-none d-md-block">
                    <h1>${data[18].original_title}</h1>
                    <p>${data[18].original_title_romanised}</p>
                    <p>Rating Score = ${data[18].rt_score}</p>
                </div>
            </div>
            <!-- 3rd -->
            <div class="carousel-item">
                <img src="${data[1].movie_banner}" class="d-block w-100" alt="${data[1].title}">
                <div class="carousel-caption d-none d-md-block">
                    <h1>${data[1].original_title}</h1>
                    <p>${data[1].original_title_romanised}</p>
                    <p>Rating Score = ${data[1].rt_score}</p>
                </div>
            </div>
            <!-- 4th -->
            <div class="carousel-item">
                <img src="${data[10].movie_banner}" class="d-block w-100" alt="${data[10].title}">
                <div class="carousel-caption d-none d-md-block">
                    <h1>${data[10].original_title}</h1>
                    <p>${data[10].original_title_romanised}</p>
                    <p>Rating Score = ${data[10].rt_score}</p>
                </div>
            </div>
            <!-- 5th -->
            <div class="carousel-item">
                <img src="${data[3].movie_banner}" class="d-block w-100" alt="${data[3].title}">
                <div class="carousel-caption d-none d-md-block">
                    <h1>${data[3].original_title}</h1>
                    <p>${data[3].original_title_romanised}</p>
                    <p>Rating Score = ${data[3].rt_score}</p>
                </div>
            </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#TopRateFilm"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#TopRateFilm"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        `
    }
}

// Store Class in variable and call the loadData() method
const displayFilmCarousel = new FilmCarousel()
displayFilmCarousel.loadData()



