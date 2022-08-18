
//People
[
    {
        f_name: '',
        l_name: '',
        age: 1,
        address: ''
    },
    {
        f_name: '',
        l_name: '',
        age: 1,
        address: '',
        carName: '',
        part: ""
    },
    {
        subjectName: ''
    }
]

//People
//f_name  l_name  age

let myFun = function () {

}

//orders of company
[
    {
        cust_id: "A123",
        amount: 500,
        status: 'A',
    },
    {
        cust_id: "A123",
        amount: 250,
        status: 'A',
    },
    {
        cust_id: "B212",
        amount: 500,
        status: 'A',
    },
    {
        cust_id: "B212",
        amount: 300,
        status: 'D',
    }
]

//orders of pizza shop
db.orders.insertMany([
    {
        _id: 0, name: "Pepperoni", size: "small", price: 19,
        quantity: 10, date: ISODate("2021-03-13T08:14:30Z")
    },
    {
        _id: 1, name: "Pepperoni", size: "medium", price: 20,
        quantity: 20, date: ISODate("2021-03-13T09:13:24Z")
    },
    {
        _id: 2, name: "Pepperoni", size: "large", price: 21,
        quantity: 30, date: ISODate("2021-03-17T09:22:12Z")
    },
    {
        _id: 3, name: "Cheese", size: "small", price: 12,
        quantity: 15, date: ISODate("2021-03-13T11:21:39.736Z")
    },
    {
        _id: 4, name: "Cheese", size: "medium", price: 13,
        quantity: 50, date: ISODate("2022-01-12T21:23:13.331Z")
    },
    {
        _id: 5, name: "Cheese", size: "large", price: 14,
        quantity: 10, date: ISODate("2022-01-12T05:08:13Z")
    },
    {
        _id: 6, name: "Vegan", size: "small", price: 17,
        quantity: 10, date: ISODate("2021-01-13T05:08:13Z")
    },
    {
        _id: 7, name: "Vegan", size: "medium", price: 18,
        quantity: 10, date: ISODate("2021-01-13T05:10:13Z")
    }
])

//query - All order quantity with size medium

//MongoDB Commands
//Reference Link - https://www.mongodb.com/docs/manual/reference/command/

//show all databases - show dbs

//show which db you are in - db

//show all collections - show collections

//insert one document - db.<<collection_name>>.insertOne(<<document_JSON>>)

//insert many document - db.<<collection_name>>.insertMany([<<document_JSON>>])

//insert many document - db.<<collection_name>>.insertMany([<<document_JSON>>])

//read documents from collection - db.<<collection_name>>.find() OR db.<<collection_name>>.find().pretty() --> this gives in prettier format

//clearing of screen - cls

//drop a collection - db.<<collection_name>>.drop()