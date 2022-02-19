
   var basee = document.getElementById('base');
   var poww = document.getElementById('pow');
   var modd = document.getElementById('mod');
   var outputspan = document.getElementById('output');



function bigMod(b, p, m) {
    if (p==0) { return 1; }
    if (p%2 == 0) {
		document.getElementById("show").innerHTML ="Calculation: "+p +"will be divided into two parts:" +p/2+" and "+p/2;
		var x;
        x= bigMod(b, p/2, m)% m;      
        return (x*x) %m;
    } 
    else if (p%2 != 0) {
		document.getElementById("show").innerText ="Calculation: "+ p +"will be divided into two parts:" +p +" and " + p-1;

       return ((b%m)*(bigMod(b, p-1, m)%m) ) %m;
    }
}

function printR() {
	var b = Number(basee.value);
	var p = Number(poww.value);
	var m = Number(modd.value);
	
	
    var result =  bigMod(b, p, m);
   
      outputspan.innerText = "Result:  " + result;
}

basee.addEventListener('input', printR);

poww.addEventListener('input', printR);

modd.addEventListener('input', printR);


