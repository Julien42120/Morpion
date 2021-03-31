
//CREATION D'UNE CLASSE JOUEUR AVEC UN NOM ET UN SIGNE //

class Joueur {

    constructor(name, mark){

        this.name = name;
        this.mark = mark;
        this.tab = [];
        this.count = 0
    }
}

// CREATION D'UNE CLASSE MORPION COMPRENANT UN TABLEAU DES JOUEURS ET UN TABLEAU DES COMBINAISONS POSSIBLES//

let contain = document.querySelector('.game-board')

class Morpion {

    constructor(arrayJoueur){

        this.Joueurs = arrayJoueur
        this.JoueurTurn = this.Joueurs[0]
        this.winCombi = [
            ['box1','box2','box3'],
            ['box4','box5','box6'],
            ['box7','box8','box9'],
            ['box3','box6','box9'],
            ['box2','box5','box8'],
            ['box1','box4','box7'],
            ['box3','box5','box7'],
            ['box1','box5','box9']
        ]
    }

// METHODE QUI COMPREND ET QUI EXECUTE TOUTE LES AUTRES METHODE //

    play(box) {
        
        box.innerHTML = this.JoueurTurn.mark;
        this.JoueurTurn.tab.push(box.id)
        this.JoueurTurn.count++
        this.checkWin();
        this.writeCount();
        this.switchJoueur();
        
    }

// INCRÉMENTATION DE 1 A CHAQUE COUP DE CHAQUE JOUEUR //

    writeCount(){
        let count1 = document.querySelector('#count1')
        count1.innerHTML = this.Joueurs[0].count
        let count2 = document.querySelector('#count2')
        count2.innerHTML = this.Joueurs[1].count
    }

// PERMET DE SWITCHER DE JOUEUR A CHAQUE CLICK SUR LE MORPION //

    switchJoueur(){
        if(this.JoueurTurn == this.Joueurs[0]){
            this.JoueurTurn = this.Joueurs[1]
        } else {
            this.JoueurTurn = this.Joueurs[0]
        }
    }
    
// COMPTEUR DE SIGNE , DES QU'IL Y EN A 3 MEME PAR RAPPORT AU TABLEAU --> ALERTE //

    checkWin(){

        this.winCombi.filter((elements)=>{
            let count = 0
            this.JoueurTurn.tab.map((e)=>{
                if (elements.includes(e)){
                    count++
                    if(count == 3){
                        let modal = document.querySelector('.modal')
                        let modalBody = document.querySelector('.modal-body')
                        modal.style.display = 'block'
                        modal.style.color = 'black'
                        modal.classList.add('show')
                        modalBody.innerHTML = this.PlayerTurn.name + ' a gagné'
                        contain.style.pointerEvents = 'none'
                    }
                }
            })
        })
    }
}

// ASSIGNATION D'UN NOM ET D'UN SIGNE AU 2 JOUEURS CRÉER //


let Joueur1 = new Joueur('Joueur1' , '♠')
let Joueur2 = new Joueur('Joueur2' , '♥')
let Game = new Morpion([Joueur1, Joueur2]);

let boxs = document.querySelectorAll(".box")
boxs.forEach ((box) => {
    box.addEventListener("click", function(event) {
        Game.play(event.target)
        box.style.pointerEvents = 'none';
        
});

})

// let count1 = document.querySelector('#count1')
// let count1 = 0

// count1.addEventListener("click", function(e){
//     count1 ++
//     count1.innerHTML = count1
//   })


// VARIABLE POUR LE TIMER //

var { Timer } =Require('lib/easytimer/dist/easytimer.min.js');
var timer = new Timer();
timer.start();

timer.addEventListener('secondsUpdated', function (e) {
    $('#basicUsage').html(timer.getTimeValues().toString());
});

// RECUPERATION DE L'ID DU JOUEUR EN FONCTION DE LA CASE CLICKE //


