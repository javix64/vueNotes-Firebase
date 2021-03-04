<template>
  <div id="app">
    <vHeader />
    <vListaNotas />
    <vFooter />
  </div>
</template>

<script>
import vHeader from './components/vHeader.vue'
import vFooter from './components/vFooter.vue'
import vListaNotas from './components/vListaNotas.vue'

export default {
  name: 'App',
  components: {
    vHeader,
    vFooter,
    vListaNotas
  }
}
</script>

<style>
body{
  margin:0px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.v-lista-notas{
  padding:40px;
  background-color:#b6c0c9;
  display:flex;
  flex-direction: column;
  justify-content:center
}
.v-header{
  background-color: #2c3e50;
  color:#b6c0c9;
}

.addNota{
  margin-bottom:20px !important;
}
.allnotas{
  text-align:center;
}
p{
  text-align:center;
}
b{
  margin:10px;
}
img{
  height:20px;
  width:20px;
  margin-right:5px;
  margin-left:5px;
}
.tituloNota{
  margin-right:50px;
}
.nota{
  padding-top:20px;
  margin-top:20px;
  margin-bottom:10px;
  border: 2px black solid;
  border-radius:10px;
}

.margin1{
  width:80%;
  margin:auto;
  height:40px;
  border-radius:10px;
  border:none;
}
.margin2{
  width:30%;
  margin:auto;
  border-radius:10px;
  border:none;
}
h1{
  margin-top:0px;
  margin-bottom:0px;
  padding:40px;
  text-align: center;
  font-size:2rem;
}

.v-footer{
  padding:40px;
  color:#b6c0c9;
  background-color: #2c3e50;
}
</style>
