const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const myProduct = urlParams.get(`product`);

let productContainer = document.querySelector(".product_container");

fetch(`https://kea-alt-del.dk/t7/api/products/${myProduct}`)
  .then((response) => response.json())

  .then((data) => {
    productContainer.innerHTML = `
         
    <div class="product_display"> 
 
    ${data.discount ? `<div class="nedsat_produkt">-${data.discount}%</div>` : ""} 
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="${data.productdisplayname}">
                 </div>

            <div class="product_information">
           
                 <div class="category_type">Category: <br> <br>
            <p>${data.category}</p></div>


             <div class="article_type_product ">Type: <br> <br>
            <p>${data.articletype}</p></div>
                  

               <div class="color">Color: <br> <br>
            <p>${data.basecolour}</p></div>

               
            <div class="brand_info">${data.brandname}: <br> <br>
           <p>${data.brandbio}</p></div>
                
            </div>

            <div class="buy_section">
               
            <div class="buysection_display_name"> 
            ${data.productdisplayname}
            </div>

              <div class="price_product">
                DKK ${data.price}
            </div>

            <div class="${data.discount ? "discount_price_product" : ""}">
                    ${data.discount ? `Now DKK ${Math.round(data.price - data.price * (data.discount / 100))} ` : ""}
                    </div>

              <div class="size-dropdown-container">
        <label for="size-select">Choose a size:</label> <br>
        <select id="size-select" class="size-select">
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
        </select>
    </div>

      <div class="add-to-basket-container">
            <button id="add-to-basket-button" class="add-to-basket-button">Add to Basket</button>
        </div>
            </div>
    
            `;
  });
