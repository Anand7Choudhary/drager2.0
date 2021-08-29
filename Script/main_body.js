var container = document.querySelector("#main_body");
var bgColor = document.querySelector(".bgcolor");
var bgOverflow = document.querySelector(".overflowCheck");
var itemz = document.querySelector(".z-index");
//=================
var itemWidth = document.querySelector(".width");
var itemHeight = document.querySelector(".height");
var itemColor = document.querySelector(".backColor");
var itemRadiustl = document.querySelector(".brtl");
var itemRadiustr = document.querySelector(".brtr");
var itemRadiusbl = document.querySelector(".brbl");
var itemRadiusbr = document.querySelector(".brbr");
var itemTransparency = document.querySelector(".Transparency");
// var itemBorderColor = document.querySelector(".borColor");
var itemxoffset = document.querySelector(".xoffset");
var itemyoffset = document.querySelector(".yoffset");
var itemblur = document.querySelector(".blur");
var itemspread = document.querySelector(".spread");
var itemShadowColor = document.querySelector(".shadowColor");
var itemShadowInset=document.querySelector(".inset");
//=================
var itemTextColor = document.querySelector(".fColor");
var itemTextValue = document.querySelector(".ftext");
var itemFontSize = document.querySelector(".fsize");
var textfontStyle = document.querySelector(".fontStyle");
var activeItem = null;
let isResizing = false;
var active = false;
//=================
var itemtransformX = document.querySelector(".RotateX");
var itemtransformY = document.querySelector(".RotateY");
var itemtransformZ = document.querySelector(".RotateZ");
var itemSkewX = document.querySelector(".SkewX");
var itemSkewY = document.querySelector(".SkewY");

const deleteElement = (e) => {
  let bbb;
  if (e.target.id.length === 10) {
    bbb = e.target.id.substring(e.target.id.length - 1, e.target.id.length);
  } else if (e.target.id.length === 11) {
    bbb = e.target.id.substring(e.target.id.length - 2, e.target.id.length);
  } else if (e.target.id.length === 12) {
    bbb = e.target.id.substring(e.target.id.length - 3, e.target.id.length);
  } else {
    bbb = e.target.id.substring(e.target.id.length - 4, e.target.id.length);
  }
  // let itemselect=document.getElementsByClassName("item");
  // let i;
  // for(i=0;i<itemselect.length;i++){
  //   if(itemselect[i].style.border!="none"){
  //     break;
  //   }
  // }
  // let xyz=itemselect[i].id;
  // alert(xyz);
  document.getElementById(String("item"+bbb)).remove();
};

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);
container.addEventListener("click", focus, true);

let rmbtn = document.querySelector(".removebtn");
rmbtn.addEventListener("click",deleteElement,false);

bgColor.addEventListener("input", function () {
  container.style.backgroundColor = bgColor.value;
});
bgOverflow.addEventListener("input", function () {
  if (container.style.overflow == "hidden") {
    container.style.overflow = "auto";
  } else {
    container.style.overflow = "hidden";
  }
});

const h = (x) =>
  "#" +
  x
  .match(/\d+/g)
  .map((y = (z) => (+z < 16 ? "0" : "") + (+z).toString(16)))
  .join("");


