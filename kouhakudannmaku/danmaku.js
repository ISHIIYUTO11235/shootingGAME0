

window.onload = function(){
  timer = setInterval(function(){gemeTimer()},1000/frame);
}

window.onkeydown=function(ev){
  let c = ev.keyCode;
  if(c==65){//A
    if(redPlayer.invinItem>0){
      redPlayer.invinItem--;
      playerInvincible(redPlayer,0,3);
    }
  }
  if(c==68){//D
    if(whitePlayer.invinItem>0){
      whitePlayer.invinItem--;
      playerInvincible(whitePlayer,0,3);
    }
  }


}





stageObstacles[level]();

function gemeTimer(){
  frameCount++;
  if(frameCount%frame==0){
    secondsCount++;
    console.log(secondsCount);

    if(secondsCount%stageTime==0){

      level++;
    stageObstacles[level]();
      //coreMessage("Lv"+level,4);
    }
  }
  g.fillStyle="rgba(0,0,0,"+backGroundDark+")";
  g.fillRect(0,0,width+16,height);//背景

stageAbility[level]();


g.drawImage(redPlayer.img,redPlayer.x,redPlayer.y);
g.drawImage(whitePlayer.img,whitePlayer.x,whitePlayer.y);

g.font="20px monospace";
if(redPlayer.invincible==1){
  g.fillStyle="white";
  g.fillText("無敵",redPlayer.x-8,redPlayer.y);
}

if(whitePlayer.invincible==1){
  g.fillStyle="red";
  g.fillText("無敵",whitePlayer.x-8,whitePlayer.y);
}

g.font="20px monospace";
g.fillStyle="white";
g.fillText("Time  "+secondsCount,5,25);//UI
g.fillText("level  "+level,5,50);
g.font="30px monospace";
coreMessageStyle -=0.005;
g.fillStyle="rgba(255,255,255,"+coreMessageStyle+")"
g.fillText(coreMessageText,100,170);

gameoverJudgment()


for(let i=0;i<players.length;i++){//プレイヤー達の処理
   let player = players[i];

switch (i) {
  case 0:
    player.xv += 160-conX;
    player.yv += 525-conY;

    break;

  case 1:
  player.xv -= 160-conX;
  player.yv += 525-conY;
  break;
  default:

}
player.xv*=0.9;//空気の抵抗的な何か
player.yv*=0.9;
if(player.x<0){
  player.xv *= -1;
  player.x=0;
}else if(player.x>320){
  player.xv *= -1;
  player.x=320;
}

if(player.y>height-16-150){
  player.y=height-16-150;
  player.yv *= -1;
}else if(player.y<0){
  player.y=0;
  player.yv*=-1;
}
player.x +=player.xv/150;//ベクトルを足してる
player.y -=player.yv/150;


}

if(frameCount%4==0){
  for(let i=0;redObstacles.length>i;i++){//赤障害物の処理
    let obj = redObstacles[i];

  invinJudge(obj,i);

  }
}else if (frameCount%4==2) {
  for(let i=0;whiteObstacles.length>i;i++){//白障害物の処理
    let obj = whiteObstacles[i];

  invinJudge(obj,i);

  }

}

for(let i=0;redObstacles.length>i;i++){//赤障害物の処理
  let obj = redObstacles[i];
  collisionObstacle(obj);
  drawObstacle(obj);
  moveObstacle(obj);
destructionObstacle(obj,i,redObstacles);
playerCollision(whitePlayer,obj);




}

for(let i=0;whiteObstacles.length>i;i++){//白障害物の処理
  let obj = whiteObstacles[i];
  collisionObstacle(obj);
  drawObstacle(obj);
  moveObstacle(obj);
destructionObstacle(obj,i,whiteObstacles);
playerCollision(redPlayer,obj);//オブジェクトとの当たり判定


}



for(let i=0;redItems.length>i;i++){//赤アイテムの処理
  let obj = redItems[i];
  collisionObstacle(obj);
  drawObstacle(obj);
  moveObstacle(obj);
destructionObstacle(obj,i,redItems);
playerCollision(redPlayer,obj,redItems,i);

}

for(let i=0;whiteItems.length>i;i++){//白アイテムの処理
  let obj = whiteItems[i];
  collisionObstacle(obj);//
  drawObstacle(obj);//
  moveObstacle(obj);//
destructionObstacle(obj,i,whiteItems);//
playerCollision(whitePlayer,obj,whiteItems,i);

}




conX=160;
conY=525;
g.fillStyle="#FFFFFF";
g.fillRect(0,450,width+16,150);//操作パネルのｙ座標が450ｐｘ
g.beginPath();
g.fillStyle="#FFFFFF";
g.arc( 160, 525, 70, 0 * Math.PI / 180, 360 * Math.PI / 180, false );//こんとろーらー
g.fill();

g.beginPath();
g.fillStyle="black";
g.arc( 160, 525, 70, 0 * Math.PI / 180, 360 * Math.PI / 180, false );//周りの囲い
g.lineWidth = 1;
g.stroke();

let conDistance= Math.sqrt((160-eventX)**2+(525-eventY)**2);

conX=eventX;
conY=eventY;

let conDistanceX =Math.abs(conX-160);
let conDistanceY =Math.abs(conY-525);

if(conDistance>=90){

  console.log(conX+";"+conY);


}

g.beginPath();
 g.fillStyle = "#808080" ;
 g.arc( conX, conY, 20, 0 * Math.PI / 180, 360 * Math.PI / 180, false );//真ん中の動くやつ
 g.fill() ;

if(frameCount%(frame*lifeFactoryInterval)==0){//命アイテムの生成
//invinFac(random(20,300),0,random(-5,5),random(1,3),itemColorSwitch);
  if(itemColorSwitch==0){
    itemColorSwitch=1;
  }else if(itemColorSwitch==1){
      itemColorSwitch=0;
    }
  lifeFac(random(20,300),0,random(-5,5),random(1,3),itemColorSwitch);

}
if(frameCount%(frame*lifeFactoryInterval)==frame*10){//命アイテムの生成
invinFac(random(20,300),0,random(-5,5),random(1,3),itemColorSwitch);

}
console.log(redItems+""+whiteItems);

g.fillStyle="black";
g.font="20px monospace";
g.fillText("紅 X　"+redPlayer.life,0,475);
g.fillText("白 X　"+whitePlayer.life,250,475);

btn(20,500,48,32,redInvinBtn,function(){
  if(redPlayer.invinItem>0){
    redPlayer.invinItem--;
    playerInvincible(redPlayer,0,3);
  }
});

g.fillText("残り."+redPlayer.invinItem,10,555);

btn(252,500,48,32,whiteInvinBtn,function(){
  if(whitePlayer.invinItem>0){
    whitePlayer.invinItem--;
    playerInvincible(whitePlayer,0,3);
  }
});
g.fillText("残り."+whitePlayer.invinItem,242,555);

}

