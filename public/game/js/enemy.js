function Enemy(id,x,y,scene){
  var el=document.getElementById(id);
  var me=this;
  var frameX = -1;
  var skinId = 0;
  this.direction = 'right';
  var frameY = 1;
  this.x=x;
  this.y=y;
  this.speed=5;
  this.move=function(){
    frameX += 1;
    if (frameX == 3) {
      frameX = 0;
    }
    if (me.direction == 'right' && me.x > 500 - 24) {
      me.direction = 'left';
      frameY = 3;
    }
    if (me.direction == 'left' && me.x < 0) {
      me.direction = 'right';
      frameY = 1;
    }
    if (me.direction == 'top' && me.y < 0) {
      me.direction = 'bottom';
      frameY = 2;
    }
    if (me.direction == 'bottom' && me.y > 300 - 32) {
      me.direction = 'top';
      frameY = 0;
    }


    if (me.direction == 'right') {
      me.x += me.speed;
    } else if (me.direction == 'left') {
      me.x -= me.speed;
    } else if (me.direction == 'top') {
      me.y -= me.speed;
    } else {
      me.y += me.speed;
    }
  }
  this.draw=function(){
    el.style.left=this.x+"px";
    el.style.top=this.y+"px";
    var angle=(frameY-1)*90;
    el.style.transform=`rotate(${angle}deg)`
  }
  this.draw();
}
