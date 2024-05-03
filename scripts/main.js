const mainContainer = document.querySelector("#container");

// for services
import { ServiceList } from "./services.js";
import { Navbar } from "../UI/navBar.js";
const services = document.querySelector(".services");
const navContainer = document.querySelector(".navbar");
services.innerHTML = ServiceList();
navContainer.innerHTML = Navbar();

//for destinations
import { Destinations } from "./destinations.js";

const destinations = document.querySelector(".destinations");
destinations.innerHTML = Destinations();