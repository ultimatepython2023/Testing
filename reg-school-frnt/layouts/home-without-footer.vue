<template>
    <div>
        <slot />
		<!-- Footer BEGIN -->
	
		<!-- Footer END -->
        <why-us-modal />
        <product-profile-modal />
        <contact-modal />
		<div class="floating-actions">
        </div>
    </div>    
</template>

<script>
export default {
	created(){
	},
    computed: {
        lang(){
            return this.$store.state.lang;
        },
        locale(){
            return this.$store.state.locale;
        },
        langs(){
            return this.$store.state.langs;
        },
        current(){
            return  this.$route.path;
        }
    },
    methods: {
        changeLang(lang){
				localStorage.setItem('locale', lang);
			},
            hanldeChangLang(lang){
				let url = this.$route.fullPath;
				if(url.includes('lang=')){
					url = url.slice(0, -2) + lang;
				}else{
					url = url.includes('?') ? '&lang=' + lang : '?lang=' + lang;
				}

				return url;
			},
    }
}
</script>