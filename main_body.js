var container = document.querySelector("#main_body");
// var itemColor = document.querySelector(".itemColor");
// var bgColor = document.querySelector(".bgColor");
// var itemWidth = document.querySelector(".itemWidth");
// var itemHeight = document.querySelector(".itemHeight");
// var itemRadiustl = document.querySelector(".itemRadiustl");
// var itemRadiustr = document.querySelector(".itemRadiustr");
// var itemRadiusbl = document.querySelector(".itemRadiusbl");
// var itemRadiusbr = document.querySelector(".itemRadiusbr");
// var itemz = document.querySelector(".itemZ");
// var bgOverflow = document.querySelector(".bgOverflow");
// var itemTextColor = document.querySelector(".itemTextColor");
// var itemTextValue = document.querySelector(".itemTextValue");
// var itemFontSize = document.querySelector(".itemFontSize");
// var itemTransparency = document.querySelector(".itemTransparency");
// var textAlign = document.querySelector(".textAlign");
 var activeItem = null;
 let isResizing = false;
 var active = false;

 container.addEventListener("touchstart", dragStart, false);
 container.addEventListener("touchend", dragEnd, false);
 container.addEventListener("touchmove", drag, false);

 container.addEventListener("mousedown", dragStart, false);
 container.addEventListener("mouseup", dragEnd, false);
 container.addEventListener("mousemove", drag, false);
 container.addEventListener("click", focus, true);

// bgColor.addEventListener("input", function () {
//   container.style.backgroundColor = bgColor.value;
// });
// bgOverflow.addEventListener("input", function () {
//   if (container.style.overflow == "hidden") {
//     container.style.overflow = "auto";
//   } else {
//     container.style.overflow = "hidden";
//   }
// });

// const h = (x) =>
//   "#" +
//   x
//     .match(/\d+/g)
//     .map((y = (z) => (+z < 16 ? "0" : "") + (+z).toString(16)))
//     .join("");

 function focus(e) {
   window.focus;
   activeItem = e.target;
  if (activeItem.nodeName == "P") {
    //itemTextValue.style.display = "block";
  } else {
    //itemTextValue.style.display = "none";
  }
  let items = document.getElementsByClassName("item");
  for (let i = 0; i < items.length; i++) {
    items[i].style.border = "none";
  }
  e.target.style.border = "3px dashed blue";
  container.style.border = "none";
//   let cname = e.target.className;
//   if (activeItem.style.border !== "none") {
//     let valCol =
//       '"' +
//       getComputedStyle(activeItem).getPropertyValue("background-color") +
//       '"';
//     let val = h(valCol);
//     itemColor.value = val;
//     let iwidth = getComputedStyle(e.target).getPropertyValue("width");
//     iwidth = iwidth.substring(0, iwidth.length - 2);
//     itemWidth.value = iwidth;
//     let iheight = getComputedStyle(e.target).getPropertyValue("height");
//     iheight = iheight.substring(0, iheight.length - 2);
//     itemHeight.value = iheight;
//     let iRadiustl = getComputedStyle(e.target).getPropertyValue(
//       "border-top-left-radius"
//     );
//     iRadiustl = iRadiustl.substring(0, iRadiustl.length - 1);
//     itemRadiustl.value = iRadiustl;
//     let iRadiustr = getComputedStyle(e.target).getPropertyValue(
//       "border-top-right-radius"
//     );
//     iRadiustr = iRadiustr.substring(0, iRadiustr.length - 1);
//     itemRadiustr.value = iRadiustr;
//     let iRadiusbl = getComputedStyle(e.target).getPropertyValue(
//       "border-bottom-left-radius"
//     );
//     iRadiusbl = iRadiusbl.substring(0, iRadiusbl.length - 1);
//     itemRadiusbl.value = iRadiusbl;
//     let iRadiusbr = getComputedStyle(e.target).getPropertyValue(
//       "border-bottom-right-radius"
//     );
//     iRadiusbr = iRadiusbr.substring(0, iRadiusbr.length - 1);
//     itemRadiusbr.value = iRadiusbr;
//     let iz = getComputedStyle(e.target).getPropertyValue("z-index");
//     itemz.value = iz;
//     let iTransparency = getComputedStyle(e.target).getPropertyValue("opacity");
//     itemTransparency.value = iTransparency;
//     let TAlign = getComputedStyle(e.target).getPropertyValue("text-align");
//     textAlign.mat = TAlign;
//     let itc = getComputedStyle(e.target).getPropertyValue("color");
//     itc = h(itc);
//     itemTextColor.value = itc;
//     itemTextValue.value = e.target.innerText;
//     itemFontSize.value = e.target.style.fontSize;
//     ////////////////////////////////////////
//     itemColor.addEventListener("input", function () {
//       changeColor(e);
//     });
//     itemWidth.addEventListener("input", function () {
//       changeWidth(e);
//     });
//     itemHeight.addEventListener("input", function () {
//       changeHeight(e);
//     });
//     itemRadiustl.addEventListener("input", function () {
//       changeRadiustl(e);
//     });
//     itemRadiustr.addEventListener("input", function () {
//       changeRadiustr(e);
//     });
//     itemRadiusbl.addEventListener("input", function () {
//       changeRadiusbl(e);
//     });
//     itemRadiusbr.addEventListener("input", function () {
//       changeRadiusbr(e);
//     });
//     itemz.addEventListener("input", function () {
//       changeZIndex(e);
//     });
//     itemTextColor.addEventListener("input", function () {
//       changeTextColor(e);
//     });
//     itemTextValue.addEventListener("input", function () {
//       changeTextValue(e);
//     });
//     itemFontSize.addEventListener("input", function () {
//       changeTextFont(e);
//     });
//     itemTransparency.addEventListener("input", function () {
//       changeOpacity(e);
//     });
//     textAlign.addEventListener("input", function () {
//       changeTextAlign(e);
//     });
//   }
 }

