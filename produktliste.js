const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const myCategory = urlParams.get(`category`);

const productListContainer = document.querySelector(".product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map(
      (product) =>
        ` 
                    <div class="card_productlist">
                    
                    <div class=" ${product.discount && "nedsat"}">-${product.discount}% </div>       
                    <div class=" ${product.soldout && "udsolgt"}"><h1>Sold Out</h1></div>
                    <div></div>
                    <a href="produkt.html?product=${product.id}">
                        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}"></a>
                        <div class="display_name">
                            <h3>${product.productdisplayname}</h3>
                        </div>
                        <div class="article_type">
                            ${product.articletype} / ${product.brandname} 
                        </div>
                        <div class="price">
                            <p>DKK ${product.price}</p>
                        </div>
                    <div class="${product.discount ? "discount_price" : ""}">
                    ${product.discount ? `Now DKK ${Math.round(product.price - product.price * (product.discount / 100))} ` : ""}
                    </div>

                    </div>
                `
    )
    .join("");
  productListContainer.innerHTML = markup;
}
