
db.Lastinventory.insertMany([
  {
    code: "xyz",
    tags: [
      "school",
      "book",
      "bag",
      "headphone",
      "appliance"
    ],
    qty: [
      {
        size: "S",
        num: 10,
        color: "blue"
      },
      {
        size: "M",
        num: 45,
        color: "blue"
      },
      {
        size: "L",
        num: 100,
        color: "green"
      }
    ]
  },
  {
    code: "abc",
    tags: [
      "appliance",
      "school",
      "book"
    ],
    qty: [
      {
        size: "6",
        num: 100,
        color: "green"
      },
      {
        size: "6",
        num: 50,
        color: "blue"
      },
      {
        size: "8",
        num: 100,
        color: "brown"
      }
    ]
  },
  {
    "_id": 111,
    "item": "TBD",
    "stock": 0,
    "info": {
      "publisher": "1111",
      "pages": 430
    },
    "tags": [
      "technology",
      "computer"
    ],
    "ratings": [
      {
        "by": "ijk",
        "rating": 4
      },
      {
        "by": "lmn",
        "rating": 5
      }
    ],
    "reorder": false
  },
  {
    "_id": 3,
    "item": "XYZ123",
    "stock": 15,
    "info": {
      "publisher": "5555",
      "pages": 150
    },
    "tags": [
      
    ],
    "ratings": [
      {
        "by": "xyz",
        "rating": 5
      }
    ],
    "reorder": false
  },
  {
    "_id": 4,
    "address": "2030 Martian Way",
    "zipCode": "90698345"
  },
  {
    "_id": 5,
    "address": "156 Lunar Place",
    "zipCode": 43339374
  },
  {
    "_id": 6,
    "address": "2324 Pluto Place",
    "zipCode": "3921412"
  },
  {
    "_id": 7,
    "address": "55 Saturn Ring",
    "zipCode": "88602117"
  },
  {
    "_id": 8,
    "address": "104 Venus Drive",
    "zipCode": [
      "834847278",
      "1893289032"
    ]
  },
  {
    code: "efg",
    tags: [
      "school",
      "book"
    ],
    qty: [
      {
        size: "S",
        num: 10,
        color: "blue"
      },
      {
        size: "M",
        num: 100,
        color: "blue"
      },
      {
        size: "L",
        num: 100,
        color: "green"
      }
    ]
  },
  {
    code: "ijk",
    tags: [
      "electronics",
      "school"
    ],
    qty: [
      {
        size: "M",
        num: 100,
        color: "green"
      }
    ]
  },
  {
    code: "ijk",
    tags: [
      "ssl",
      "school"
    ],
    qty: [
      {
        size: "M",
        num: 100,
        color: "green"
      }
    ]
  },
  {
    code: "ijk",
    tags: [
      "security",
      "school"
    ],
    qty: [
      {
        size: "M",
        num: 100,
        color: "green"
      }
    ]
  },
  {
    code: "ijk",
    tags: [
      "ssl",
      "security"
    ],
    qty: [
      {
        size: "M",
        num: 100,
        color: "green"
      }
    ]
  },
  {
    _id: 9,
    item: {
      name: "ab",
      code: "123"
    },
    qty: 15,
    tags: [
      "A",
      "B",
      "C"
    ]
  },
  {
    _id: 10,
    item: {
      name: "cd",
      code: "123"
    },
    qty: 20,
    tags: [
      "B"
    ]
  },
  {
    _id: 11,
    item: {
      name: "ij",
      code: "456"
    },
    qty: 25,
    tags: [
      "A",
      "B"
    ]
  },
  {
    _id: 12,
    item: {
      name: "xy",
      code: "456"
    },
    qty: 30,
    tags: [
      "B",
      "A"
    ]
  },
  {
    _id: 13,
    item: {
      name: "mn",
      code: "000"
    },
    qty: 20,
    tags: [
      [
        "A",
        "B"
      ],
      "C"
    ]
  },
  {
    "item": "nuts",
    "quantity": 30,
    "carrier": {
      "name": "Shipit",
      "fee": 3
    }
  },
  {
    "item": "bolts",
    "quantity": 50,
    "carrier": {
      "name": "Shipit",
      "fee": 4
    }
  },
  {
    "item": "washers",
    "quantity": 10,
    "carrier": {
      "name": "Shipit",
      "fee": 1
    }
  },
  {
    item: "canvas",
    qty: 100,
    size: {
      h: 28,
      w: 35.5,
      uom: "cm"
    },
    status: "A"
  },
  {
    item: "journal",
    qty: 25,
    size: {
      h: 14,
      w: 21,
      uom: "cm"
    },
    status: "A"
  },
  {
    item: "mat",
    qty: 85,
    size: {
      h: 27.9,
      w: 35.5,
      uom: "cm"
    },
    status: "A"
  },
  {
    item: "mousepad",
    qty: 25,
    size: {
      h: 19,
      w: 22.85,
      uom: "cm"
    },
    status: "P"
  },
  {
    item: "notebook",
    qty: 50,
    size: {
      h: 8.5,
      w: 11,
      uom: "in"
    },
    status: "P"
  },
  {
    item: "paper",
    qty: 100,
    size: {
      h: 8.5,
      w: 11,
      uom: "in"
    },
    status: "D"
  },
  {
    item: "planner",
    qty: 75,
    size: {
      h: 22.85,
      w: 30,
      uom: "cm"
    },
    status: "D"
  },
  {
    item: "postcard",
    qty: 45,
    size: {
      h: 10,
      w: 15.25,
      uom: "cm"
    },
    status: "A"
  },
  {
    item: "sketchbook",
    qty: 80,
    size: {
      h: 14,
      w: 21,
      uom: "cm"
    },
    status: "A"
  },
  {
    item: "sketch pad",
    qty: 95,
    size: {
      h: 22.85,
      w: 30.5,
      uom: "cm"
    },
    status: "A"
  },
  {
    item: "journal",
    qty: 25,
    tags: [
      "blank",
      "red"
    ],
    dim_cm: [
      14,
      21
    ]
  },
  {
    item: "notebook",
    qty: 50,
    tags: [
      "red",
      "blank"
    ],
    dim_cm: [
      14,
      21
    ]
  },
  {
    item: "paper",
    qty: 100,
    tags: [
      "red",
      "blank",
      "plain"
    ],
    dim_cm: [
      14,
      21
    ]
  },
  {
    item: "planner",
    qty: 75,
    tags: [
      "blank",
      "red"
    ],
    dim_cm: [
      22.85,
      30
    ]
  },
  {
    item: "postcard",
    qty: 45,
    tags: [
      "blue"
    ],
    dim_cm: [
      10,
      15.25
    ]
  },
  {
    code: "xyz",
    tags: [
      "school",
      "book",
      "bag",
      "headphone",
      "appliance"
    ],
    qty: [
      {
        size: "S",
        num: 10,
        color: "blue"
      },
      {
        size: "M",
        num: 45,
        color: "blue"
      },
      {
        size: "L",
        num: 100,
        color: "green"
      }
    ]
  },
  {
    code: "abc",
    tags: [
      "appliance",
      "school",
      "book"
    ],
    qty: [
      {
        size: "6",
        num: 100,
        color: "green"
      },
      {
        size: "6",
        num: 50,
        color: "blue"
      },
      {
        size: "8",
        num: 100,
        color: "brown"
      }
    ]
  },
  {
    code: "efg",
    tags: [
      "school",
      "book"
    ],
    qty: [
      {
        size: "S",
        num: 10,
        color: "blue"
      },
      {
        size: "M",
        num: 100,
        color: "blue"
      },
      {
        size: "L",
        num: 100,
        color: "green"
      }
    ]
  },
  {
    code: "ijk",
    tags: [
      "electronics",
      "school"
    ],
    qty: [
      {
        size: "M",
        num: 100,
        color: "green"
      }
    ]
  },
  {
    _id: 14,
    status: "a"
  },
  {
    _id: 15,
    sku: "abc123",
    quantity: 10,
    metrics: {
      orders: 2,
      ratings: 3.5
    }
  },
  {
    _id: 16,
    highScore: 800,
    lowScore: 200
  },
  {
    _id: 17,
    highScore: 800,
    lowScore: 200
  },
  {
    _id: 18,
    item: "Scarf",
    price: 10
  },
  {
    "_id": 19,
    "alias": [
      "The American Cincinnatus",
      "The American Fabius"
    ],
    "mobile": "555-555-5555",
    "nmae": {
      "first": "george",
      "last": "washington"
    }
  },
  {
    "_id": 20,
    "alias": [
      "My dearest friend"
    ],
    "mobile": "222-222-2222",
    "nmae": {
      "first": "abigail",
      "last": "adams"
    }
  },
  {
    "_id": 21,
    "alias": [
      "Amazing grace"
    ],
    "mobile": "111-111-1111",
    "nmae": {
      "first": "grace",
      "last": "hopper"
    }
  },
  {
    _id: 22,
    quantity: 250,
    instock: true,
    reorder: false,
    details: {
      model: "14QQ",
      make: "Clothes Corp"
    },
    tags: [
      "apparel",
      "clothing"
    ],
    ratings: [
      {
        by: "Customer007",
        rating: 4
      }
    ]
  },
  {
    "item": "chisel",
    "sku": "C001",
    "quantity": 4,
    "instock": true
  },
  {
    "item": "hammer",
    "sku": "unknown",
    "quantity": 3,
    "instock": true
  },
  {
    "item": "nails",
    "sku": "unknown",
    "quantity": 100,
    "instock": true
  },
  {
    "_id": 23,
    name: "Alice King",
    classAverage: 87.333333333333333
  },
  {
    "_id": 24,
    name: "Bob Jenkins",
    classAverage: "83.52"
  },
  {
    "_id": 25,
    name: "Cathy Hart",
    classAverage: "94.06"
  },
  {
    "_id": 26,
    name: "Drew Williams",
    classAverage: 93
  },
  {
    "_id": 27,
    "address": "2030 Martian Way",
    "zipCode": "90698345"
  },
  {
    "_id": 28,
    "address": "156 Lunar Place",
    "zipCode": "43339374"
  },
  {
    "_id": 29,
    "address": "2324 Pluto Place",
    "zipCode": "3921412"
  },
  {
    "_id": 30,
    "address": "55 Saturn Ring",
    "zipCode": "88602117"
  },
  {
    "_id": 31,
    "address": "104 Venus Drive",
    "zipCode": [
      "834847278",
      "1893289032"
    ]
  }
])


