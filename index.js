function theBeatlesPlay(musicians, instruments){
  var band = [];
  for (let i = 0; i < musicians.length; i++) {
    band.push(musicians[i] + ' plays ' + instruments[i])
  }
  return band;
}
function johnLennonFacts(facts) {
  var excitedFacts = [];
  while (excitedFacts < facts.length + 1) {
    excitedFacts.push(facts[i] + '!!!')
  }
  return excitedFacts;
}
