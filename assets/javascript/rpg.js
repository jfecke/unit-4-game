var heroes = {
    Aragorn: {
        name: "Aragorn",
        attackpower: 10,
        maxHP: 500,
        },
    Gimli: {
        name: "Gimli",
        attackpower: 5,
        maxHP: 200,
        },
    Legolas: {
        name: "Legolas",
        attackpower: 20,
        maxHP: 75,
    },
    Gandalf: {
        name: "Gandalf",
        attackpower: 25,
        maxHP: 50,
    }   
}

var villians = {
    orc : {
        name: "orc",
        attackpower: 5,
        maxHP: 50,
    },
    orakei:{
        name: "orakei",
        attackpower: 15,
        maxHP: 60,
    },
    saruman: {
        name: "Saruman",
        attackpower: 25,
        maxHP: 70,
    },
    sauron: {
        name: "Sauron",
        attackpower: 50,
        maxHP: 200,
    }
}

var rpg = { 
location: "",
hero: "",
heroPwr: 0,
currentHP: 0,
heroMax: 0,
enemy: "",
enemyPwr: 0,
enemyHP: 0,
enemyMax: 0,
gameState: 0,
levelSelector: function() {
    if (this.gameState == 1) {
        this.enemy = villians.orc.name;
        this.enemyHP = villians.orc.maxHP;
        this.enemyMax = villians.orc.maxHP;
        this.enemyPwr = villians.orc.attackpower;
        this.location = "rohan"
    }
    else if (this.gameState == 2) {
        this.enemy = villians.orakei.name;
        this.enemyHP = villians.orakei.maxHP;
        this.enemyMax = villians.orakei.maxHP;
        this.enemyPwr = villians.orakei.attackpower;
        this.location = "helmsdeep"
    }   
    else if (this.gameState == 3) {
        this.enemy = villians.saruman.maxHP;
        this.enemy = villians.saruman.name;
        this.enemyHP = villians.saruman.maxHP;
        this.enemyMax = villians.saruman.maxHP;
        this.enemyPwr = villians.saruman.attackpower;
        this.location = "tower"
    }
    else if (this.gameState == 4) {
        this.enemy = villians.sauron.name;
        this.enemyHP = villians.sauron.maxHP;
        this.enemyMax = villians.sauron.maxHP;
        this.enemyPwr = villians.sauron.attackpower;
        this.location = "doom"
    }
    $("#enemy").attr("style", "background: url('assets/images/" + this.enemy + ".jpg'); background-size: cover;")
    $("body").attr("style", "background: url('assets/images/" + this.location + ".jpg'); background-size: cover;")
},
attack: function() {
    this.currentHP -= this.enemyPwr;
    if (this.currentHP <= 0) {
        this.currentHP = 0;
    }
    this.enemyHP -= this.heroPwr;
    if (this.enemyHP <= 0) {
        this.enemyHP = 0;
    }
    $("#hero-current").attr("style", "width: " + (this.currentHP/this.heroMax)*100 + "% ")
    $("#hvalue-hero").text(this.currentHP + "/" + this.heroMax)
    $("#enemy-current").attr("style", "width: " + (this.enemyHP/this.enemyMax)*100 + "% ")
    $("#hvalue-enemy").text(this.enemyHP + "/" + this.enemyMax)
},
winCheck: function() {
    if (this.enemyHP <= 0 ) {
        alert("You Win");
        this.gameState += 1;
        this.levelSelector();
        $("#enemy-current").attr("style", "width: " + (this.enemyHP/this.enemyMax)*100 + "% ")
        $("#hvalue-enemy").text(this.enemyHP + "/" + this.enemyMax)
        this.heroPwr += heroes[this.hero].attackpower;
    }
    else if (this.currentHP <= 0) {
        alert("You Lose.")
        $("#myModal").attr("style", "display:block;")
    }
},
playGame: function() {
    this.levelSelector();
    $("#hero-current").attr("style", "width: " + (this.currentHP/this.heroMax)*100 + "% ")
    $("#hvalue-hero").text(this.currentHP + "/" + this.heroMax)
    $("#enemy-current").attr("style", "width: " + (this.enemyHP/this.enemyMax)*100 + "% ")
    $("#hvalue-enemy").text(this.enemyHP + "/" + this.enemyMax)
}
}

$(".heroes").on("click", function(){
    rpg.hero = this.id;
    rpg.heroPwr = heroes[this.id].attackpower;
    rpg.heroMax = heroes[this.id].maxHP;
    rpg.currentHP = heroes[this.id].maxHP;
    rpg.gameState = 1;
    $("#myHero").text(heroes[this.id].name);
    $("#myModal").attr("style", "display:none;")
    $("#hero").attr("style", "background: url('assets/images/" + heroes[this.id].name + ".jpg'); background-size: cover;")
    setTimeout(function() {rpg.playGame(); }, 500);    
})

$("#attack").on("click", function(){
    rpg.attack();
    setTimeout(function() {rpg.winCheck(); }, 100); 
    
    
})
