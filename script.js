let spinner = setTimeout(() => {
    document.querySelector("#loading").style.visibility = "hidden"
}, 1000);

let  enteredDate = document.querySelector("input[name=birthday]");

function ageCalculater() {

    backImage = document.getElementsByTagName("body")[0];
    backImage.style.backgroundImage = "url('./img/saglikli-yaslanmak-icin-oneriler.jpg')";

    let maianArea = document.querySelector(".countdown");
    maianArea.style.display = "flex";

    setInterval( () => {

        dateOfDay = new Date();
        birthDay = new Date(enteredDate.value);

        let calculatedYear =  dateOfDay.getFullYear() - birthDay.getFullYear();
        let calculatedMonth =  dateOfDay.getMonth() - birthDay.getMonth();
        let calculatedDay =  dateOfDay.getDate() - birthDay.getDate();
        let calculatedHour =  dateOfDay.getHours() - birthDay.getHours();
        let calculatedMinute =  dateOfDay.getMinutes() - birthDay.getMinutes();
        let calculatedSecond =  dateOfDay.getSeconds() - birthDay.getSeconds();

        if (calculatedSecond < 0) { 
        calculatedSecond += 60;
        calculatedMinute -= 1
        };
        if (calculatedMinute < 0) { 
        calculatedMinute += 60;
        calculatedHour -= 1
        };
        if (calculatedHour < 0) { 
        calculatedHour += 24;
        calculatedDay -= 1
        };
        if (calculatedDay < 0) { 
        calculatedDay += 30;
        calculatedMonth -= 1
        };
        if (calculatedMonth < 0) { 
        calculatedMonth += 12;
        calculatedYear -= 1
        };

        document.getElementById("months").innerText = calculatedMonth;
        document.getElementById("years").innerText = calculatedYear;
        document.getElementById("days").innerText = calculatedDay;
        document.getElementById("hours").innerText = calculatedHour;
        document.getElementById("minutes").innerText = calculatedMinute;
        document.getElementById("seconds").innerText = calculatedSecond;
    }, 1000)
};

enteredDate.addEventListener("change", ageCalculater);

