import ButtonsFunctional from "./Buttonsfunctional.js";
export default class FrontCamera extends ButtonsFunctional{
    constructor() {
        super();
    }

    //This function take a data from callback in RequestsToAPI file and process it
    async frontCameraUI(data) {
        let img = document.querySelector('.frontImg');
        let title = document.querySelector('.frontTitle');
        let text = document.querySelector('.frontText');
        let launch = document.querySelector('.frontLaunch');
        img.src = data.img_src;
        title.textContent = `Earth Date: ${data.earth_date}`;
        text.textContent = `Camera: ${data.camera.full_name}`;
        launch.textContent = `Launch Date: ${data.rover.launch_date}`;
    }

}

let frontCamera = new FrontCamera();
frontCamera.showMarsContent();
frontCamera.hideMarsContent();



