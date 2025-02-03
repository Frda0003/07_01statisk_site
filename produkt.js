let productId = 1587;

let productContainer = document.querySelector(".product_container");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
         
    <div class="product_display"><img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="${data.productdisplayname}"></div>

            <div class="product_information">
                <h1>Product Information</h1>
                
                <h3>Model name</h3>
                <p>${data.productdisplayname}</p>
                
                <h3>Color</h3>
                <p>${data.basecolour}</p>
                
                <h3>Inventory number</h3>
                <p>${data.relid}</p>
                
                <h2>${data.brandname}</h2>
                <p>${data.brandbio}</p>
            </div>

            <div class="buy_section">
                <h1>${data.productdisplayname}</h1>
                <p>${data.brandname} / ${data.articletype}</p>
                <h3>Choose a size</h3>
                <div class="size_button">S ⬇
                </div>
                <div class="buy_button">Add to basket</div>
            </div>
    
            `;
  });