// function changeColor(e) {
//   let itemColor = document.querySelector(".itemColor");
//   let item = document.getElementById(e.target.id);
//   if (item.style.border != "none") item.style.backgroundColor = itemColor.value;
//   container.removeEventListener("focus", focus);
// }

// function changeWidth(e) {
//   let item = document.getElementById(e.target.id);
//   if (item.style.border != "none") item.style.width = itemWidth.value + "px";
//   container.removeEventListener("focus", focus);
// }

// function changeHeight(e) {
//   let item = document.getElementById(e.target.id);
//   if (item.style.border != "none") item.style.height = itemHeight.value + "px";
//   container.removeEventListener("focus", focus);
// }

// function changeRadiustl(e) {
//   let item = document.getElementById(e.target.id);
//   if (item.style.border != "none")
//     item.style.borderTopLeftRadius = itemRadiustl.value + "%";
//   container.removeEventListener("focus", focus);
// }

// function changeRadiustr(e) {
//   let item = document.getElementById(e.target.id);
//   if (item.style.border != "none")
//     item.style.borderTopRightRadius = itemRadiustr.value + "%";
//   container.removeEventListener("focus", focus);
// }

// function changeRadiusbl(e) {
//   let item = document.getElementById(e.target.id);
//   if (item.style.border != "none")
//     item.style.borderBottomLeftRadius = itemRadiusbl.value + "%";
//   container.removeEventListener("focus", focus);
// }

// function changeRadiusbr(e) {
//   let item = document.getElementById(e.target.id);
//   if (item.style.border != "none")
//     item.style.borderBottomRightRadius = itemRadiusbr.value + "%";
//   container.removeEventListener("focus", focus);
// }

// function changeZIndex(e) {
//   let item = document.getElementById(e.target.id);
//   if (item.style.border != "none") item.style.zIndex = itemz.value;
//   container.removeEventListener("focus", focus);
// }

// function changeTextColor(e) {
//   let item = document.getElementById(e.target.id);
//   if (item.style.border != "none") item.style.color = itemTextColor.value;
//   container.removeEventListener("focus", focus);
// }

// function changeTextValue(e) {
//   let item = document.getElementById(e.target.id);
//   if (item.style.border != "none") item.innerText = itemTextValue.value;
//   container.removeEventListener("focus", focus);
// }

// function changeTextFont(e) {
//   let item = document.getElementById(e.target.id);
//   if (item.style.border != "none")
//     item.style.fontSize = itemFontSize.value + "px";
//   container.removeEventListener("focus", focus);
// }

// function changeOpacity(e) {
//   let item = document.getElementById(e.target.id);
//   if (item.style.border != "none") item.style.opacity = itemTransparency.value;
//   container.removeEventListener("focus", focus);
// }

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
  var btn = document.createElement("button");
  btn.className = btn_name;
  btn.id = btn_name;
  btn.innerHTML = "&#10006;";
  btn.style.alignSelf = "flex-start";
  btn.style.width = "10%";
  btn.style =
    "padding:0px 5px;cursor:pointer;background-color:red;color:white;border:1px solid red;transition:all 0.25s ease-in-out;border-bottom-left-radius: 50%;";
  btn.style.position = "relative";
  btn.style.float = "right";
  btn.style.height = "fit-content";
  btn.style.zIndex = "1";
  document.getElementById(String("item" + c)).appendChild(btn);
  btn.addEventListener("mouseenter", function () {
    btn.style.backgroundColor = "white";
    btn.style.color = "red";
    btn.style.border = "1px solid red";
  });
  btn.addEventListener("mouseleave", function () {
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    btn.style.border = "1px solid red";
  });
  btn.addEventListener("click", function () {
    btn.closest("div").remove();
  });
}

function addText() {
  c++;
  let div_name = String("p" + c + " item p");
  let btn_name = String("btn" + c) + " remove_btn";
  var div = document.createElement("p");
  div.className = div_name;
  div.id = "item" + c;
  div.innerText = "hello";
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
  switch(n){
    case 1: div.style.backgroundImage = "url('arijitsingh.png')";
            break;
    case 2: div.style.backgroundImage = "url('arijitsingh.png')";
            break;
    case 3: div.style.backgroundImage = "url('arijitsingh.png')";
            break;
    case 4: div.style.backgroundImage = "url('arijitsingh.png')";
            break;
  }
  document.getElementById("main_body").appendChild(div);
  var btn = document.createElement("button");
  btn.className = btn_name;
  btn.id = btn_name;
  btn.innerHTML = "&#10006;";
  btn.style.alignSelf = "flex-start";
  btn.style.width = "10%";
  btn.style =
    "padding:0px 5px;cursor:pointer;background-color:red;color:white;border:1px solid red;transition:all 0.25s ease-in-out;border-bottom-left-radius: 50%;";
  btn.style.position = "relative";
  btn.style.float = "right";
  btn.style.height = "fit-content";
  btn.style.zIndex = "1";
  document.getElementById(String("item" + c)).appendChild(btn);
  btn.addEventListener("mouseenter", function () {
    btn.style.backgroundColor = "white";
    btn.style.color = "red";
    btn.style.border = "1px solid red";
  });
  btn.addEventListener("mouseleave", function () {
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    btn.style.border = "1px solid red";
  });
  btn.addEventListener("click", function () {
    btn.closest("div").remove();
  });
}

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
