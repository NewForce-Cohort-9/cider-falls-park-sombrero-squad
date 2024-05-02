const database = {
    guests: [
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

export const getGuestList = () => {
    return database.guests.map(guest => ({...guest}))
}