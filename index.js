function theBeatlesPlay(musicians, instruments){
  var band = [];
  for (let i = 0; i < musicians.length; i++) {
    band.push(musicians[i] + ' plays ' + instruments[i])
  }
  return band;
}
function johnLennonFacts(facts) {
  var excitedFacts = [];
  var i = 0;
  while (excitedFacts.length < facts.length) {
    excitedFacts.push(facts[i] + '!!!');
    i++;
  }
  return excitedFacts;
}
