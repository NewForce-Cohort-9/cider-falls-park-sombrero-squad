import { getDestinations, getServiceDestinations, getGuestList, getServices } from "./database.js";

const destinations = getDestinations();
const serviceDestinations = getServiceDestinations();
const guests = getGuestList();
const services = getServices();

//function to get services for a destination

const findServices = (destination) => {
    let serviceIdList = [];
    let servicesOffered = '<ul>';

    for (const serviceDestination of serviceDestinations) {
        if  (serviceDestination.destinationId === destination.id) {
                serviceIdList.push(serviceDestination.serviceId)
        }
    }

    for (let i = 0; i < serviceIdList.length; i++) {
        for (const service of services) {
            if (serviceIdList[i] === service.id ) {
                servicesOffered += `<li>${service.name}</li>`
            }
            
        }
    }
    servicesOffered += '</ul>'
    return servicesOffered;
}

export const Destinations = () => {
    let html = '<div class="card">'

    for (const destination of destinations) {
        const servicesOffered = findServices(destination)

        html += `<div class="card_individual"><h3>${destination.name}</h3><div class="card_detail"><img src="${destination.picture}"/>
                        <div class="card_services">Services Offered: ${servicesOffered}</div>
                        </div></div>`
    }
    html += '</div>'
    return html;
}