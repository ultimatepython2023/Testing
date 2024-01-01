<template>
    <div>
        <Contact />


    </div>

</template>
<script setup>
import Contact from "@/components/Contact.vue"

definePageMeta({
    layout:['home-without-footer'],
	middleware:['lang',]
})

</script>