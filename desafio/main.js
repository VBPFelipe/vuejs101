new Vue({
    el:'#desafio',
    data: {
        valor: ''
    }, 
    methods: {
        exibirAlerta : function(){
            alert("Estou alertando!")
        },
        alterarValor : function(event){
            this.valor = event.target.value
        }
    }
})