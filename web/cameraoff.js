$(document).ready(function(){
  $(".button-collapse").sideNav();
  $(".collapsible").collapsible();
});

var pass_btn=document.querySelector(".pass_btn");
var inp_pass=document.querySelector(".inp_pass");

pass_btn.onclick=function(){
  if(inp_pass.value==42){
    location.href="cameraon.html"
    inp_pass.value="";
  }else{
    Materialize.toast('Неверный код!', 4000)
    inp_pass.value="";
  }
}
