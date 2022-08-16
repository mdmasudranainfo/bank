//
//
//
//
//
//
//
document.getElementById("diposit-btn").addEventListener("click", function () {
  // diposit input
  const depositInput = document.getElementById("diposit-input");
  const dipositValueString = depositInput.value;
  const dipositValue = parseFloat(dipositValueString);

  //   diposit total balance
  const depoAmaunt = document.getElementById("dipo-amaunt");
  const depositBalanceString = depoAmaunt.innerText;
  const depositBalance = parseFloat(depositBalanceString);
  const totalDeposit = dipositValue + depositBalance;

  depoAmaunt.innerText = totalDeposit;

  //   total balance
  const totalBalancePrev = document.getElementById("total-balance");
  const totalBalancePrevString = totalBalancePrev.innerText;
  const totalBlancePre = parseFloat(totalBalancePrevString);
  //   calculate
  const totalBalance = totalBlancePre + dipositValue;
  totalBalancePrev.innerText = totalBalance;

  //   clear input fild
  depositInput.value = "";
});
