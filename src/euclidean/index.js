/*
* Алгоритм E
*
* Дано m, n - нужно найти наибольший общий делитель
* это наибольшее целое положительное число которое нацело делит оба числа m и n
*
* E1 [Нахождение остатка] r = m % n
* E2 [Сравнение с нулем] r = 0 -> exit
* E3 [Замещение] m = n, n = r, E1
* */

const solution = (a, b) => {
  let res;
  let large = a > b ? a : b;
  let small = a > b ? b : a;

  while (res !== 0) {
    if (small === 0) {
      break;
    }
    res = large % small;
    large = small;
    small = res;
  }

  return large;
};

module.exports = solution;
