<template>

		<UserProfile  />

  </template>
  
  <script setup>
  definePageMeta({
    layout:['home-without-footer'],

    middleware:['lang', 'auth']
})

	

  </script>
  