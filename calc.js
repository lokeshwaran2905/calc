function add(){
    var a = parseInt(document.getElementById("f-number").value);
    var b = parseInt(document.getElementById("l-number").value);
    var c = a+b;
    document.getElementById("result").innerHTML = "Result is" + c;
}
function sub(){
    var a = parseInt(document.getElementById("f-number").value);
    var b = parseInt(document.getElementById("l-number").value);
    var c = a-b;
    document.getElementById("result").innerHTML = "Result is" + c;
}
function mul(){
    var a = parseInt(document.getElementById("f-number").value);
    var b = parseInt(document.getElementById("l-number").value);
    var c = a*b;
    document.getElementById("result").innerHTML = "Result is" + c;
}
function div(){
    var a = parseInt(document.getElementById("f-number").value);
    var b = parseInt(document.getElementById("l-number").value);
    var c = a/b;
    document.getElementById("result").innerHTML = "Result is" + c;
}