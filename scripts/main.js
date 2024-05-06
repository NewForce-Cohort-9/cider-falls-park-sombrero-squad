import { ServicesMain } from "./services.js";
import { Destinations } from "./destinations.js";
import { guestList } from "./guests.js";

const destinations = document.querySelector(".destinations");
const services = document.querySelector(".services");
const guests = document.querySelector(".guests");

services.innerHTML = ServicesMain();
guests.innerHTML = guestList();
destinations.innerHTML = Destinations();
