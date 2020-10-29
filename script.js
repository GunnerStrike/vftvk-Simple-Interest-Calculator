function compute()
{
    var principal = document.getElementById("principal").value;
        document.getElementById("principal2").innerHTML = principal;

    var rate = document.getElementById("rate").value;
        document.getElementById("rate2").innerHTML = rate;  

         
    
}

var principal = document.getElementById("principal");
var rate = document.getElementById("rate");
var years = document.getElementById("years");
var interest = principal * rate * years / 100;

    document.getElementById("interest2").innerHTML = interest; 

var slider = document.getElementById("rate");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
