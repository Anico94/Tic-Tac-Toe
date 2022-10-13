//All game information is sorted in the object
const gameInfo = {
    xChoices: [], 
    oChoices: [], 
    turnCounter: 0, 
    player1: 'Player 1', //default names if none is selected 
    player2: 'Player 2',
    score1: 0,           //score tally of both players
    score2: 0,
    // board setup as 3x3 matix rows 0->2 and columns 0->2 possible win options stored in array of arrays
    winOptions: [['00','01','02'],['10','11','12'], 
    ['20','21','22'],['00','10','20'],['01','11','21'],
    ['02','12','22'],['00','11','22'],['02','11','20']],
    winSquares: [], //array to sort the positions of the winning pieces
    winner: '', // variable to sort the winners message. 
    addChoice: function(choice){
        if (this.turnCounter % 2 === 0){
            this.xChoices.push(choice);
        }else {
            this.oChoices.push(choice);
        }
    },
    //return a value to add as a class in the html file via jQuery 
    checkTurn:function (){
        if (this.turnCounter % 2 === 0){
            return 'x';
        }else {
            return'o';
        }
    },
    checkWin: function(){
        for (i = 0; i < this.winOptions.length; i++){
            //consider each possible win option
            let testWin = this.winOptions[i];
            //check if the current loop win positions are in the currently selected choices of player 1
            //_.difference takes 2 arrays and return an array of values that are unique to the first list
            //if there are no unique values the players choices satisy a win condition.
            if(_.difference(testWin, this.xChoices).length === 0){
                for(j = 0; j < testWin.length; j++){
                    this.winSquares.push(testWin[j]); // populates an array with the winning matrix positions
                    this.winner = this.player1; // sets the winner
                };
            //check if the current loop win positions are in the currently selected choices of player 2
            //same logic as above test condition for player 2.
            }else if(_.difference(testWin, this.oChoices).length === 0){
                for(j = 0; j < testWin.length;j++){
                    this.winSquares.push(testWin[j]); // populates an array with the winning matrix positions
                    this.winner = this.player2; // sets the winner
                };
            }
        }
        // return true if a winner has been found
        if(this.winner !== ''){
            return true;
        // if no winner and no choices left the game is is tie
        }else if(this.winner === '' && this.turnCounter === 9){
            this.winner = 'Tie';
            //collect all square to show a tie animation
            this.winSquares = ['00','01','02','10','11','12','20','21','22'];
            return true;
        }
    },
    //produces a message for the screen to display with the winner
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
    //clears the board for the next round
    nextRound: function (){
        this.xChoices = [],
        this.oChoices = [],
        this.turnCounter = 0;
        this.winSquares = [];
        this.winner = "";
    },
    //clear board and current players to allow new players
    resetGame: function (){
        this.nextRound();
        this.player1 = 'Player 1';
        this.player2 = 'Player 2';
        this.score1 = 0;
        this.score2 = 0;
    }
}


