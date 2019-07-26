function intersect(obj1,obj2,destination){
  var deltaX=Math.abs(obj1.x-obj2.x);
  var deltaY=Math.abs(obj1.y-obj2.y);
  return destination**2>(deltaX**2+deltaY**2);
}
