var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        saleText: 'On Sale!',
        image:'./vmSocks-green.png',
        inventory: 11,
        onSale : false
    },
    methods: {
        sale: function(){
            this.inventory--;
            this.onSale = true;
        }
    }
});