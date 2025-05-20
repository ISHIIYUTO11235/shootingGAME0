stageObstacles[0]=function(){
	coreMessage("level  序廊",5);
}

stageObstacles[1]=function(){
	redObstacles[0] = new Obstacle(0,0,168,40,0,1,0,0);
	whiteObstacles[0] = new Obstacle(168,0,168,40,0,1,1,0);
	setTimeout(function(){	for(let i=0;i<10;i++){
			setTimeout(function(){obstacleFactory(random(1,319),0,random(10,50),random(20,30),random(-5,5),random(1,5),random(0,2),random(0,2))},1500*i);
		}},1000*10);




	coreMessage("level 壱 序廊",5);
}

stageObstacles[2]=function(){

coreMessage("level 弐 　雨",5);
for(let i = 0;i<60;i++){
	setTimeout(function(){obstacleFactory(random(1,320),0,5,40,i/20,random(5,8),random(0,2),0)},i*400);
}


setTimeout(function(){coreMessage("風⇒⇒",4)},15000);
}

stageObstacles[3]=function(){
	coreMessage("level 参 　虫",5);
	for(let i = 0;i<45;i++){
		setTimeout(function(){autoBulletFactory(random(16,320),0,0.5,random(0,2))},i*400);
	}
	setTimeout(function(){	for(let i=0;i<5;i++){
			setTimeout(function(){obstacleFactory(random(1,319),0,random(10,50),random(20,30),random(-5,5),random(1,5),random(0,2),random(0,2))},3000*i);
		}},1000*10);
}

stageObstacles[4]=function(){
	coreMessage("level 肆 大車輪",5);

	obstacleFactory(160,0,160,160,-1,1,1,1);
let colorSwitch1=0;
	for(let i = 0;i<5;i++){


		setTimeout(function(){obstacleFactory(160,0,160,160,random(-1,2),1,random(0,2),1);autoBulletFactory(i*20,0,10,random(0,2))},i*5000);
}
}

stageObstacles[5]=function(){
	coreMessage("level 伍 狭牢",5);
//(x,y,width,height,xv,yv,color,form,invin)
redObstacles[0] = new Obstacle(0,0,168,40,0,1,0,0);
whiteObstacles[0] = new Obstacle(168,0,168,40,0,1,1,0);
for(let i = 0;i<25;i++){

	setTimeout(function(){obstacleFactory(150,0,20,40,0,1,0,0,1)},i*1000);
}

for(let i = 0;i<25;i++){
	setTimeout(function(){ bulletFactory(random(150,320),0,0,random(1,6),0,0)},i*1000);
	setTimeout(function(){ bulletFactory(random(0,150),0,0,random(1,6),0,1)},i*1000);
}
}

stageObstacles[6]=function(){
	coreMessage("level 陸 狭牢",5);
//(x,y,width,height,xv,yv,color,form,invin)
redObstacles[0] = new Obstacle(168,0,168,40,0,1,0,0);
whiteObstacles[0] = new Obstacle(0,0,168,40,0,1,1,0);
for(let i = 0;i<25;i++){

	setTimeout(function(){obstacleFactory(150,0,20,40,0,1,0,0,1)},i*1000);
}

for(let i = 0;i<25;i++){
	setTimeout(function(){ bulletFactory(random(0,150),450,0,random(-1,-6),0,0)},i*1000);
	setTimeout(function(){ bulletFactory(random(150,320),0,0,random(1,6),0,1)},i*1000);
}

for(let i=0;i<5;i++){
	setTimeout(function(){obstacleFactory(random(1,319),0,random(10,50),random(20,30),random(-5,5),random(1,5),random(0,2),random(0,2))},6000*i);

}

}

