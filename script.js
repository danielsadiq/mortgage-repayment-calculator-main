const amount = document.getElementById('amount');
const term = document.getElementById("term");
const rate = document.getElementById("rate");
const before = document.querySelector(".before-calc");
let after = document.querySelector(".after-calc");

const monthly = document.getElementById("monthly-repay");

let submitted = false;

function onInput(){
    // console.log("amount", amount.value);
    // console.log("term", term.value);
    // console.log("rate", rate.value);
    // const [a, b] = calculate(amount.value, rate.value, term.value)
    // console.log(a)
    // console.log(b);    
}

function calculate(p,r,n){
    r = r/1200;
    n = n*12;
    let monthlyx = (p*r*((1+r)**n))/( ((1+r)**n) -1);
    total = monthlyx*n;
    return [monthlyx, total];
}

function final(e){
    e.preventDefault();
    const [a, b] = calculate(amount.value, rate.value, term.value);
    console.log("monthly", a);
    console.log("total interest", b); 
    monthly.textContent = `£${parseFloat(a).toFixed(2)}`;
    before.classList.add("no-show");
    after.classList.remove("no-show");
}



