export default class ButtonsFunctional {
    constructor() {
        //APOD API UI
        this.apodApiBtn = document.querySelector('#apodAPI');
        this.apodBlock = document.querySelector('.apodBlock');
        this.apodHideBtn = document.querySelector('.apodHideBtn');

        //MARS API UI
        this.marsApiBtn = document.querySelector('#marsRoverAPI');
        this.marsBlock = document.querySelector('.marsBlock');
        this.marsHideBtn = document.querySelector('.marsHideBtn');

        //DESCRIBE BLOCK
        this.describeBlock = document.querySelector('.describe_block');

    }

    //When you click in browser on Try Api(Mars)
    showMarsContent() {
        this.marsApiBtn.addEventListener('click', () => {
            if(!this.marsBlock.classList.contains('showApiItems')) {
                this.marsBlock.classList.remove('marsBlock');
                this.marsBlock.classList.add('showApiItems');
                this.describeBlock.classList.add('hideItems');
            }
        })
    }
    //When you click in browser on Hide Api(Mars)
    hideMarsContent() {
        this.marsHideBtn.addEventListener('click', () => {
            if(this.marsBlock.classList.contains('showApiItems')) {
                this.marsBlock.classList.remove('showApiItems');
                this.marsBlock.classList.add('marsBlock');
                this.describeBlock.classList.remove('hideItems');

            }
        })
    }
    //When you click in browser on Try Api(APOD)
    showApodContent() {
        this.apodApiBtn.addEventListener('click', () => {
            if(!this.apodBlock.classList.contains('showApiItems')) {
                this.apodBlock.classList.remove('apodBlock');
                this.apodBlock.classList.add('showApiItems');
                this.describeBlock.classList.add('hideItems');
            }
        })
    }
    //When you click in browser on Hide Api(APOD)
    hideApodContent() {
        this.apodHideBtn.addEventListener('click', () => {
            if(this.apodBlock.classList.contains('showApiItems')) {
                this.apodBlock.classList.remove('showApiItems');
                this.apodBlock.classList.add('apodBlock');
                this.describeBlock.classList.remove('hideItems');
            }
        })
    }

}



