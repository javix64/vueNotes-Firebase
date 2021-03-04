<template>

  <section class="v-lista-notas">
      <input type="text" v-on:keyup.enter="anadirElemento" v-on:keyup="teclaPulsada" v-model="nota" class="addNota margin1">
      <button v-bind:disabled="isButtonDisabled" v-on:click="anadirElemento" class="bNota margin1">¡Añadir!</button>

      <p><b> Filtrar tareas:</b> <input v-on:keyup.enter="anadirElemento" v-on:keyup="teclaPulsada" v-model="empiezaPor" class="margin2"> 
      <b> Pendientes: {{tareasPendientes}} </b>
      <b> Completadas:{{this.listaNotas.length}} </b>
      </p>
      
      <section class="allnotas">
        <article v-for="(notas, index) in listaFiltrada" v-bind:key="notas.titulo">
          <div class="nota">
            <b class="tituloNota"> {{ notas.titulo }} </b>
            <img src="edit.png" alt="">
            <img v-on:click="cambiarEstadoTarea(index)" src="ok.png"> 
            <img v-on:click="borrarTarea(index)" src="trash.png">
            <p class="prioridad">Prioridad: {{notas.prioridad}}</p>
            <p class="estado">Completada: {{notas.completado}}</p>
          </div>
        </article>
      </section>
  </section>

</template>

<script lang="js">
import {db} from "../db.js"
  export default  {
    name: 'lista-notas',
    props: [],
    mounted () {
    },
    data () {
      return {
        nota: "",
        listaNotas: [],
        empiezaPor: "",
        isButtonDisabled: true,
      }
    },
    methods: {
      anadirElemento: function () {
        if (this.nota.length > 0) {
          db.collection('notas').add({
            titulo: this.nota,
            prioridad: 0,
            fechaCreacion: new Date(),
            completado: false
          });
        this.nota = "";
        }
      },
      teclaPulsada: function () {
        if (this.nota.length > 0) {
          this.isButtonDisabled = false;
        } else {
          this.isButtonDisabled = true;
        }
      },
      borrarTarea: function (n) {
        db.collection('notas').doc(this.listaNotas[n].id).delete();
      },
      cambiarEstadoTarea: function (n) {
        this.listaNotas[n].completado = !this.listaNotas[n].completado;
        db.collection('notas').doc(this.listaNotas[n].id).update({
          completado: this.listaNotas[n].completado
        });
      },
    },
    computed: {
      listaFiltrada: function () {
        if (this.empiezaPor) {
          return this.listaNotas.filter(nota => {
            return nota.titulo.indexOf(this.empiezaPor) != -1;
          });
        } else {
          return this.listaNotas;
        }
      },
      tareasPendientes: function () {
        return this.listaNotas.filter(nota => !nota.completado).length;
      },
    },
    firestore: {
      listaNotas: db.collection('notas')
    }
}


</script>

<style>

</style>
