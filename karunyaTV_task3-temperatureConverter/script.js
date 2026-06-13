function convertTemp() {

let temp =
parseFloat(
document.getElementById("tempInput").value
);

let unit =
document.getElementById("unit").value;

let result =
document.getElementById("result");

if(isNaN(temp))
{
result.innerHTML =
"⚠ Please enter a valid number";
return;
}

let output = "";

if(unit === "celsius")
{
let f = (temp * 9/5) + 32;
let k = temp + 273.15;

output =
`${temp} °C = ${f.toFixed(2)} °F
<br>
${k.toFixed(2)} K`;
}

else if(unit === "fahrenheit")
{
let c = (temp - 32) * 5/9;
let k = c + 273.15;

output =
`${temp} °F = ${c.toFixed(2)} °C
<br>
${k.toFixed(2)} K`;
}

else
{
let c = temp - 273.15;
let f = (c * 9/5) + 32;

output =
`${temp} K = ${c.toFixed(2)} °C
<br>
${f.toFixed(2)} °F`;
}

result.innerHTML = output;

}