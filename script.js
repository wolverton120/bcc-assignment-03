const input = document.getElementById("inputfield");
const button = document.getElementById("searchbutton");
const container = document.getElementById("cardgrid");

function fetchMeals(country) {
  container.innerHTML = "";
  let url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + country;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.meals) {
        data.meals.forEach(meal => {
          let card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3>${meal.strMeal}</h3>
          `;
          container.appendChild(card);
        });
      } else {
        container.innerHTML = "<p>No meals found for \"" + country + "\"</p>";
      }
    });
}

button.addEventListener("click", function() {
  let country = input.value.trim();
  if (country) {
    fetchMeals(country);
  }
});

input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    let country = input.value.trim();
    if (country) {
      fetchMeals(country);
    }
  }
});


