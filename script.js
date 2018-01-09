canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c = canvas.getContext("2d");

/*//House
c.moveTo(300,300);
c.lineTo(400,200);
c.lineTo(500,300);
c.lineTo(500,500);
c.lineTo(300,500);
c.lineTo(300,300);
c.lineTo(500,300);
c.stroke();

c.moveTo(375,375);
c.lineTo(425,375);
c.lineTo(425,425);
c.lineTo(375,425);
c.lineTo(375,375);
c.stroke();
//End of House

//Circle
c.fillStyle = "black";
c.beginPath();
c.arc(800,375,250,0,2*Math.PI);
c.fill();
c.stroke();

c.beginPath();
c.fillStyle = "white";
c.arc(800,375,200,0,2*Math.PI);
c.fill();
c.stroke();

c.beginPath();
c.fillStyle = "black";
c.arc(800,375,175,0,2*Math.PI);
c.fill();
c.stroke();

c.beginPath();
c.arc(800,375,175,0,2*Math.PI);
c.stroke();

c.beginPath();
c.fillStyle = "white";
c.arc(800,375,115,0,2*Math.PI);
c.fill();
c.stroke();

c.beginPath();
c.fillStyle = "black";
c.arc(800,375,95,0,2*Math.PI);
c.fill();
c.stroke();

c.beginPath();
c.fillStyle = "white";
c.arc(800,375,20,0,2*Math.PI);
c.fill();
c.stroke();

c.beginPath();
c.fillStyle = "black";
c.arc(800,375,10,0,2*Math.PI);
c.fill();
c.stroke();
// End of Circle

//Random circles all the way
for (var i = 0; i < 75; i++) {
	var x = Math.random() * window.innerWidth;
	var y = Math.random() * window.innerHeight;
	var z = (Math.random()*30);

	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);

c.beginPath();
c.fillStyle = "rgb(" + r + "," + g + "," + b +")";
c.arc(x,y,z,0,2*Math.PI);
c.fill();
}
// End of Random circles
*/

//Move your circle

function Circle(x, y, dx, dy, r){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.r = r;

	this.update = function(){

	this.x += this.dx;
	this.y += this.dy;

	if(this.x + this.r >= innerWidth || this.x - this.r <= 0) {
		this.dx = -this.dx;
	} 

	if(this.y + this.r >= innerHeight || this.y - this.r <= 0) {
		this.dy = -this.dy;
	}

		this.draw();
	}

	this.draw = function(){
		c.beginPath();
		c.arc(this.x,this.y,this.r,0,2*Math.PI);
		c.stroke();
	}
}

var circleArray = [];
for (var i = 0; i < 50; i++) {
	var x = Math.floor(Math.random() * (window.innerWidth -25)+25);
	var y = Math.floor(Math.random() * (window.innerHeight -25)+25);
	var dx = (Math.random() - 0.5) * 10;
	var dy = (Math.random() - 0.5) * 10;

	circleArray.push(new Circle(x,y,dx,dy,20));
}

/*var x = Math.floor(Math.random()*window.innerWidth);
var y = Math.floor(Math.random()*window.innerHeight);

//Atsiranda random vietoje
var c1 = new Circle(x,y,6,8,20); 

//var c1 = new Circle(200,200,2,2,20);*/

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth, innerHeight);

	for (var i = circleArray.length - 1; i>=0; i--){
		circleArray[i].update();
	};
}

animate();






