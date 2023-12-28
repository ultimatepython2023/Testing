<template>
    
    		<!-- Pricing BEGIN -->
		<section id="pricing" class="pricing">
			<div class="container g-4">
				<div class="row justify-content-center">
					<div class="col-12 col-lg-8 mb-5 mb-lg-0 align-self-center">
						<div class="row justify-content-center">
							<div class="col-10 text-center">
								<div class="header">
									<div class="title">
										<template v-if="$store.state.GetLanguage.locale=='ar'">
											{{$store.state.GetLanguage.lang.calc_cost}} <span>{{$store.state.GetLanguage.lang.cost}}</span>
										</template>
										<template v-else>
										<span>{{$store.state.GetLanguage.lang.calc_cost}}</span> {{$store.state.GetLanguage.lang.cost}}
										</template>
									</div>
									<div class="subtitle">
										{{$store.state.GetLanguage.lang.help_plan}}
									</div>
								</div>

								<div class="price-big d-flex flex-column gap-4 m-auto">
                                    {{ $store.state.GetLanguage.currency == 'USD' ? '$3' : $store.state.GetLanguage.lang.ryal }}
									<span>/ {{$store.state.GetLanguage.lang.per_student}}</span>

									<span class="text-black mb-4">{{$store.state.GetLanguage.lang.yearly}}</span>

									<!-- Create school -->
									<div type="button" @click="goTo('school-create')"
											class="btn btn-outline-dark btn-fancy-primary CTA main mt-4 mt-md-0">
											<div class="d-flex justify-content-center">
												<div class="text text-start me-3 my-auto">
                                                    <template v-if="$store.state.GetLanguage.locale=='ar'">
                                                        <strong>{{$store.state.GetLanguage.lang.choose_plan_now}}</strong>
                                                    </template>
                                                    <template v-else>
                                                        {{$store.state.GetLanguage.lang.choose_plan_now}} <strong>{{$store.state.GetLanguage.lang.choose_plan_now}}</strong>
                                                    </template>
												</div>
										
												<svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M15.1286 18.2491C16.3286 19.4491 17.5286 20.6491 18.6715 21.9634C20.3857 23.9063 23.4715 20.7634 21.5286 19.1063C19.7 17.5634 18.0429 15.8491 16.2715 14.2491C15.4143 13.392 14.1 13.6206 13.4143 14.592C11.9858 16.7634 10.3286 18.592 8.38575 20.3063C7.41433 21.1063 8.4429 22.9348 9.6429 22.4777C11.8143 21.6206 13.6429 20.0206 15.1286 18.2491Z"
														fill="#333333" />
													<path
														d="M39.0143 14.2491C38.1571 13.392 36.8429 13.6206 36.1571 14.592C34.7286 16.7634 33.0714 18.592 31.1286 20.3063C30.1571 21.1063 31.1857 22.9348 32.3857 22.4777C34.5571 21.6206 36.3286 20.0206 37.8714 18.2491C39.0714 19.4491 40.2714 20.6491 41.4143 21.9634C43.1286 23.9063 46.2143 20.7634 44.2714 19.1063C42.3857 17.5634 40.7286 15.8491 39.0143 14.2491Z"
														fill="#333333" />
													<path
														d="M39.0715 32.8203C36.9572 33.7346 35.1286 34.9917 32.8429 35.6203C30.5572 36.2489 28.2143 36.5346 25.8715 36.4774C21.3 36.4774 17.3 34.6489 13.1286 33.0489C12.6715 32.8775 12.2143 33.506 12.5 33.8489C13.2429 34.7632 13.8715 35.6774 14.8429 36.3631C15.9286 37.106 17.1286 37.6203 18.3286 38.1346C20.7286 39.106 23.3 39.6203 25.8715 39.7917C28.5 39.9631 31.2429 39.6203 33.7572 38.9346C36.2143 38.2488 39.2429 37.2774 41.0715 35.3917C42.4429 34.0203 40.7286 32.1346 39.0715 32.8203Z"
														fill="#333333" />
												</svg>
											</div>
									</div>
									</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Pricing END -->
</template>


<script>
export default {
	name:"Pricing",

    methods: {
        goTo(RouteName){
			this.$store.commit('setStep', 1);
			this.$router.push({ name: RouteName, query: {"lang": this.locale}});		
		},
    }
}
</script>