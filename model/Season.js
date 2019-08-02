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
    description:"Series two consists of three episodes. Brooker described it as \"more epic in scale, but more intimate in scope\". The episodes are more \"understated\" in their technologies. Brooker commented that the second series mirrors the first: the first series has topics of (in order) \"warped political satire\", \"dystopian hellscape\" and \"relationship torn apart by technology\", while the second series presents episodes of these forms in reverse. Each episode in the first series had a male protagonist, so Brooker deliberately wrote female protagonists for series two episodes \"Be Right Back\" and \"White Bear\".",
    episodes:[

    ]
  },
  {
    id:3,
    title:"season 3",
    year:2016,
    image:"/img/black/season3-bg.jpg",
    description:"In developing the third series' stories, Brooker had looked back to the first two series and the Christmas special, and recognised that all the stories were about characters becoming trapped in a situation that they could not escape from.",
    episodes:[

    ]
  },
]
module.exports={
  getSeason:function(id){
    for(var i=0; i<items.length;i++){
      if(items[i].id==id){
        return items[i];
      }
    }
    return null;
  },
  items:items
}
