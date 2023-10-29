function doconvert(event) {
    event.preventDefault();
   
    var yard = parseFloat(document.getElementById("yard").value);
    
   
    var squareFeet = yard * 9;
    
   
    document.getElementById("result").innerHTML = yard + " yard = " + squareFeet + " Square Feet.";
}