function Door(id,x,y,scene){
  var el=document.getElementById(id);
  this.x=x;
  this.y=y;
  this.draw=function(){
    el.style.left=this.x+"px";
    el.style.top=this.y+"px";
  }
  this.draw();
}
function leave(){
  console.log("leave or stay");
}
