$(document).ready(function(){
  $(".button-collapse").sideNav();
  $(".collapsible").collapsible();
});
var nick_btn=document.querySelector(".nick_btn");
var nick_input=document.querySelector(".inp_nick");

nick_btn.onclick=function(){
    Materialize.toast('Ник успешно изменен', 4000)
  console.log(nick_input.value);
  nick_input.value="";
}
