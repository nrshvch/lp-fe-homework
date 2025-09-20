// NOTE: YYYY-MM-DDTHH:mm:ss.sss -> YYYY-MM-DD
export function toIsoDateString(date: Date) {
  return date.toISOString().slice(0, 10);
}

export function isoDateToDay(isoDay: string) {
  return isoDay.split("-").slice(2)[0];
}

export function isoDateToMonth(isoDay: string) {
  return isoDay.split("-").slice(1)[0];
}
