const currency_one = document.getElementById("currency-one");
const currency_two = document.getElementById("currency-two");
const amount_one = document.getElementById("amount-one");
const amount_two = document.getElementById("amount-two");
const rateE1 = document.getElementById("rate");
const swap = document.getElementById("swap");

function calculate(){
    const currencyE1_one = currency_one.Value;
    const currencyE1_two = currency_two.Value;

    fetch("https://open.exchangerate-api.com/v6/latest")
    .then(res => res.json())
    .then(data => {
        const rate = data.rates[currencyE1_two] / data.rates[currencyE1_one];
        rateE1.innerText = `1 ${currencyE1_one} = ${rate} ${currencyE1_two}`
        amount_two.value =(amount_one.value * rate).toFixed(2);

});

}

currency_one.addEventListener('change',calculate);
amount_one.addEventListener('input',calculate);
currency_two.addEventListener('change',calculate);
amount_two.addEventListener('input',calculate);

swap.addEventListener('click',()=> {
    const temp= currency_one.value;
    currency_one.value= currency_two.value;
    currency_two.value=temp;

    calculate();
}
)