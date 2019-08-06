const items=[
  {
    id:1,
    title:"season 1",
    year:2011,
    image:"/img/black/season1-bg.jpg",
    description:"The series' inception was in 2010. Charlie Brooker and Annabel Jones served as executive producers; the two had begun to work together on Charlie Brooker's Screenwipe, a television review programme which aired from 2006 to 2008.",
    episodes:[
      {
        id:1,
        title:"The National Anthem",
        date:"4 December 2011",
        image:"/img/black/1/1.jpg",
        videos:[
          "nSDviEdvw4U",
          "YrpK90bHO2U",
          "di6emt8_ie8",
          "R32qWdOWrTo"
        ]
      },
      {
        id:2,
        title:"Fifteen Million Merits",
        date:"11 December 2011",
        image:"/img/black/1/2.jpg",
      },
      {
        id:3,
        title:"The Entire History of You",
        date:"18 December 2011",
        image:"/img/black/1/3.jpg",
      }
    ]
  },
  {
    id:2,
    title:"season 2",
    year:2013,
    image:"/img/black/season2-bg.jpg",
    description:"Series two consists of three episodes. Brooker described it as \"more epic in scale, but more intimate in scope\". The episodes are more \"understated\" in their technologies.",
    episodes:[
      {
        id:1,
        title:"Be Right Back",
        date:"11 February 2013",
        image:"/img/black/2/1.jpg",
      },
      {
        id:2,
        title:"White Bear",
        date:"18 February 2013",
        image:"/img/black/2/2.jpg",
      },
      {
        id:3,
        title:"The Waldo Moment",
        date:"25 February 2013",
        image:"/img/black/2/3.jpg",
      },

    ]
  },
  {
    id:3,
    title:"season 3",
    year:2016,
    image:"/img/black/season3-bg.jpg",
    description:"In developing the third series' stories, Brooker had looked back to the first two series and the Christmas special, and recognised that all the stories were about characters becoming trapped in a situation that they could not escape from.",
    episodes:[
      {
        id:1,
        title:"Nosedive",
        date:"21 October 2016",
        image:"/img/black/3/1.jpg",
      },
      {
        id:2,
        title:"Playtest",
        date:"21 October 2016",
        image:"/img/black/3/2.jpg",
      },
      {
        id:3,
        title:"Shut Up and Dance",
        date:"21 October 2016",
        image:"/img/black/3/3.jpg",
      },
      {
        id:4,
        title:"San Junipero",
        date:"21 October 2016",
        image:"/img/black/3/4.jpg",
      },
      {
        id:5,
        title:"Men Against Fire",
        date:"21 October 2016",
        image:"/img/black/3/5.jpg",
      },
      {
        id:6,
        title:"Hated in the Nation",
        date:"21 October 2016",
        image:"/img/black/3/6.jpg",
      },

    ]
  },
  {
    id:4,
    title:"season 4",
    year:2017,
    image:"/img/black/season4-bg.jpg",
    description:"According to Brooker, the fourth series has even more variety in the episodes than in previous series. Brooker says that there is \"some more hope\" in the series, crediting this to the fact that writing began in July 2016 and continued throughout the 2016 U.S. election.",
    episodes:[
      {
        id:1,
        title:"USS Callister",
        date:"29 December 2017",
        image:"/img/black/4/1.png",
      },
      {
        id:2,
        title:"Arkangel",
        date:"29 December 2017",
        image:"/img/black/4/2.png",
      },
      {
        id:3,
        title:"Crocodile",
        date:"29 December 2017",
        image:"/img/black/4/3.png",
      },
      {
        id:4,
        title:"Hang the DJ",
        date:"29 December 2017",
        image:"/img/black/4/4.png",
      },
      {
        id:5,
        title:"Metalhead",
        date:"29 December 2017",
        image:"/img/black/4/5.png",
      },
      {
        id:6,
        title:"Black Museum",
        date:"29 December 2017",
        image:"/img/black/4/6.png",
      },

    ]
  },
  {
    id:5,
    title:"season 5",
    year:2019,
    image:"/img/black/season3-bg.jpg",
    description:"In December 2017, when Brooker and executive producer Annabel Jones were asked about possibly creating a fifth series of Black Mirror, they said, \"We would love to do it.\" Netflix announced the fifth series via social media on 5 March 2018.",
    episodes:[
      {
        id:1,
        title:"Striking Vipers",
        date:"5 June 2019",
        image:"/img/black/5/1.jpg",
      },
      {
        id:2,
        title:"Smithereens",
        date:"5 June 2019",
        image:"/img/black/5/2.jpg",
      },
      {
        id:3,
        title:"Rachel, Jack and Ashley Too",
        date:"5 June 2019",
        image:"/img/black/5/3.jpg",
      },

    ]
  },
]
var getSeason=function(id){
  for(var i=0; i<items.length;i++){
    if(items[i].id==id){
      return items[i];
    }
  }
  return null;
}
var getEpisode=function(season_id,id){
  var season=getSeason(season_id);
  for(var i=0; i<season.episodes.length;i++){
    if(season.episodes[i].id==id){
      return season.episodes[i];
    }
  }
  return null;
}
module.exports={
  getSeason:getSeason,
  getEpisode:getEpisode,
  items:items
}
