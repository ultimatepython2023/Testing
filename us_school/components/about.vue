<template>
    
	<!-- About us BEGIN -->
	<section id="about-us" class="about-us">
		<div class="container g-4">
			<div class="row">
				<div class="col-12 col-lg-7 mb-5 mb-lg-0 align-self-center">
					<video
						playsinline
						autoplay
						muted
						loop
						class="lazy"
						data-src="../src/assets/videos/about-us.mp4"
						
					>
						<source
							src="../src/assets/videos/about-us.mini.mp4"
							data-src="../src/assets/videos/about-us.mp4"
							type="video/mp4"
						/>
						Your browser does not support the video tag.
					</video>
				</div>
				<div class="col-12 col-lg-5 align-self-center">
					<div class="logo mb-4">
						<img
							src="../src/assets/images/Logo-Colored.webp"
							data-src="../src/assets/images/Logo-Colored.png"
							class="lazy"
							:alt="$store.state.GetLanguage.lang.School_management_system"
							
						/>
					</div>
					<div class="subtitle">{{ $store.state.GetLanguage.lang.School_management_system }}</div>
					<div class="title">
						<strong>Smart</strong> school to
						<strong
							class="txt-rotate fancy"
							data-period="2000"
							data-rotate='[ "be.", "have.", "fun!" ]'
						></strong>
					</div>
					<div class="text">							
						<p>
							{{$store.state.GetLanguage.lang.whyus_detail1}}
						</p>
					</div>

					<!-- Read More -->
					<router-link class="readMore btn mt-4" to="/why_us">
						{{$store.state.GetLanguage.lang.more}}
						<span>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M21.75 12L2.25 12"
									stroke="#555555"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M21.75 12L18.75 15.75"
									stroke="#555555"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M21.75 12L18.75 8.25"
									stroke="#555555"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
					</router-link>
				</div>
			</div>
		</div>
	</section>
	<!-- About us END -->
</template>


<script>
export default {
	name:"About",

}
</script>