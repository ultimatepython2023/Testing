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


definePageMeta({
    middleware:['lang', 'auth']
})

</script>