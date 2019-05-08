var app = new Vue({
    el: '#app',
    data: {
        board: [],
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
        },
    },
})