function switchTheme(e){
  if(e.target.checked){
    document.documentElement.setAttribute('data-theme','dark');
    // localStorage.setitem('theme','dark');
  }else{
    document.documentElement.setAttribute("data-theme", "light");
    // localStorage.setitem("theme", "light");
  }
};

document.getElementById("checkbox").addEventListener('change',switchTheme,false);

//Website/Mobile

document.getElementById("desktopbtn").addEventListener("click",function(){
  desktopMode();
});
document.getElementById("mobilebtn").addEventListener("click",function(){
  mobileMode();
});

const desktopMode=()=>{
  document.getElementById("header").style.width="100%";
  document.getElementById("header").style.height = "10%";
  document.getElementById("main_body").style.width="100%";
  document.getElementById("main_body").style.height = "90%";
};

const mobileMode=()=>{
  document.getElementById("header").style.width="17rem";
  document.getElementById("header").style.height="3rem";
  document.getElementById("main_body").style.width="17rem";
  document.getElementById("main_body").style.height = "30rem";
};





















document.getElementById("btn2").addEventListener("mouseover", function () {
  document.getElementById("imageFloater").style.display = "flex";
  let pos = this.getBoundingClientRect();
  document.getElementById("imageFloater").style.top = pos.top - 25 + "px";
});
document.getElementById("btn2").addEventListener("mouseout", function () {
  document.getElementById("imageFloater").style.display = "none";
});
document
  .getElementById("imageFloater")
  .addEventListener("mouseover", function () {
    this.style.display = "flex";
});
document
  .getElementById("imageFloater")
  .addEventListener("mouseout", function () {
    this.style.display = "none";
  });
//button 5//
document.getElementById("btn5").addEventListener("mouseover", function () {
  document.getElementById("shapesFloater").style.display = "flex";
  let pos = this.getBoundingClientRect();
  document.getElementById("shapesFloater").style.top = pos.top - 15 + "px";
});
document.getElementById("btn5").addEventListener("mouseout", function () {
  document.getElementById("shapesFloater").style.display = "none";
});
document
  .getElementById("shapesFloater")
  .addEventListener("mouseover", function () {
    this.style.display = "flex";
  });
document
  .getElementById("shapesFloater")
  .addEventListener("mouseout", function () {
    this.style.display = "none";
  });
