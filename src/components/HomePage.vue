<template>
    <section id="imagem-inicial"> 
        <h1>Sua casa mais verde</h1>
        <aside class="conteudo-inicial">
        </aside>    
    </section>
</template>

<script>

export default {
    name: "HomePage",
}
</script>

<style lang="scss">
    section{
        width: 100%;
        height: 700px;
        display: flex;
        justify-content: right;

        aside{
            height: inherit;
            min-width: 702px;
            background-image: url("../assets/DetalheDireito.png");
            background-size: cover;
            font-size: 35px;
        }

        h1{
            margin: 5px;
            color: white;
            font-size: 35px;
            display: flex;
            align-self: center;
        }
    }

    #imagem-inicial {
        background-image: url("../assets/folhas.jpg");
        background-attachment: fixed;
        background-size: cover;
    }
</style>