import {users} from "./data.js";
import {getAllOrders} from "./utils.js";

const orders = getAllOrders(users);
console.log(orders)