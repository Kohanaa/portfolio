document.addEventListener('DOMContentLoaded', function(event) {
var game={
  status:true,
  location:1,
  changeBg:function(bg){
    var stage=document.getElementById("stage");
    stage.style.backgroundImage=`url(/game/img/bg/${bg})`
  }
}
game.door=new Door("exit",450,250);
game.hero=new HeroHead("hero-head",50,50);
game.enemies=[];
var enemy=new Enemy("enemy", 300,150);
game.enemies.push(enemy);
var enemy1=new Enemy("enemy-1",-100,-100);
enemy1.speed=0;
game.enemies.push(enemy1);
game.cubes=createCubes([{
  x:400,
  y:100,
},
{
  x:430,
  y:100,
},
{
  x:460,
  y:100,
},
{
  x:490,
  y:100,
},
{
  x:370,
  y:100,
},
{
  x:340,
  y:100,
}
])
setInterval(function() {
  if (!game.status){
    return
  }
  if(intersect(game.door,game.hero,50)){
    game.status=false;
    openLocation(game);
  }
  game.cubes.forEach(function(cube){
    if(intersect(cube,game.hero,30)){
      game.hero.changeDirection()
    }
  })
  game.enemies.forEach(function(enemy,index){
    enemy.move();
    if(intersect(enemy,game.hero,40)){
      game.status=false;
      game.location=0;
        game.hero.lives-=1;
        if(game.hero.lives==0){
          document.querySelector(".container").classList.add("finished");
          document.querySelector(".game-over").style.zIndex=2;
        }
        else{
          openLocation(game);
        }
    }
    enemy.draw();
  });
  game.hero.move();
  game.hero.draw();
}, 50)
})
