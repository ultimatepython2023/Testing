<template>

<section id="next" class="statics text-centerv position-relative">
			<div class="container g-4">
				<div class="upper row justify-content-center">
					<div class="col-12 text-center">
						<div class="text text-uppercase">
							{{$store.state.GetLanguage.lang.stats_sub}}
						</div>

						<div class="row justify-content-center logos-container my-4">
							<div class="col-6 col-md-4 col-lg-2">
								<img title="Ultimate Schools" alt="Ultimate Schools" src="../src/assets/images/schools1.png">
							</div>
							<div class="col-6 col-md-4 col-lg-2">
								<img title="Ultimate Schools" alt="Ultimate Schools" src="../src/assets/images/schools2.png">

							</div>
							<div class="col-6 col-md-4 col-lg-2">
								<img title="Ultimate Schools" alt="Ultimate Schools" src="../src/assets/images/schools3.png">

							</div>
							<div class="col-6 col-md-4 col-lg-2">
								<img title="Ultimate Schools" alt="Ultimate Schools" src="../src/assets/images/schools4.png">

							</div>
						</div>

						<div class="row justify-content-center">
							<div class="col-10 col-lg-8">
								<p>
									{{$store.state.GetLanguage.lang.stats_txt}}
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="row justify-content-center">
					<div class="col-12 col-lg-8">
						<div class="d-flex justify-content-center counter-container">						
							<div class="counter" v-for="st in 4" :key="st">
								<div class="title">{{$store.state.GetLanguage.lang['stats_num_title' + st]}}</div>
								<div
									class="count"
									:id="$store.state.GetLanguage.lang['stats_num_id' + st]"
									data-start="0"
									:data-end="$store.state.GetLanguage.lang['stats_num_num' + st]"
								></div>
								<div class="subtitle">{{$store.state.GetLanguage.lang['stats_num_desc' + st]}}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
</template>


<script>
export default {
	name:"clients",
  

}
</script>