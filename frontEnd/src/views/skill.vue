<template lang="">
    <div class="w-full h-auto pb-20 bg-[#D7D7D7] flex flex-col items-center gap-8 justify-center pt-40">
        <h1 class="border-8 border-black h-28 w-80 flex justify-center items-center font-bold text-2xl mb-4">SKILLS</h1>
        <div class="flex flex-wrap w-[800px] gap-12">
            <div class="w-1/5 flex justify-between flex-col items-center">
                <img :src="html5" alt=""/>
                <h3>HTML5</h3>
            </div>
            <div class="w-1/5 flex justify-between flex-col items-center">
                <img :src="css" alt=""/>
                <h3>CSS3</h3>
            </div>
            <div class="w-1/5 flex justify-between flex-col items-center">
                <img :src="javascript" alt=""/>
                <h3>JAVASCRIPT</h3>
            </div>
            <div class="w-1/5 flex justify-between flex-col items-center">
                <img class="w-40 h-28" :src="nuxt" alt=""/>
                <h3>NUXTJS</h3>
            </div>
            <!-- <div class="w-1/4">
                <img :src="tailwind" alt=""/>
                <h3>TAILWIND</h3>
            </div> -->
            <!-- <div>
                <img :src="vue" alt=""/>
                <h3>VUE</h3>
            </div> -->
            <div class="w-1/5 flex justify-between flex-col items-center">
                <img :src="nodeJS" alt=""/>
                <h3>NODEJS</h3>
            </div>
            <!-- <div>
                <img :src="postgres" alt=""/>
                <h3>POSTGRESQL</h3>
            </div>
            <div>
                <img :src="mongodb" alt=""/>
                <h3>MONGODB</h3>
            </div> -->
            <div class="w-1/5 flex justify-between flex-col items-center">
                <img class="w-24 h-24" :src="typescript" alt=""/>
                <h3>TYPESCRIPT</h3>
            </div>
            <div class="w-1/5 flex justify-between flex-col items-center">
                <img class="w-40 h-28" :src="nest" alt=""/>
                <h3>NESTJS</h3>
            </div>
            <div class="w-1/5 flex justify-between flex-col items-center">
                <img :src="angilizki" alt=""/>
                <h3>ANGIELSKI B1/B2</h3>
            </div>

        </div>    
    </div>
</template>
<script setup>
    import nodeJS from "../image/skill/nodejs.png";
    import html5 from "../image/skill/html5.svg"; 
    import css from "../image/skill/css.svg";
    import javascript from "../image/skill/javascript.svg";
    import tailwind from "../image/skill/tailwind.png";
    import nuxt from "../image/skill/nuxt.svg";
    import vue from "../image/skill/vue.png";
    import postgres from "../image/skill/postgres.png";
    import mongodb from "../image/skill/mongodb.png";
    import typescript from "../image/skill/typescript.png";
    import nest from "../image/skill/nest.svg";
    import angilizki from "../image/skill/inglish.svg";
</script>
<style lang="">
    
</style>