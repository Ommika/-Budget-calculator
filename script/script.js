let money = +prompt("Ваш бюджет на месяц?"),
  time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};


for (let i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = prompt("Во сколько обойдется?", '');

  if ((typeof (a)) === 'string' && (typeof (a)) != null &&
    (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
    appData.expenses[a] = b;
  } else {
    i = i - 1;
  }
  //проверка введенных данных на пустую строку, на длину и на тип данных
};

appData.moneyPerDay = appData.budget / 30;
//расчет бюджета на 1 день

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
}