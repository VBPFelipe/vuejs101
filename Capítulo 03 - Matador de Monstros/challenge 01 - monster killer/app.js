new Vue({
    el: '#app',
    data: {
        running: false,
        player_life: 100,
        monster_life: 100,
        logs: []
    }, 
    // funções pré-definidas na aplicação
    computed: {
        has_result() {
            return this.player_life == 0 || this.monster_life == 0
        }
    },
    methods: {
        start_game() {
            this.running = true
            this.player_life = 100
            this.monster_life = 100
            this.logs = []
        },
        attack(special) {
            this.hurt('monster_life', 5, 10, special, 
                'Jogador', 'Monstro', 'player')
            if(this.monster_life > 0)
                this.hurt('player_life', 7, 12, false, 
                    'Monstro', 'Jogador', 'monster')
        },
        hurt(atr, min, max, special, source, target, cls) {
            const plus = special ? 5 : 0
            const hurt = this.get_random(min + plus, max + plus)
            //this[prop] - acessa em this o nome da variável
            this[atr] = Math.max(this[prop] - hurt, 0)
            this.register_log(
                `${source} atingiu ${target} com ${hurt}.`, cls
            )
        },
        heal_and_hurt() {
            this.heal(10, 15)
            this.hurt('player_life', 7, 12, false, 
                'Monstro', 'Jogador', 'monster'
            )
        },
        heal(min, max) {
            const heal = this.get_random(min, max)
            this.player_life = Math.min(this.player_life + heal, 100)
            this.register_log(
                `Jogador ganhou força de ${heal}.`, 'player'
            )
        },
        get_random(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        register_log(text, cls) {
            this.logs.unshift({ text, cls })
        }
    },
    //Monitora  eventos, variáveis, métodos...
    watch: {
        // monitora has_result(value)
        has_result(value) {
            if (value) this.running = false
        }
    }
})