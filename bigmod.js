let start = document.querySelector("#btn"),
    base = Number (document.querySelector("#base").value),
    pow = Number (document.querySelector("#power").value),
    mod = Number (document.querySelector("#mod").value);

let x = y = 0;

let bigMod = function(b, p, m) {
    if (p==0) { return 1%m; }
    else if (p%2 == 0) {
        x = bigMod(b, p/2, m);
        return ((x*x) % m);
    } 
    else if (p%2 != 0) {
        x = b%m;
        y = bigMod(b, p-1, m);
        return ((x*y) % m);
    }
}

let printR = function () {
    let result =  bigMod(base, pow, mod);
    console.log(result);
    document.querySelector(".output").innerHTML = result;
}

start.addEventListener("click", printR()) ;