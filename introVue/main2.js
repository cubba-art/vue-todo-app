
Vue.component('product',{
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product">
        
      <div class="product-image">
        <img :src="image" />
      </div>

      <div class="product-info">
          <h1>{{ title }}</h1>
          <p v-if="inStock">In Stock</p>
          <p v-else>Out of Stock</p>
          <p>User is premium: {{ premium }}</p>
          <p>Shipping: {{ shipping }}</p>

          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>

          <div class="color-box"
               v-for="(variant, index) in variants" 
               :key="variant.variantId"
               :style="{ backgroundColor: variant.variantColor }"
               @mouseover="updateProduct(index)"
               >
          </div> 

          <button v-on:click="addToCart" 
            :disabled="!inStock"
            :class="{ disabledButton: !inStock }"
            >
          Add to cart
          </button>

          <div class="cart">
            <p>test Cart {{ cart }}</p>
        </div>
       </div>  
    
    </div>
   `,
   data() {
       return {
            brand: 'Vue Mastery',
            product: 'Socks',
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
            cart:100
        }
    },
    methods: {
        addToCart: function(){
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
            this.cart++;
        },
        updateProduct: function(v){
            this.selectedVariant = v;
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;        
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity;
        },
        shipping() {
            if(this.premium) {
                return "Free";
            }
            return 2.99;
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart(id){
          this.cart.push(id);
        }
    }
});