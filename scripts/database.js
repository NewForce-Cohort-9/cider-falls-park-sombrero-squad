const database = {

    destinations : [
        { id: 1, name: "Chamfort River", picture: "https://th.bing.com/th/id/R.960e6f8af48a3bf4e8a59db006dd09d6?rik=Uhd1%2fm%2fNTufSSw&riu=http%3a%2f%2fcdn.cdnparenting.com%2farticles%2f2018%2f09%2fPuducherry.webp&ehk=yEPW%2bJHD5W2Zqu6fbwjKgOwzTJ58%2bU7%2b%2bRKPeFWVYmk%3d&risl=&pid=ImgRaw&r=0"},
        { id: 2, name: "Lost Wolf Hiking Trail", picture: "https://outthereoutdoors.com/wp-content/uploads/2021/05/Wolf-Trails-in-Newport-768x1024.jpeg"},
        { id: 3, name: "Lodge", picture: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/383403441.jpg?k=0d70432ce7823f8c3db9ab7f5f71776f2c2d1ea51894802ef3932f147d0cdcfe&o=&hp=1"},
        { id: 4, name: "Gander River", picture: "https://i.pinimg.com/originals/2e/fb/46/2efb46e5c59f805d17fc467a162bc6c6.jpg"},
        { id: 5, name: "Campgrounds", picture: "https://th.bing.com/th/id/R.44b9a0f9b4ebdb94c78f71d62a592902?rik=dHJ%2bGNxIlj9OFg&pid=ImgRaw&r=0"},
        { id: 6, name: "Pine Bluffs Trails", picture: "https://www.foxintheforest.net/wp-content/uploads/2019/12/IMG_7852.jpg"}
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
        { 
            id: 1,
            firstName: 'Abernathy',
            lastName: 'Aaron'
        },{ 
            id: 2,
            firstName: 'Bobbie',
            lastName: 'Bedelia'
        },{ 
            id: 3,
            firstName: 'Cat',
            lastName: 'Cattermole'
        },{ 
            id: 4,
            firstName: 'Dill',
            lastName: 'Dillerson'
        },{ 
            id: 5,
            firstName: 'Eugene',
            lastName: 'Evermore'
        },{ 
            id: 6,
            firstName: 'Fulgencio',
            lastName: 'Fujiyama'
        },{ 
            id: 7,
            firstName: 'Gordon',
            lastName: 'Grayson'
        },{ 
            id: 8,
            firstName: 'Honor',
            lastName: 'Hornsby'
        },{ 
            id: 9,
            firstName: 'Isis',
            lastName: 'Igloo'
        },{ 
            id: 10,
            firstName: 'Joylin',
            lastName: 'Jaberwockee'
        },{ 
            id: 11,
            firstName: 'Kindred',
            lastName: 'Ken'
        },{ 
            id: 12,
            firstName: 'Lina',
            lastName: 'Lin'
        },{ 
            id: 13,
            firstName: 'May',
            lastName: 'Mayonnaise'
        },{ 
            id: 14,
            firstName: 'Nina',
            lastName: 'Nguyen'
        },{ 
            id: 15,
            firstName: 'Opie',
            lastName: 'Osprey'
        },{ 
            id: 16,
            firstName: 'Prentiss',
            lastName: 'Piper'
        },{ 
            id: 17,
            firstName: 'Quentin',
            lastName: 'Qurantino'
        },{ 
            id: 18,
            firstName: 'Ron',
            lastName: 'Ronson'
        },{ 
            id: 19,
            firstName: 'Stewie',
            lastName: 'Stuart'
        },{ 
            id: 20,
            firstName: 'Theo',
            lastName: 'Theon'
        },{ 
            id: 21,
            firstName: 'Ursula',
            lastName: 'Ursulla'
        },{ 
            id: 22,
            firstName: 'Vinny',
            lastName: 'Vindicated'
        },{ 
            id: 23,
            firstName: 'Wendy',
            lastName: 'Wendys'
        },{ 
            id: 24,
            firstName: 'Xavier',
            lastName: 'Xavion'
        }, { 
            id: 25,
            firstName: 'Yessica',
            lastName: 'Yester'
        }, { 
            id: 26,
            firstName: 'Zeke',
            lastName: 'Zeroni'
        }
    ]
}

export const getDestinations = () => {
    return database.destinations.map(destination => ({...destination}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getServiceDestinations = () => {
    return database.serviceDestinations.map(serviceDestination => ({...serviceDestination}))
}

export const getGuestList = () => {
    return database.guests.map(guest => ({...guest}))
}
