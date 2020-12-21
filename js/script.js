var burgerName = document.getElementById('burger-name');
var costs = document.getElementsByClassName('ingredients-container')[0].getElementsByClassName('ingredient');
var total;
var totalHtmlElement = document.getElementById('total');
var couponsInput = document.getElementById('discount-coupon');
var coupons = ['824hr', '260nq', '86ngi', '91uvp'];

document.getElementById('button').addEventListener('click', function() {
  total = 50;
  for (var i = 0; i < costs.length; i++) {
    if (costs[i].checked === true) {
      total += parseInt(costs[i].value);
    }
  }

  for(var x = 0; x < coupons.length; x++) {
    if (couponsInput.value === coupons[x]) {
      total -= (total * 20) / 100;
    }
  }

  totalHtmlElement.getElementsByTagName('span')[0].innerText = total;
})
