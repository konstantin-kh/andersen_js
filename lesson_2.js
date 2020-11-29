// Создаем функцию которая принимает один параметр (х) и возвращает анонимную функцию,
// которая принимает один параметр (y) и возвращает произведение x * y.

function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

// замыкаем multiplier на переданных значениях
// возвращаем функцию с замкнутыми значениями в константы
// вызываем консоль лог с параметром которых приняла родительская ф-ция
// и конкатенируем параметр со строкой и результатом выволнения функций
// в которых были замкнуты значения и умноженны на параметр переданных в родительской ф-ции

function processData(input) {
  const waterWeight = multiplier(1000);
  const mercuryWeight = multiplier(1355);
  const oilWeight = multiplier(900);
}

processData(2);

// ф-ция принимает массив чисел и возвращет анонимную ф-цию,
// которая при вызове возвращает случайное число из переданного ей массива.
// Для возврата случайного числа и округления используем методы объекта Math.
// Умножаем случайное число на длинну массива и округляем
// Возвращаем число из массива подставляя в индекс полученное число из Math.

function makeRandomFn(array) {
  return function () {
    return array[Math.floor(Math.random() * array.length)];
  };
}

const getRandomNumber = makeRandomFn([1, 2, 100, 34, 45, 556, 33]);

getRandomNumber();

// Расширяем функцию makeRandomFn,
// проверяем если переданный аргумент не является объектом то
// передаем в ф-цию getRandomIndex() псевдомассива arguments с изпользованием оператора расширения
// для преобразования его в массив и вовращаем результат фунции.
// Иначе возвращаем результат ф-ции с переданным массивом значений.

function makeRandomFn(array) {
  if (typeof array !== 'object') {
    return getRandomIndex([...arguments]);
  }

  return getRandomIndex(array);
}

function getRandomIndex(value) {
  return function () {
    return value[Math.floor(Math.random() * value.length)];
  };
}

const getRandomNumber = makeRandomFn(1, 2, 100, 34, 45, 556, 33);

getRandomNumber();