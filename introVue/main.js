
var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        saleText: 'On Sale!',
        selectedVariant: 0,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: './vmSocks-green.png',
                variantQuantity : 10
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './vmSocks-blue.png',
                variantQuantity : 0
            }
        ],
        cart: 0
    },
    methods: {
        addToCart: function(){
            this.cart++;
        },
        updateProduct : function(v){
            this.selectedVariant = v;
        }
    },
    computed: {
        title: function () {
            return this.brand + ' ' + this.product;        
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity;
        }
    }
});