<template>
    <div>
        <section class="hero inner">
			<div class="container g-4 d-flex flex-column">
				<nav-layout />

				<!-- Content BEGIN -->
				<div class="content m-auto">
					<div class="row">
						<div class="col-12 col-lg-8">
							<div class="header">
								<h1>{{lang.terms_and_conditions}}</h1>
							</div>

							<p>
								{{lang.term_title}}
							</p>
                            <span>{{lang.last_edit}}: {{'21-8-2022'}}</span>
						</div>
					</div>
				</div>
				<!-- Content END -->
			</div>
		</section>
		<!-- Hero header END -->

		<section class="bg-white position-relative">
			<div class="container g-4">
				<!-- Content -->
				<div class="row gap-4 justify-content-center">
					<!-- Nav -->
					<div class="col-12 col-lg-3 mb-5">
						<div class="sticky-lg-top TableOfContents">
							<strong class="d-block h6 my-2 pb-2 border-bottom">{{lang.terms_and_conditions}}</strong>
							<nav id="TableOfContents">
								<ul>
									<li  ><a @click.prevent="scrollTo('term1_d')" href="#term1_d">{{'1'}}. {{lang['term1']}} </a></li>
									<li  ><a @click.prevent="scrollTo('term2_d')" href="#term2_d">{{'2'}}. {{lang['term2']}} </a></li>
									<li  ><a @click.prevent="scrollTo('term3_d')" href="#term3_d">{{'3'}}. {{lang['term3']}} </a></li>
									<li  ><a @click.prevent="scrollTo('term4_d')" href="#term4_d">{{'4'}}. {{lang['term4']}} </a></li>
									<li  ><a @click.prevent="scrollTo('term5_d')" href="#term5_d">{{'5'}}. {{lang['term5']}} </a></li>
									<li  ><a @click.prevent="scrollTo('term6_d')" href="#term6_d">{{'6'}}. {{lang['term6']}} </a></li>
									<li  ><a @click.prevent="scrollTo('term7_d')" href="#term7_d">{{'7'}}. {{lang['term7']}} </a></li>
								</ul>
							</nav>
						</div>
					</div>
					<!-- Nav END -->

					<!-- Content -->
					<div class="col-12 col-lg-8 mb-5" data-bs-spy="scroll" data-bs-target="#TableOfContents" data-bs-offset="10" tabindex="0">
						<p id="term1_d" ref="term1_d">1. {{lang.term1}}</p>
						<p>{{lang.term1_d}}.</p>

                        <p id="term2_d" ref="term2_d">2. {{lang.term2}}</p>
						<p>{{lang.term2_d}}.</p>

                        <p id="term3_d" ref="term3_d">3. {{lang.term3}}</p>
						<p>{{lang.term3_d}}.</p>

                        <p id="term4_d" ref="term4_d">4. {{lang.term4}}</p>
						<p>{{lang.term4_d}}.</p>

                        <p id="term5_d" ref="term5_d">5. {{lang.term5}}</p>
						<p>{{lang.term5_d}}.</p>

                        <p id="term6_d" ref="term6_d">6. {{lang.term6}}</p>
						<p>{{lang.term6_d}}.</p>

                        <p id="term7_d" ref="term7_d">7. {{lang.term7}}</p>
						<p>
                            <ul>
								<li v-for="li in 5" :key="li">{{lang['su_asli' + li]}}</li> 
							</ul>
                        </p>

						
					</div>
					<!-- Content END -->
				</div>
			</div>
		</section>
  
  
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
  