let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
	while(isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}

but.onclick = start();



let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};



function chooseExpenses() {
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
}

chooseExpenses()

function detectDayBudget() {
appData.moneyPerDay = (appData.budget / 30).toFixed();
alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();


function detectLevel() {
if (appData.moneyPerDay < 100) {
	console.log("Ты нищеброд");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Заработал на мороженку");
} else if (appData.moneyPerDay > 2000) {
	console.log("Да ты приуспел с баблишком))");
} else {
	console.log("Что-то пошло ни так и ты все сломал, зачем ты так?");
};
}
detectLevel();

function checkSevings(){
	if (appData.savings == true){
		let save = +prompt("Какова сумма накоплений?"),
		percent = +prompt("под какой процент?");

		appData.montIncome = save/100/12*percent;
		alert("Доход в месяц с депозита: " + appData.montIncome);
	}
}

checkSevings();


function chooseOptExpenses() {
	for (let i = 0; i <3; i++) {
	let b = prompt("Статья необязательных расходов?");
	appData.optionalExpenses[i] = b; 
}
}

chooseOptExpenses();