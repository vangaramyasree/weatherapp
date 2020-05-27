Var date=new Date();
var daysInweek=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
var day=date.getDay();
var today=daysInweek[day];
var hours=date.getHours();
var minutes=date.getMinutes();
document.getElementById("dateAndtime").innerText=`${today} ${hours} ${minutes}`;
var weatherIncities =[
    {city:"hyderabad,telangana",climatecondition:"sunny",temparature:45},
    {city:"bhopal,madhyapradesh",climatecondition:"sunny",temparature:40},
    {city:"impal,manipur",climatecondition:"cloudy",temparature:15},
]
function getWeather(){
    var list=document.getElementById("list");
    var selectcityFromList=list.options[list.selectdIndex].value;
    var weatherInselectedcity=weatherIncities.find(e=>{
        return e.city==selectedcityFromList
    })
    console.log(weatherInselectedcity)

document.getElementById("climate").innerText=weatherInselectedcity.climatecondition;
document.getElementById("temp").innerText=weatherInselectedcity.temparature;
document.getElementById("city").innerText=selectedcityFromList;
}
