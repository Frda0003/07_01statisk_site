const categoryListContainer = document.querySelector(".category_list_container");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((data) => showCategories(data));

function showCategories(data) {
  const markup = data
    .map(
      (category) =>
        `   <a href="produktliste.html?category=${category.category}">
                    <div class="card">${category.category}</div>
                </a>`
    )
    .join("");
  categoryListContainer.innerHTML = markup;
}