//================focus=======================
function focus(e) {
  window.focus;
  activeItem = e.target;
  if (activeItem.nodeName == "P") {
    itemTextValue.disabled = false;
  } else {
    itemTextValue.disabled = true;
  }
  if (activeItem.nodeName == "I") {
    textfontStyle.disabled = true;
  } else {
    textfontStyle.disabled = false;
  }
  let items = document.getElementsByClassName("item");
  for (let i = 0; i < items.length; i++) {
    items[i].style.border = "none";
  }
  e.target.style.border = "3px dashed blue";
  container.style.border = "none";
  let cname = e.target.className;
  let bbb;
  if (e.target.id.length === 5) {
    bbb = e.target.id.substring(e.target.id.length - 1, e.target.id.length);
  } else if (e.target.id.length === 6) {
    bbb = e.target.id.substring(e.target.id.length - 2, e.target.id.length);
  } else if (e.target.id.length === 7) {
    bbb = e.target.id.substring(e.target.id.length - 3, e.target.id.length);
  } else{
    bbb = e.target.id.substring(e.target.id.length - 4,e.target.id.length);
  }
  document.querySelector(".removebtn").id = "removebtn" + bbb;
  if (activeItem.style.border !== "none") {
    let valCol =
      '"' +
      getComputedStyle(activeItem).getPropertyValue("background-color") +
      '"';
    let val = h(valCol);
    itemColor.value = val;
    let iwidth = getComputedStyle(e.target).getPropertyValue("width");
    iwidth = iwidth.substring(0, iwidth.length - 2);
    itemWidth.value = iwidth;
    let iheight = getComputedStyle(e.target).getPropertyValue("height");
    iheight = iheight.substring(0, iheight.length - 2);
    itemHeight.value = iheight;
    let iRadiustl = getComputedStyle(e.target).getPropertyValue(
      "border-top-left-radius"
    );
    iRadiustl = iRadiustl.substring(0, iRadiustl.length - 1);
    itemRadiustl.value = iRadiustl;
    let iRadiustr = getComputedStyle(e.target).getPropertyValue(
      "border-top-right-radius"
    );
    iRadiustr = iRadiustr.substring(0, iRadiustr.length - 1);
    itemRadiustr.value = iRadiustr;
    let iRadiusbl = getComputedStyle(e.target).getPropertyValue(
      "border-bottom-left-radius"
    );
    iRadiusbl = iRadiusbl.substring(0, iRadiusbl.length - 1);
    itemRadiusbl.value = iRadiusbl;
    let iRadiusbr = getComputedStyle(e.target).getPropertyValue(
      "border-bottom-right-radius"
    );
    iRadiusbr = iRadiusbr.substring(0, iRadiusbr.length - 1);
    itemRadiusbr.value = iRadiusbr;
    let iz = getComputedStyle(e.target).getPropertyValue("z-index");
    itemz.value = iz;
    let iTransparency = getComputedStyle(e.target).getPropertyValue("opacity");
    itemTransparency.value = iTransparency;
    // let TAlign = getComputedStyle(e.target).getPropertyValue("text-align");
    // textAlign.mat = TAlign;
    let itc = getComputedStyle(e.target).getPropertyValue("color");
    itc = h(itc);
    itemTextColor.value = itc;
    itemTextValue.value = e.target.innerText;
    itemFontSize.value = e.target.style.fontSize;
    textfontStyle.value = e.target.style.fontFamily;
    ////////////////////////////////////////
    itemColor.addEventListener("input", function () {
      changeColor(e);
    });
    itemWidth.addEventListener("input", function () {
      changeWidth(e);
    });
    itemHeight.addEventListener("input", function () {
      changeHeight(e);
    });
    itemRadiustl.addEventListener("input", function () {
      changeRadiustl(e);
    });
    itemRadiustr.addEventListener("input", function () {
      changeRadiustr(e);
    });
    itemRadiusbl.addEventListener("input", function () {
      changeRadiusbl(e);
    });
    itemRadiusbr.addEventListener("input", function () {
      changeRadiusbr(e);
    });
    itemz.addEventListener("input", function () {
      changeZIndex(e);
    });
    itemTextColor.addEventListener("input", function () {
      changeTextColor(e);
    });
    itemTextValue.addEventListener("input", function () {
      changeTextValue(e);
    });
    itemFontSize.addEventListener("input", function () {
      changeTextFont(e);
    });
    textfontStyle.addEventListener("input", function () {
      changeTextFamily(e);
    });
    itemTransparency.addEventListener("input", function () {
      changeOpacity(e);
    });
    itemtransformX.addEventListener("input",function(){
      changeRotate(e,0);
    });
    itemtransformY.addEventListener("input", function () {
      changeRotate(e,1);
    });
    itemtransformZ.addEventListener("input", function () {
      changeRotate(e,2);
    });
    itemSkewX.addEventListener("input",function(){
      changeSkewX(e);
    })
    itemSkewY.addEventListener("input", function () {
      changeSkewY(e);
    });
    itemxoffset.addEventListener("input",function(){
      changeshadow(e);
    });
    itemyoffset.addEventListener("input",function(){
      changeshadow(e);
    });
    itemblur.addEventListener("input",function(){
      changeshadow(e);
    });
    itemShadowColor.addEventListener("input",function(){
      changeshadow(e);
    });
    itemShadowInset.addEventListener("input", function () {
      changeshadow(e);
    });
    // textAlign.addEventListener("input", function () {
    //   changeTextAlign(e);
    // });
  }
}

function changeColor(e) {
  let itemColor = document.querySelector(".backColor");
  let item = document.getElementById(e.target.id);
  if (item.style.border != "none") item.style.backgroundColor = itemColor.value;
  container.removeEventListener("focus", focus);
}

function changeWidth(e) {
  let item = document.getElementById(e.target.id);
  if (item.style.border != "none") item.style.width = itemWidth.value + "px";
  container.removeEventListener("focus", focus);
}

function changeHeight(e) {
  let item = document.getElementById(e.target.id);
  if (item.style.border != "none") item.style.height = itemHeight.value + "px";
  container.removeEventListener("focus", focus);
}

