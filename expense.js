const balanse = document.getElementById('balance');
const income = document.getElementById('money-plus');
const expense = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const localStorageTransactions = JSON.parse(
    localStorage.getItem('transactions')
);

let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : []
function generateId(){
    return Math.floor(Math.random()*1000000000)
}
function addTransaction(e){
    e.preventDefault();

    if( text.Value.trim() === '' || amount.Value.trim() === ''){
        alert('please add a text and amount');
    }else{
        const transaction ={
            id: generateId(),
            text: text.value ,
            amount : amount.value
        }

        transactions.push(transaction);

        addTransactionDOM(transaction);
        updatevalues();
        updateLocalStorage();

        text.value = '';
        amount.value = '';
    }
};

function addTransactionDOM(transaction){
    const sign = transaction.amount < 0 ? '-' : '+';
    const item = document.createElement('li');

    item.classList.add( transaction.amount < 0 ? 'minus' : 'plus');
    item.innerHTML = ` ${transaction.text}
    <span>${sign} ${Math.abs(transaction.amount)}</span><button class="delete-btn" onClick="removeTransaction(${transaction.id})">x</button>
"`
    list.appendChild(item);
}
 


function updatevalues(){
    const incomeTotal = amount
  .filter(item => item > 0)
  .reduce((acc, item) => acc + item, 0)
  .toFixed(2);

const expenseTotal = amount
  .filter(item => item < 0)
  .reduce((acc, item) => acc + item, 0) * -1
  .toFixed(2);

const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);

balanse.innerText = `$${total}`;
income.innerText = `$${incomeTotal}`;
expense.innerText = `$${expenseTotal}`;
}


function updateLocalStorage(){
    localStorage.setItem('transactions', JSON.stringify(transactions));

}

function removeTransaction(id){
    function removeTransaction(id){
    transactions = transactions.filter(money => money.id !== id);
    updateLocalStorage();
    init();
}

}

function init(){
    list.innerHTML = '';
    transactions.forEach(addTransactionDOM);
    updatevalues();
}

init();
form.addEventListener('submit', addTransaction);