function btn(x,y,width,height,img,func){
  g.drawImage(img,x,y);
  if(cEventX>=x&&cEventX<=x+width){
    if(cEventY>=y&&cEventY<=y+height){
      func();
      cEventX=0;
      cEventY=0;
    }
  }
}

function invinJudge(obj,i){
  if(obj.invin==1){
    switch(obj.color){
      case 0:
      obj.color=1;
      whiteObstacles[whiteObstacles.length]=new Obstacle(obj.x,obj.y,obj.width,obj.height,obj.xv,obj.yv,obj.color,obj.form,obj.invin);
      redObstacles.splice(i,1);
      break;

      case 1:
      obj.color=0;
      redObstacles[redObstacles.length]=new Obstacle(obj.x,obj.y,obj.width,obj.height,obj.xv,obj.yv,obj.color,obj.form,obj.invin);//(x,y,width,height,xv,yv,color,form,invin)
      whiteObstacles.splice(i,1);
      break;
    }
  }
}

function coreMessage(message,time){
 coreMessageText=message;
 coreMessageStyle=1;
 setTimeout(function(){coreMessageText=""},time*1000);
}

function gameoverJudgment(){
  if(redPlayer.life<=0||whitePlayer.life<=0){
    clearInterval(timer);
  resultTimer  = setInterval(function(){result()},frame);
  gameOverSou.currentTime=0;
  gameOverSou.play();
  }

  if(level>10){
    clearInterval(timer);
  resultTimer  = setInterval(function(){result()},frame);
  }
}

