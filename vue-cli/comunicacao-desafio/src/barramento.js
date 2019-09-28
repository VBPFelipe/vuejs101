import Vue from 'vue'

export default new Vue({
    methods: {
        //estabelece que o elemento que deve ser persistido.
        setUsuarioSelecionado(usuario){
            this.$emit('usuarioSelecionado', usuario)
        },
        //
        onUsuarioSelecionado(callback){
            this.$on('usuarioSelecionado', callback)
        }
    }
})