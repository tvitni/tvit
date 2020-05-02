let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};




// for (let i = 0; i < 2; i++) {

// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		b = +prompt("Во сколько обойдется?", '');
// 	if ((typeof (a) === 'string') && (a | b != "") && (a | b != " ") && (a.length < 50)) {
// 		appData.expenses[a] = b;
// 		console.log("ez " + a);
// 	} else {
// 		console.log(typeof (a) + " остаток");
// 		alert("Вы не ввели расходы, повторите попытку");
// 		a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 			b = +prompt("Во сколько обойдется?", '');
// 	}
// };

let star = 0;
while (star < 2) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = +prompt("Во сколько обойдется?", '');
	if ((typeof (a) === 'string') && (a | b != "") && (a | b != " ") && (a.length < 50)) {
		appData.expenses[a] = b;
		console.log("ez " + a);
		star++;
  } else {
		alert("Вы не ввели расходы, повторите попытку");
	}
}


appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
	console.log("Ты нищеброд");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Заработал на мороженку");
} else if (appData.moneyPerDay > 2000) {
	console.log("Да ты приуспел с баблишком))");
} else {
	console.log("Что-то пошло ни так и ты все сломал, зачем ты так?");
};