export default class FetchData {

    constructor() {
        this.data = [];
    }

    //* Fetch Data - Change this to OOP Class
    // when we use await we need to put async in front of the function
    async loadData() {
        // wrap everything in to try{} -> try run this code first
        try {
            // fetch data from api, needed to have await otherwise it will return promise, store it in 'response'
            const response = await fetch('https://ghibliapi.herokuapp.com/films')
            // filter response to json and store it in data variable
            this.data = await response.json()
            // log 'data' in the console
            console.log(this.data)
            // call 'displayCarousel(data)' function


            this.displayCarousel(this.data)



            // catch (error){} -> catch error data and stored it in (error)
        } catch (error) {
            // log error to console if our code in try have any error
            console.log(error)
        }
    }

}