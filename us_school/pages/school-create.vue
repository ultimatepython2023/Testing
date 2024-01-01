<template>
    <div>
        <SchoolCreate/>


    </div>

</template>
<script setup>
import SchoolCreate from "@/components/SchoolCreate.vue"

definePageMeta({
    layout:['home-without-footer'],
	middleware:['lang',]
})

</script>