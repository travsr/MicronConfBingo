
let instance = null;

export class DataManager {

    callbacks = [];


    model = {

        grid : [
            [{},{},{},{},{}],
            [{},{},{},{},{}],
            [{},{},{},{},{}],
            [{},{},{},{},{}],
            [{},{},{},{},{}],
        ],
        words : [
            "Artificial Intelligence",
            "BlockChain",
            "Virtual Reality",
            "Cryptocurrency",
            "Machine Learning",
            "SASS",
            "MRR",
            "Bootstrap",
            "Scalable",
            "Data-driven",
            "Proprietary",
            "Digital",
            "Rockstar",
            "Secret Sauce",
            "Pivot",
            "Product Market Fit",
            "ARR",
            "Experts in field",
            "Billion dollar market",
            "Trillion dollar market",
            "B2B",
            "B2C",
            "Burn Rate",
            "Exit",
            "Disrupt",
            "User Adoption",
            "Churn",
            "Position",
            "Automation",
            "Growth Rate",
            "Funding",
            "Cost of Acquisition",
            "Customer Lifetime Value",
            "eBook",
            "Charge More",
            "Blog",
            "MicroConf ™"
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