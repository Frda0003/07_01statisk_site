const productListContainer = document.querySelector(".product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products?limit=100`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map(
      (product) =>
        ` <a href="produkt.html">
                    <div class="card_productlist">
                        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}">
                        <div class="display_name">
                            <h3>${product.productdisplayname}</h3>
                        </div>
                        <div class="article_type">
                            ${product.articletype} / ${product.brandname} 
                        </div>
                        <div class="price">
                            <p>DKK ${product.price}</p>
                        </div>
                    </div>
                </a>`
    )
    .join("");
  productListContainer.innerHTML = markup;
}
