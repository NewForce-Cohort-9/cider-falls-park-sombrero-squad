const mainContainer = document.querySelector("#container");
const services = document.querySelector(".services");
const navContainer = document.querySelector(".navbar");

// for services
import { ServiceList } from "./services.js";
import { Navbar } from "../UI/navBar.js";
services.innerHTML = ServiceList();
navContainer.innerHTML = Navbar();

//for destinations
import { Destinations } from "./destinations.js";
mainContainer.innerHTML = Destinations();