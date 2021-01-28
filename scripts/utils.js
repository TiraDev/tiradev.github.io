const months = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const monthsShort = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

function decomposeDate(date) {
    return { 
        year: parseInt(date.substring(0, 4)),
        month: parseInt(date.substring(5, 7)),
        day: parseInt(date.substring(8, 10)) 
    };
}

function compareDate(x, y) {
    if(x.year != y.year) {
        return x.year - y.year;
    } else if(x.month != y.month) {
        return x.month - y.month;
    } else {
        return x.day - y.day;
    }
}

function createError(errorMessage, errorElement) {
    var message = "Error while loading page: " + errorMessage;
    if(!errorElement) {
        errorElement = document.getElementById("content");
    }
    console.error(message);
    var error = document.createElement("h1");
    error.innerText = message;
    error.style = "color: red; font-size: 40px; text-align: center; width: 100%;";
    errorElement.appendChild(error);
}

function readFile(location, contentType) {
    var init = {
        method: 'GET',
        headers: {
            'Content-Type': contentType
        },
        mode: 'cors',
        cache: 'default'
    };

    let request = new Request("/data/" + location, init);

    return fetch(request);
}

function readText(location, contentType) {
    return readFile(location, contentType).then(resp => resp.text());
}

function readHtml(location) {
    return readText("" + location + ".html", "text/html");
}

function readJson(location) {
    return readFile("" + location + ".json", "application/json").then(resp => resp.json());
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}