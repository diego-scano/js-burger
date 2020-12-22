var burgerBaseCost = 50;
var discount = 0.2;
var minIngredients = 2;
var coupons = ['8sntod', 'dbrkg1', 'acyxvr', 'azzfbq', 'fyt8ul'];

var totalHtml = document.getElementById('total');
var cost;
var checkboxes = document.getElementsByClassName('list-container')[0].getElementsByTagName('input');
var checkboxCounter = 0;
var inputName = document.getElementById('burger-name');
var userCoupon = document.getElementById('discount-input');

document.getElementById('button').addEventListener('click', function() {

  checkboxCounter = 0;
  cost = burgerBaseCost;

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkboxCounter++;
      cost += parseInt(checkboxes[i].value);
    }
  }

  if (inputName.value.length === 0) {
    alert('Inserisci un nome per il tuo Burger');
  } else if (checkboxCounter < minIngredients) {
    alert('Inserisci almeno ' + minIngredients + ' ingredienti');
  } else {
    if (coupons.indexOf(userCoupon.value) !== -1) {
      cost -= cost * discount;
    }

    totalHtml.innerText = cost;
  }

  });
