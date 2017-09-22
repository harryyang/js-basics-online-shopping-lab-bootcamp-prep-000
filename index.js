var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  cart.push ({[item]: price})
  console.log (`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
    return
  }
  var statement = 'In your cart, you have '
  for (var i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i]);
      statement += item + " at $" + cart[i][item] + ", "
  }
  statement = statement.slice(0,-2)
  statement += '.'
  console.log(statement);
  return
}

function total() {
  let t = 0
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
