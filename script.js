"use strict";

window.addEventListener("load", startApp);

function startApp() {
  //console.log("app is running...");

  document.querySelector("#address-form").addEventListener("submit", submitClicked);
}

function submitClicked(event) {
  console.log("Current target:");
  console.log(event.currentTarget);

  event.preventDefault();

  const form = {
    fullname: document.querySelector("#address-form").elements.namedItem("fullname").value,
    streetname: document.querySelector("#address-form").elements.namedItem("streetname").value,
    housenumber: document.querySelector("#address-form").elements.namedItem("housenumber").value,
    postalcode: document.querySelector("#address-form").elements.namedItem("postalcode").value,
    city: document.querySelector("#address-form").elements.namedItem("city").value,
    altaddress: document.querySelector("#address-form").elements.namedItem("altaddress").value,
    phone: document.querySelector("#address-form").elements.namedItem("phone").value,
    email: document.querySelector("#address-form").elements.namedItem("email").value,
  };

  console.log(form);
}

async function getCityInfo() {
  let postalCode = document.getElementById("postalcode").value;

  const response = await fetch(`https://api.dataforsyningen.dk/postnumre/${postalCode}`);
  const data = await response.json();

  document.getElementById("city").value = "a city?";
  console.log(data);
}
