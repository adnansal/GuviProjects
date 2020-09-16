function process(a,b) {var val1 = 200, val2= 800;
 var f= a[b](val1,val2)
 return f
}
function add(a,b)
{return a+b}
function sub(a,b)
{return a-b}
function mul(a,b)
{return a*b}
var opers = [add,sub,mul]
var oper1 = process(opers,0);
var oper2 = process(opers,1);
var oper3 = process(opers,2);
console.log(oper1,oper2,oper3);