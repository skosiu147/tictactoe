var app = new Vue({
    el: '#app',
    data: {
        board: [],
        winner: '',
        winnerTest: false,
        x: true,
        o: false,
        isClicked: [],
    },

    methods: {
        updateBoard(i){
            if(this.x){
                Vue.set(this.board, i, 'x');
                Vue.set(this.isClicked, i, true);
                this.x = false;
                this.o = true;
            }
            else if(this.o){
                Vue.set(this.board, i, 'o');
                Vue.set(this.isClicked, i, true);
                this.x = true;
                this.o = false;
                }

            this.findWinner();
        },//end method updateBoard
        findWinner(){
            //find winner x
            if(this.board[0] == 'x' && this.board[1] == 'x' && this.board[2] == 'x'){
                this.winner = 'x';
                this.winnerTest = true;
            }else if(this.board[3] == 'x' && this.board[4] == 'x' && this.board[5] == 'x'){
                this.winner = 'x';
                this.winnerTest = true;
            }else if(this.board[6] == 'x' && this.board[7] == 'x' && this.board[8] == 'x'){
                this.winner = 'x';
                this.winnerTest = true;
            }else if(this.board[0] == 'x' && this.board[3] == 'x' && this.board[6] == 'x'){
                this.winner = 'x';
                this.winnerTest = true;
            }else if(this.board[1] == 'x' && this.board[4] == 'x' && this.board[7] == 'x'){
                this.winner = 'x';
                this.winnerTest = true;
            }else if(this.board[2] == 'x' && this.board[5] == 'x' && this.board[8] == 'x'){
                this.winner = 'x';
                this.winnerTest = true;
            }else if(this.board[0] == 'x' && this.board[4] == 'x' && this.board[8] == 'x'){
                this.winner = 'x';
                this.winnerTest = true;
            }else if(this.board[2] == 'x' && this.board[4] == 'x' && this.board[6] == 'x'){
                this.winner = 'x';
                this.winnerTest = true;
            }
            // find winner o
            else if(this.board[0] == 'o' && this.board[1] == 'o' && this.board[2] == 'o'){
                this.winner = 'o';
                this.winnerTest = true;
            }else if(this.board[3] == 'o' && this.board[4] == 'o' && this.board[5] == 'o'){
                this.winner = 'o';
                this.winnerTest = true;
            }else if(this.board[6] == 'o' && this.board[7] == 'o' && this.board[8] == 'o'){
                this.winner = 'o';
                this.winnerTest = true;
            }else if(this.board[0] == 'o' && this.board[3] == 'o' && this.board[6] == 'o'){
                this.winner = 'o';
                this.winnerTest = true;
            }else if(this.board[1] == 'o' && this.board[4] == 'o' && this.board[7] == 'o'){
                this.winner = 'o';
                this.winnerTest = true;
            }else if(this.board[2] == 'o' && this.board[5] == 'o' && this.board[8] == 'o'){
                this.winner = 'o';
                this.winnerTest = true;
            }else if(this.board[0] == 'o' && this.board[4] == 'o' && this.board[8] == 'o'){
                this.winner = 'o';
                this.winnerTest = true;
            }else if(this.board[2] == 'o' && this.board[4] == 'o' && this.board[6] == 'o'){
                this.winner = 'o';
                this.winnerTest = true;
            }
        },//end method findWinner
        clearBoard(){
            this.board = [];
            this.winner = '';
            this.winnerTest = false;
            this.x = true;
            this.o = false;
            this.isClicked = [];
        },//end method clearBoard
    },
})