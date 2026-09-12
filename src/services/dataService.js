const catalog = [
    {
        "title": "Orange",
        "category": "Organics",
        "price": 1.99,
        "image": "oranges.png",
        "_id": "1"
    },
    {
        "title": "Chocolate",
        "category": "Organics",
        "price": 5.99,
        "image": "choco.png",
        "_id": "2"
    },
    {
        "title": "Coffee",
        "category": "Organics",
        "price": 2.99,
        "image": "coffee.png",
        "_id": "3"
    },
    {
        "title": "Hoddie",
        "category": "Merch",
        "price": 9.99,
        "image": "hoodie.png",
        "_id": "4"
    },
    {
        "title": "Honey",
        "category": "Organics",
        "price": 3.99,
        "image": "honey.jpeg",
        "_id": "5"
    },
    {
        "title": "Olive Oil",
        "category": "Organics",
        "price": 5.99,
        "image": "olive-oil.jpeg",
        "_id": "6"
    },
    {
        "title": "Orange Jelly",
        "category":"Organics",
        "price": 4.99,
        "image": "orange-jelly.jpeg",
        "_id": "7"
    },
    {
        "title": "Tote Bag",
        "category": "Merch",
        "price": 3.99,
        "image": "totebag.jpeg",
        "_id": "8"
    },
    {
        "title": "Milk",
        "category": "Dairy",
        "price": 3.99,
        "image": "milk.png",
        "_id": "9"
    },
    {
        "title": "Cheese",
        "category": "Dairy",
        "price": 7.99,
        "image": "cheese.jpeg",
        "_id": "10"
    },
    {
        "title": "Bottle",
        "category": "Merch",
        "price": 4.99,
        "image": "bottle.jpeg",
        "_id": "11"
    },
    {
        "title": "Notebook",
        "category": "Merch",
        "price": 3.99,
        "image": "notebook.jpeg",
        "_id": "12"
    },
    {
        "title": "Refillable Container",
        "category": "Merch",
        "price": 2.99,
        "image": "refillable-container.jpeg",
        "_id": "13"
    },
    {
        "title": "Yogurt",
        "category": "Dairy",
        "price": 2.99,
        "image": "yogurt.jpeg",
        "_id": "14"
    },
];
// an object has attributes (describe) and methods (action)
class DataService {
    getProduct() {
        return catalog;
    }
}

export default DataService;