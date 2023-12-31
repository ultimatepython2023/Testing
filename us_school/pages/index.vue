<template>
    <div>
        <Clients />
    <Features/>
    <About/>
    <MobileApp/>
    <Pricing/>

    </div>

</template>
<script setup>
import Clients from "@/components/Clients.vue"
import  Features  from "@/components/Features.vue"
import About from "@/components/About.vue"
import MobileApp from "@/components/MobileApp.vue"
import Pricing from "@/components/Pricing.vue"

definePageMeta({
    middleware:['lang', 'auth']
})

</script>