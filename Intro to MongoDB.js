
//USERS Collection
[
    {
        _id: 'H3188g17t174818',
        name: "John",
        age: 37,
        bGroup: 'a+',
        gender: 'm',
        bio: 'abc'
    },
    {
        _id: 'H3188g17t174818',
        name: "Richard",
        age: 39,
        bGroup: 'B+',
        gender: 'm',
        hobbies: [1, 2, 3]
    }
]


/*
1. Find out all users who are of male gender ?
Result  --> 1, 2

2. Find users with field "bio" ?
Result  --> 1
*/

//In UI if we want to represent the above data then it will look like
// Name    Age   Blood_Group Gender Bio            hobbies
// John    37    A + M    abc           Unavailable
// Richard 39    A + M    Unavailable[1, 2, 3]

//***************************************************************************************************************

//"Embedded" data modeling
//Cars Collection
[
    {
        _id: "c432",
        car: "Tata 101",
        parts: [
            {
                name: "wheel",
                specs: {}
            },
            {
                name: "steering",
                specs: {}
            },
            {
                name: "chassis",
                specs: {}
            }
        ]
    }
]

//Data segregated using "Referencing"
//Cars Collection
[
    {
        _id: "c432",
        car: "Tata 101",
        parts: ['3334', 'f3f3', 'c233']
    }
]
//Parts Collection
[
    {
        _id: "c233",
        name: "wheel",
        type: "part",
        specs: {}
    },
    {
        _id: "f3f3",
        name: "steering",
        type: "part",
        specs: {}
    },
    {
        _id: "3fw4",
        name: "chassis",
        type: "part",
        specs: {}
    }
]

//***************************************************************************************************************

// Books
// |
// Programming______
// |               |
// languages       Databases
//                 |       |
//             MongoDB     dbs


// ******* MongoDb Data Modelling Designs in Tree structure ********

// 1. References of Parent
[
    { _id: "MongoDB", parent: "Databases" },
    { _id: "dbs", parent: "Databases" },
    { _id: "Databases", parent: "Programming" },
    { _id: "languages", parent: "Programming" },
    { _id: "Programming", parent: "Books" },
    { _id: "Books", parent: null }
]

//2. References of Children
[
    { _id: "MongoDB", children: [] },
    { _id: "dbs", children: [] },
    { _id: "Databases", children: ["MongoDB", "dbs"] },
    { _id: "languages", children: [] },
    { _id: "Programming", children: ["Databases", "languages"] },
    { _id: "Books", children: ["Programming"] }
]

//3. Array of Ancestors
[
    {
        _id: "MongoDB", ancestors: ["Books", "Programming", "Databases"], parent: "Databases"
    },
    {
        _id: "Databases", ancestors: ["Books", "Programming"], parent: "Programming"
    },
    { _id: "Books", ancestors: [], parent: null }
]

// 4. Materialized Path
[
    { _id: "MongoDB", path: ",Books,Programming,Databases" },
    { _id: "Databases", path: ",Books,Programming" }
]