import { data } from "./moments";

const { formatDate, addTime, diffDates } = data;

const formattedDate = formatDate(new Date(), 'DD-MM-YYYY');
console.log(formattedDate);

const date = addTime(new Date(), 1, 'days');
console.log(date);

const diff = diffDates(new Date(2022, 8, 11), new Date(2022, 8, 12), 'days');
console.log(diff);