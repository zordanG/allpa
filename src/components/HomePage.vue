<template>
    <section>
        <div id="imagem-inicial">
            <aside class="conteudo-inicial"></aside>
        </div>
        <div class="texto-descritivo">
            <h1>Sua casa mais verde</h1>
        </div>
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
        display: flex;
        justify-content: right;
        flex-direction: column;
        
        #imagem-inicial {
            width: inherit;
            height: 700px;
            background-image: url("../assets/folhas.jpg");
            background-attachment: fixed;
            background-size: cover;
        }

        aside{
            height: inherit;
            width: inherit;
            background-image: url("../assets/DetalheDireito.png");
            background-size: auto;
            background-repeat: no-repeat;
            background-position-x: right;
            font-size: 35px;
            display: flex;
            align-content: center;
            justify-content: center;
        }

        .texto-descritivo{
            padding: 15px;
            width: inherit;
            height: 300px;
            background-color: #333333;
            display: flex;
            align-self: center;
            justify-content: center;
            align-items: center;

            h1{
                margin: 5px;
                color: white;
                font-size: 35px;
            }
        }
    }
</style>