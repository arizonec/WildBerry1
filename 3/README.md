<h4>3. Реализовать аналог библиотеки Math (можно назвать MathX) с базовым набором функций, используя замыкания:</h4>

вычисление N-го числа в ряду Фибоначчи;
вычисление всех чисел в ряду Фибоначчи до числа N;
вычисление N-го просто числа;
вычисление всех простых чисел до числа N.

Будет плюсом, если задумаетесь и об оптимизации.

---

Создал объект MathX, который содержит функции fibonacciNumber, fibonacci, prime, nthPrime и primeNumber. Каждая функция реализована при помощи замыкания, что дает доступ только к нужным функциям и переменным.

1. fibonacciNumber -> вычисляет N-ое число в ряду Фибоначчи
2. fibonacci -> вычисляет все числа в ряду Фибоначчи до числа N
3. prime -> вспомогательная функция, проверяет, является ли чисто простым
4. nthPrime -> вычисляет N-ое простое число
5. primeNumber -> вычисляет все простые числа до числа N
