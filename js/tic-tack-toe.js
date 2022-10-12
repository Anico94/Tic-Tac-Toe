//build the logic for a tic-tac-toe game

//possible game options
// const gameChoices = [['00','01','02','10','11','12','20','21','22']];

const gameInfo = {
    xChoices: [],
    oChoices: [],
    turnCounter: 0,
    player1: 'Player 1',
    player2: 'Player 2',
    score1: 0,
    score2: 0,
    winOptions: [['00','01','02'],['10','11','12'], //setup the game board as an array of arrays
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
        let winner = '';
        for (i = 0; i < this.winOptions.length; i++){
            let testWin = this.winOptions[i];
            if(_.difference(testWin, this.xChoices).length === 0){
                for(j = 0; j < testWin.length; j++){
                    this.winSquares.push(testWin[j]);
                    this.winner = this.player1;
                };
            }else if(_.difference(testWin, this.oChoices).length === 0){
                for(j = 0; j < testWin.length;j++){
                    this.winSquares.push(testWin[j]);
                    this.winner = this.player2;
                };
            }
        }
        if(this.winner !== ''){
            return true;
        }else if(this.winner === '' && this.turnCounter === 9){
            this.winner = 'Tie';
            this.winSquares = ['00','01','02','10','11','12','20','21','22'];
            return true;
        }
    },
    winSquares: [],
    winner: '',
    winnerText: function(){
        let winText = ''
        if(this.player1 === this.winner){
            winText = `${this.player1} wins round ${this.score1 + this.score2}.`;
        }else if(this.player2 === this.winner){
            winText = `${this.player2} wins round ${this.score1 + this.score2}.`
        }else{
            winText = "This round was a tie"
        }
        return winText;
    },
    updateScores: function (){
        if(this.player1 === this.winner){
            this.score1 += 1;
        }else if(this.player2 === this.winner){
            this.score2 += 1;
        }
    },
    nextRound: function (){
        this.xChoices = [],
        this.oChoices = [],
        this.turnCounter = 0;
        this.winSquares = [];
    },
    resetGame: function (){
        this.nextRound();
        this.player1 = 'Player 1';
        this.player2 = 'Player 2';
        this.score1 = 0;
        this.score2 = 0;
    }
}


