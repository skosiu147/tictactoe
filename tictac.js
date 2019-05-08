var app = new Vue({
    el: '#app',
    data: {
        board: [],
        winner: '',
        x: true,
        o: false,
    },

    methods: {
        updateBoard(i){
            if(this.x){
                Vue.set(this.board, i, 'x');
                this.x = false;
                this.o = true;
            }
            else if(this.o){
                Vue.set(this.board, i, 'o');
                this.x = true;
                this.o = false;
                }

            this.findWinner();
        },
        findWinner(){
            //find winner x
            if(this.board[0] == 'x' && this.board[1] == 'x' && this.board[2] == 'x'){
                this.winner = 'x';
            }else if(this.board[3] == 'x' && this.board[4] == 'x' && this.board[5] == 'x'){
                this.winner = 'x';
            }else if(this.board[6] == 'x' && this.board[7] == 'x' && this.board[8] == 'x'){
                this.winner = 'x';
            }else if(this.board[0] == 'x' && this.board[3] == 'x' && this.board[6] == 'x'){
                this.winner = 'x';
            }else if(this.board[1] == 'x' && this.board[4] == 'x' && this.board[7] == 'x'){
                this.winner = 'x';
            }else if(this.board[2] == 'x' && this.board[5] == 'x' && this.board[8] == 'x'){
                this.winner = 'x';
            }else if(this.board[0] == 'x' && this.board[4] == 'x' && this.board[8] == 'x'){
                this.winner = 'x';
            }else if(this.board[2] == 'x' && this.board[4] == 'x' && this.board[6] == 'x'){
                this.winner = 'x';
            }
            // find winner o
            else if(this.board[0] == 'o' && this.board[1] == 'o' && this.board[2] == 'o'){
                this.winner = 'o';
            }else if(this.board[3] == 'o' && this.board[4] == 'o' && this.board[5] == 'o'){
                this.winner = 'o';
            }else if(this.board[6] == 'o' && this.board[7] == 'o' && this.board[8] == 'o'){
                this.winner = 'o';
            }else if(this.board[0] == 'o' && this.board[3] == 'o' && this.board[6] == 'o'){
                this.winner = 'o';
            }else if(this.board[1] == 'o' && this.board[4] == 'o' && this.board[7] == 'o'){
                this.winner = 'o';
            }else if(this.board[2] == 'o' && this.board[5] == 'o' && this.board[8] == 'o'){
                this.winner = 'o';
            }else if(this.board[0] == 'o' && this.board[4] == 'o' && this.board[8] == 'o'){
                this.winner = 'o';
            }else if(this.board[2] == 'o' && this.board[4] == 'o' && this.board[6] == 'o'){
                this.winner = 'o';
            }
        },
    },
})