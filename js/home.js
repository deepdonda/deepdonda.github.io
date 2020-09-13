/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
  $("#x").hide();
  $("#y").hide();
  $("#z").hide();
   
   
});

$("#1").click(function(){
  $(".a").toggle("slow");
  $("#x").toggle("slow");
});
$("#2").click(function(){
  $(".b").toggle("slow");
  $("#y").toggle("slow");
});
$("#3").click(function(){
  $(".c").toggle("slow");
  $("#z").toggle("slow");
});
