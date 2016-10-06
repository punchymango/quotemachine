// Code goes here

var quotes = {
  quoteList: [
    ["'I'll be back!'", " - The Terminator"],
    ["'Kneel before Zod!'", " - General Zod"],
    ["'I am the law!'", " - Judge Dredd"],
    ["'By Grapthar's Hammer, by the Suns of Worvan, I shall avenge you.'", " - Sir Alexander Dane"],
    ["'May the force be with you.'", " - Luke Skywalker"],
    ["'Live long and prosper.'", " - Spock"],
    ["'I am fire, I am death.'", " - Smaug"],
    ["'I'm sorry Dave, I can't let you do that.'", " - HAL"],
    ["'Game over, man, game over!'", " - PFC Hudson"],
    ["'Why is the rum gone?'", " - Captain Jack Sparrow"],
    ["'Wubba Lubba Dub Dub!'", " - Rick Sanchez"],
    ["'Bite my shiny metal ass!'", "- Bender"],
    ["'DODGE!'", "- Piccolo"],
    ["'No power in the 'verse can stop me.'", "- Kaylee"],
    ["'Just who the hell do you think I am?!'", "- Kamina"],
    ["'Nobody exists on purpose, nobody belongs anywhere, everybody's gonna die. Come watch TV?'", "- Morty"],
    ["'I can think of seven uses for a cadaver. Today.'", "- Holtzman"],
    ["'We came, we saw, we kicked it's ass!'", "- Peter Venkman"],
    ["'Forth, and fear no darkness!'", "- Theoden, King of Rohan"],
    ["'FOR PONY'", "- Richard"]
  ],

  generate: function() {
    var quoteNumber = Math.floor(Math.random() * 20);
    var quote = this.quoteList[quoteNumber][0];
    var attribution = this.quoteList[quoteNumber][1];
    view.displayQuote(quote, attribution);
  }
};

var view = {
  animations: [
    "anim0 2s 1 forwards linear",
    "anim1 2s 1 forwards linear",
    "anim2 2s 1 forwards linear",
    "anim3 2s 1 forwards linear"
  ],

  displayQuote: function(quote, source) {
    var quoteTarget = document.getElementById("quote");
    var sourceTarget = document.getElementById("source");
    quoteTarget.textContent = quote;
    sourceTarget.textContent = source;
  },

  changeColor: function() {
    var colorNumber = Math.floor(Math.random() * 4);
    document.body.style.animation = this.animations[colorNumber];
  }
};


document.getElementById("generateQuote").addEventListener("click", function() {
  quotes.generate();
  view.changeColor();
});