db.Lastinventory.find({})


//1.	Find documents where the "tags" field exists.
db.Lastinventory.find({ tags: { $exists: true } })

//2.	Find documents where the "tags" field does not contain values "ssl" or "security."
db.Lastinventory.find({
  tags: { $nin: ["ssl", "security"] }
})


//3.	Find documents where the "qty" field is equal to 85.
db.Lastinventory.find({ qty: 85 })

//4.	Find documents where the "tags" array contains all of the values [ssl, security] using the `$all` operator.
db.Lastinventory.find({
  tags: { $all: ["ssl", "security"] }
})

//5.	Find documents where the "tags" array has a size of 3.
db.Lastinventory.find({
  tags: { $size: 3 }
})

//6.	Update the "item" field in the "paper" document, update "size.uom" to "meter" and using the `$currentDate` operator.
db.Lastinventory.updateOne(
  { item: "paper" },
  {
    $set: { "size.uom": "meter" },
    $currentDate: { lastModified: true }
  }
)

//a.	Also, use the upsert option (within updateOne)and change filter condition item:”laptopDevice”.
db.Lastinventory.updateOne(
  { item: "laptopDevice" },
  {
    $set: { qty: 20 }
  },
  { upsert: true }
)

//b.	Use the $setOnInsert operator to add new data if an insert occurs.
//Example field: dataSource: "todayRegister"
db.Lastinventory.updateOne(
  { item: "laptopDevice" },
  {
    $set: { qty: 20 },
    $setOnInsert: { dataSource: "todayRegister" }
  },
  { upsert: true }
)

