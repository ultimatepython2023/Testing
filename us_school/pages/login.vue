<template>
    <div>
        <Login />


    </div>

</template>
<script setup>
import Login from "@/components/Login.vue"

definePageMeta({
    layout:['home-without-footer'],
	middleware:['lang',]
})

</script>