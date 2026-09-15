export function getAllOrders(users){
  return users.flatMap(user => user.orders);
}
// getAllItems(users)
// getUserTotal(user)
// getTotalRevenue(users)