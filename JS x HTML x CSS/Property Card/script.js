import properties from "./properties.js";

let propertyContainer = document.getElementById("property-container");

function getPropertyHtml(property) {
  const { name, price, description, area, rooms, image } = property;

  const totalRooms = rooms.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  return `
    <div class="property-card">
      <img src="${image}" alt="${name}" />
      <div class="property-details">  
        <h2>${name}</h2>
        <p>Price: ${price}</p>
        <p>Rooms: ${totalRooms}</p>
        <p>Description: ${description}</p>
        <p>Area: ${area}</p>
      </div>
    </div>
  `;
}

propertyContainer.innerHTML = properties.map(getPropertyHtml).join("");
