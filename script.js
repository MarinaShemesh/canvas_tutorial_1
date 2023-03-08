console.log('hello from the consule');


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
   
ctx.canvas.width =window.innerWidth;
ctx.canvas.height = window.innerHeight;

//red rectangle
  ctx.fillStyle = "rgb(200, 0, 0)";
  ctx.fillRect(0, 10, 60, 70);

//blue rectangle
  ctx.fillStyle = "rgba(20, 30, 200, 0.5)";
  ctx.fillRect(150, 140, 50, 50);

  ctx.fillStyle = "black";
  ctx.fillRect(25, 25, 100, 100);
  ctx.clearRect(45, 45, 60, 60);
  ctx.strokeRect(50, 50, 50, 50);