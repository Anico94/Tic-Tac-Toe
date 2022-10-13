$(document).ready(function(){

    $('div.square').on('click',function(){
        //gets the position on the board that was selected and adds to the players choices
        gameInfo.addChoice($(this).attr('class').slice(-2));
        // checked class added css removes the functionality of the chosen squares
        $(this).addClass(`checked ${gameInfo.checkTurn()}`);
        //
        $(this).parent().removeClass(gameInfo.checkTurn());
        gameInfo.turnCounter = Number(gameInfo.turnCounter) + 1;
        $(this).parent().addClass(gameInfo.checkTurn());

        //win can only occur after a minimum of 5 turns
        if(gameInfo.turnCounter >=5){
            //check for a win and animate the winning positions by adding a class to winning squares.
            if(gameInfo.checkWin()){
                for (i = 0; i < gameInfo.winSquares.length; i++){
                    let position = gameInfo.winSquares[i];
                    $(`div.square.position${position}`).addClass('animate');
                    $('.game-board').addClass('hold-for-start');
                }
                //update the score and show win/tie message to the page
                gameInfo.updateScores()
                $('.score1').html(gameInfo.score1);
                $('.score2').html(gameInfo.score2);
                $('.win-message').html(gameInfo.winnerText());
            }
        }
    });

    $('.next-round').on('click',function () {
        //refresh the gameboard and remove/add classes affected during the game
        $('.win-message').html('');
        $('.game-board').removeClass('hold-for-start');
        $('.square').removeClass('x o checked animate');
        $('.game-board').removeClass('x o');
        $('.game-board').addClass('x');
        //clear information stored in the game object.
        gameInfo.nextRound();
    })

    //store and add the input name of a player to the webpage or give a default name if name wasn't provided
    const join1 = function () {
        let name1 = gameInfo.player1;
        if($('.name1').val() !== ''){
            name1 = $('.name1').val()
            gameInfo.player1 = name1;
        }
        $('section.player1').html(`<p class = 'player1'>${name1} : Score <span class = "score1">0</span></p>`);
    }

    //store and add the input name of a player to the webpage or give a default name if name wasn't provided
    const join2 = function () {
        let name2 = gameInfo.player2;
        if($('.name2').val() !== ''){
            name2 = $('.name2').val();
            gameInfo.player2 = name2;
        }
        $('section.player2').html(`<p class = 'player2'>${name2} : Score <span class = "score2">0</span></p>`);
    }

    const startButton = function (){
        //auto press join buttons to populate defult or player names if they were provided or not
        $('.join1').trigger('click')
        $('.join2').trigger('click')
        // allow the game to be played
        $('.game-board').removeClass('hold-for-start');
        // remove the start button and provide a container to pass a win/tie message
        $('.start').replaceWith("<p class = 'win-message'></p>")
        //hides the message of "press start game to play"
        $('div.press-start').css('height','0');
        $('h3').html('Players');
    }

    $('.reset-full').on('click', function (){
        //bring back the start button and remove win/tie message field
        $('.win-message').replaceWith('<button class = "start button">Start Game</button>')
        $('div.press-start').removeClass('.hide')
        //bring back player name input fields and join buttons
        $('p.player1').replaceWith('<input class = "input name1" type="text" placeholder="Enter Player 1 Name"> <button class = "join1 button">Join</button>');
        $('p.player2').replaceWith('<input class = "input name2" type="text" placeholder="Enter Player 2 Name"> <button class = "join2 button">Join</button>');
        const $join1 = $('.join1');
        const $join2 = $('.join2');
        //add back preventing game class. 
        $('.game-board').addClass('hold-for-start');
        //give the new start button an event listener
        $('.start').on('click', startButton);
        //ensures that any existing event handlers are removed from prior to re-adding
        $join1.off('click');
        $join2.off('click');
        //need to add event handlers as in some cases the join buttons are removed to play the game and are re-aded on a re-set
        $join1.on('click',join1)
        $join2.on('click',join2)
        //refresh the window and remove/add classes affected during the game
        $('.square').removeClass('x o checked animate');
        $('.game-board').removeClass('x o');
        $('.game-board').addClass('x');
        $('div.press-start').css('height','500px');
        $('h3').html('Players Enter Names');
        gameInfo.resetGame();
    })
    //add event listeners to the start and join buttons
    $('.start').on('click', startButton);
    $('.join1').on('click',join1)
    $('.join2').on('click',join2)
});