const catalog = [
    {
        "title": "Brilliant Cut Engagement Ring",
        "category": "Rings",
        "price": 18900,
        "image": "eng-ring.jpeg",
        "_id": "1"
    },
    {
        "title": "Teardrop Necklace",
        "category": "Necklaces",
        "price": 3450,
        "image": "teardrop-necklace.jpeg",
        "_id": "2"
    },
    {
        "title": "Diamond Studs",
        "category": "Earrings",
        "price": 6800,
        "image": "diamond-studs.jpeg",
        "_id": "3"
    },
    {
        "title": "Diamond Tennis Bracelet",
        "category": "Bracelets",
        "price": 9200,
        "image": "tennis-bracelet.jpeg",
        "_id": "4"
    },
    {
        "title": "Diamond Choker Necklace",
        "category": "Necklaces",
        "price": 32000,
        "image": "choker-necklace.jpeg",
        "_id": "5"
    },
    {
        "title": "Diamond Wedding Band",
        "category": "Rings",
        "price": 2100,
        "image": "wedding-band.jpeg",
        "_id": "6"
    },
    {
        "title": "Double Halo Cushion Cut Ring",
        "category":"Rings",
        "price": 45000,
        "image": "double-cut-ring.jpeg",
        "_id": "7"
    },
    {
        "title": "Diamond Rigid Bangle",
        "category": "Bracelets",
        "price": 7900,
        "image": "bangle.jpeg",
        "_id": "8"
    },
    {
        "title": "Diamond-Lined Hoop Earrings",
        "category": "Earrings",
        "price": 4800,
        "image": "hoop-ear.jpeg",
        "_id": "9"
    },
    {
        "title": "Minimalist Solitaire Necklace",
        "category": "Necklaces",
        "price": 1650,
        "image": "necklace.jpeg",
        "_id": "10"
    },
    {
        "title": "Pave Cocktail Ring",
        "category": "Ring",
        "price": 11300,
        "image": "cocktail-ring.jpeg",
        "_id": "11"
    },
    {
        "title": "Solid Gold Band",
        "category": "Rings",
        "price": 1400,
        "image": "gold-band.jpeg",
        "_id": "12"
    },
    {
        "title": "Curb Link Chain Necklace",
        "category": "Necklaces",
        "price": 6200,
        "image": "chain-necklace.jpeg",
        "_id": "13"
    },
    {
        "title": "Pure Gold Puffy Hoops",
        "category": "Earrings",
        "price": 1100,
        "image": "gold-hoops.jpeg",
        "_id": "14"
    },
    {
        "title": "Hammered Artisan Gold Cuff Bracelet",
        "category": "Bracelets",
        "price": 5600,
        "image": "gold-cuff.jpeg",
        "_id": "15"
    },
];
// an object has attributes (describe) and methods (action)
class DataService {
    getProduct() {
        return catalog;
    }
}

export default DataService;