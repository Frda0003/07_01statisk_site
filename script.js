document.getElementById("menu-icon").addEventListener("click", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
});

// document.querySelectorAll("button").forEach((knap) => knap.addEventListener("click", visFiltreret));

// let allData;

// fetch(endpoint)
//   .then((response) => response.json())
//   .then((json) => {
//     allData = json;
//     showList(allData);
//   });

// function visFiltreret() {
//   const filter = this.dataset.gender;
//   if (filter == "unisex") {
//     showList(allData);
//   } else {
//     fraction = allData.filter((product) => product.gender === filter);
//     showList(fraction);
//   }
// }

// function showList(data) {
//   const markup = data
//     .map(
//       (product) =>
//         `
//                     <div class="card_productlist">

//                     <div class=" ${product.discount && "nedsat"}">-${product.discount}% </div>
//                     <div class=" ${product.soldout && "udsolgt"}"><h1>Sold Out</h1></div>
//                     <div></div>
//                     <a href="produkt.html?product=${product.id}">
//                         <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}"></a>
//                         <div class="display_name">
//                             <h3>${product.productdisplayname}</h3>
//                         </div>
//                         <div class="article_type">
//                             ${product.articletype} / ${product.brandname}
//                         </div>
//                         <div class="price">
//                             <p>DKK ${product.price}</p>
//                         </div>
//                     <div class="${product.discount ? "discount_price" : ""}">
//                     ${product.discount ? `Now DKK ${Math.round(product.price - product.price * (product.discount / 100))} ` : ""}
//                     </div>

//                     </div>
//                 `
//     )
//     .join("");
//   productListContainer.innerHTML = markup;
// }

document.getElementById("select-size-button").addEventListener("click", function () {
  const selectedSize = document.getElementById("size-select").value;
  const sizeMessage = document.getElementById("size-message");

  if (selectedSize) {
    sizeMessage.textContent = `You have selected size: ${selectedSize}`;
  } else {
    sizeMessage.textContent = "Please select a size.";
  }
});
