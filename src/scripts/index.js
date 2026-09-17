import { users } from "./data.js";

import {
  searchUsers,
  filterUsersByMinSpend,
  sortUsers,
} from "./utils.js";

import {
  renderUsers,
  renderStats,
  renderUniqueProducts,
} from "./render.js";

const searchInput = document.querySelector("#search");
const sortSelect = document.querySelector("#sort");
const minSpendInput = document.querySelector("#min-spend");

const statisticsContainer = document.querySelector("#statistics");
const usersContainer = document.querySelector("#users");
const productsContainer = document.querySelector("#unique-products");

function renderApp() {
  const query = searchInput.value;
  const minSpend = Number(minSpendInput.value);
  const sortBy = sortSelect.value;

  let result = users;

  result = searchUsers(result, query);
  result = filterUsersByMinSpend(result, minSpend);
  result = sortUsers(result, sortBy);

  renderUsers(usersContainer, result);
  renderStats(statisticsContainer, result);
  renderUniqueProducts(productsContainer, result);
}

searchInput.addEventListener("input", renderApp);

minSpendInput.addEventListener("input", renderApp);

sortSelect.addEventListener("change", renderApp);

renderApp();