let output=document.getElementById("output")
var n=0
function display(num){
    if(n==1){
        output.value=""
        output.value+=num;
        n--
    }
    else{
        output.value+=num;
    }
}
function Clear(){
    output.value=""
}
function Delete(){
    output.value=output.value.slice(0, -1)
}
function calc(){
    try{
        output.value=eval(output.value)
    }
    catch(err){
        output.value="Error"
    }
    n++;
}