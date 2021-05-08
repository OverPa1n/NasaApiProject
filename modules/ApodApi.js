
import FrontCamera from "./FrontCamera.js";

export default class ApodApi extends FrontCamera {
    constructor() {
        super();
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


