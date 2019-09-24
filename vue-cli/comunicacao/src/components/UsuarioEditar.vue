<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do Usuário <strong>{{idade}}</strong></p>
        <button @click="alterarIdade()">Alterar Idade</button>
    </div>
</template>

<script>

import barramento from '@/barramento'

export default {
    props: {idade: Number},
        // ['idade'],
    methods: {
        alterarIdade(){
            //Altera elementos irmãos, alterando o elemento pai.
            // this.idade = 33
            // this.$emit('idadeMudou',this.idade) 

            //Altera elementos irmãos diretamente. Sem alterar o elemento pai, 
            // e independendo do mesmo.
            this.idade += 1
            barramento.alterarIdade(this.idade) 
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
