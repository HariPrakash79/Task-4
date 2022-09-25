var request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all', true);

request.send();

request.onload = function(){

    var data = JSON.parse(request.response);/
    console.log(data);

    for ( var i=0; i<data.length; i++){
        console.log(data[i].flags[0]);
    }
    for ( var i=0; i<data.length; i++){
        console.log(data[i].region);
    }
for(i=0;i<data.length;i++){
    console.log(`CountryName-${data[i].name.common} and Flag- ${data[i].flag}`)
}
}
