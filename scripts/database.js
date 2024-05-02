const database = {
    destinations : [
        { id: 1, name: "Chamfort River", picture: ""},
        { id: 2, name: "Lost Wolf Hiking Trail", picture: ""},
        { id: 3, name: "Lodge", picture: ""},
        { id: 4, name: "Gander River", picture: ""},
        { id: 5, name: "Campgrounds", picture: ""},
        { id: 6, name: "Pine Bluffs Trails", picture: ""}
      ],
      
    services : [
        { id: 1, name: "Rafting"},
        { id: 2, name: "Canoeing"},
        { id: 3, name: "Fishing"},
        { id: 4, name: "Hiking" },
        { id: 5, name: "Picnicking"},
        { id: 6, name: "Rock Climbing"},
        { id: 7, name: "Lodging"},
        { id: 8, name: "Food"},
        { id: 9, name: "Parking"},
        { id: 10, name: "Information"},
        { id: 11, name: "Office Park"},
        { id: 12, name: "Children Play Area"},
        { id: 13, name: "Zip Lining"}
       
      ],
    
    serviceDestinations : [
        { id: 1,
        destinationId:1,
        serviceId:1},//rafting in Chamfort River 
        { id: 2,
            destinationId:1,
            serviceId:2},//canoeing in Chamfort River 
        { id: 3,
        destinationId:1,
        serviceId:3},//fishing in Chamfort River
        { id: 4,
        destinationId:2,
        serviceId:4},//hiking in Lost Wolf Hiking Trail 
        { id: 5,
            destinationId:2,
            serviceId:5},//picnicking in Lost Wolf Hiking Trail
        { id: 6,
        destinationId:2,
        serviceId:6},//rock climbing in Lost Wolf Hiking Trail
        { id: 7,
            destinationId:3,
            serviceId:7},//lodging in Lodge
            { id: 8,
            destinationId:3,
            serviceId:8},//food in Lodge
            { id: 9,
                destinationId:3,
                serviceId:9},//parking in Lodge
            { id: 10,
            destinationId:3,
            serviceId:10},// information in 
            { id: 11,
            destinationId:3,
            serviceId:5},// picnicking in Lodge
            { id: 12,
            destinationId:4,
            serviceId:3},// fishing in Gander River,
            { id: 13,
            destinationId:4,
            serviceId:4},// hiking in Gander River,
            { id: 14,
            destinationId:5,
            serviceId:11},// office park in Campgrounds
            { id: 15,
            destinationId:5,
            serviceId:12},// children play area in Campgrounds
            { id: 16,
            destinationId:5,
            serviceId:10},// info in Campgrounds
            { id: 17,
            destinationId:5,
            serviceId:7},// lodging in Campgrounds
            { id: 18,
            destinationId:5,
            serviceId:9},// parking in Campgrounds
            { id: 19,
            destinationId:6,
            serviceId:8},// food in Pine Bluffs Trails
            { id: 20,
            destinationId:6,
            serviceId:4},// hiking in Pine Bluffs Trails
            { id: 21,
            destinationId:6,
            serviceId:5},// picnicking in Pine Bluffs Trails
            { id: 22,
            destinationId:6,
            serviceId:13},// zip lining in Pine Bluffs Trails
    
    ],
      
    guests : [
        { id: 1, firstName: "LJ", lastName: "White", destinationId: 1 }, 
        { id: 2, firstName: "Iris", lastName: "Lee", destinationId: 2 }, 
        // Add more guests
      ]
    }