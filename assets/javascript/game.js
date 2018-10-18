var collector = {
gameState: 0,
goal: 0,
currentScore: 0,
red: 0,
blue: 0,
yellow: 0,
green: 0,
win: 0,
lose: 0,
winCheck: function(){
    if (this.currentScore === this.goal) {
        this.gameState = 2;
        this.win += 1;
        $("#win").text(this.win);
        alert("You Win!")
        this.resetGame();
    }
    else if (this.currentScore > this.goal) {
        this.gameState = 2;
        this.lose += 1;
        $("#lose").text(this.lose);
        alert("You Lose");
        this.resetGame();
    }
},   
makeRandom: function() {
    collector.goal =Math.floor(Math.random()*102)+19;
    var used = [];
    collector.red = Math.floor(Math.random()*12)+1;
    collector.blue = Math.floor(Math.random()*12)+1;
    collector.yellow = Math.floor(Math.random()*12)+1;
    collector.green = Math.floor(Math.random()*12)+1;
    used.push(collector.red);
    while (used.indexOf(collector.blue) >= 0 ) {
        collector.blue = Math.floor(Math.random()*12)+1;
    }
    used.push(collector.blue);
    while (used.indexOf(collector.yellow) >= 0 ) {
        collector.yellow = Math.floor(Math.random()*12)+1;
    }
    used.push(collector.yellow);
    while (used.indexOf(collector.green) >= 0 ) {
        collector.green = Math.floor(Math.random()*12)+1;
    }
    $("#goal").text(collector.goal);
},
resetGame: function() {
    this.currentScore = 0;
    $("#current").text(collector.currentScore);
    this.makeRandom();
}
}

$("#btn-close").on("click", function(){
    $("#myModal").attr("style", "display:none;")
    collector.gameState = 1;
    collector.makeRandom();
})

$(".crystal").on("click", function(){
    collector.currentScore += collector[this.id];
    $("#current").text(collector.currentScore);
    setTimeout(function() {collector.winCheck(); }, 1000);    
})