//c.	Try using the updateMany operation.
db.Lastinventory.updateMany(
  { qty: 25 },
  { $set: { status: "Updated" } }
)


//d.	Try using the `replaceOne` operation.
db.Lastinventory.replaceOne(
  { item: "canvas" },
  {
    item: "canvas",
    qty: 150,
    status: "Replaced"
  }
)


//7.	Insert a document with incorrect field names "neme" and "ege," then rename them to "name" and "age."
db.Lastinventory.insertOne({
  neme: "Ranim",
  ege: 24
})

db.Lastinventory.find({neme: "Ranim"})

db.Lastinventory.updateOne(
  { neme: "Ranim" },
  {
    $rename: {
      "neme": "name",
      "ege": "age"
    }
  }
)

db.Lastinventory.find({name: "Ranim"})

//8.	Try to reset any document field using the `$unset` function.

db.Lastinventory.find({item: "mat"})

db.Lastinventory.updateOne(
  { item: "mat" },
  { $unset: { status: "" } }
)

db.Lastinventory.find({item: "mat"})


//9.	Try update operators like `$inc`, `$min`, `$max`, and `$mul` to modify document fields.
//Important: Use a different field for each operation listed below. Insert Data If Not Existing
//Apply the following MongoDB update operators to the specified fields:
//•	Use $max on the field: salary
db.Lastinventory.insertOne({
  _id: 100,
  name: "Employee1",
  salary: 5000
})

