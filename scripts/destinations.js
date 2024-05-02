import { getDestinations, getServiceDestinations, getGuestList, getServices } from "./database.js";

const destinations = getDestinations();
const serviceDestinations = getServiceDestinations();
const guests = getGuestList();
const services = getServices();

//function to get services for a destination

const findServices = (destination) => {
    let serviceIdList = [];
    let services = null;

    for(const serviceDestination of serviceDestinations) {
        if  (serviceDestination.destinationId === destination.id) {
                serviceIdList.push(serviceDestination.serviceId)
        }
    return serviceIdList;
    }

    for (const serviceId of serviceIdList) {
        if (serviceId === service.id ) {
            services += service.name
        }


    }
    return services;
}

// export const Destinations = () => {
//     let html = ''

//     for (const destination of destinations) {
//         html += `<div class="card_detail"><img src="${destination.picture}"/>
//                         <ul>
//                         </ul>
//                         </div>`
//     }
// 

