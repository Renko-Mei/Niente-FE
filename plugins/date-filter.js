import Vue from 'vue'

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const dateFilter = value => {
  return formatDate(value);
};

function formatDate(inputDate) {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const second = date.getSeconds();
  const formattedDate = months[month] + " " + day + " " + year + " at " + hour + ":" + second;
  return formattedDate;
}

Vue.filter('date', dateFilter)
