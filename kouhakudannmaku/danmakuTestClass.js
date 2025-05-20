const ca = document.getElementById("canvas");
const g = ca.getContext("2d");

let timer;
let resultTimer;
let frame=40;
let frameCount = 0;
let width = 320;
let height = 600;

let eventX=160;//マウス　または指の場所
let eventY=525;
let cEventX=0;
let cEventY=0;

let mouseActive=0;

let redDethCount=0;
let whiteDethCount=0;

let conY = 160;
let conX = 525;
let level = 1;
let secondsCount = 0;

let redInvinBtn= new Image();
redInvinBtn.src="photo/redInvinBtn.png";

let whiteInvinBtn= new Image();
whiteInvinBtn.src="photo/whiteInvinBtn.png";

let itemColorSwitch=1;

let colorSwitch = 0;
let invincibleTime=3;

let coreMessageText="";
let coreMessageStyle=0;

let stageObstacles=[];

let backGroundDark=1;
let stageTime = 30;

let lifeFactoryInterval = 30;
let invinFactoryInterval = 30;

let stageAbility=[];

let playerDethSou =new Audio("music/playerDeth.mp3");
let bulletSou =new Audio("music/shot.mp3");
let autoBulletSou =new Audio("music/shoot3.mp3");
autoBulletSou.volume = 0.4;
let obstacleSpawnSou=new Audio("music/obstacleSpawn.mp3");
let obstacleReflectSou1=new Audio("music/select02.mp3");
let obstacleReflectSou2=new Audio("music/select03.mp3");
let gameOverSou = new Audio("music/gameOver.mp3");

class Player{
constructor(x,y,xv,yv,img,life,invincible,color,invinItem){//colorは0が赤　　1が白
	this.x=x;
	this.y=y;
	this.xv=xv;
	this.yv=yv;
	this.img=new Image();
	this.img.src=img;
	this.life=life;
	this.invincible=invincible;
	this.color=color;
	this.invinItem=invinItem;

}

}

class Obstacle{

	constructor(x,y,width,height,xv,yv,color,form,invin){//colorは 0が赤　　1が白  formは0が四角形　1がマル　2が弾丸 3が無敵アイテム　4が命アイテム
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.xv=xv;
		this.yv=yv;
		this.color=color;
		this.form=form;
		this.invin=invin;


	}
}

class Item{
	constructor(x,y,width,height,xv,yv,color,form,img){
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.xv=xv;
		this.yv=yv;
		this.color=color;
		this.form=form;
		this.img=new Image();
		this.img.src=img;
	}
}

class CopyObstacle extends Obstacle{
	constructor(x,y,xv,yv,img,life,invincible){
		this.x=x;
		this.y=y;
		this.xv=xv;
		this.yv=yv;

		this.img=img;

	}

}

class Bullet extends Obstacle{
	constructor(x,y,xv,yv,img,color,form){
		super();
		this.x=x;
		this.y=y;
		this.xv=xv;
		this.yv=yv;
		this.width=16;
		this.img=new Image();
		this.img.src=img;
		this.form=form;



	}

}









let redPlayer = new Player(80,400,0,0,"photo/redPlayer.png",1000,0,0,1);
let whitePlayer = new Player(240,400,0,0,"photo/whitePlayer.png",1000,0,1,1);
let players =[redPlayer,whitePlayer];

//x,y,width,height,xv,yv,color,form
/*
let testObstacle =new Obstacle(50,0,50,20,-1,1,0,1);
let testWhiteBullet=new Bullet(50,50,1,1,"photo/whiteBullet.png",1,2);
*/
let redObstacles=[];
let whiteObstacles=[];
let redItems=[];
let whiteItems=[];

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
