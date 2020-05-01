let money,
  time;

var appData = {
  moneyApp: money,
  timeApp: time,
  expenses: {},
  optionalExpenses:{},
  income: [],
  savings: false
};



appButton.onclick = () => {
let text1 = document.getElementById('text1').value;
let text2 = document.getElementById('text2').value;
let text3 = document.getElementById('text3').value;
let number1 = document.getElementById('number1').value;
let number2 = document.getElementById('number2').value;
let number3 = document.getElementById('number3').value;

money = document.getElementById('money').value;
time = document.getElementById('dates').value;

appData.expenses[text1] = number1;
appData.expenses[text2] = number2;
appData.expenses[text3] = number3;
appData.moneyApp = money;

alert(appData.moneyApp / 30);

console.log(appData["expenses"]);
};




// https://qna.habr.com/q/611942 
// 5) Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней, использовать alert)