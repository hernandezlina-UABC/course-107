const catalog = [
    {
        "title": "Orange",
        "category": "fruit",
        "price": 1.99,
        "image": "oranges.png",
        "_id": "1"
    },
    {
        "title": "Chocolate",
        "category": "fruit",
        "price": 5.99,
        "image": "choco.png",
        "_id": "2"
    },
    {
        "title": "Coffee",
        "category": "fruit",
        "price": 2.99,
        "image": "coffee.png",
        "_id": "3"
    },
    {
        "title": "Hoddie",
        "category": "fruit",
        "price": 9.99,
        "image": "hoodie.png",
        "_id": "4"
    },
    {
        "title": "Milk",
        "category": "fruit",
        "price": 3.99,
        "image": "milk.png",
        "_id": "5"
    },
];
// an object has attributes (describe) and methods (action)
class DataService {
    getProduct() {
        return catalog;
    }
}

export default DataService;