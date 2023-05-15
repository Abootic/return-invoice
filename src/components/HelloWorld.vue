<template>
    <div class="layout-wrapper layout-content-navbar ">
  <div class="layout-container" id="main-dirv">
    
 
   <returnInvoice/>
    </div>
  </div>
</template>

<script>



import returnInvoice from "./returnInvoice/retutnInvoice.vue"


export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    components: { returnInvoice },
    

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