stageObstacles[7]=function(){
	coreMessage("level 漆 火山",5);
	for(let i = 0;i<40;i++){
		setTimeout(function(){ bulletFactory(random(150,170),450,0,-20,0,0)},i*20+1000);
		setTimeout(function(){ bulletFactory(random(150,170),450,0,-20,0,1)},i*20+1100);
		setTimeout(function(){ obstacleFactory(random(150,170),450,10,20,random(-1,2),-20,random(0,2),random(0,2),random(0,1))},i*20+1050);

	}

	for(let i = 0;i<20;i++){

	//	obstacleFactory(x,y,width,height,xv,yv,color,form,invin);
	setTimeout(function(){ bulletFactory(random(0,320),0,random(-2,3),10,0,0)},i*40+2100);
	setTimeout(function(){ bulletFactory(random(0,320),0,random(-2,3),10,0,1)},i*40+2100);

	setTimeout(function(){obstacleFactory(random(0,320),0,30,0,random(-2,5),8,0,1,random(0,2))},i*180+2100);
		setTimeout(function(){ bulletFactory(random(0,320),0,0,1,0,0)},i*1000+2500);
		setTimeout(function(){ bulletFactory(random(0,320),0,0,1,0,1)},i*1000+2500);
	}
}

stageObstacles[8]=function(){
coreMessage("level 捌 赤潮",5);
let color=0;
//bulletFactory(x,y,xv,yv,amount,color)

for(let i=0;i<9;i++){
setTimeout(function(){
	switch (color) {
		case 0:
			color=1;
			break;
		case 1:
		color=0;
		break;

	}
	let hole =random(0,20);
	for(let i=0;i<22;i++){
		if(hole!==i){
			bulletFactory(i*16,0,0,1,0,color);
		}
	}},i*3000);


}/*
redPlayer.life+=1000;
whitePlayer.life+=1000;
*/
}

stageObstacles[9]=function(){
	coreMessage("level 玖 　白昼夢",5);
	let color=0;
	backGroundDark=0.2;
	//bulletFactory(x,y,xv,yv,amount,color)
	for(let i=0;i<6;i++){
	setTimeout(function(){
		switch (color) {
			case 0:
				color=1;
				break;
			case 1:
			color=0;
			break;

		}
		let hole =random(0,20);
		for(let i=0;i<22;i++){
			if(hole!==i){
				bulletFactory(i*16,0,0,1,0,color);
			}
		}},i*4000);


	}


	for(let i=0;i<5;i++){





		setTimeout(function(){
			autoBulletFactory(168,225,6,0);
			autoBulletFactory(168,225,6,1);},i*6000);
	}

	for(let i=0;i<5;i++){

		setTimeout(function(){
		bulletFactory(random(0,320),450,2,-1,0,1)
	bulletFactory(random(0,320),0,-2,1,0,0)},i*6000);
	}

}

stageObstacles[10]=function(){
	backGroundDark=1;
	redPlayer.life=1;
 whitePlayer.life=1;
	coreMessage("命が1になります",5);
	setTimeout(function(){coreMessage("level 拾  試練",5)},5000);
	bulletFactory(142,0,0,1,0,0);
	bulletFactory(160,450,0,-1,0,1);

	for(let i = 0;i<10;i++){
		setTimeout(function(){ obstacleFactory(random(0,320),450,random(10,15),random(10,15),random(-1,2),-1,random(0,2),random(0,2))},i*1500+5000);
	}

	for(let i = 0;i<40;i++){
		setTimeout(function(){ bulletFactory(random(150,170),450,0,-20,0,0)},i*20+1000+50000);
		setTimeout(function(){ bulletFactory(random(150,170),450,0,-20,0,1)},i*20+1100+50000);
		setTimeout(function(){ obstacleFactory(random(150,170),450,10,20,random(-1,2),-20,random(0,2),random(0,2),random(0,1))},i*20+1050+50000);

	}

	setTimeout(function(){obstacleFactory(160,450,160,160,0,-1,0,1,1)},12000);

	for(let i=0;i<6;i++){
//(x,y,width,height,xv,yv,color,form,invin)
			setTimeout(function(){obstacleFactory(random(1,320),0,5,40,0.5,random(5,8),random(0,2),0,0)},i*400+10000);

	}

	let color=0;
	//bulletFactory(x,y,xv,yv,amount,color)

	for(let i=0;i<2;i++){
	setTimeout(function(){
		switch (color) {
			case 0:
				color=1;
				break;
			case 1:
			color=0;
			break;

		}
		let hole =random(0,20);
		for(let i=0;i<22;i++){
			if(hole!==i){
				bulletFactory(i*16,0,0,1,0,color);
			}
		}},i*5000+20000);


	}

	for(let i = 0;i<10;i++){
		setTimeout(function(){autoBulletFactory(random(16,320),0,0.5,random(0,2))},i*1000+10000);
	}







}