db.Lastinventory.updateOne(
  { _id: 100 },
  { $max: { salary: 6000 } }
)


//•	Use $min on the field: overtime
db.Lastinventory.insertOne({
  _id: 101,
  name: "Employee2",
  overtime: 20
})

db.Lastinventory.updateOne(
  { _id: 101 },
  { $min: { overtime: 15 } }
)



//•	Use $inc on the field: age
db.Lastinventory.updateOne(
  { _id: ObjectId("69946ea6ec120e6a0244154e") },
  { $inc: { age: 1 } }
)


//•	Use $mul on the fields: quantity and price
db.Lastinventory.updateOne(
  { _id: 15 },
  { $mul: { quantity: 2 } }
)

db.Lastinventory.updateOne(
  { _id: 18 },
  { $mul: { price: 3 } }
)



//10.	Calculate the total revenue for product from sales collection documents within the date range '01-01-2020' to '01-01-2023' and then sort them in descending order by total revenue.
//a.	Total Revenue=  Sum (Quantity * Price)
db.sales.aggregate([
  {
    $match: {
      date: {
        $gte: ISODate("2020-01-01"),
        $lte: ISODate("2023-01-01")
      }
    }
  },
  {
    $group: {
      _id: "$product",
      totalRevenue: {
        $sum: { $multiply: ["$quantity", "$price"] }
      }
    }
  },
  {
    $sort: { totalRevenue: -1 }
  }
])


//11.	Calculate the average salary for employees for each department from the employee’s collection.
db.employee.updateOne(
  { _id: 1 },
  { $set: { salary: 3000, department: "IT" } }
)

db.employee.updateOne(
  { _id: 2 },
  { $set: { salary: 4000, department: "HR" } }
)

db.employee.updateOne(
  { _id: 3 },
  { $set: { salary: 5000, department: "IT" } }
)

db.employee.updateOne(
  { _id: 4 },
  { $set: { salary: 6000, department: "Finance" } }
)

db.employee.updateOne(
  { _id: 5 },
  { $set: { salary: 7000, department: "HR" } }
)


db.employee.aggregate([
  {
    $group: {
      _id: "$department",
      avgSalary: { $avg: "$salary" }
    }
  }
])

//12.	Use likes Collection to calculate max and min likes per title
db.likes.aggregate([
  {
    $group: {
      _id: "$title",
      maxLikes: { $max: "$likes" },
      minLikes: { $min: "$likes" }
    }
  }
])



