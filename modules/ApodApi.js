import ButtonsFunctional from "./Buttonsfunctional.js";

export default class ApodApi extends ButtonsFunctional {
    constructor() {
        super()
    }

    //This function take a data from callback in RequestsToAPI file and process it
    async apodApiUI(data) {
        let img = document.querySelector('.apodImg');
        let title = document.querySelector('.apodTitle');
        let text = document.querySelector('.apodText');
        img.src = data.url;
        title.textContent = data.title;
        text.textContent = data.explanation;
    }

}


const apod = new ApodApi();
apod.showApodContent();
apod.hideApodContent();

