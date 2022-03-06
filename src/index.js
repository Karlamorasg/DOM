/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log("Happy hacking :) ____");

const BASEURL = "https://platzi-avo.vercel.app";
const appNode = document.querySelector("#app");

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("es", {
    style: "currency",
    currency: "EUR",
  }).format(price);

  return newPrice;
};

//intl --> api para dar formato a monedas o fechas (MDN)

const info = async function () {
  const response = await fetch(`${BASEURL}/api/avo`);
  const responseJason = await response.json();
  const todosLosItems = [];
  responseJason.data.forEach((item) => {
    const imagen = document.createElement("img");
    imagen.src = `${BASEURL}${item.image}`;
    imagen.className = "img";

    const title = document.createElement("h2");
    title.textContent = item.name;
    title.className = "title";

    const price = document.createElement("div");
    price.textContent = formatPrice(item.price);
    price.className = "price";

    const container = document.createElement("div");
    container.className = "aguacate-container";
    container.append(imagen, title, price);
    todosLosItems.push(container);
  });

  appNode.append(...todosLosItems);
};

info();
