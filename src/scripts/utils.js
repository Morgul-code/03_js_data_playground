export function getAllOrders(users) {
  return users.flatMap(user => user.orders);
}

export function getAllItems(users) {
  return users
    .flatMap(user => user.orders)
    .flatMap(order => order.items);
}

export function getUserTotal(user) {
  return user.orders
    .flatMap(order => order.items)
    .reduce(
      (userTotal, item) => userTotal + item.price * item.quantity,
      0
    );
}

export function getTotalRevenue(users) {
  return users.reduce(
    (totalRevenue, user) => totalRevenue + getUserTotal(user),
    0
  );
}

export function getMostExpensiveItem(users) {
  const items = getAllItems(users);
  if (items.length === 0) return null;

  return items.reduce((mostExpensive, item) => {
    return item.price > mostExpensive.price
      ? item
      : mostExpensive
  });
}

export function getUniqueProductNames(users) {
  const items = getAllItems(users);

  const names = items.map(item => item.name);

  return [...new Set(names)];
}

export function filterUsersByMinSpend(users, minSpend) {
  return users.filter(user => getUserTotal(user) >= minSpend)
}

export function searchUsers(users, query) {
  const normalizedQuery = query.trim().toLowerCase();

  return users.filter(user =>
    user.name.toLowerCase().includes(normalizedQuery)
  );
}

function sortByName(users) {
  return users.toSorted((a, b) => {
    return a.name.localeCompare(b.name, "en");
  })
}

function sortBySpendAsc(users){
  return users.toSorted((a, b) => {
    return getUserTotal(a) - getUserTotal(b);
  })
}

function sortBySpendDesc(users){
  return users.toSorted((a, b) => {
    return getUserTotal(b) - getUserTotal(a);
  })
}

export function sortUsers(users, sortBy) {
  switch (sortBy) {
    case "name": {
      return sortByName(users);
    }
    case "spend-asc": {
      return sortBySpendAsc(users);
    }
    case "spend-desc": {
      return sortBySpendDesc(users);
    }
    default: {
      return [...users];
    }
  }
}