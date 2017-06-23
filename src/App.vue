<template>
  <div>
    <carousel>
      <ul>
        <li v-for="item in groups">
          <img :src="item.img_url"/>
          <div>
            <p>{{item.title}}</p>
            <p>{{item.intro}}</p>
          </div>
        </li>
      </ul>
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
