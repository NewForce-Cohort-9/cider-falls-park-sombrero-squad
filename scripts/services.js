import {
  getDestinations,
  getServices,
  getServiceDestinations,
} from "./database.js";

const services = getServices();
const destinations = getDestinations();
const serviceDestinations = getServiceDestinations();

const ServiceIntro = () => {
  return `
  <div class="services__intro">
  <h3>Park Services</h3>
  <div class="services__intro-grid">
  <img 
  class="services__intro-img"
  src="https://img.freepik.com/free-photo/beautiful-shot-forest-with-tall-green-trees_181624-20615.jpg"/>
  <img 
  class="services__intro-img"
  src="https://outdoorbeginner.files.wordpress.com/2019/01/beginners-guide-to-grand-teton-hiking-itinerary-e1599526796664.jpg"/> 
  <img 
  class="services__intro-img"
  src="https://aceraft.com/wp-content/uploads/2019/04/zip-3.jpg"/> 
  <img 
  class="services__intro-img"
  src="https://res.cloudinary.com/simpleview/image/upload/v1685621548/clients/newyorkstate/dolinskysteve_Instagram_2829_ig_17877529189645357_ec679014-9e9a-43c9-8370-cdf53d0e0afb.jpg"/>  
</div> 
  </div>
  `;
};

export const ServicesMain = () => {
  return `
    <div class="services__ctn">
    ${ServiceIntro()}
    ${ServiceList()}
      </div>    
  `;
};

export const ServiceList = () => {
  let serviceHTML = `<ul class="services__list">`;

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
    const destinationNamesStr = matchingDestinationNames.join(", ");

    //if string is truthy, use the string message, otherwise leave a default message.
    window.alert(
      destinationNamesStr
        ? `${clickedServiceName} is available in ${destinationNamesStr}`
        : `${clickedServiceName} is not available anywhere`
    );
  }
});
