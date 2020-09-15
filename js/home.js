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
$(".hospital").click(function(){
     $("iframe:first").replaceWith("<iframe width='100%' height='500' src='https://maps.google.com/maps?q=hospital+near+to+Blossom+Aura,+College+Road,+nadiad,gujarat,india &output=embed' ></iframe>");
 });
 $(".post").click(function(){
     $("iframe:first").replaceWith("<iframe width='100%' height='500' src='https://maps.google.com/maps?q=post+office+near+to+Blossom+Aura,+College+Road,+nadiad,gujarat,india &output=embed'></iframe>");
 });
 $(".bank").click(function(){ 
     $("iframe:first").replaceWith("<iframe width='100%' height='500' src='https://maps.google.com/maps?q=bank+near+to+Blossom+Aura,+College+Road,+nadiad,gujarat,india &output=embed' ></iframe>");
 });
 $(".cinema").click(function(){
     $("iframe:first").replaceWith("<iframe width='100%' height='500' src='https://maps.google.com/maps?q=cinema+near+to+Blossom+Aura,+College+Road,+nadiad,gujarat,india &output=embed' ></iframe>");
 });
 $(".food").click(function(){
     $("iframe:first").replaceWith("<iframe width='100%' height='500' src='https://maps.google.com/maps?q=restaurant+near+to+Blossom+Aura,+College+Road,+nadiad,gujarat,india &output=embed' ></iframe>");
 });
$(".shop").click(function(){
     $("iframe:first").replaceWith("<iframe width='100%' height='500' src='https://maps.google.com/maps?q=mall+near+to+Blossom+Aura,+College+Road,+nadiad,gujarat,india &output=embed' ></iframe>");
 });
$(".train").click(function(){
     $("iframe:first").replaceWith("<iframe width='100%' height='500' src='https://maps.google.com/maps?q=ralve+station+near+to+blossam+aura,collage+road,nadiad,gujarat,india &output=embed' ></iframe>");
 });
 $(".park").click(function(){
     $("iframe:first").replaceWith("<iframe width='100%' height='500' src='https://maps.google.com/maps?q=park+near+to+Blossom+Aura,+College+Road,+nadiad,gujarat,india &output=embed' ></iframe>");
 });

        