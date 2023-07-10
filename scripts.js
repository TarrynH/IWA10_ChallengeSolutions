const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log(holidays[futureId] || `ID ${futureId} not created yet`)

copied = holidays[christmas] 
copied = { 
    name: 'X-mas', 
    date: new Date(`25 December ${currentYear}`) 
}

correctDate = copied.date 
correctDate = `${correctDate.getDate()}/${correctDate.getMonth()+1}/${currentYear}`

isEarlier = copied.date < holidays[6].date

console.log('New date is earlier:', isEarlier)

if (isEarlier) {
    console.log('ID change:', holidays[christmas].id === copied.id)
    console.log('Name change:', holidays[christmas].name === copied.name || copied.name)
    console.log('Date change:', holidays[christmas].date === copied.date || correctDate)
}


const firstHolidayTimestamp = new Date(Math.min(
    new Date(holidays[0].date),
    holidays[1].date,
    holidays[2].date,
    holidays[3].date,
    holidays[4].date,
    holidays[5].date,
    holidays[6].date,
    holidays[7].date,
    holidays[8].date,
))


const lastHolidayTimestamp = new Date(Math.max(
    new Date(holidays[0].date),
    holidays[1].date,
    holidays[2].date,
    holidays[3].date,
    holidays[4].date,
    holidays[5].date,
    holidays[6].date,
    holidays[7].date,
    holidays[8].date,
))


const firstDay = firstHolidayTimestamp.getDate()
firstDayPadded = String(firstDay).padStart(2,'0')

const firstMonth = firstHolidayTimestamp.getMonth()+1
firstMonthPadded = String(firstMonth).padStart(2,'0')

const lastDay = lastHolidayTimestamp.getDate()
lastDayPadded = String(lastDay).padStart(2,'0')

const lastMonth = lastHolidayTimestamp.getMonth()+1
lastMonthPadded = String(lastMonth).padStart(2,'0')

console.log(`${firstDayPadded}/${firstMonthPadded}/${currentYear}`)
console.log(`${lastDayPadded}/${lastMonthPadded}/${currentYear}`)

const randomHoliday = holidays[Math.floor(Math.random() * 10)].date

randomDate = randomHoliday.getDate()
paddedDate = String(randomDate).padStart(2,'0')

randomMonth = randomHoliday.getMonth()+1
paddedMonth = String(randomMonth).padStart(2,'0')

randomYear = currentYear


console.log(`${paddedDate}/${paddedMonth}/${currentYear}`)