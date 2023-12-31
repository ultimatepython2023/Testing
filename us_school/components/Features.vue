<template>
      <section id="features" class="features bg-white position-relative">
			<div class="container g-4">
				<!-- Header -->
				<div class="row justify-content-center">
					<div class="col-12 col-lg-8 mb-5">
						<div class="header text-center">
                            <div class="subtitle">{{$store.state.GetLanguage.lang.School_management_system}}</div>
							<div class="title">{{$store.state.GetLanguage.lang.features}}</div>
							<p>
								{{$store.state.GetLanguage.lang.features_sub}}
							</p>
						</div>
					</div>
				</div>

				<!-- Content -->
				<div class="row g-4 justify-content-center features-content">
                    <div class="col-12 col-sm-6 col-md-4" v-for="item in 8" :key="item">
						<div class="features-item">
							<div class="icon">
								<img
									:src="'/src/assets/' + $store.state.GetLanguage.lang['ficon'+item]"
									class="lazy"
									:alt="$store.state.GetLanguage.lang['ftext'+item]"
                                  
								/>
							</div>
							<div class="title">
								{{$store.state.GetLanguage.lang['ftext'+item]}}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
</template>

<script>
export default {
	name:"Features",

}
</script>