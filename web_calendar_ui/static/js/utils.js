import { daysOfWeek, monthsOfYear } from './constants';

// Returns object with param name and value as key and value
// e.g id=7&name=foo -> { id: 7, name: 'foo' }
export function getUrlParams(queryString) {
  const arr = queryString.split('&');
  const paramsObj = {};
  for (let i = 0; i < arr.length; i++) {
    let param = arr[i];
    param = param.split('=');
    paramsObj[param[0]] = param[1];
  }
  return paramsObj;
}

export function getDateObjectFromTime(time) {
  const numbers = time.split(', ').map((n) => parseInt(n));
  return new Date(
    numbers[0],
    numbers[1],
    numbers[2],
    numbers[3],
    numbers[4],
    numbers[5]
  );
}

export function showTimeInDayAndMonth(item) {
  const startDate = getDateObjectFromTime(item.start);
  const endDate = getDateObjectFromTime(item.end);

  const displayedStart = `${daysOfWeek[startDate.getDay()]}
                          ${startDate.getDate()}/`
                          + `${startDate.getMonth()}/`
                          + `${startDate.getFullYear()}`

  const displayedEnd = `${daysOfWeek[endDate.getDay()]}
                        ${endDate.getDate()}/`
                        + `${endDate.getMonth()}/`
                        + `${endDate.getFullYear()}`

  return (`${displayedStart} - ${displayedEnd}`);
}

export function showTimeInHoursAndMinutes(item) {
  const startTime = getDateObjectFromTime(item.start);
  const endTime = getDateObjectFromTime(item.end);
  return (`
    ${startTime.getHours()}:${getMinutes(startTime)} -
    ${endTime.getHours()}:${getMinutes(endTime)}
  `);
}

function getMinutes(time) {
	const timeInMinutes = time.getMinutes();
	if (timeInMinutes < 10) {
		return ('0' + timeInMinutes)
	}
	return timeInMinutes;
}

