import { getGuestList } from "./database.js"

const allGuests = getGuestList()


export const guestList = () => {
    
    let html = "<ul>"

    for (const guest of allGuests) {
        html += `<li data-id="${guest.id}" data-destinationid="${guest.destinationId}">${guest.firstName} ${guest.lastName}</li>`
    }

    html += "</ul>"

    return html
}

