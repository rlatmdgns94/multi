<template>
    <div id="app">
        <Header />
        <router-view />
        <Footer />
        <a id="move_top_btn" href="#"><img src="./assets/img/top_img.jpg" alt=""> </a>

    </div>
</template>

<style lang="scss" scoped>
    #app {
        position: relative;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    #move_top_btn {
    display: inline-block;
    width: 50px;
    height:50px;
    position: fixed;
    right: 5%;
    bottom: 50%;
    display: none;
    z-index: 999;
    background: green;
}

</style>

<script>
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    export default {
        components: {
            Header,
            Footer
        }
    }
    $(document).ready(function(){
        $(window).scroll(function() {
            if ($(this).scrollTop() > 500) {
                $('#move_top_btn').fadeIn();
            } else {
                $('#move_top_btn').fadeOut();
            }
        });
        
        $("#move_top_btn").click(function() {
            $('html, body').animate({
                scrollTop : 0
            }, 400);
            return false;
        });
    });
</script>


