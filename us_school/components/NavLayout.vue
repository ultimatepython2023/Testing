<template>
    <div masterNavContainer class="nav-container">
					<nav masterNav class="navbar navbar-expand-lg navbar-light">
						<div class="container">
							<a :href="'/'" class="navbar-brand" :title="lang.School_management_system">
                                <img title="Ultimate Schools System" alt="Ultimate Schools System" class="lazy" src="../src/assets/images/Logo-Colored.png" >

							</a>

							<button
								class="navbar-toggler"
								type="button"
								aria-label="Toggle navigation"
								
							>
							</button>

							<div innerNavLinksContainerMaster id="nav-master-id">
								<div class="d-flex flex-column">
									<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
										<li innerNavLinksContainer class="nav-item"></li>
										<li class="nav-item" >
											<a class="nav-link" :href="'/login?lang='+locale">
											
												{{lang.login}}
											</a>
										</li>
										<li class="nav-item" >
											<router-link class="nav-link" to="/profile">
												{{lang.profile}}
											</router-link>
										</li>
										
										

                                         <li class="nav-item" >
											<div
												class="nav-link"
												@click="logout();"
											>
												{{lang.logout}}
											</div>
										</li>
										<li class="nav-item">
											<div
												type="button"
												class="nav-link btn btn-outline-primary btn-fancy-primary CTA main"
												@click="goTo('school-create')"
										
											>
												<div class="d-flex">
													<div class="text text-start mx-2">
														<p>{{lang.register}}</p>
													</div>
												</div>
											</div>
										</li>
										<li languageSwitcher class="nav-item dropdown">
											<a
												class="nav-link dropdown-toggle"
												href="#"
												id="languageMenuTop"
												role="button"
												data-bs-toggle="dropdown"
												aria-expanded="false"
											>
												<span v-if="locale == 'en'">En</span>
												<span v-if="locale == 'ar'">ع</span>
												<span v-if="locale == 'tr'" >Tr</span>	
											</a>
											<ul
												class="dropdown-menu"
												aria-labelledby="languageMenuTop"
											>
												<li>
													<span v-if="locale == 'en'" class="dropdown-item active" :class="locale == 'en' ? 'active' : ''">{{lang.language_en}}</span>
													<a v-else class="dropdown-item" @click="changeLang('en')" :href="hanldeChangLang('en')">{{lang.language_en}}</a>
												</li>
												<li>
													<span v-if="locale == 'ar'" class="dropdown-item active" :class="locale == 'ar' ? 'active' : ''">{{lang.language_ar}}</span>
													<a v-else class="dropdown-item" @click="changeLang('ar')" :href="hanldeChangLang('ar')">{{lang.language_ar}}</a>
												</li>
												<li>
													<span v-if="locale == 'tr'" class="dropdown-item active" :class="locale == 'tr' ? 'active' : ''">{{'Türkçe'}}</span>
													<a v-else class="dropdown-item" @click="changeLang('tr')" :href="hanldeChangLang('tr')">{{'Türkçe'}}</a>
												</li>
											</ul>
										</li>
									</ul>

									<ul innerNavLinks class="navbar-nav ms-auto">
										<li class="nav-item">
										
											<router-link class="nav-link" to="/product_profile">
												{{lang.product_profile}}
											</router-link>
										</li>
										<li class="nav-item" >
											<a
												class="nav-link"
												:href="'/?lang=' + locale +'#pricing'"
											>
												{{lang.pricing}}
											</a>
										</li>
										<li class="nav-item">
											<router-link class="nav-link" to="/contact">
												{{lang.contact_us}}
											</router-link>
										</li>
										<li class="nav-item">
											<router-link class="nav-link" to="/why-us">
												{{lang.why_us}}
											</router-link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</nav>
				</div>
</template>

<script>
export default {
    name: 'NavLayout',
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
        changeLang(lang){
			localStorage.setItem('locale', lang);
				this.$store.dispatch('nuxtServerInit', {lang:lang});
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
		goTo(RouteName){
				this.$store.commit('setStep', 1);
				this.$router.push({ name: RouteName, query: {"lang": this.locale}});
		},
		logout(){
			 this.$auth.logout();
		}
    }
}
</script>
