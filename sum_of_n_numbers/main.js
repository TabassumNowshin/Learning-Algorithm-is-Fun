

var unitUsageInp = document.getElementById('unit');
var totalSum = document.getElementById('total-sum');


function calculate(n){
	var sum;

	sum = n*(n+1);
	sum = sum/2;
	
	document.getElementById("show").innerHTML ="Calculation:  ("+n+"*("+n+"+1) )/2  = "+sum;
	return sum;
	
}

function showTotal(){

	var n = Number(unitUsageInp.value);
	
	var total = calculate(n);
	
	totalSum.innerText = "Total Sum:  " + total;
	//console.log(tax, demandCharge, unitUsage);
}

unitUsageInp.addEventListener('input', showTotal);