function result(){
  g.fillStyle="rgba(255,255,255,0.1)";
  g.fillRect(0,0,width+16,height);
g.font="30px monospace";
g.fillStyle="black";
  switch (level) {
    case 1:
    g.fillText("到達level "+level+ " 序廊",40,200);
    g.fillText("紅 死亡数:"+redDethCount,40,235);
    g.fillText("白 死亡数:"+whiteDethCount,40,270);
      break;

    case 2:
    g.fillText("到達level "+level+" 雨",40,200);
    g.fillText("紅 死亡数:"+redDethCount,40,235);
    g.fillText("白 死亡数:"+whiteDethCount,40,270);
    break;

    case 3:
    g.fillText("到達level "+level+" 虫",40,200);
    g.fillText("紅 死亡数:"+redDethCount,40,235);
    g.fillText("白 死亡数:"+whiteDethCount,40,270);
    break;

    case 4:
    g.fillText("到達level "+level+"　大車輪",40,200);
    g.fillText("紅 死亡数:"+redDethCount,40,235);
    g.fillText("白 死亡数:"+whiteDethCount,40,270);
    break;

    case 5:
    g.fillText("到達level "+level+" 狭牢",40,200);
    g.fillText("紅 死亡数:"+redDethCount,40,235);
    g.fillText("白 死亡数:"+whiteDethCount,40,270);
    break;

    case 6:
    g.fillText("到達level "+level+" 狭牢",40,200);
    g.fillText("紅 死亡数:"+redDethCount,40,235);
    g.fillText("白 死亡数:"+whiteDethCount,40,270);
    break;

    case 7:
    g.fillText("到達level "+level+" 火山",40,200);
    g.fillText("紅 死亡数:"+redDethCount,40,235);
    g.fillText("白 死亡数:"+whiteDethCount,40,270);
    break;

    case 8:
    g.fillText("到達level "+level+" 赤潮",40,200);
    g.fillText("紅 死亡数:"+redDethCount,40,235);
    g.fillText("白 死亡数:"+whiteDethCount,40,270);
    break;

    case 9:
    g.fillText("到達level "+level+" 白昼夢",40,200);
    g.fillText("紅 死亡数:"+redDethCount,40,235);
    g.fillText("白 死亡数:"+whiteDethCount,40,270);
    g.fillText("難しすぎたかな？",40,305);

    break;

    case 10:
    g.fillText("到達level "+level+" 試練",40,200);
    g.fillText("紅 死亡数:"+redDethCount,40,235);
    g.fillText("白 死亡数:"+whiteDethCount,40,270);


    break;

    case 11:
    g.fillText("到達level "+level+" 達成",40,200);
    g.fillText("スクリーンショットして",40,230);
    g.fillText("#弾段紅白でツイート！",40,265);
    g.fillText("紅 死亡数:"+redDethCount,40,300);
    g.fillText("白 死亡数:"+whiteDethCount,40,330);
    break;

  }
}

function playerInvincible(player,startTime,time){
  player.invincible=1;

  if(player.color==0){
    setTimeout(function(){player.img.src="photo/redInvincible.png"},startTime);
    setTimeout(function(){player.invincible=0;player.img.src="photo/redPlayer.png"},time*1000);
  }else if(player.color==1){
    setTimeout(function(){player.img.src="photo/whiteInvincible.png"},startTime);
    setTimeout(function(){player.invincible=0;player.img.src="photo/whitePlayer.png"},time*1000);
  }

}

function playerDeth(player){
  let animeInterval = 150;
  player.life--;
if(player.color==0){
  redDethCount++;

  player.img.src="photo/redPlayerAnime1.png";

  setTimeout(function(){player.img.src="photo/redPlayerAnime2.png"},animeInterval);
  setTimeout(function(){player.img.src="photo/redPlayerAnime3.png";},animeInterval*2);
  setTimeout(function(){player.img.src="photo/redPlayerAnime4.png";},animeInterval*3);
  setTimeout(function(){player.img.src="photo/redPlayerAnime5.png";},animeInterval*4);
  setTimeout(function(){player.img.src="photo/redPlayer.png";},animeInterval*5);
  playerInvincible(player,animeInterval*5,3);


  console.log("赤あにめ");
}else if(player.color==1){
  whiteDethCount++;

  player.img.src="photo/whitePlayerAnime1.png";
  setTimeout(function(){player.img.src="photo/whitePlayerAnime2.png"},animeInterval);
  setTimeout(function(){player.img.src="photo/whitePlayerAnime3.png"},animeInterval*2);
  setTimeout(function(){player.img.src="photo/whitePlayerAnime4.png"},animeInterval*3);
  setTimeout(function(){player.img.src="photo/whitePlayerAnime5.png"},animeInterval*4);
  setTimeout(function(){player.img.src="photo/whitePlayer.png"},animeInterval*5);
  playerInvincible(player,animeInterval*5,3);

}
playerDethSou.currentTime=0;
playerDethSou.play();
}

