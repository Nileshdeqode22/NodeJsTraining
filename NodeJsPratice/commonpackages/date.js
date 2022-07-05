const date = new Date();
const year = date.getFullYear();
console.log(year);
const month = date.getMonth() + 1;
console.log(month);
const day = date.getDate();
console.log(day);
const min=date.getMinutes();
console.log(min);

const dateJSON=date.toJSON();
console.log(dateJSON);
const utcDate=date.toUTCString();
console.log(utcDate);

