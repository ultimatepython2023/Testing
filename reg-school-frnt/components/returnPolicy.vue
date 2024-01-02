<template>
    <div>
			<!-- Hearo header BEGIN -->
			<section class="hero inner">
			<div class="container g-4 d-flex flex-column">
				<!-- Navbar BEGIN -->
                <nav-layout />
				<!-- Navbar END -->

				<!-- Content BEGIN -->
				<div class="content m-auto">
					<div class="row">
						<div class="col-12 col-lg-8">
							<div class="header">
								<h1>{{lang.return_policy}}</h1>
							</div>

							<p>{{lang.return_title}}</p>
						</div>
					</div>
				</div>
				<!-- Content END -->
			</div>
		</section>
		<!-- Hero header END -->

		<!-- Content BEGIN -->
		<section class="bg-white position-relative">
			<div class="container g-4">
				<!-- Content -->
				<div class="row justify-content-center">
					<div class="col-12 col-lg-8 mb-5">
						{{lang.return_policy_d}}
					</div>
				</div>
			</div>
		</section>
		<!-- Content END -->
  
    </div>
  </template>
  
  <script>
  export default {
    name: 'terms',
    layout: 'home',
    computed: {
        lang(){
            return this.$store.state.GetLanguage.lang;
        },
        locale(){
            return this.$store.state.GetLanguage.locale;
        },
        langs(){
            return this.$store.state.GetLanguage.langs;
        },
    },
    methods: {
        scrollTo(refName) {
            var element = this.$refs[refName];
            var top = element.offsetTop;
            window.scrollTo(0, top);
        },
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
  