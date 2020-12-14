canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
car1_width=150;
car2_width=150;
car1_height=90;
car2_height=90;
car1_x=-50;
car2_x=-50;
car1_y=170;
car2_y=320;
track_image_aray=["track.jpg"];
background_image=track_image_aray;
car1_image="car1.png";
car2_image="car2.png";

function add(){
    background=new Image();
    background.onload=uploadabackground;
    background.src=background_image;

    car1=new Image();
    car2=new Image();
    car1.onload=uploadcar1;
    car2.onload=uploadcar2;
    car1.src=car1_image;
    car2.src=car2_image;
    
}

function finish(){
    if(car1_x>700){
      console.log("car1 won");
      document.getElementById("game_status").innerHTML="Car1 won!!";
    }

    if(car2_x>700){
        console.log("car2 won");
        document.getElementById("game_status").innerHTML="Car2 won!!";
      }
}

function uploadabackground(){
    ctx.drawImage(background,0,0,canvas.width,canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1,car1_x,car1_y,car1_width,car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",mykeydown);
function mykeydown(e){
keypressed=e.keyCode;
if(keypressed=='38'){
    up();
    console.log("up");
}

if(keypressed=='40'){
    down();
    console.log("down");
}

if(keypressed=='37'){
    left();
    console.log("left");
}

if(keypressed=='39'){
    right();
    console.log("right");
}
}

function up(){
    if (car1_y>=0){
        car1_y=car1_y-10;
        uploadabackground();
        uploadcar1();
        uploadcar2();
    }
}

function down(){
    if (car1_y<=500){
        car1_y=car1_y+10;
        uploadabackground();
        uploadcar1();
        uploadcar2();
    }
}

function left(){
    if (car1_x>=0){
        car1_x=car1_x-10;
        uploadabackground();
        uploadcar1();
        uploadcar2();
    }
}
function right(){
    if (car1_x<=700){
        car1_x=car1_x+10;
        uploadabackground();
        uploadcar1();
        uploadcar2();s
        finish();
        
    }
}

window.addEventListener("keydown",mykeydown2);
function mykeydown2(e){
keypressed=e.keyCode;
if(keypressed=='87'){
    w();
    console.log("w");
}

if(keypressed=='83'){
    s();
    console.log("s");
}

if(keypressed=='65'){
    a();
    console.log("a");
}

if(keypressed=='68'){
    d();
    console.log("d");
}
}

function w(){
    if (car2_y>=0){
        car2_y=car2_y-10;
        uploadabackground();
        uploadcar1();
        uploadcar2();
    }
}

function s(){
    if (car2_y<=500){
        car2_y=car2_y+10;
        uploadabackground();
        uploadcar1();
        uploadcar2();
    }
}

function a(){
    if (car2_x>=0){
        car2_x=car2_x-10;
        uploadabackground();
        uploadcar1();
        uploadcar2();
    }
}
function d(){
    if (car2_x<=700){
        car2_x=car2_x+10;
        uploadabackground();
        uploadcar1();
        uploadcar2();s
        finish();
    }
}