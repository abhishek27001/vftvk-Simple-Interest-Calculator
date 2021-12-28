//function for computing Simple Interest
function compute()
{
    var principal = document.getElementById("principal").value;
    //logic to add validation for "Principle" input box
    if( principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;  //formula for calculating Simple Interest
    var year = new Date().getFullYear()+parseInt(years); //logic to convert the 'No of Years' into the actual year
    //code for setting inner html property after compute button is clicked
    document.getElementById("result").innerHTML="If you deposit <mark> "+principal+" </mark>,\<br\>at an interest rate of <mark>"+rate+"% </mark>.\<br\>You will receive an amount of <mark>"+interest+" </mark>,\<br\>in the year <mark>"+year+" </mark>.\<br\>"
}
//function that reads the value of the range slider and displays the value is updated dynamically after changing the slider
function updateRate() 
{
    var slider = document.getElementById("rate");
    var output = document.getElementById("rate_val");
    output.innerHTML = slider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() 
    {
        output.innerHTML = this.value;
    }  

}

  