function playerCollision(player,obj,array,i){

 if(player.invincible!==1){
   if(obj.form==0){
     if(player.y+8>obj.y && player.y+8<obj.y+obj.height){//プレイヤーの当たり判定の場所はredPlayer.y+8,redPlayer.x+8
       if(player.x+8>obj.x && player.x+8<obj.x+obj.width){
         console.log("hit");

         playerDeth(player);
       }
     }
   }else if(obj.form==1){
      let distanceX = obj.x-(player.x+8);
      let distanceY = obj.y-(player.y+8);
      let distance = Math.sqrt(distanceX**2+distanceY**2);
      if(distance<=obj.width/2){
        playerDeth(player);
      }
   }else if(obj.form==2){
     let distanceX = obj.x+8-(player.x+8);
     let distanceY = obj.y+8-(player.y+8);
     let distance = Math.sqrt(distanceX**2+distanceY**2);
     if(distance<=obj.width/2){
       playerDeth(player);
     }
   }else if(obj.form==4){
     let distanceX = obj.x+16-(player.x+8);
     let distanceY = obj.y+16-(player.y+8);
     let distance = Math.sqrt(distanceX**2+distanceY**2);
     if(distance<=obj.width/2){
       array.splice(i,1);
       player.life++;

     }
   }else if(obj.form==3){
     let distanceX = obj.x+16-(player.x+8);
     let distanceY = obj.y+16-(player.y+8);
     let distance = Math.sqrt(distanceX**2+distanceY**2);
     if(distance<=obj.width/2){
       array.splice(i,1);
       player.invinItem++;

     }
   }

 }


}

function collisionObstacle(obj){
  if(obj.form==0){//四角形の時の処理
    if(obj.x<0){
      obj.x=0;
      obj.xv*=-1;
    }else if(obj.x+obj.width>width+16){
      obj.x=width+16-obj.width;
      obj.xv *= -1;
    }
  }else if(obj.form==1){//円処理
    if(obj.x<0+obj.width/2){
      //obj.x=0;
      obj.xv*=-1;
    }else if(obj.x+obj.width/2>width+16){
    //  obj.x=width+16-obj.width;
      obj.xv *= -1;
    }

  }else if(obj.form==2){
    if(obj.x+8<0+obj.width/2){
      //obj.x=0;
      obj.xv*=-1;
    }else if(obj.x+8+obj.width/2>width+16){
    //  obj.x=width+16-obj.width;
      obj.xv *= -1;
    }

  }else if(obj.form==4||obj.form==3){
    if(obj.x+16<0+obj.width/2){
      //obj.x=0;
      obj.xv*=-1;
    }else if(obj.x+16+obj.width/2>width+16){
    //  obj.x=width+16-obj.width;
      obj.xv *= -1;
    }

  }

}

function lifeFac(x,y,xv,yv,color){

  if(color==0){
    redItems[redItems.length]=new Item(x,y,32,32,xv,yv,color,4,"photo/redLife.png");//colorは 0が赤　　1が白  formは0が四角形　1がマル　2が弾丸 3が無敵アイテム　4が命アイテム

  }else if(color==1){
    whiteItems[whiteItems.length]=new Item(x,y,32,32,xv,yv,color,4,"photo/whiteLife.png");

  }
}

function invinFac(x,y,xv,yv,color){

  if(color==0){
    redItems[redItems.length]=new Item(x,y,32,32,xv,yv,color,3,"photo/redInvin.png");//colorは 0が赤　　1が白  formは0が四角形　1がマル　2が弾丸 3が無敵アイテム　4が命アイテム

  }else if(color==1){
    whiteItems[whiteItems.length]=new Item(x,y,32,32,xv,yv,color,3,"photo/whiteInvin.png");

  }
}

function drawObstacle(obj){

  if(obj.form==0){//四角形の場合の処理
    if(obj.color==0){
      g.fillStyle="red";
  }else if(obj.color==1){
    g.fillStyle="white"
  }
    g.fillRect(obj.x,obj.y,obj.width,obj.height);
  }else if(obj.form==1){//円処理
    if(obj.color==0){
      g.fillStyle="red";
  }else if(obj.color==1){
    g.fillStyle="white"
  }
  g.beginPath();
  g.arc(obj.x, obj.y, obj.width/2, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
  g.fill();
}else if(obj.form==2){
  g.drawImage(obj.img,obj.x,obj.y);
}else if(obj.form==3||obj.form==4){
  g.drawImage(obj.img,obj.x,obj.y);
}


}

function moveObstacle(obj){
  obj.y += obj.yv;
  obj.x += obj.xv;
}





function destructionObstacle(obj,i,array){
if(obj.color==0){
  if(obj.y<-50||obj.y>500){
      array.splice(i,1);
      console.log("destruction");
  }
}else if(obj.color==1){
  if(obj.y<-50||obj.y>500){
      array.splice(i,1);
      console.log("destruction");
  }
}


  /*
  if(obj.form==0){
    if(obj.y>=height){
      if(obj.color==0){
        redObstacles.splice(i,1);
      }else if(obj.color==1){
        whiteObstacles.splice(i,1);
      }
  }
}else if (obj.form==1||obj.form==2){
  if(obj.y>=height){
    if(obj.color==0){
      redObstacles.splice(i,1);
    }else if(obj.color==1){
      whiteObstacles.splice(i,1);
    }

  }

}else{ob}*/
}
