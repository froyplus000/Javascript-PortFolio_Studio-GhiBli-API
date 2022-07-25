// This variable contain a url of an API
const apiURL = 'https://ghibliapi.herokuapp.com/films'
// This variable contain all card and data (including img, title and description) of Studio GHIBLI Films. It will be use in searchinput as well
const Display = document.getElementById('Display')


//* Fetch Data
// when we use await we need to put async in front of the function
async function loadData() {
    // wrap everything in to try{} -> try run this code first
    try {
        // fetch data from api, needed to have await otherwise it will return promise, store it in 'response'
        const response = await fetch(apiURL)
        // filter response to json and store it in data variable
        const data = await response.json()
        // log 'data' in the console
        console.log(data)
        // call 'displayCard(data)' function
        displayCard(data)

        // catch (error){} -> catch error data and stored it in (error)
    } catch (error) {
        // log error to console if our code in try have any error
        console.log(error)
    }
}
loadData()





//* DisplayCard - Function
// Function to display films card with the data fetched from api
function displayCard(data) {

    // Create for loop to filter data from api and display to web page
    for (let i = 0; i < data.length; i++) {

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
        var modalBtn = document.createElement('a')
        var btnText = document.createTextNode('More Details')
        modalBtn.appendChild(btnText)
        modalBtn.setAttribute('href', '#')
        modalBtn.setAttribute('type', 'button')
        modalBtn.setAttribute('data-bs-toggle', 'modal')
        modalBtn.setAttribute('data-bs-target', '#FilmModal')
        modalBtn.className = 'btn btn-light text-center Ghibli-btn'


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
        Display.appendChild(colDiv)







    }

}

//* Search Film with Title - Function 
// create 'onkeyup' search() function - eventlistener already been assign to onkeyup by adding attribute in <input>
search = () => {
    //* Variable for search function
    // Get value from what user type in the Textbox and covert it to lower case, 
    const searchInput = document.getElementById('searchInput').value.toLowerCase()
    // const Display = document.getElementById('Display') -> this variable is needed for this function as well but it already been assign at the top of the page
    // This variable contains all element with the '.col' -> possible when we use 'querySelectorAll'
    // .col -> card -> img
    //              -> card-body -> h1
    //                           -> p   
    const filmCard = document.querySelectorAll('.col')
    // This variable contains h1 -> Film titles
    const titleH1 = document.getElementsByTagName('h1')

    // for loop, so we can re-arrange the film card according to the search value
    for (let i = 0; i < titleH1.length; i++) {
        // get the first <h1> in the filmCard(.col) and store that in the variable called "match"
        let match = filmCard[i].getElementsByTagName('h1')[0]
        // create if and pass on match (first h1 in .col, which contains title of film)
        if (match) {
            // get content in match(<h1>) and store it in 'textValue'
            let textValue = match.textContent || match.innerHTML
            // create another if statement -> take textValue and convert it into lower case
            //                             -> indexOf(searchInput) -> each array(letter) in the searchinput value(converted to lower case)
            //                             ->       > -1           -> greater than '-1' means if its true or if it contain that array(letter)
            // Basically, it means if the value that user type in the 'searchInput' match the content in '<h1>' -> it will do the following code 
            if (textValue.toLowerCase().indexOf(searchInput) > -1) {
                // if the above condition is true, then card will be display 'block'
                filmCard[i].style.display = "block"
            } else {
                // if its not, then card will be display 'none'
                filmCard[i].style.display = "none"
            }
        }
    }

}
