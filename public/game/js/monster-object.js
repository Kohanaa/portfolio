function Hero(id,x,y){
  var orcEl = document.getElementById(id);
  this.x=x;
  this.y=y;
  this.lives=3;
  var me=this;
  var frameX = -1;
  var skins = [
    'img/troll-red.png',
    'img/troll-green_3.png',
    'img/troll-brown.png',
    'img/troll-darkgreen.png'
    ]
  var skinId = 0;
  var direction = 'right';
  var frameY = 1;
  this.changeDirection=function(){
    console.log(direction);
    if (direction == 'right' ) {
      direction = 'left';
      frameY = 3;
    }
    else if (direction == 'left' ) {
      direction = 'right';
      frameY = 1;
    }
    else if (direction == 'top' ) {
      direction = 'bottom';
      frameY = 2;
    }
    else if (direction == 'bottom' ) {
      direction = 'top';
      frameY = 0;
    }
  }
  document.onkeyup = function(event) {
    if (event.key == 'ArrowRight') {
      direction = "right";
      frameY = 1;
    }
    if (event.key == 'ArrowLeft') {
      direction = "left";
      frameY = 3;
    }
    if (event.key == 'ArrowUp') {
      direction = "top";
      frameY = 0;
    }
    if (event.key == 'ArrowDown') {
      direction = "bottom";
      frameY = 2;
    }
    if (event.key == ' ') {
      skinId += 1;
      if (skinId >= skins.length) {
        skinId = 0
      }
      orcEl.style.backgroundImage='url('+skins[skinId]+')';
    }
  }
  this.move=function(){
    frameX += 1;
    if (frameX == 3) {
      frameX = 0;
    }
    if (direction == 'right' && me.x > 500 - 24) {
      direction = 'left';
      frameY = 3;
    }
    if (direction == 'left' && me.x < 0) {
      direction = 'right';
      frameY = 1;
    }
    if (direction == 'top' && me.y < 0) {
      direction = 'bottom';
      frameY = 2;
    }
    if (direction == 'bottom' && me.y > 300 - 32) {
      direction = 'top';
      frameY = 0;
    }


    if (direction == 'right') {
      me.x += 5;
    } else if (direction == 'left') {
      me.x -= 5;
    } else if (direction == 'top') {
      me.y -= 5;
    } else {
      me.y += 5;
    }
  }
  this.draw=function(){
    orcEl.style.left = me.x + 'px';
    orcEl.style.top = me.y + 'px';
    orcEl.style.backgroundPosition = '-' + frameX * 48 + 'px -' + frameY * 64 + 'px';
  }
}
function HeroHead(id,x,y){
  var orcEl = document.getElementById(id);
  this.x=x;
  this.y=y;
  this.lives=3;
  var me=this;
  var frameX = -1;
  var skins = [
    '/game/img/redhead.png',
    ]
  var skinId = 0;
  var direction = 'right';
  var frameY = 1;
  this.changeDirection=function(){
    console.log(direction);
    if (direction == 'right' ) {
      direction = 'left';
      frameY = 3;
    }
    else if (direction == 'left' ) {
      direction = 'right';
      frameY = 1;
    }
    else if (direction == 'top' ) {
      direction = 'bottom';
      frameY = 2;
    }
    else if (direction == 'bottom' ) {
      direction = 'top';
      frameY = 0;
    }
  }
  document.onkeyup = function(event) {
    if (event.key == 'ArrowRight') {
      direction = "right";
      frameY = 1;
    }
    if (event.key == 'ArrowLeft') {
      direction = "left";
      frameY = 3;
    }
    if (event.key == 'ArrowUp') {
      direction = "top";
      frameY = 0;
    }
    if (event.key == 'ArrowDown') {
      direction = "bottom";
      frameY = 2;
    }
    if (event.key == ' ') {
      skinId += 1;
      if (skinId >= skins.length) {
        skinId = 0
      }
      orcEl.style.backgroundImage='url('+skins[skinId]+')';
    }
  }
  this.move=function(){
    frameX += 1;
    if (frameX == 3) {
      frameX = 0;
    }
    if (direction == 'right' && me.x > 500 - 24) {
      direction = 'left';
      frameY = 3;
    }
    if (direction == 'left' && me.x < 0) {
      direction = 'right';
      frameY = 1;
    }
    if (direction == 'top' && me.y < 0) {
      direction = 'bottom';
      frameY = 2;
    }
    if (direction == 'bottom' && me.y > 300 - 32) {
      direction = 'top';
      frameY = 0;
    }


    if (direction == 'right') {
      me.x += 5;
    } else if (direction == 'left') {
      me.x -= 5;
    } else if (direction == 'top') {
      me.y -= 5;
    } else {
      me.y += 5;
    }
  }
  this.draw=function(){
    orcEl.style.left = me.x + 'px';
    orcEl.style.top = me.y + 'px';
    var angle=(frameY-1)*90;
    orcEl.style.transform=`rotate(${angle}deg)`
   //orcEl.style.backgroundPosition = '-' + frameX * 48 + 'px -' + frameY * 64 + 'px';
  }
}
