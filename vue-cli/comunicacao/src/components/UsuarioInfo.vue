<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong> {{ inverterNome() }} </strong></p>
        <p>Idade do Usuário <strong>{{idade}}</strong></p>
        <button @click="reiniciarNome"> Reiniciar Nome</button>
        <button @click="reiniciarFn()"> Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    //Estabelece o tipo da variável.
    //Facilitador para validação
    props:{
        //Objeto
        nome: {
            type: String,
            // type: [String, Array]
            required: true, //propriedade é obrigatória para a funcionalidade do componente
            default : 'Anônimo'
            // default: function(){
            //     return Array(10).fill(0).join(',')
            // }
        },
        reiniciarFn: Function,
        idade: Number
    },
    methods: {
        inverterNome(){
            return this.nome.split('').reverse().join('');
        },
        reiniciarNome(){
            const old = this.nome
            this.nome = "Pedro"
            //dispara um evento para acessos externos
            // this.$emit('nomeMudou', this.nome)
            this.$emit('nomeMudou', {
                novo: this.nome,
                old
            })
        },
        reiniciarFn(){

        }
    },
    created() {
        // barramento.$on('idadeMudou', (idade) => )
        barramento.quandoIdadeMudar(idade => {
            this.idade = idade
        })
    }
}
</script>

// apenas neste escopo
<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
