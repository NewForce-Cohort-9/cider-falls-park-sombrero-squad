import { guestList } from "./guests.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Cider Falls Park</h1>

<main class="main-content">
    <section class="services">
        
       
    </section>

    <section class="destinations">
        <h2>Destinations</h2>
        
    </section>

    <section class="guests">
        <h2>Guests</h2>
        ${guestList()}
    </section>
</main>
`

mainContainer.innerHTML = applicationHTML


// mainContainer.innerHTML = guestList()
// mainContainer.innerHTML +=     List()
// mainContainer.innerHTML +=     List()


// import { ServiceList } from "./services.js";
// import { Navbar } from "../UI/navBar.js";
// import { guestList } from "./guests.js"

// const mainContainer = document.querySelector("#container");
// const services = document.querySelector(".services");
// const navContainer = document.querySelector(".navbar");
// const guests=document.querySelector(".guests");

// services.innerHTML = ServiceList();
// navContainer.innerHTML = Navbar();
// guests.innerHTML = guestList();