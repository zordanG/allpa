<template>
    <nav>
        <div class="logo">
            <img src="../assets/LogoBranca.png">
        </div>
        <div class="items">
            <h1 id="sobre"> Sobre </h1>
            <h1 id="projetos"> Projetos </h1>
            <h1 id="contato"> Contato </h1>
        </div>
    </nav>
</template>

<script>

export default {
    name: "NavBar",
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
            }
        }

        .items{
            margin-right: 15px;
            width: 40%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
        }
    }
</style>