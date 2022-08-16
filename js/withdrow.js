//
//
//
//
//
//
//
//
//
//
//

document.getElementById("widthdrow-btn").addEventListener("click", function () {
  // get withdrow input
  const widthdrowInput = document.getElementById("widthdrow-input");
  const widthdrowInputString = widthdrowInput.value;
  const widthdrowInputAmaunt = parseFloat(widthdrowInputString);
  //   get withdrow total
  const totalWithdrowPrev = document.getElementById("total-withdrow");
  const totalWithdrowPrevString = totalWithdrowPrev.innerText;
  const totalWithdrowBalance = parseFloat(totalWithdrowPrevString);

  //   get total balance
  const totalBalanceElement = document.getElementById("total-balance");
  const totalBalanceElementString = totalBalanceElement.innerText;
  const prevBalance = parseFloat(totalBalanceElementString);

  totalBalanceElement;
  console.log({ widthdrowInputAmaunt, prevBalance });
  if (widthdrowInputAmaunt > prevBalance) {
    alert("have not your balance");
    return;
  } else {
    const balanceCalc = prevBalance - widthdrowInputAmaunt;
    totalBalanceElement.innerText = balanceCalc;
    //   calculate
    const calcWithdrow = widthdrowInputAmaunt + totalWithdrowBalance;
    totalWithdrowPrev.innerText = calcWithdrow;
  }
  widthdrowInput.value = "";
});
