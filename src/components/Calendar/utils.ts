import {addDays, eachDay, lastDayOfWeek, startOfWeek, isSameDay} from 'date-fns'

export const isSameDate = isSameDay

export const dayNames = ['一', '二', '三', '四', '五', '六', '日']
export const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月'
, '七月', '八月', '九月', '十月', '十一月', '十二月']

export interface IDateItem {
  date: Date,
  status: string,
  text: number | string,
  current?: boolean,
  selected?: boolean
}

export interface IMonthItem {
  month: number,
  text: string,
  current?: boolean,
  selected?: boolean
}

export interface IYearItem {
  year: number,
  current?: boolean,
  selected?: boolean
}

export function getDates (year: number, month: number): IDateItem[] {
  const beginMonthDate = new Date(year, month - 1, 1)
  const endMonthDate = new Date(year, month, 0)
  const beginDate = startOfWeek(beginMonthDate, {weekStartsOn: 1})
  const endDate = lastDayOfWeek(endMonthDate, {weekStartsOn: 1})
  const today = new Date()

  const pastDates: IDateItem[] = (
      beginDate < beginMonthDate
        ? eachDay(beginDate, addDays(beginMonthDate, -1))
        : []
    ).map((date: Date) => ({
      date,
      status: 'past',
      text: date.getDate(),
      current: isSameDay(today, date)
    }))

  const monthDates: IDateItem[] = eachDay(beginMonthDate, endMonthDate)
    .map((date: Date) => ({
      date,
      status: '',
      text: date.getDate(),
      current: isSameDay(today, date)
    }))

  const futureDates: IDateItem[] = (
      endDate > endMonthDate
        ? eachDay(addDays(endMonthDate, 1), endDate)
        : []
    ).map((date: Date) => ({date,
      status: 'future',
      text: date.getDate(),
      current: isSameDay(today, date)
    }))
  
  return [
    ...pastDates,
    ...monthDates,
    ...futureDates
  ]
}

export function getMonths (): IMonthItem[] {
  const currentMonth = (new Date()).getMonth()
  return monthNames.map((text, i) => ({
    text,
    month: i + 1,
    current: currentMonth === i
  }))
}

export function getYears (year: number, radius: number = 12): IYearItem[] {
  if (radius < 2) {
    radius = 2
  }

  const begin = year - radius
  const end = year + radius

  const years: number[] = []
  for (let i = begin; i <= end; i ++) {
    years.push(i)
  }

  const currentYear = (new Date()).getFullYear()
  return years.map((y) => ({
    year: y,
    current: currentYear === y
  }))
}
