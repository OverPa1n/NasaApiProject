import errorHandler from "../helpers/errorHandler.js";
export default class RoverPhotoAPI {

    //Тут ми можем бачити closure. Функція requestToFrontCam приймає адрес як параметер
    //Дальше функція fetch приймає цей параметер також так як вона знаходиться в зовншійній області видимості
    //функції requestToFrontCam
    //А потім ми вже обробляєм цей response який проходить через обробник помилок

    // Global environment
    requestToFrontCam(url) {

        // Outer environment
        //{variable: data; fetch:fn; parameter: url}

        let data;
            return fetch(url).then(response => {

                // Inner environment
                //{parameters: url, response; variable: data}

                if(errorHandler(response)) return data = response.json();
            }).then(data => data.photos[0]).catch((e) => console.log(e));
    }

    requestToRearCam(url) {
        let data;
        return fetch(url).then(response => {
            if(errorHandler(response)) return data = response.json();
        }).then(data => data.photos[0]).catch(e => console.log(e));

    }

    requestToApodApi(url) {
        let data;
        return fetch(url).then(response => {
            if(errorHandler(response)) return data = response.json();
        }).then(data => data).catch(e => console.log(e));
    }

}
