function newElement() {
let text= document.getElementById("inp").value;
    if(text==='')
    {
    return alert("You don't write what to do!!!");
}
var mydiv = document.getElementById("mydiv");
 mydiv.innerHTML= mydiv.innerHTML + '<div id="D"  >' + "<div id='DV'>" +  text + "</div>" + '</div>' +'<button id="myBtn" >' + 'X'+ '</button>' ;
    
document.getElementById("inp").value = '' ;
   
  };

document.addEventListener('DOMContentLoaded',init);
function init(){
    let txt = document.getElementById('inp');
    inp.addEventListener('keypress', anykey);
}
function anykey(ev){
    if(ev.keyCode === 13){
        let text= document.getElementById("inp").value;
if(text===''){
    return alert("You don't write what to do!!!");
}
  let mydiv= document.getElementById("mydiv");
    mydiv.addEventListener('click', f1)
 mydiv.innerHTML= mydiv.innerHTML + '<div id="D"  >' + "<div id='DV'>" +  text + "</div>" + '</div>' +'<button id="myBtn" >' + 'X'+ '</button>' ;

    
document.getElementById("inp").value = '' ;
    };
};
var x = document.getElementById("mydiv")
if (x){
x.addEventListener("click", clearlist,false)
}
function clearlist(e) {
   console.log(e.target)
 var list = e.target.parentNode;
 list.parentNode.removeChild(list);
}


var y = document.getElementById("DV");
if(y){
	y.addEventListener("click", f1,false);
}
function f1(el){
	el.stopPropagation();
el.target.classList.toggle('line');
}



