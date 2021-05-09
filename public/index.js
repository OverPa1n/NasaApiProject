import RequestToAPIs from "./modules/RequestsToAPI.js";
import RearCamera from "./modules/RearCamera.js";
import FrontCamera from "./modules/FrontCamera.js";
import ApodApi from "./modules/ApodApi.js";
import UI from "./modules/Buttonsfunctional.js";




//APIs access
let key = 'api_key=ZBW7U1682bK809HX7tTjLc01z1UjeOtsDZUvhC8B';
let pathOfFrontCam = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=RHAZ&';
let pathOfRearCam = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3000&camera=FHAZ&';
let pathOfApoApi = 'https://api.nasa.gov/planetary/apod?';


//This we make an instance of objects
let rearCamera = new RearCamera();
let frontCamera = new FrontCamera();
let apodApi = new ApodApi();

//There is instance of main object that send a request to APIs
let requestToApi = new RequestToAPIs();

//There is we take a data from our APIs and send this data to the certain API objects through a function
requestToApi.requestToFrontCam(`${pathOfFrontCam}${key}`)
    .then(data => frontCamera.frontCameraUI(data))

requestToApi.requestToRearCam(`${pathOfRearCam}${key}`)
    .then(data => rearCamera.rearCameraUI(data))

requestToApi.requestToApodApi(`${pathOfApoApi}${key}`)
    .then(data => apodApi.apodApiUI(data))




