const app = Vue.createApp({
    //data: fi=unction()
    data(){//here we use es6 short handling
        return{
            cart:0,
            product : 'Socks',
            inStock: false,
            brand: 'Vue Mastery',
            image: './assets/images/socks_green.jpg',
            inventory: 6,
            details: ['50% cotton', '30% wool', '20% polyster'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
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
