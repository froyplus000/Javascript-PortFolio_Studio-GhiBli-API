
const filmsURL = 'https://ghibliapi.herokuapp.com/films'
const Display = document.getElementById('Display')
const searchBtn = document.getElementById('searchBtn')



//* Addevent Listener


//* Fetch Data
async function loadData() {
    try {
        const response = await fetch(filmsURL)
        const data = await response.json()
        console.log(data)
        displayData(data)
    } catch (error) {
        console.log(error)
    }
}

function displayData(data) {

    for (let i = 0; i < data.length; i++) {
        //* Images
        var filmsImg = document.createElement('img');
        filmsImg.setAttribute('src', data[i].image)
        filmsImg.id = data[i].id
        filmsImg.className = 'card-img-top'

        //* Title
        var filmsTitle = document.createElement('h1');
        var titleText = document.createTextNode(data[i].title);
        filmsTitle.className = 'card-title'
        filmsTitle.className = 'titleLists'
        filmsTitle.appendChild(titleText)
        // titleList.push(data[i].title)



        //* Description
        var filmsDes = document.createElement('p');
        var desText = document.createTextNode(data[i].description);
        filmsDes.className = 'card-text'
        filmsDes.appendChild(desText)

        //* Create Div
        var colDiv = document.createElement('div')
        colDiv.className = ('col')

        var cardDiv = document.createElement('div')
        cardDiv.className = ('card')

        var cardBodyDiv = document.createElement('div')
        cardBodyDiv.className = ('card-body')

        //* Append Child
        // Appended = card-body -> card -> col
        colDiv.appendChild(cardDiv)
        cardDiv.appendChild(filmsImg)
        cardBodyDiv.appendChild(filmsTitle)
        cardBodyDiv.appendChild(filmsDes)
        cardDiv.appendChild(cardBodyDiv)
        // Appended element


        //* Output - Test Display

        Display.appendChild(colDiv)
    }
}
loadData()

const search = () => {
    const searchInput = document.getElementById('searchInput').value.toLowerCase()
    const filmCard = document.querySelectorAll('.col')
    const TitleFS = document.getElementsByTagName('h1')

    for (let i = 0; i < TitleFS.length; i++) {
        let match = filmCard[i].getElementsByTagName('h1')[0]
        if (match) {
            let textvalue = match.textContent || match.innerHTML
            if (textvalue.toLowerCase().indexOf(searchInput) > -1) {
                filmCard[i].style.display = "inline"
            } else {
                filmCard[i].style.display = "none"
            }
        }
    }

}
