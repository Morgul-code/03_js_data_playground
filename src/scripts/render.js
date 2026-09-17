import {
  getAllOrders,
  getMostExpensiveItem,
  getTotalRevenue, getUniqueProductNames,
  getUserTotal
} from "./utils.js";

export function renderUsers(container, users) {
  if (users.length === 0) {
    container.innerHTML = "No users found";
    return;
  }

  container.innerHTML = users
    .map(user => {
      return `
        <article class="user-card">
          <h3>${user.name}</h3>
          <p>Orders: ${user.orders.length}</p>
          <p>Total Spent: ${getUserTotal(user)}</p>
        </article>
      `;
    })
    .join("");
}

export function renderStats(container, users) {
  const mostExpensiveItem = getMostExpensiveItem(users)
  container.innerHTML = `
    <div class="statistic">
      <span>Users</span>
      <strong>${users.length}</strong>
    </div>
    <div class="statistic">
      <span>Orders</span>
      <strong>${getAllOrders(users).length}</strong>
    </div>
    <div class="statistic">
      <span>Revenue</span>
      <strong>${getTotalRevenue(users)}</strong>
    </div>
    <div class="statistic">
      <span>Most expensive item</span>
      <strong>
        ${mostExpensiveItem
    ? `${mostExpensiveItem.name} - ${mostExpensiveItem.price}`
    : null}
      </strong>
    </div>`
}

export function renderUniqueProducts(container, users) {
  const uniqueProductNames = getUniqueProductNames(users);

  if (uniqueProductNames.length === 0) {
    container.innerHTML = "No products found";
    return;
  }

  container.innerHTML = `
    <ul class="products-list">
      ${uniqueProductNames
    .map(productName => `<li>${productName}</li>`)
    .join("")}
    </ul>
  `;
}