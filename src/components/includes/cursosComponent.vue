<template>
<section id="il-curse" class="il-section il-section--curse">
    <div class="il-container--wrapper">
        <h1 class="il-section--title">Cursos e eventos <span class="il-color--text__very-light">CoreAlign</span>
        </h1>
        <h2 class="il-section--sub-title il-color--text__very-light text-right">Calendário de Curso - 2019.</h2>
        <div class="il-curse--content">
            <table class="il-table">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Local</th>
                        <th>Curso</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="curso in cursos" :key="curso.id">
                        <td>{{curso.data}}</td>
                        <td>{{curso.name}}</td>
                        <td>{{curso.local}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
</template>
<script>

import cursos from '../../common/cursos.json';
export default {
    name: 'cursos',
    data () {
        return {
            cursos: []
        }
    },
    mounted () {
        this.cursos = cursos;
    },
}
</script>