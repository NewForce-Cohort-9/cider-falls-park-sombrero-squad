const mainContainer = document.querySelector("#container");


import { ServiceList } from "./services.js";
import { Navbar } from "../UI/navBar.js";
import { Destinations } from "./destinations.js";
import { guestList } from "./guests.js";


const destinations = document.querySelector(".destinations");
const mainContainer = document.querySelector("#container");
const services = document.querySelector(".services");
const navContainer = document.querySelector(".navbar");
const guests = document.querySelector(".guests");


services.innerHTML = ServiceList();
navContainer.innerHTML = Navbar();
guests.innerHTML = guestList();
destinations.innerHTML = Destinations();


