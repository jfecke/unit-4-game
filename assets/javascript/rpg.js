var heroes = {
    Aragorn: {
        name: "Aragorn",
        attackpower: 10,
        maxHP: 100,
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
        attackpower: 25,
        maxHP: 50,
    },
    orakei:{
        name: "orakei",
        attackpower: 25,
        maxHP: 50,
    },
    saruman: {
        name: "Saruman",
        attackpower: 25,
        maxHP: 50,
    },
    sauron: {
        name: "Sauron",
        attackpower: 25,
        maxHP: 50,
    }
}

var rpg = { 
hero: "",
heroPwr: 0,
currentSHP: 0,
enemy: "",
enemyPwr: 0,
enemyHP: 0,
gameState: 0,
levelSelector: function() {
    if (this.gameState == 1) {
        this.enemy = villians.orc.name;
        this.enemyHP = villians.orc.maxHP;
        this.enemyPwr = villians.orc.attackpower;
    }
    else if (this.gameState == 2) {
        this.enemy = villians.orakei.name;
        this.enemyHP = villians.orakei.maxHP;
        this.enemyPwr = villians.orakei.attackpower;
    }   
    else if (this.gameState == 3) {
        this.enemy = villians.saruman.maxHP;
        this.enemy = villians.saruman.name;
        this.enemyHP = villians.saruman.maxHP;
        this.enemyPwr = villians.saruman.attackpower;
    }
    else if (this.gameState == 4) {
        this.enemy = villians.sauron.name;
        this.enemyHP = villians.sauron.maxHP;
        this.enemyPwr = villians.sauron.attackpower;
    }
},
playGame: function() {
    this.levelSelector();
}
}

$(".heroes").on("click", function(){
    rpg.hero = this.id;
    rpg.gameState = 1;
    $("#myHero").text(heroes[this.id].name);
    console.log(heroes[this.id].name);
    $("#myModal").attr("style", "display:none;")
    setTimeout(function() {rpg.playGame(); }, 500);    
})
