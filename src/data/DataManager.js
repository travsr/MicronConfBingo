
let instance = null;

export class DataManager {

    callbacks = [];


    dataModel = {

        grid : [
            [{},{},{},{},{}],
            [{},{},{},{},{}],
            [{},{},{},{},{}],
            [{},{},{},{},{}],
            [{},{},{},{},{}],
        ]

    };

    constructor() {

        // If no instance exists create one and make calls to get the data
        if (!instance) {
            instance = this;

        }

        // to test whether we have singleton or not
        this.time = new Date();

        return instance;
    }






}