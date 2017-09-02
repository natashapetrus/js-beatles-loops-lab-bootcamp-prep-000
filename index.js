function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (let i=0; i<musicians.length; i++){
    newArray = [...newArray, `${musicians[i]} plays ${instruments[i]}`];
  }
  return newArray;
}

function johnLennonFacts(facts){
  var newArray = [];
  let i = 0;
  while(i < facts.length){
    newArray = [...newArray, `${facts[i]}!!!`];
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(){
  
}