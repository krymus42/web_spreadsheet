function DATE(year, month, day) {
  if (year < 1900) year += 1900; //cause Excel ;)
  if (year < 0 || year >= 10000) return "#NUMBER!";
  if (month > 12) {
    const temp = month % 12;
    year += (month - temp) / 12;
    month = temp;
    return `${day}-${month}-${year}`;
  }
}

function DATEVALUE(date_text) {
  return Math.round(
    Math.abs(new Date(date_text) - new Date("1/1/1900")) / 8.64e7
  );
}

function DAY(serial_number) {
  const date = new Date(serial_number);
  return date.getDate();
}

function HOUR(date) {
  return new Date(date).getHours();
}

function MINUTE(date) {
  return new Date(date).getMinutes();
}

function MONTH(date) {
  return new Date(date).getMonth();
}

function NOW() {
  return new Date();
}

function SECOND(date) {
  return new Date(date).getSeconds();
}

function TIME(hour, minute, second) {
  if (second > 59) temp = second % 60;
  minute += (second - temp) / 60;
  second = temp;
  if (minute > 59) temp = minute % 60;
  hour += (minute - temp) / 60;
  minute = temp;
  if (hour > 24) hour %= 24;

  return `${hour}:${minute}:${second}`;
}

function TIMEVALUE(serial_number) {}
