const app = Vue.createApp({
    //data: fi=unction()
    data(){//here we use es6 short handling
        return{
            cart:0,
            product : 'Socks',
            inStock: false,
            selectedVariant: 0,
            brand: 'Vue Mastery',
            image: './assets/images/socks_green.jpg',
            inventory: 6,
            details: ['50% cotton', '30% wool', '20% polyster'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ],
            onSale: true
        }
    },
    methods: {
        addToCart() {
          this.cart += 1
        },
        removeFromCart() {
            if (this.cart > 0) {
                this.cart -= 1
            }
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }

})
