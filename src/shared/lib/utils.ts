// NOTE: YYYY-MM-DDTHH:mm:ss.sss -> YYYY-MM-DD
export function toIsoDateString(date: Date) {
  return date.toISOString().slice(0, 10);
}

export function isoDateToDay(isoDate: string) {
  return isoDate.split("-").slice(2)[0];
}

export function isoDateToMonth(isoDate: string) {
  return isoDate.split("-").slice(1)[0];
}
