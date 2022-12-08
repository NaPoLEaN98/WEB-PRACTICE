// alert("Padharo Mhare Desh")
// confirm("Tussi Jaa rahe ho?")

function myFunc() {
    // console.log("behen dAr gayi");
    //  console.log(typeof document.getElementById("x1"))
    var amount = document.getElementById("x1").value;
    // console.log(amount);
    var years = document.getElementById("x2").value;
    var Rate = document.getElementById("x3").value;


    // console.log(amt, year, roi);
    if (amt == "" || year == "" || roi == "") {
        alert("Please Input All Data")
    }
    else {
        // P x R x (1+R)^N / [(1+R)^N-1]
        var amt = parseInt(amount);
        var year = parseInt(years);
        var roi = parseFloat(Rate);
        
         var EMI= amt*(roi)*(1+roi)**year/[()]
        
        }
}
