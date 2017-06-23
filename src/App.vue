<template>
  <div>
    <carousel>
     <div>123123</div>
     <div><p></p></div>
     <li></li>
    </carousel>
  </div>
</template>

<script>
import Carousel from 'components/carousel/carousel.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    Carousel
  },
  data () {
    return {
       groups: []
    }
  },
  mounted () {
    setTimeout(() => {
      this.initDate()
    }, 20)
  },
  methods: {
    initDate(){
      axios.get('./static/index.txt').then((res)=>{
        this.groups = res.data.data
      })
    }
  }
}
</script>

<style>

</style>
