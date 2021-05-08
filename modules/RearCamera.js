import FrontCamera from "./FrontCamera.js";
export default class RearCamera extends FrontCamera{
    constructor() {
        super()
    }

    //This function take a data from callback in RequestsToAPI file and process it
    async rearCameraUI(data) {
        let img = document.querySelector('.rearImg');
        let title = document.querySelector('.rearTitle');
        let text = document.querySelector('.rearText');
        let launch = document.querySelector('.rearLaunch');
        img.src = data.img_src;
        title.textContent = `Earth Date: ${data.earth_date}`
        text.textContent = `Camera: ${data.camera.full_name}`
        launch.textContent = `Launch Date: ${data.rover.launch_date}`
    }
}

let rear = new RearCamera()





