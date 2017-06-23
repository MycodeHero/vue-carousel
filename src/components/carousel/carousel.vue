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
            this.initStyle()
        }, 20)
    },
    methods: {
        initStyle() {
            this.carousel = new Carousel(this.$refs.carousel, {})
        }
    }
}
</script>

<style>
  .carousel {
    width: 230px;
  }
  .slider-box{
    width: 100%;
  }
  .slider-box li {
    display: flex;
    list-style: none;
    width: 100%;
    border: 1px solid black;
  }
  .slider-box img{
    width: 85px;
    height: 85px;
    align-items: center
  }
  .slider-box li div {
    width: 100%
  }

  .slider-box li div p{
    font-size: 8px;
    text-align: center
  }
</style>
