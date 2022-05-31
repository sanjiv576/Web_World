const a = 12;
// a = 99;
function fun() {
    let a = 56;
    console.log(a);
    
}

fun();
console.log("Outsider : out of a function : " + a);
confirm("Are you sure ?")