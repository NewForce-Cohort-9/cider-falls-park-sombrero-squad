import { ServiceList } from "./services.js";
import { Navbar } from "../UI/navBar.js";

const mainContainer = document.querySelector("#container");
const services = document.querySelector(".services");
const navContainer = document.querySelector(".navbar");

services.innerHTML = ServiceList();
navContainer.innerHTML = Navbar();
