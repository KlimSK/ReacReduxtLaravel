let initialState = {
    previewData: {
        products: [
            {x: "Product 1", y: 30},
            {x: "Product 2", y: 25},
            {x: "Product 3", y: 50},
            {x: "Product 4", y: 10},
            {x: "Product 5", y: 5},
            {x: "Product 6", y: 80},
            {x: "Product 7", y: 15},
        ],
        period: [
            {x: '30.05.2020', y: 10},
            {x: '31.05.2020', y: 4},
            {x: '01.06.2020', y: 2},
            {x: '02.06.2020', y: 15},
            {x: '03.06.2020', y: 30},
            {x: '04.06.2020', y: 20}
        ],

        customers: [
            {x: "John Smith", y: 15},
            {x: "Phillip Stones", y: 30},
            {x: "Rick Grymes", y: 40},
            {x: "Shane Beam", y: 5},
            {x: "Shin Lim", y: 55},
        ],

        compare: [
            {x: 500, y: 'January'},
            {x: 250, y: 'February'},
            {x: 347, y: 'March'},
            {x: 20, y: 'April'},
            {x: 37, y: 'May'},
            {x: 100, y: 'June'},
            {x: 444, y: 'July'},
            {x: 253, y: 'August'},
        ]
    }
};


const statisticsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}


export default statisticsReducer;