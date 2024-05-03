import {
  getDestinations,
  getServices,
  getServiceDestinations,
} from "./database.js";

const services = getServices();
const destinations = getDestinations();
const serviceDestinations = getServiceDestinations();

export const ServiceList = () => {
  let serviceHTML = `<ul class="services">`;

  for (const service of services) {
    serviceHTML += `
        <div class="service" data-type="service" data-id="${service.id}" data-name="${service.name}">
        ${service.name}
        </div>
        `;
  }
  serviceHTML += "</ul>";
  return serviceHTML;
};

document.addEventListener("click", (e) => {
  const clickedService = e.target;
  const clickedServiceId = Number(clickedService.dataset.id);
  const clickedServiceName = clickedService.dataset.name;
  const clickedType = clickedService.dataset.type;

  if (clickedType === "service") {
    //filter only the service dests that match clicked service id
    const matchingServiceDestinations = serviceDestinations.filter(
      (destination) => destination.serviceId === clickedServiceId
    );

    //filter destinations by anywhere service dest id matches dest id.
    //then return only the dest.name for each index from the filtered object array
    //which turns matchingDestinationNames into a string array: ["One", "Two"]
    const matchingDestinationNames = destinations
      .filter((dest) =>
        matchingServiceDestinations.some(
          (servDest) => servDest.destinationId === dest.id
        )
      )
      .map((dest) => dest.name);

    //combine any indexes with a comma (turns into a string like "One,Two")
    const destinationNamesStr = matchingDestinationNames.join(",");

    //if string is truthy, use the string message, otherwise leave a default message.
    window.alert(
      destinationNamesStr
        ? `${clickedServiceName} is available in ${destinationNamesStr}`
        : `${clickedServiceName} is not available anywhere`
    );
  }
});
