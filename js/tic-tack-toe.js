//build the logic for a tic-tac-toe game

//possible game options
// const gameChoices = [['00','01','02','10','11','12','20','21','22']];

const gameInfo = {
    xChoices: [],
    oChoices: [],
    turnCounter: 0,
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
                for(j = 0; j < testWin.length;j++){
                    this.winSquares.push(testWin[j]);
                };
                return true; //"Winner is X ";
            }else if(_.difference(testWin, this.oChoices).length === 0){
                for(j = 0; j < testWin.length;j++){
                    this.winSquares.push(testWin[j]);
                };
                return true;//"Winner is O";
            }   
            if(this.turnCounter === 9){
                return true; //"Game is a tie"
            }
        }
        return false;
    },
    winSquares: [],
    result: function(){

    },
    resetGame: function (){
        this.xChoices = [],
        this.oChoices = [],
        this.turnCounter = 0,
        this.winSquares = [];

    }
    }


