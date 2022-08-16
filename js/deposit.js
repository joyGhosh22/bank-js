document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-amount');
    const depositAmountString = depositField.value;
    const newDepositAmount = parseFloat(depositAmountString);

    const currentDepositAmountField = document.getElementById('deposit-total');
    const currentDepositAmountString = currentDepositAmountField.innerText;
    const previousDepositAmount = parseFloat(currentDepositAmountString);

    depositField.value = "";

    if (isNaN(newDepositAmount)) {
        alert('please input dollar amount only');
        return;
    }
    if (newDepositAmount <= 0) {
        alert('plz input amount greater than 0');
        return;
    }
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalString);



    const totalDepositAmount = previousDepositAmount + newDepositAmount;
    currentDepositAmountField.innerText = totalDepositAmount;

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;



})

