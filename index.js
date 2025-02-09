/* Your Code Here */

function createEmployeeRecord (anArray) {
    const [firstName, familyName, title, payPerHour] = anArray;

    const recordObj = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }

    return recordObj;
};

function createEmployeeRecords (arrOfArrays) {
    const recordsArray = arrOfArrays.map(createEmployeeRecord);
    return recordsArray;
}

function createTimeInEvent (aDate) {
    //console.log(aDate)
    const [date, hour] = aDate.split(' ');

    this.timeInEvents.push({type: 'TimeIn', hour: parseInt(hour), date: date});
    
    return this;
};

function createTimeOutEvent (aDate) {
    const [date, hour] = aDate.split(' ');

    this.timeOutEvents.push({type: 'TimeOut', hour: parseInt(hour), date: date});

    return this;
};

function hoursWorkedOnDate(aDate) {
    
    const workDayStart = this.timeInEvents.filter(function(obj) {return obj.date === aDate}).reduce(function (x, obj) {return obj.hour});
    const workDayEnd = this.timeOutEvents.filter(function(obj) {return obj.date === aDate}).reduce(function (x, obj) {return obj.hour});
    
    return (workDayEnd.hour/100) - (workDayStart.hour/100); 
};

function wagesEarnedOnDate(aDate) {
    //console.log(anObj.payPerHour * hoursWorkedOnDate(anObj, aDate))
    return this.payPerHour * hoursWorkedOnDate.call(this, aDate);
};

// function allWagesFor(anObj) {
//     //console.log(anObj)
//     let totalWages = 0
//     for(let i = 0; i < anObj.timeOutEvents.length; i++){
//         totalWages += wagesEarnedOnDate(anObj, anObj.timeOutEvents[i].date)
//     }
//     return totalWages
// };

function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.filter(obj=>obj.firstName === firstName)[0];
};




/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll(anArray) {
    // console.log(anArray.length)
    console.log(allWagesFor.call(anArray[0]))
    console.log(allWagesFor.call(anArray[1]))
    //console.log(anArray[2])
    console.log(allWagesFor.call(anArray[2]))
    console.log(allWagesFor.call(anArray[3]))
    console.log(allWagesFor.call(anArray[4]))
    console.log(allWagesFor.call(anArray[5]))
    let payroll = 0
    for(let i = 0; i < anArray.length; i++) {
        payroll = payroll + allWagesFor.call(anArray[i])
    }
    return payroll
};