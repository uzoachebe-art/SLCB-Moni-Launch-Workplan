export function parseISO(d: string): Date {
  const [y, m, day] = d.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, day));
}

export function monthsBetween(start: Date, end: Date): { year: number; month: number }[] {
  const out: { year: number; month: number }[] = [];
  let y = start.getUTCFullYear();
  let m = start.getUTCMonth();
  const endY = end.getUTCFullYear();
  const endM = end.getUTCMonth();
  while (y < endY || (y === endY && m <= endM)) {
    out.push({ year: y, month: m });
    m++;
    if (m > 11) {
      m = 0;
      y++;
    }
  }
  return out;
}

export const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export function daysInMonth(year: number, month: number): number {
  return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}

export function monthIndexOf(date: Date, gridStart: { year: number; month: number }): number {
  const monthsFromStart =
    (date.getUTCFullYear() - gridStart.year) * 12 + (date.getUTCMonth() - gridStart.month);
  const dayFrac = (date.getUTCDate() - 1) / daysInMonth(date.getUTCFullYear(), date.getUTCMonth());
  return monthsFromStart + dayFrac;
}

export function formatDate(d: string): string {
  const date = parseISO(d);
  return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" });
}
