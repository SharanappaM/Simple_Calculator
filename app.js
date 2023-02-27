function add()
{
    var x=document.getElementById("input1").value;
    var y=document.getElementById("input2").value;
    var result=parseInt(x)+parseInt(y);
    document.getElementById("output").value=result;
}

function sub()
{
    var x=document.getElementById("input1").value;
    var y=document.getElementById("input2").value;
    var result=parseFloat(x)-parseFloat(y);
    document.getElementById("output").value=result;
}
function multi()
{
    var x=document.getElementById("input1").value;
    var y=document.getElementById("input2").value;
    var result=parseFloat(x)*parseFloat(y);
    document.getElementById("output").value=result;
}
function div()
{
    var x=document.getElementById("input1").value;
    var y=document.getElementById("input2").value;
    var result=parseFloat(x)/parseFloat(y);
    document.getElementById("output").value=result;
}
function cl()
{
    document.getElementById("input1").value=null;
    document.getElementById("input2").value=null;
    document.getElementById("output").value=result=null;

}

