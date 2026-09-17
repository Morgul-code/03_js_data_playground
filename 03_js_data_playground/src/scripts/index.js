import {users} from "./data.js";
import {
  filterUsersByMinSpend,
  getAllItems,
  getAllOrders, getMostExpensiveItem,
  getTotalRevenue, getUniqueProductNames,
  getUserTotal, searchUsers, sortUsers
} from "./utils.js";
import {renderStats, renderUniqueProducts, renderUsers} from "./render.js";

const orders = getAllOrders(users);
const items = getAllItems(users);
// const userTotal = getUserTotal()
const totalRevenue = getTotalRevenue(users)
const mostExpensive = getMostExpensiveItem(users)
const uniqueName = getUniqueProductNames(users)
// filterUsersByMinSpend(users, 50000)
// searchUsers(users, 'Mar')

console.log(renderUniqueProducts([], users))