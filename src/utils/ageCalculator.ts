export default function ageCalculator(
  year: number,
  month: number,
  day: number
) {
  const wasLeapYear = year % 4 === 0;
  const currYear = new Date().getFullYear();
  const currMonth = new Date().getMonth() + 1;
  const currDay = new Date().getDay();

  let yearsSinceBorn = currYear - year;
  let monthsSinceBorn = currMonth - month;
  let daysSinceBorn = currDay - day;

  if (monthsSinceBorn <= 0) {
    yearsSinceBorn -= 1;
    monthsSinceBorn += 12;
  }

  if (daysSinceBorn < 0) {
    monthsSinceBorn -= 1;
    daysSinceBorn += getMontDays(monthsSinceBorn, wasLeapYear);
  }

  return {
    year: String(yearsSinceBorn),
    month: String(monthsSinceBorn),
    day: String(daysSinceBorn),
  };
}

export function getMontDays(month: number, wasLeapYear: boolean): number {
  return month === 2 && wasLeapYear
    ? 29
    : month === 2
    ? 28
    : month % 2 === 1
    ? 31
    : 30;
}
