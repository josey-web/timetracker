const dailyContainer = document.getElementById("daily"),
  weeklyContainer = document.getElementById("weekly"),
  monthlyContainer = document.getElementById("monthly"),
  daily = document.querySelectorAll(".daily"),
  weekly = document.querySelectorAll(".weekly"),
  monthly = document.querySelectorAll(".monthly"),
  //H4 elements
  dailyTitles = document.querySelectorAll(".daily-title"),
  weeklyTitles = document.querySelectorAll(".weekly-title"),
  monthlyTitles = document.querySelectorAll(".monthly-title"),

  //Prev & current time
  currentDayTimes = document.querySelectorAll(".current-day"),
  previousDayTimes = document.querySelectorAll(".prev-day"),
  currentWeekTimes = document.querySelectorAll(".current-week"),
  previousWeekTimes = document.querySelectorAll(".prev-week"),
  currentMonthTimes = document.querySelectorAll(".current-month"),
  previousMonthTimes = document.querySelectorAll(".prev-month");
  

// [weekly, monthly].forEach(seletion => {
// seletion.innerText = "red";
// })
    

  daily.forEach((everyDaily) => {
    everyDaily.addEventListener("click", () => {
      //document.body.style.backgroundColor = "white";
      dailyContainer.classList.remove("inactive");
      weeklyContainer.classList.add("inactive");
      monthlyContainer.classList.add("inactive");
      //add active background  color
      weekly.forEach((everyWeek, index) => {
        everyWeek.classList.remove("active-color");
        monthly[index].classList.remove("active-color");
        daily[index].classList.add("active-color");
      });
    });
  });
  weekly.forEach((everyWeek) => {
    everyWeek.addEventListener("click", () => {
      //document.body.style.backgroundColor = "green";
      weeklyContainer.classList.remove("inactive");
      monthlyContainer.classList.add("inactive");
      dailyContainer.classList.add("inactive");
      //add active background  color
      daily.forEach((everyDay, index) => {
        everyDay.classList.remove("active-color");
        monthly[index].classList.remove("active-color");
         weekly[index].classList.add("active-color");
      });
    });
  });

monthly.forEach((everyMonth) => {
  everyMonth.addEventListener("click", () => {
    weeklyContainer.classList.add("inactive");
    dailyContainer.classList.add("inactive");
    monthlyContainer.classList.remove("inactive");
    //document.body.style.backgroundColor = "yellow";
          //add active background  color
      daily.forEach((everyDay, index) => {
        everyDay.classList.remove("active-color");
        weekly[index].classList.remove("active-color");
        monthly[index].classList.add("active-color");
      });
  });
});
  
import scheduleData from "./timeData.js"
console.log(scheduleData[0].title);
console.log(scheduleData[0].timeframes.daily.current);
console.log(scheduleData[0].timeframes.daily.previous);

scheduleData.forEach((dayTime) => {
  dayTime.timeframes.daily.current;
  dayTime.timeframes.daily.previous;
  dayTime.timeframes.title;
  console.log(dayTime.title);
  console.log(dayTime.timeframes.daily.current);
  console.log(dayTime.timeframes.daily.previous);
});
console.log(scheduleData[0].timeframes.daily.current);

function handleDayTime() {
  scheduleData.forEach((dayTime, index) => {
    // currentDayTime = dayTime.timeframes.daily.current;
    // prevDayTime = dayTime.timeframes.daily.previous;
    //dayTime.timeframes.daily.previous;
    // dayTime.timeframes.title;
    //console.log(dayTime.title);
    // console.log(dayTime.timeframes.daily.current);
    //console.log(dayTime.timeframes.daily.previous);

    //daily, weekly & monthly titles
    dailyTitles[index].innerText = dayTime.title;
    weeklyTitles[index].innerText = dayTime.title;
    monthlyTitles[index].innerText = dayTime.title;
    //Daily time
    currentDayTimes[index].innerText = dayTime.timeframes.daily.current;
    previousDayTimes[index].innerText = dayTime.timeframes.daily.previous;
    //Weekly time
    currentWeekTimes[index].innerText = dayTime.timeframes.weekly.current;
    previousWeekTimes[index].innerText = dayTime.timeframes.weekly.previous;
    //monthly time
    currentMonthTimes[index].innerText = dayTime.timeframes.monthly.current;
    previousMonthTimes[index].innerText = dayTime.timeframes.monthly.previous;
  });


}
handleDayTime();