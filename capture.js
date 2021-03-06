var pic = document.getElementById("vimage");
var clearButton = document.getElementById("clear");

var clear = function(){
    while (pic.firstChild){
	pic.removeChild(pic.firstChild);
    }
}

var drawDot = function(e, x = -1, y = -1){ //default values OP
    if (x == -1 || y == -1){ //new dot
	x = e.offsetX;
	y = e.offsetY;
    }

    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 30);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    
    c.addEventListener("click", changeOrDie, true);
    c.addEventListener("click", stop);

    pic.appendChild(c);
}

var changeOrDie = function(e){ //can this be done without e but still use drawDot?
    if(this.getAttribute("fill") == "red"){ //change
	this.setAttribute("fill", "blue");
    } else { //teleport
	var x = Math.random() * 500;
	var y = Math.random() * 500;
	drawDot(e, x, y);
	this.remove();
    }
}

var stop = function(ev){
    ev.stopPropagation();
}

clearButton.addEventListener("click", clear);
pic.addEventListener("click", drawDot);
