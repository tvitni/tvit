'use strict';

let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
	while(isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}

// but.onclick = start();



let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true,
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
	// Расчет дневного бюджета
	detectDayBudget: function() {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		alert("Ежедневный бюджет: " + appData.moneyPerDay);
		},
	// Расчет уровня достатка
	detectLevel: function() {
		if (appData.moneyPerDay < 100) {
			console.log("Ты нищеброд");
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log("Заработал на мороженку");
		} else if (appData.moneyPerDay > 2000) {
			console.log("Да ты приуспел с баблишком))");
		} else {
			console.log("Что-то пошло ни так и ты все сломал, зачем ты так?");
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
			appData.income = items.split(', ');
			appData.income.push(prompt('может, что-то еще?', ''));
			appData.income.sort();
		  appData.income.forEach (function (key, num)	{
			alert("Способы доп. заработка: " + (num+1) + - " - " + key);
			});
		} else {
			i = i - 1;
		}
		}
	}
};

for (let n in appData) {
	console.log("Наша программа включает в себя данные: " + n + " - " + appData[n]);
	}
