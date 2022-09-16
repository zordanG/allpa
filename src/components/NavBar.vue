<template>
    <nav>
        <div class="logo">
            <img src="../assets/LogoBranca.png" @click="route('HomePage')">
        </div>
        <div class="items">
            <button id="sobre" @click="route('AboutPage')"> Sobre </button>
            <button id="projetos" @click="route('ProjetosPage')"> Projetos </button>
            <button id="contato" @click="route('ContactPage')"> Contato </button>
        </div>
    </nav>
</template>

<script>

export default {
    name: "NavBar",
    methods: {
        route(path) {
            this.$router.push({name:path});
        },     
    },
}
</script>

<style lang="scss">
    nav{
        height: 70px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        background-color: #009444;
        color: white;

        .logo{
            width: 15%;
            margin-left: 15px;
            display: flex;
            justify-content: center;
            align-items: center;

            img{
                width: 130px;
                cursor: pointer;
            }
        }

        .items{
            margin-right: 15px;
            width: 40%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;

            button{
                background-color: transparent;
                cursor: pointer;
                border: none;
                color: white;
                width: 150px;
                height: 40px;
                font-size: 20px;
            }

            button:hover{
                border-radius: 2px;
                background-color: #006c33;
            }
        }
    }
</style>