'use strict';

let start = document.getElementById('start'),
chec = document.querySelector('#savings'),

budget = document.querySelector('.budget-value'),
daybudget = document.querySelector('.daybudget-value'),
level = document.querySelector('.level-value'),
expenses = document.querySelector('.expenses-value'),
optionalexpenses = document.querySelector('.optionalexpenses-value'),
income = document.querySelector('.income-value'),
monthsavings = document.querySelector('.monthsavings-value'),
yearsavings = document.querySelector('.yearsavings-value'),
expenses1 = document.querySelector('#expenses_1'),
expenses2 = document.querySelector('#expenses_2'),
expenses3 = document.querySelector('#expenses_3'),
expenses4 = document.querySelector('#expenses_4'),

expensesItem = document.querySelectorAll('.expenses-item'),
optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),

chooseIncome = document.querySelector('#income'),
chooseSum = document.querySelector('#sum'),
choosePercent = document.querySelector('#percent'),
yearValue = document.querySelector('.year-value'),
monthValue = document.querySelector('.month-value'),
dayValue = document.querySelector('.day-value'),
timeData = document.querySelector('.time-data'),

timeDataVal = timeData.getElementsByTagName('input'),
approve = document.getElementsByTagName('button')[0],
approve2 = document.getElementsByTagName('button')[1],
calculate = document.getElementsByTagName('button')[2];


let money, time, levelVal;


//Спрашиваем дату и бюджет, далее прописываем в импут. 
start.addEventListener('click', function() {
	appData.dataApp();
	if(appData.budget == undefined){
	appData.budgetApp();
		}
});

// Рассчитываем бюджет на день и уровень достатка, при клике на кнопку "Рассчитать"
calculate.addEventListener('click', function() {
	if(appData.budget == undefined){
		appData.budgetApp();
			}
  appData.detectDayBudget();
  daybudget.textContent = appData.moneyPerDay;
  appData.detectLevel();
	level.textContent = levelVal;
}); 

// Обязательные расходы
approve.addEventListener('click', function(){
  
  appData.expenses[expenses1.value] = +expenses2.value;
  appData.expenses[expenses3.value] = +expenses4.value;
  let val = 0; 
  for (let num in appData.expenses){ 
  val = val + appData.expenses[num];
  }
	expenses.textContent = val;
	for (let i = 0; i < 4; i++){
		expensesItem[i].value = "";
	}
  
});  

// Необязательные расходы
approve2.addEventListener('click', function(){
	// Защита от перезаписи в обьекте +1
	let leng = 0;
	for (let s in appData.optionalExpenses) {
		leng++;
		}
		// Парсим значения в обьект
	for (let i = 0; i < optionalexpensesItem.length; i++){
		appData.optionalExpenses[i + leng] = +optionalexpensesItem[i].value;
		}
		// Складываем полученные значения
	let val = 0; 
	for (let num in appData.optionalExpenses){ 
		val = val + appData.optionalExpenses[num];
		}
		// Устанавливаем полученное значение
		optionalexpenses.textContent = val;
		// Очистка строк
	for (let i = 0; i < 3; i++) {
			optionalexpensesItem[i].value = "";
		}
});

// Чек-бокс
chec.addEventListener('click', function() {
	if (chec.checked) {
		appData.savings = true;
	} else {
		appData.savings = false;
	}
});

// Возможный доход
chooseIncome.addEventListener('input', function(){
	appData.income = chooseIncome.value.split(', ');
	income.textContent = chooseIncome.value;
});

//Накопления 
chooseSum.addEventListener('input', function(){
	if(appData.savings == true){
		appData.monthIncome = +chooseSum.value/100/12*+choosePercent.value;
		appData.yearIncome = +chooseSum.value/100*+choosePercent.value;

		monthsavings.textContent = appData.monthIncome;
		yearsavings.textContent = appData.yearIncome;
	}
});
//Накопления %
choosePercent.addEventListener('input', function(){
	if(appData.savings == true){
		appData.monthIncome = +chooseSum.value/100/12*+choosePercent.value;
		appData.yearIncome = +chooseSum.value/100*+choosePercent.value;

		monthsavings.textContent = appData.monthIncome.toFixed(1);
		yearsavings.textContent = appData.yearIncome.toFixed(1);

	}
});



let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false,
	chooseExpenses: function() {
		for (let i = 0; i < 2; i++) {
			let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
				b = +prompt("Во сколько обойдется?", '');
			if ((typeof (a) === 'string') && (a | b != "") && (a | b != " ") && (a.length < 50)) {
				appData.expenses[a] = b;
				console.log("ez " + a);
			} else {
				alert("Вы не ввели расходы, повторите попытку");
				i = i - 1;
			}
		}
		},
	// Расчет уровня достатка
	detectLevel: function() {
		if (appData.moneyPerDay < 100) {
			levelVal = "Ты нищеброд";
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			levelVal = "Заработал на мороженку";
		} else if (appData.moneyPerDay > 2000) {
			levelVal = "Да ты приуспел с баблишком))";
		} else {
			levelVal = "Что-то пошло ни так и ты все сломал, зачем ты так?";
		}
		},
	checkSevings: function() {
		if (appData.savings == true){
			let save = +prompt("Какова сумма накоплений?"),
			percent = +prompt("под какой процент?");
	
			appData.montIncome = save/100/12*percent;
			alert("Доход в месяц с депозита: " + appData.montIncome);
		}
	  },
	// Функция для определения необязательных расходов
  chooseOptExpenses: function() {
		for (let i = 0; i <3; i++) {
		let b = prompt("Статья необязательных расходов?");
		appData.optionalExpenses[i] = b; 
	}
		},
	chooseIncome: function() {
		for (let i = 0; i < 1; i++ ) {
			let items = prompt('Что принесет доп. доход? (Перечислите это через запятую)', '');
			if ((typeof (items) === 'string') && (items != "") && (items != " ") && (items != null)){
			appData.income = items.split(', '); //Превращаем строку в массив
			appData.income.push(prompt('может, что-то еще?', '')); //Добавляем элемент в конец массива.
			appData.income.sort(); //Сортируем
		  appData.income.forEach (function (key, num)	{ //Перебераем массив
			alert("Способы доп. заработка: " + (num+1) +  " - " + key);
			});
		} else {
			i = i - 1;
		}
		}
	},
	dataApp: function() {
		time = prompt('Введите дату в формате YYYY-MM-DD', '');
		appData.timeData = time;
		// yearValue.value = new Date(Date.parse(time)).getMonth();
		let splitDate = appData.timeData.split('-');
		for (let i = 0; i < 3; i++) { 
			timeDataVal[i].setAttribute('value', splitDate[i]);
				}
		},
	budgetApp: function(){
		money = +prompt("Ваш бюджет на месяц?", '');
  
	while(isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
  }
  appData.budget = money;
  budget.textContent = money.toFixed();
	}
};