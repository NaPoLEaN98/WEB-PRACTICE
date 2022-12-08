function myFunction(a,b,c){
    var amt = document.getElementById(`amt`).value;
    var year = document.getElementById(`year`).value;
    var roi = document.getElementById(`roi`).value;

    if(amt==``||year==``||roi==``){
        // console.log(`Please Provide all Details`);
        alert(`Please Provide all Details`)
    }
    else{
        var principle = parseInt(amt);
        var duration = parseInt(year);
        var interest = parseFloat(roi);

        
        interest = interest/12/100;
         duration =duration*12
        var emi = Math.round(principle*interest*(1+interest)**duration/(((1+interest)**duration)-1));
        var balance = emi * duration;
        console.log(balance);
        //var instrestEarned = Math.round(balance*interest);
        //console.log(instrestEarned);

        
        var x="";

        for(var i = 1; i<=duration; ++i){
           
           
            var instrestEarned = Math.round(balance*interest);
            var princ = emi - instrestEarned;
           var int = emi- princ;
             balance = balance - emi;

             x=x+`
             <tr>
                 <td>${i}</td>
                 <td>${emi}</td>
                 <td>${princ}</td>
                 <td>${int}</td>
                <td>${balance}</td>
             </tr>
         `
            
        }
        
        console.log(emi);
        document.getElementById("result").innerHTML= x
    }
}