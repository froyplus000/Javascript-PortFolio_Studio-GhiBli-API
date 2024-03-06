class FilmCards {

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
            // filter response to json and store it in this.data variable
            this.data = await response.json()
            // log 'this.data' in the console
            console.log(this.data)
            // call 'displayCarousel(data)' function - need to add 'this.' when call a function inside a function
            this.displayCard(this.data)

            // catch (error){} -> catch error data and stored it in (error)
        } catch (error) {
            // log error to console if our code in try have any error
            console.log(error)
        }
    }




    //* DisplayCard - Function
    // Function to display films card with the data fetched from api
    displayCard(data) {

        // for loop to loop data from api and create element every loop run
        for (let i = 0; i < data.length; i++) {

            //? Content for Cards

            //* Images
            // creates <img> element and stored in variable
            var filmsImg = document.createElement('img');
            // set attribute -> scr = data[i].image
            //               ->       data[i].image = image url in the array
            // everytime the loop run, it will take url in image of the array data that been fetched. And add that url to src of <img>
            filmsImg.setAttribute('src', data[i].image)
            // add class name to this <img> in order to use card style from bootstrap
            filmsImg.className = 'card-img-top'

            //* Title
            // creates <h1> element and stored in variable
            var filmsTitle = document.createElement('h1');
            // creates textnode that had a value same as title in data array -> stored in variable
            var titleText = document.createTextNode(data[i].title);
            // add class name to this <h1> in order to use card style from bootstrap
            filmsTitle.className = 'card-title mb-4'
            // append titleText to filmsTitle, so <h1> have same text as the one that been pulled out of the array in it
            filmsTitle.appendChild(titleText)

            //* Description
            // creates <p> element and stored in variable
            var filmsDes = document.createElement('p');
            // creates textnode that had a value same as description in data array -> stored in variable
            var desText = document.createTextNode(data[i].description);
            // add class name to this <p> in order to use card style from bootstrap
            filmsDes.className = 'card-text'
            // append desText to filmsDes, so <p> have same text as the one that been pulled out of the array in it
            filmsDes.appendChild(desText)

            //* Button
            // create <a> element and stored in variable
            var modalBtn = document.createElement('a')
            // create text node and stored in variable
            var btnText = document.createTextNode('More Details')
            // <a> appendChild text node -> button had text inside
            modalBtn.appendChild(btnText)
            // give a button classes
            modalBtn.className = 'btn btn-light text-center Ghibli-btn'
            // set attributes for button
            modalBtn.setAttribute('type', 'button')
            modalBtn.setAttribute('data-bs-toggle', 'modal')
            // This is a key attribute -> target of the button to #FilmModal${array index} - each button in every card will target to the modal create with data of that array
            modalBtn.setAttribute('data-bs-target', `#FilmModal${i}`)


            //* Create Div
            // creates <div> element and stored in variable
            var colDiv = document.createElement('div')
            // add class name to this <div> -> .col                                  = for bootstrap card styling
            //                              -> .animate__animated .animate__fadeInUp = for animation of animate library
            colDiv.className = ('col animate__animated animate__fadeInUp')

            // creates <div> element and stored in variable
            var cardDiv = document.createElement('div')
            // add class name to this <div> -> .card                                 = for bootstrap card styling
            cardDiv.className = ('card')
            // creates <div> element and stored in variable
            var cardBodyDiv = document.createElement('div')
            // add class name to this <div> -> .card-body                            = for bootstrap card styling
            cardBodyDiv.className = ('card-body text-center')

            //* Append Child
            // Appended = card -> col
            colDiv.appendChild(cardDiv)
            // Appended = Img -> card
            cardDiv.appendChild(filmsImg)
            // Appended = title, description -> cardbody
            cardBodyDiv.appendChild(filmsTitle)
            cardBodyDiv.appendChild(filmsDes)
            cardBodyDiv.appendChild(modalBtn)
            // Appended = card-body -> card
            cardDiv.appendChild(cardBodyDiv)

            //* Output - Test Display
            // Appended = col -> display = appended whole card to display in HTML file
            // let cardDisplay = this.cardDisplay
            document.getElementById('cardDisplay').appendChild(colDiv)





            //? Content for Modal
            // these steps are pretty much the same thing as the above steps

            var modalDiv1 = document.createElement('div')
            modalDiv1.className = ('modal fade')
            // This is a id of Modal that create with #FilmModal${array index} -> each button in FilmCard will target to modal that had data of the same array index
            // Therefore, each button in FilmCard will open modal that contains information about that film
            modalDiv1.id = (`FilmModal${i}`)
            modalDiv1.setAttribute('aria-labelledby', 'exampleModalLabel')
            modalDiv1.setAttribute('aria-hidden', 'true')
            var modalDiv2 = document.createElement('div')
            modalDiv2.className = ('modal-dialog modal-xl')
            var modalContent = document.createElement('div')
            modalContent.className = ('modal-content')


            //* Header part
            var modalHeader = document.createElement('div')
            modalHeader.className = ('modal-header text-light')

            var modalTitle = document.createElement('h5')
            modalTitle.className = ('modal-title')
            var modalTitleText = document.createTextNode(data[i].title);
            modalTitle.appendChild(modalTitleText)

            var modalCloseBtn = document.createElement('button')
            modalCloseBtn.setAttribute('type', 'button')
            modalCloseBtn.setAttribute('data-bs-dismiss', 'modal')
            modalCloseBtn.setAttribute('aria-label', 'Close')
            modalCloseBtn.className = ('btn-close')

            //* Body Part

            var modalBody = document.createElement('div')
            modalBody.className = ('modal-body')

            // card img in modal body
            var modalCard = document.createElement('div')
            modalCard.className = ('card bg-dark text-white m-4 mt-2 mb-2')
            var modalCardImg = document.createElement('img')
            modalCardImg.className = ('card-img')
            modalCardImg.setAttribute('src', data[i].movie_banner)
            var modalImgOverlay = document.createElement('div')
            modalImgOverlay.className = ('card-img-overlay')
            var originalOverlay = document.createElement('h5')
            originalOverlay.className = ('card-title')
            var originalOverlayText = document.createTextNode(data[i].original_title);
            modalImgOverlay.appendChild(originalOverlay)
            originalOverlay.appendChild(originalOverlayText)

            //* Card-body in Modal body
            var modalCardBody = document.createElement('div')
            modalCardBody.className = ('card-body text-center p-5')

            // Original Title
            var filmOrginalTitle = document.createElement('h1');
            // creates textnode that had a value same as title in data array -> stored in variable
            var originalTitleText = document.createTextNode(data[i].original_title);
            // add class name to this <h1> in order to use card style from bootstrap
            filmOrginalTitle.className = 'card-title mb-2 mt-3'
            // append originalTitleText to filmOrginalTitle, so <h1> have same text as the one that been pulled out of the array in it
            filmOrginalTitle.appendChild(originalTitleText)
            // Film Title
            var filmsTitle = document.createElement('h1');
            // creates textnode that had a value same as title in data array -> stored in variable
            var titleText = document.createTextNode(data[i].title);
            // add class name to this <h1> in order to use card style from bootstrap
            filmsTitle.className = 'card-title mb-2'
            filmsTitle.id = 'ModalFilmTitle'
            // append titleText to filmsTitle, so <h1> have same text as the one that been pulled out of the array in it
            filmsTitle.appendChild(titleText)

            // Director
            var filmDirector = document.createElement('p');
            var directorText = document.createTextNode('Director : ' + data[i].director);
            filmDirector.className = 'card-text mt-5 text-start'
            filmDirector.appendChild(directorText)
            // Producer
            var filmsProducer = document.createElement('p');
            var producerText = document.createTextNode('Producer : ' + data[i].producer);
            filmsProducer.className = 'card-text text-start'
            filmsProducer.appendChild(producerText)
            // Release Date
            var filmsRelease = document.createElement('p');
            var releaseText = document.createTextNode('Release Date : ' + data[i].release_date);
            filmsRelease.className = 'card-text text-start'
            filmsRelease.appendChild(releaseText)
            // Rating Score
            var filmsRating = document.createElement('p');
            var ratingText = document.createTextNode('Rating Score : ' + data[i].rt_score);
            filmsRating.className = 'card-text text-start'
            filmsRating.appendChild(ratingText)
            // Running Time
            var filmsTime = document.createElement('p');
            var timeText = document.createTextNode('Running Time : ' + data[i].running_time + ' mins');
            filmsTime.className = 'card-text text-start'
            filmsTime.appendChild(timeText)
            // Description
            var filmsDes = document.createElement('p');
            var desText = document.createTextNode('Description : ' + data[i].description);
            filmsDes.className = 'card-text mb-5 text-start'
            filmsDes.appendChild(desText)


            //* Modal Footer
            var modalFooter = document.createElement('div')
            modalFooter.className = ('modal-footer text-light')
            var modalFooterBtn = document.createElement('button')
            var footerBtnText = document.createTextNode('Close')
            modalFooterBtn.setAttribute('type', 'button')
            modalFooterBtn.setAttribute('data-bs-dismiss', 'modal')
            modalFooterBtn.className = ('btn Ghibli-btn')
            modalFooterBtn.appendChild(footerBtnText)





            //* Append child

            // header
            modalHeader.appendChild(modalTitle)
            modalHeader.appendChild(modalCloseBtn)

            // Cardbody
            modalCardBody.appendChild(filmOrginalTitle)
            modalCardBody.appendChild(filmsTitle)
            modalCardBody.appendChild(filmDirector)
            modalCardBody.appendChild(filmsProducer)
            modalCardBody.appendChild(filmsRelease)
            modalCardBody.appendChild(filmsRating)
            modalCardBody.appendChild(filmsTime)
            modalCardBody.appendChild(filmsDes)

            // Modalcard
            modalCard.appendChild(modalCardImg)
            modalCard.appendChild(modalImgOverlay)
            modalCard.appendChild(modalCardBody)

            // ModalBody
            modalBody.appendChild(modalCard)

            // Modal Footer
            modalFooter.appendChild(modalFooterBtn)

            // Overall
            modalContent.appendChild(modalHeader)
            modalContent.appendChild(modalBody)
            modalContent.appendChild(modalFooter)
            modalDiv2.appendChild(modalContent)
            modalDiv1.appendChild(modalDiv2)

            // Appended all content created for modal to modal container -> modal will show when the button clicked
            document.getElementById('modalContainer').appendChild(modalDiv1)
        }
    }
}
// Store Class in variable and call the loadData() method
const displayFilmCards = new FilmCards()
displayFilmCards.loadData()


