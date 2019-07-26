var levels=[{
  //0
},{
    name:"first level",
    bg:"tile.png",
    heroX:50,
    heroY:50,
    doorX:450,
    doorY:250,
    enemies:[{
      enemyX:300,
      enemyY:150,
      enemyD:"right",
      enemyS:5
    },null],
    wall:[{
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
  ]
},{
  name:"swamp",
  bg:"swamp.png",
  heroX:40,
  heroY:40,
  doorX:300,
  doorY:200,
  enemies:[{
    enemyX:200,
    enemyY:200,
    enemyD:"top",
    enemyS:10
  },
  {
    enemyX:100,
    enemyY:100,
    enemyD:"right",
    enemyS:4
  }
],
wall:[{
  x:300,
  y:60,
},
{
  x:300,
  y:90,
},
{
  x:300,
  y:120,
},
{
  x:300,
  y:150,
}
]
},{
  name:"forest",
  bg:"forest.png",
  heroX:405,
  heroY:200,
  doorX:40,
  doorY:40,
  enemies:[{
    enemyX:300,
    enemyY:150,
    enemyD:"left",
    enemyS:7
  },null],
  wall:[{
    x:300,
    y:60,
  }]
}];
function createCubes(cubes){
  var cubeElements=document.querySelectorAll(".cube");
  var stage=document.getElementById("stage");
  for (var i = 0; i < cubeElements.length; i++) {
    stage.removeChild(cubeElements[i]);
  }
  for (var i = 0; i < cubes.length; i++) {
    var cubeEl=document.createElement("div");
    cubeEl.classList.add("cube");
    stage.appendChild(cubeEl);
    cubeEl.style.left=cubes[i].x+"px";
    cubeEl.style.top=cubes[i].y+"px";
  }
  return cubes
}
function openLocation(game){
  game.location+=1;
  if (game.location>=levels.length){
    document.querySelector(".container").classList.add("finished");
    document.querySelector(".you-win").style.zIndex=2;
    return
  }
  var level=levels[game.location];
  document.querySelector("#game-info .level").innerHTML=level.name;
  document.querySelector("#game-info .number").innerHTML=game.location;
  document.querySelector("#game-info .lives").innerHTML=game.hero.lives;
  game.changeBg(level.bg);
  game.status=true;
  game.hero.x=level.heroX;
  game.hero.y=level.heroY;
  game.door.x=level.doorX;
  game.door.y=level.doorY;
  game.cubes=createCubes(level.wall)
  for (var i = 0; i < game.enemies.length; i++) {
    var enemy = game.enemies[i];
    var settings={
      enemyX:-100,
      enemyY:-100,
      enemyD:"left",
      enemyS:0
    }
    if (level["enemies"][i]){
      settings=level["enemies"][i];
    }
    enemy.x=settings.enemyX;
    enemy.y=settings.enemyY;
    enemy.speed=settings.enemyS;
    enemy.direction=settings.enemyD;

  };
  game.door.draw();
}
