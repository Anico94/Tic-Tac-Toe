//build the logic for a tic-tac-toe game

//possible game options
// const gameChoices = [['00','01','02','10','11','12','20','21','22']];

console.log(_.difference([1,2], [1]))

const gameInfo = {
    xChoices: [],
    oChoices: [],
    turnCounter: "0",
    winOptions: [['00','01','02'],['10','11','12'],
    ['20','21','22'],['00','10','20'],['01','11','21'],
    ['02','12','22'],['00','11','22'],['02','11','20']],
    addChoice: function(choice){
        if (this.turnCounter % 2 === 0){
            this.xChoices.push(choice);
        }else {
            this.oChoices.push(choice);
        }
    },
    checkTurn:function (){
        if (this.turnCounter % 2 === 0){
            return 'x';
        }else {
            return'o';
        }
    },
    checkWin: function(){
        for (i = 0; i < this.winOptions.length; i++){
            let testWin = this.winOptions[i];
            if(_.difference(testWin, this.xChoices).length === 0){
                return "Winner is X ";
            }else if(_.difference(testWin, this.oChoices).length === 0){
                return "Winner is O";
            }
            if(this.turnCounter === 9){
                return "Game is a tie"
            }
        }
    }
    }






//animation of a line going throught the winning pieces

