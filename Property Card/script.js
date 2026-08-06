import { properties } from "./properties.js";

let propertyContainer = document.getElementById("property-container");

function getPropertyHtml(property) {
  return `
    <div class="property-card">
      <img src="${property.image}" alt="${property.name}" />
      <div class="property-details">  
        <h2>${property.name}</h2>
        <p>Price: ${property.price}</p>
        <p>Description: ${property.description}</p>
        <p>Area: ${property.area}</p>
      </div>
    </div>
  `;
}

propertyContainer.innerHTML = properties.map(getPropertyHtml).join("");