stageObstacles[11]=function(){}

stageObstacles[12]=function(){}

stageObstacles[13]=function(){}

stageObstacles[14]=function(){}

stageObstacles[15]=function(){}

stageObstacles[16]=function(){}


stageAbility[1]=function(){}

stageAbility[2]=function(){}
stageAbility[3]=function(){}
stageAbility[4]=function(){}
stageAbility[5]=function(){
	if(redPlayer.x+8>160){
		autoBulletFactory(160,0,16,1);
		autoBulletFactory(160,0,16,0);
	}

}
stageAbility[6]=function(){
	if(whitePlayer.x+8>160){
		autoBulletFactory(160,0,16,1);
		autoBulletFactory(160,0,16,0);
	}
}
stageAbility[7]=function(){}
stageAbility[8]=function(){}
stageAbility[9]=function(){

}
stageAbility[10]=function(){}
stageAbility[11]=function(){}
stageAbility[12]=function(){}


function obstacleFactory(x,y,width,height,xv,yv,color,form,invin){//colorは 0が赤　　1が白  formは0が四角形　1がマル　2が弾丸 3が無敵アイテム　4が命アイテム
  //x,y,width,height,xv,yv,color,form
if(color==0){
redObstacles[redObstacles.length]= new Obstacle(x,y,width,height,xv,yv,color,form,invin);
}else if(color==1){
  whiteObstacles[whiteObstacles.length]=new Obstacle(x,y,width,height,xv,yv,color,form,invin);
}
obstacleSpawnSou.currentTime=0;
obstacleSpawnSou.play();
}

function bulletFactory(x,y,xv,yv,amount,color){
  switch (color) {
   case 0://(x,y,xv,yv,img,color,form)

   redObstacles[redObstacles.length] = new Bullet(x,y,xv,yv,"photo/redBullet.png",0,2);
   break;

   case 1://(x,y,xv,yv,img,color,form)
   whiteObstacles[whiteObstacles.length] = new Bullet(x,y,xv,yv,"photo/whiteBullet.png",1,2);
  break;


  }
	bulletSou.currentTime = 0;
	bulletSou.play();
}

function autoBulletFactory(x,y,speed,color){
	switch (color) {
	 case 0://(x,y,xv,yv,img,color,form)

	 bulletFactory(x,y,VecCal("x",whitePlayer.x,whitePlayer.y,x,y)*speed,VecCal("y",whitePlayer.x,whitePlayer.y,x,y)*speed,0,0)
	 break;

	 case 1://(x,y,xv,yv,img,color,form)
	 bulletFactory(x,y,VecCal("x",redPlayer.x,redPlayer.y,x,y)*speed,VecCal("y",redPlayer.x,redPlayer.y,x,y)*speed,0,1)
  break;
	}
	autoBulletSou.currentTime = 0;
  autoBulletSou.play();
}

function VecCal(xORy,x1,y1,x2,y2){

  let xv = x1-x2;
  let yv = y1-y2;
  let v = Math.sqrt((xv**2)+(yv**2));
 xv /=v;
  yv /=v;
if(xORy=="x"){
  return xv;
}else if(xORy=="y"){
  return yv;
}

}

function snowEvent(color){

}
/*
//stageObstacles[]=function(){}
//(x,y,width,height,xv,yv,color,form)
obstacleFactory(1,0,50,50,1,1,random(0,2),random(0,2));//障害物の生成
//(x,y,xv,yv,amount,color)
bulletFactory(random(1,300),0,random(1,3),random(1,4),0,random(0,2));
*/
