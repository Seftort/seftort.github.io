var items=document.getElementsByClassName("item");
var circles=document.getElementsByClassName("circle");
var leftBtn=document.getElementById("btn-left");
var rightBtn=document.getElementById("btn-right");
var content=document.querySelector('.content');
var index=0;
var timer=null;


var clearclass=function(){
	for(let i=0;i<items.length;i++){
		items[i].className="item";
		circles[i].className="circle";
		circles[i].setAttribute("num",i);
	}
}

function move(){
	clearclass();
	items[index].className="item active";
	circles[index].className="circle white";
}

rightBtn.onclick=function(){
	if(index<items.length-1){
		index++;
	}
	else{
		index=0;
	}
	move();
}

leftBtn.onclick=function(){
	if(index<items.length){
		index--;
	}
	else{
		index=items.length-1;
	}
	move();
}

timer=setInterval(function(){
	rightBtn.onclick();
},3000)

for(var i=0;i<circles.length;i++){
	circles[i].addEventListener("click",function(){
		var point_index=this.getAttribute("num");
		index=point_index;
		move();
	})

}

content.onmouseover=function(){
	clearInterval(timer);
		timer=setInterval(function(){
			rightBtn.onclick();
		},3000)
}

content.onmouseleave=function(){
	clearInterval(timer);
	timer=setInterval(function(){
		rightBtn.onclick();
	},3000)
}



let loadery = document.querySelector(".loading");
let body = document.querySelector("body");
window.onload = function () {
    loadery.style.display = "none";
	body.style.overflow = "visible"
	rightBtn.onclick();
}