function changeRadiustl(e) {
  let item = document.getElementById(e.target.id);
  if (item.style.border != "none")
    item.style.borderTopLeftRadius = itemRadiustl.value + "%";
  container.removeEventListener("focus", focus);
}

function changeRadiustr(e) {
  let item = document.getElementById(e.target.id);
  if (item.style.border != "none")
    item.style.borderTopRightRadius = itemRadiustr.value + "%";
  container.removeEventListener("focus", focus);
}

function changeRadiusbl(e) {
  let item = document.getElementById(e.target.id);
  if (item.style.border != "none")
    item.style.borderBottomLeftRadius = itemRadiusbl.value + "%";
  container.removeEventListener("focus", focus);
}

function changeRadiusbr(e) {
  let item = document.getElementById(e.target.id);
  if (item.style.border != "none")
    item.style.borderBottomRightRadius = itemRadiusbr.value + "%";
  container.removeEventListener("focus", focus);
}

function changeZIndex(e) {
  let item = document.getElementById(e.target.id);
  if (item.style.border != "none") item.style.zIndex = itemz.value;
  container.removeEventListener("focus", focus);
}

function changeTextColor(e) {
  let item = document.getElementById(e.target.id);
  if (item.style.border != "none") item.style.color = itemTextColor.value;
  container.removeEventListener("focus", focus);
}

function changeTextValue(e) {
  let item = document.getElementById(e.target.id);
  if (item.style.border != "none") item.innerText = itemTextValue.value;
  container.removeEventListener("focus", focus);
}

function changeTextFont(e) {
  let item = document.getElementById(e.target.id);
  if (item.style.border != "none")
    item.style.fontSize = itemFontSize.value + "px";
  container.removeEventListener("focus", focus);
}

function changeTextFamily(e) {
  let item = document.getElementById(e.target.id);
  if (item.style.border != "none")
    item.style.fontFamily = textfontStyle.value;
  container.removeEventListener("focus", focus);
}

function changeshadow(e){
  let item = document.getElementById(e.target.id);
  if (item.style.border != "none"){
  let shadow = "";
            let inset;
            let xyz;
                let checkbox = document.getElementById("inset");
                if (checkbox.checked) {
                    inset = "inset";
                } else {
                    inset = "";
                }
                shadow = inset + " " + itemxoffset.value + "px " + itemyoffset.value + "px " + itemblur.value + "px " + itemspread.value + "px " + itemShadowColor.value;
            item.style.boxShadow = shadow;
  container.removeEventListener("focus", focus);
}
}

function changeOpacity(e) {
  let item = document.getElementById(e.target.id);
  if (item.style.border != "none") item.style.opacity = itemTransparency.value;
  container.removeEventListener("focus", focus);
}
function changeRotate(e,n) {
  let item = document.getElementById(e.target.id);
  if (item.style.border != "none"){
    if(n==0)
    item.style.transform="rotateX("+itemtransformX.value+"deg)";
    else if(n==1)
    item.style.transform = "rotateY(" + itemtransformY.value + "deg)";
    else item.style.transform = "rotateZ(" + itemtransformZ.value + "deg)";
  container.removeEventListener("focus", focus);
}
}

// function changeTextAlign(e) {
//   let item = document.getElementById(e.target.id);
//   if (item.style.border != "none") item.style.textAlign = textAlign.value;
//   container.removeEventListener("focus", focus);
// }
/////////////////////////////////////////////////
function dragStart(e) {
  if (e.target.nodeName != "BUTTON") {
    if (e.target !== e.currentTarget) {
      active = true;

      // this is the item we are interacting with
      activeItem = e.target;

      if (activeItem !== null) {
        if (!activeItem.xOffset) {
          activeItem.xOffset = 0;
        }

        if (!activeItem.yOffset) {
          activeItem.yOffset = 0;
        }
        if (e.type === "touchstart") {
          activeItem.initialX = e.touches[0].clientX - activeItem.xOffset;
          activeItem.initialY = e.touches[0].clientY - activeItem.yOffset;
        } else {
          console.log("doing something!");
          activeItem.initialX = e.clientX - activeItem.xOffset;
          activeItem.initialY = e.clientY - activeItem.yOffset;
        }
      }
    }
  }
}

function dragEnd(e) {
  if (activeItem !== null) {
    activeItem.initialX = activeItem.currentX;
    activeItem.initialY = activeItem.currentY;
  }
  flag = 0;
  active = false;
  activeItem = null;
}

