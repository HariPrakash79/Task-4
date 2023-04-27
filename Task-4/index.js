/*const url = "https://restcountries.com/v3.1/all";
const request= new XMLHttpRequest();
request.onload= function() {
    console.log(JSON.parse(this.responseText));
};
request.open("GET", url);
request.send();*/


const url = "https://restcountries.com/v3.1/all";
const request= new XMLHttpRequest();
request.onload= function() {
    const data=JSON.parse(this.response);
    data.forEach(element => {
        console.log(element.flags)
    });
};
request.open("GET", url);
request.send();