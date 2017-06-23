<template>
    <div class="carousel" ref="carousel">
        <slot></slot>
    </div>
</template>

<script>
import {Carousel} from './carousel.js'
export default {   
    mounted () {
        setTimeout(()=>{
            this.init()
        }, 20)
    },
    methods: {
        init () {
            this.carousel = new Carousel(this.$refs.carousel, {})
        }
    }
}
</script>

<style>

</style>
