(function () {
   var names = ["Yaakov", "John", "Justin", "Jake", "Paul", "Olivia", "Antony", "Riley", "Lorena", "June"];
   for (var name in names) {
      var firstLetter = names[name].charAt(0).toLowerCase();
       if (firstLetter === 'j') {
          byeSpeaker.speak(names[name]);
  } else {
    helloSpeaker.speak(names[name]);
  }
}

})();