import { data } from "./moments";

const { formatDate, addTime, diffDates } = data;

// Функция formatDate для представления даты!
const formattedDate = formatDate(new Date(), 'DD-MM-YYYY');
console.log(formattedDate);

// Функция addTime для добавления,в данном случае 1 день к текущей дате!
const newDate = addTime(new Date(), 1, 'days');
console.log(newDate);

// Функция diffDates для нахождения разницы между датами!
const diff = diffDates(new Date(2022, 8, 11), new Date(2022, 8, 12), 'days');
console.log(diff);