const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id){
            this.cart.push(id)
        },
        removeCart(id){
            const indexToRemove = this.cart.indexOf(id)
            if(indexToRemove > -1){
                this.cart.splice(indexToRemove, 1)
            }
        }
    }
})