function drag(e) {
  if (active) {
    e.preventDefault();
    if (e.type === "touchmove") {
      activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
      activeItem.currentY = e.touches[0].clientY - activeItem.initialY;
    } else {
      activeItem.currentX = e.clientX - activeItem.initialX;
      activeItem.currentY = e.clientY - activeItem.initialY;
    }

    activeItem.xOffset = activeItem.currentX;
    activeItem.yOffset = activeItem.currentY;

    setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

//===========dynamic buttons================
let c = 0;

function addDiv() {
  c++;
  let div_name = String("item" + c + " item");
  let btn_name = String("btn" + c) + " remove_btn";
  var div = document.createElement("div");
  div.className = div_name;
  div.id = "item" + c;
  document.getElementById("main_body").appendChild(div);
  // var btn = document.createElement("button");
  // btn.className = btn_name;
  // btn.id = btn_name;
  // btn.innerHTML = "&#10006;";
  // btn.style.alignSelf = "flex-start";
  // btn.style.width = "10%";
  // btn.style =
  //   "padding:0px 5px;cursor:pointer;background-color:red;color:white;border:1px solid red;transition:all 0.25s ease-in-out;border-bottom-left-radius: 50%;";
  // btn.style.position = "relative";
  // btn.style.float = "right";
  // btn.style.height = "fit-content";
  // btn.style.zIndex = "1";
  // document.getElementById(String("item" + c)).appendChild(btn);
  // btn.addEventListener("mouseenter", function () {
  //   btn.style.backgroundColor = "white";
  //   btn.style.color = "red";
  //   btn.style.border = "1px solid red";
  // });
  // btn.addEventListener("mouseleave", function () {
  //   btn.style.backgroundColor = "red";
  //   btn.style.color = "white";
  //   btn.style.border = "1px solid red";
  // });
  // btn.addEventListener("click", function () {
  //   btn.closest("div").remove();
  // });
}

function addText() {
  c++;
  let div_name = String("p" + c + " item p");
  let btn_name = String("btn" + c) + " remove_btn";
  var div = document.createElement("p");
  div.className = div_name;
  div.id = "item" + c;
  div.innerText = "hello";
  div.style.fontFamily = "Calibri";
  document.getElementById("main_body").appendChild(div);
}

function addImage(n) {
  c++;
  let div_name = String("item" + c + " item img");
  let btn_name = String("btn" + c) + " remove_btn";
  var div = document.createElement("div");
  div.className = div_name;
  div.id = "item" + c;
  div.style.backgroundSize = "cover";
  switch (n) {
    case 1:
      div.style.backgroundImage = "url('Image/Img1.png')";
      break;
    case 2:
      div.style.backgroundImage = "url('Image/Img2.png')";
      break;
    case 3:
      div.style.backgroundImage = "url('Image/Img3.png')";
      break;
    case 4:
      div.style.backgroundImage = "url('Image/Img4.png')";
      break;
    case 5:
      div.style.backgroundImage = "url('Image/Img5.png')";
      break;
    case 6:
      div.style.backgroundImage = "url('Image/Img6.png')";
      break;
    case 7:
      div.style.backgroundImage = "url('Image/Img7.png')";
      break;
    case 8:
      div.style.backgroundImage = "url('Image/Img8.png')";
      break;
    case 9:
      div.style.backgroundImage = "url('Image/Img9.png')";
      break;
  }
  document.getElementById("main_body").appendChild(div);
}

function addSymbol(n) {
  c++;
  let div_name = String("h" + c + " item hh");
  var div = document.createElement("i");
  //div.className = div_name;
  div.id = "item" + c;
  switch (n) {
    case 0:
      div.className=div_name+" fa fa-bars";
      break;
    case 1:
      div.className = div_name + " fa fa-times";
      break;
    case 2:
      div.className = div_name + " fa fa-home";
      break;
    case 3:
      div.className = div_name + " fa fa-caret-up";
      break;
    case 4:
      div.className = div_name + " fa fa-sort-down";
      break;
    case 5:
      div.className = div_name + " fa fa-heart";
      break;
    case 6:
      div.className = div_name + " fa fa-arrow-left";
      break;
    case 7:
      div.className=div_name+" fa fa-user";
      break;
    case 8:
      div.className=div_name+" fa fa-cog";
      break;
    case 9:
      div.className=div_name+" fa fa-search";
  }
  document.getElementById("main_body").appendChild(div);
}



//==========================Delete Element=============================


////////====================view Controls==============================

// function controlView(n) {
//   let controlBtn = document.getElementsByClassName("addControlClassElements");
//   let controlNav = document.getElementsByClassName("addControlBtn");
//   for (let i = 0; i < controlBtn.length; i++) {
//     controlBtn[i].style.display = "none";
//     controlNav[i].style.borderBottom = "2px solid transparent";
//   }
//   controlBtn[n].style.display = "block";
//   controlNav[n].style.borderBottom = "2px solid rgb(102, 0, 197)";
// }