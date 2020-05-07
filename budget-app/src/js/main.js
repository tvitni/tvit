// ·        Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll

// ·        Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день) income

let start = document.getElementById('start'),

budget = document.querySelector('.budget-value'),
daybudget = document.querySelector('.daybudget-value'),
level = document.querySelector('.level-value'),
expenses = document.querySelector('.expenses-value'),
optionalexpenses = document.querySelector('.optionalexpenses-value'),
income = document.querySelector('.income-value'),
monthsavings = document.querySelector('.monthsavings-value'),
yearsavings = document.querySelector('.yearsavings-value'),

expensesItem = document.querySelectorAll('.expenses-item'),
optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),

chooseIncome = document.querySelector('#income'),
chooseSum = document.querySelector('#sum'),
choosePercent = document.querySelector('#percent'),
yearValue = document.querySelector('.year-value'),
monthValue = document.querySelector('.month-value'),
dayValue = document.querySelector('.day-value'),

approve = document.getElementsByTagName('button')[0],
approve2 = document.getElementsByTagName('button')[1],
calculate = document.getElementsByTagName('button')[2];
