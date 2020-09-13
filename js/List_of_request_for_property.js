/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


    let a = new Array('Deep donda', '6353694040', 'deepdonda007@gmail.com','5','0','I like your property.I want this property for reant.');
    let b = new Array('meet Vagasiya', '6353694040', 'meet@gmail.com','5','0','I like your property.I want this property for reant.');
    let c = new Array('Uravish devani', '6353694040', 'uravish@gmail.com','5','0','I like your property.I want this property for reant.');
function showdetail(e){
    show();
    
 var   x=e.target.id;
 if(x==="a")
 {
document.getElementById("demo1").innerHTML =a[0];
document.getElementById("demo2").innerHTML =a[1];
document.getElementById("demo3").innerHTML =a[2];
document.getElementById("demo4").innerHTML =a[3];
document.getElementById("demo5").innerHTML =a[4];
document.getElementById("demo6").innerHTML =a[5];
 }
 else if(x==="b")
 {
document.getElementById("demo1").innerHTML =b[0];
document.getElementById("demo2").innerHTML =b[1];
document.getElementById("demo3").innerHTML =b[2];
document.getElementById("demo4").innerHTML =b[3];
document.getElementById("demo5").innerHTML =b[4];
document.getElementById("demo6").innerHTML =b[5];
 }
  else if(x==="c")
 {
document.getElementById("demo1").innerHTML =c[0];
document.getElementById("demo2").innerHTML =c[1];
document.getElementById("demo3").innerHTML =c[2];
document.getElementById("demo4").innerHTML =c[3];
document.getElementById("demo5").innerHTML =c[4];
document.getElementById("demo6").innerHTML =c[5];
 }

}
function reply_click(e)
{
    
    
}
function show()
{
    $("div.column1").show();
    $("table").show();
    
}
