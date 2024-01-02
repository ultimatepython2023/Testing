<template>
	{{ form }}
    <div>
        <section class="bg-white position-relative p-0" id="createSchoolModal" style="min-height: 100vh;">
			<div class="container-fluid g-4 p-0" style="min-height: 100vh;">
				<!-- Content -->
				<div class="row" style="min-height: 100vh;">
					<div class="sidebarInfo col-12 col-lg-5">
						<!-- Background -->
						<div class="background">
							<img

								data-src="../src/assets/images/bg_createSchoolPopup.png"

								class="lazy"
								alt="Background"
							/>
						</div>

						<!-- Content -->
						<div class="d-flex flex-column p-4 h-100 position-relative">
							<div class="top mb-auto row">
								<div class="col-12 col-md-8">
									<h4>
														{{lang.register_txt_li}}
													</h4>
													<p>
														{{lang.register_txt_desc}}
													</p>
								</div>
							</div>

							<div class="bottom">
								<!-- Site Identity -->
								<div class="siteIdentity">
									<div class="logo mb-4">
										<img
											src="../src/assets/images/Logo-Light.png"
											class="lazy"
											:alt="lang.School_management_system"
										/>
									</div>
									<div class="subtitle">
										{{lang.School_management_system}}
									</div>
									<div class="title">
										<strong>Smart</strong> school to
										<strong
											class="txt-rotate"
											data-period="2000"
											data-rotate='[ "be.", "have.", "fun!" ]'
										></strong>
									</div>

									<div class="socialMedia mt-4">
														<h6>{{lang.on_social}}</h6>
														<ul>
															<li class="item">
																<a class="link" href="#" target="_blank" aria-label=""
																	><svg
																		width="30"
																		height="31"
																		viewBox="0 0 30 31"
																		fill="none"
																		xmlns="http://www.w3.org/2000/svg"
																	>
																		<path
																			d="M18.175 8.4556H20.0008V5.2756C19.6858 5.23227 18.6025 5.13477 17.3408 5.13477C14.7083 5.13477 12.905 6.7906 12.905 9.83393V12.6348H10V16.1898H12.905V25.1348H16.4667V16.1906H19.2542L19.6967 12.6356H16.4658V10.1864C16.4667 9.15893 16.7433 8.4556 18.175 8.4556V8.4556Z"
																			fill="#333333"
																		></path>
																	</svg>
																</a>
															</li>
															<li class="item">
																<a class="link" target="_blank" href="#" aria-label=""
																	><svg
																		width="40"
																		height="31"
																		viewBox="0 0 40 31"
																		fill="none"
																		xmlns="http://www.w3.org/2000/svg"
																	>
																		<path
																			d="M27.9458 11.1873C28.7592 10.6098 29.4433 9.88893 30.0008 9.05893V9.0581C29.2567 9.38393 28.465 9.6006 27.6383 9.7056C28.4883 9.1981 29.1375 8.4006 29.4425 7.43977C28.65 7.91227 27.775 8.2456 26.8425 8.43227C26.09 7.6306 25.0175 7.13477 23.8475 7.13477C21.5775 7.13477 19.75 8.97727 19.75 11.2356C19.75 11.5606 19.7775 11.8731 19.845 12.1706C16.4367 12.0039 13.42 10.3706 11.3933 7.88143C11.04 8.4956 10.8317 9.1981 10.8317 9.95393C10.8317 11.3739 11.5625 12.6323 12.6533 13.3614C11.9942 13.3489 11.3483 13.1573 10.8008 12.8564V12.9014C10.8008 14.8939 12.2217 16.5489 14.0858 16.9306C13.7517 17.0223 13.3883 17.0656 13.0108 17.0656C12.7483 17.0656 12.4833 17.0506 12.235 16.9956C12.7658 18.6189 14.2742 19.8131 16.0658 19.8523C14.6708 20.9431 12.8992 21.6006 10.9817 21.6006C10.6458 21.6006 10.3233 21.5856 10.0008 21.5448C11.8175 22.7156 13.9692 23.3848 16.2908 23.3848C23.5267 23.3848 28.2425 17.3481 27.9458 11.1873Z"
																			fill="#333333"
																		></path>
																	</svg>
																</a>
															</li>
															<li class="item">
																<a class="link" target="_blank" href="#" aria-label=""
																	><svg
																		width="40"
																		height="31"
																		viewBox="0 0 40 31"
																		fill="none"
																		xmlns="http://www.w3.org/2000/svg"
																	>
																		<path
																			d="M20.0008 5.13477C17.2871 5.13477 16.9458 5.14727 15.8796 5.19477C14.8133 5.24477 14.0871 5.41227 13.4508 5.65977C12.7835 5.91079 12.179 6.30455 11.6796 6.81352C11.1709 7.31314 10.7772 7.91757 10.5258 8.58477C10.2783 9.21977 10.1096 9.94727 10.0608 11.0098C10.0133 12.0785 10.0008 12.4185 10.0008 15.136C10.0008 17.851 10.0133 18.191 10.0608 19.2573C10.1108 20.3223 10.2783 21.0485 10.5258 21.6848C10.7821 22.3423 11.1233 22.8998 11.6796 23.456C12.2346 24.0123 12.7921 24.3548 13.4496 24.6098C14.0871 24.8573 14.8121 25.026 15.8771 25.0748C16.9446 25.1223 17.2846 25.1348 20.0008 25.1348C22.7171 25.1348 23.0558 25.1223 24.1233 25.0748C25.1871 25.0248 25.9158 24.8573 26.5521 24.6098C27.219 24.3586 27.8231 23.9649 28.3221 23.456C28.8783 22.8998 29.2196 22.3423 29.4758 21.6848C29.7221 21.0485 29.8908 20.3223 29.9408 19.2573C29.9883 18.191 30.0008 17.851 30.0008 15.1348C30.0008 12.4185 29.9883 12.0785 29.9408 11.011C29.8908 9.94727 29.7221 9.21977 29.4758 8.58477C29.2245 7.91755 28.8308 7.31311 28.3221 6.81352C27.8229 6.30436 27.2183 5.91057 26.5508 5.65977C25.9133 5.41227 25.1858 5.24352 24.1221 5.19477C23.0546 5.14727 22.7158 5.13477 19.9983 5.13477H20.0021H20.0008ZM19.1046 6.93727H20.0021C22.6721 6.93727 22.9883 6.94602 24.0421 6.99477C25.0171 7.03852 25.5471 7.20227 25.8996 7.33852C26.3658 7.51977 26.6996 7.73727 27.0496 8.08727C27.3996 8.43727 27.6158 8.76977 27.7971 9.23727C27.9346 9.58852 28.0971 10.1185 28.1408 11.0935C28.1896 12.1473 28.1996 12.4635 28.1996 15.1323C28.1996 17.801 28.1896 18.1185 28.1408 19.1723C28.0971 20.1473 27.9333 20.676 27.7971 21.0285C27.6368 21.4627 27.3809 21.8553 27.0483 22.1773C26.6983 22.5273 26.3658 22.7435 25.8983 22.9248C25.5483 23.0623 25.0183 23.2248 24.0421 23.2698C22.9883 23.3173 22.6721 23.3285 20.0021 23.3285C17.3321 23.3285 17.0146 23.3173 15.9608 23.2698C14.9858 23.2248 14.4571 23.0623 14.1046 22.9248C13.6702 22.7647 13.2772 22.5092 12.9546 22.1773C12.6218 21.8548 12.3655 21.4618 12.2046 21.0273C12.0683 20.676 11.9046 20.146 11.8608 19.171C11.8133 18.1173 11.8033 17.801 11.8033 15.1298C11.8033 12.4598 11.8133 12.1448 11.8608 11.091C11.9058 10.116 12.0683 9.58602 12.2058 9.23352C12.3871 8.76727 12.6046 8.43352 12.9546 8.08352C13.3046 7.73352 13.6371 7.51727 14.1046 7.33602C14.4571 7.19852 14.9858 7.03602 15.9608 6.99102C16.8833 6.94852 17.2408 6.93602 19.1046 6.93477V6.93727ZM25.3396 8.59727C25.182 8.59727 25.026 8.6283 24.8804 8.68861C24.7348 8.74892 24.6025 8.83731 24.4911 8.94874C24.3796 9.06017 24.2912 9.19245 24.2309 9.33805C24.1706 9.48364 24.1396 9.63968 24.1396 9.79727C24.1396 9.95485 24.1706 10.1109 24.2309 10.2565C24.2912 10.4021 24.3796 10.5344 24.4911 10.6458C24.6025 10.7572 24.7348 10.8456 24.8804 10.9059C25.026 10.9662 25.182 10.9973 25.3396 10.9973C25.6578 10.9973 25.9631 10.8708 26.1881 10.6458C26.4132 10.4208 26.5396 10.1155 26.5396 9.79727C26.5396 9.47901 26.4132 9.17378 26.1881 8.94874C25.9631 8.72369 25.6578 8.59727 25.3396 8.59727ZM20.0021 9.99977C19.3209 9.98914 18.6445 10.1141 18.0121 10.3674C17.3797 10.6208 16.804 10.9974 16.3185 11.4753C15.8331 11.9532 15.4475 12.523 15.1844 13.1513C14.9212 13.7797 14.7857 14.4541 14.7857 15.1354C14.7857 15.8166 14.9212 16.4911 15.1844 17.1194C15.4475 17.7478 15.8331 18.3175 16.3185 18.7955C16.804 19.2734 17.3797 19.65 18.0121 19.9033C18.6445 20.1567 19.3209 20.2816 20.0021 20.271C21.3503 20.25 22.6361 19.6997 23.5821 18.7388C24.528 17.778 25.0582 16.4837 25.0582 15.1354C25.0582 13.7871 24.528 12.4928 23.5821 11.532C22.6361 10.5711 21.3503 10.0208 20.0021 9.99977ZM20.0021 11.801C20.8863 11.801 21.7342 12.1522 22.3594 12.7774C22.9846 13.4026 23.3358 14.2506 23.3358 15.1348C23.3358 16.0189 22.9846 16.8669 22.3594 17.4921C21.7342 18.1173 20.8863 18.4685 20.0021 18.4685C19.1179 18.4685 18.27 18.1173 17.6448 17.4921C17.0196 16.8669 16.6683 16.0189 16.6683 15.1348C16.6683 14.2506 17.0196 13.4026 17.6448 12.7774C18.27 12.1522 19.1179 11.801 20.0021 11.801Z"
																			fill="#333333"
																		></path>
																	</svg>
																</a>
															</li>
															<li class="item">
																<a class="link" target="_blank" href="#" aria-label=""
																	><svg
																		width="48"
																		height="31"
																		viewBox="0 0 48 31"
																		fill="none"
																		xmlns="http://www.w3.org/2000/svg"
																	>
																		<path
																			d="M37.5786 15.0486C37.5786 14.9809 37.5786 14.9039 37.5755 14.8147C37.5724 14.5654 37.5663 14.2853 37.5601 13.9867C37.5355 13.128 37.4924 12.2723 37.4247 11.4659C37.3323 10.3548 37.1969 9.42839 37.0122 8.7328C36.8174 8.00688 36.4354 7.34483 35.9044 6.81281C35.3735 6.28079 34.7122 5.89745 33.9867 5.70109C33.1157 5.46718 31.4105 5.32252 29.0098 5.23326C27.8679 5.19017 26.646 5.16247 25.4241 5.14708C24.9962 5.14092 24.5992 5.13784 24.2422 5.13477H23.3373C22.9802 5.13784 22.5832 5.14092 22.1554 5.14708C20.9334 5.16247 19.7115 5.19017 18.5696 5.23326C16.1689 5.32559 14.4607 5.47025 13.5927 5.70109C12.867 5.89697 12.2054 6.28015 11.6744 6.81224C11.1434 7.34433 10.7616 8.00664 10.5672 8.7328C10.3794 9.42839 10.2471 10.3548 10.1547 11.4659C10.087 12.2723 10.0439 13.128 10.0193 13.9867C10.0101 14.2853 10.007 14.5654 10.0039 14.8147C10.0039 14.9039 10.0009 14.9809 10.0009 15.0486V15.2209C10.0009 15.2887 10.0009 15.3656 10.0039 15.4549C10.007 15.7042 10.0132 15.9843 10.0193 16.2828C10.0439 17.1415 10.087 17.9972 10.1547 18.8036C10.2471 19.9147 10.3825 20.8411 10.5672 21.5367C10.9611 23.011 12.1184 24.1745 13.5927 24.5684C14.4607 24.8024 16.1689 24.947 18.5696 25.0363C19.7115 25.0794 20.9334 25.1071 22.1554 25.1225C22.5832 25.1286 22.9802 25.1317 23.3373 25.1348H24.2422C24.5992 25.1317 24.9962 25.1286 25.4241 25.1225C26.646 25.1071 27.8679 25.0794 29.0098 25.0363C31.4105 24.9439 33.1187 24.7993 33.9867 24.5684C35.461 24.1745 36.6183 23.0141 37.0122 21.5367C37.2 20.8411 37.3323 19.9147 37.4247 18.8036C37.4924 17.9972 37.5355 17.1415 37.5601 16.2828C37.5693 15.9843 37.5724 15.7042 37.5755 15.4549C37.5755 15.3656 37.5786 15.2887 37.5786 15.2209V15.0486ZM35.3625 15.2086C35.3625 15.2733 35.3625 15.3441 35.3594 15.4272C35.3563 15.6672 35.3502 15.9319 35.344 16.2182C35.3225 17.0369 35.2794 17.8556 35.2148 18.6158C35.1317 19.6069 35.0147 20.4195 34.87 20.9643C34.6792 21.6752 34.119 22.2385 33.4111 22.4262C32.7648 22.5986 31.1366 22.7371 28.9236 22.8202C27.8033 22.8633 26.5967 22.891 25.3933 22.9064C24.9716 22.9125 24.5807 22.9156 24.2298 22.9156H23.3496L22.1861 22.9064C20.9827 22.891 19.7792 22.8633 18.6558 22.8202C16.4428 22.734 14.8116 22.5986 14.1683 22.4262C13.4604 22.2354 12.9002 21.6752 12.7094 20.9643C12.5647 20.4195 12.4478 19.6069 12.3647 18.6158C12.3 17.8556 12.26 17.0369 12.2354 16.2182C12.2262 15.9319 12.2231 15.6642 12.22 15.4272C12.22 15.3441 12.2169 15.2702 12.2169 15.2086V15.0609C12.2169 14.9963 12.2169 14.9255 12.22 14.8424C12.2231 14.6023 12.2292 14.3376 12.2354 14.0514C12.2569 13.2326 12.3 12.4139 12.3647 11.6537C12.4478 10.6626 12.5647 9.85006 12.7094 9.30528C12.9002 8.59429 13.4604 8.03104 14.1683 7.84329C14.8146 7.67093 16.4428 7.53243 18.6558 7.44932C19.7762 7.40623 20.9827 7.37853 22.1861 7.36314C22.6078 7.35699 22.9987 7.35391 23.3496 7.35391H24.2298L25.3933 7.36314C26.5967 7.37853 27.8002 7.40623 28.9236 7.44932C31.1366 7.5355 32.7679 7.67093 33.4111 7.84329C34.119 8.03412 34.6792 8.59429 34.87 9.30528C35.0147 9.85006 35.1317 10.6626 35.2148 11.6537C35.2794 12.4139 35.3194 13.2326 35.344 14.0514C35.3533 14.3376 35.3563 14.6054 35.3594 14.8424C35.3594 14.9255 35.3625 14.9993 35.3625 15.0609V15.2086ZM21.0504 19.2591L28.1911 15.104L21.0504 11.0104V19.2591Z"
																			fill="#333333"
																		></path>
																	</svg>
																</a>
															</li>
														</ul>
													</div>
								</div>
							</div>
						</div>
					</div>

					<div class="createSchoolSteper col-12 col-lg-7 " :data-step="steps">
						<div class="d-flex flex-column p-4 h-100">
							<!-- Top Steper -->
							<div class="col-11 col-lg-9 mx-auto">
								<!-- Back -->
							<a :href="'/?lang='+locale" class="backHome btn my-4">
								<span>
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M21.75 12L2.25 12" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
										<path d="M21.75 12L18.75 15.75" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
										<path d="M21.75 12L18.75 8.25" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
									</svg>
								</span>
								{{lang.back_home}}
							</a>
								
								<div>
									<!-- Title -->
									<div class="title mb-3" v-html="lang.register">
									</div>

									<div class="steper">
										<span class="stepsCount"><strong class="count">{{steps}}</strong>/{{form.package_type == 1 ? 4 : 3 }}</span>
										<span class="steptitle">{{lang.select_plan}}</span>
									</div>
								</div>
							</div>

							<!-- Create School Form -->
							<div class="col-12 col-lg-10 m-auto" form>
												<div data-step="1">
													<div class="actions select-plan flex-column flex-md-row">
														<button
															type="button"
															class="btn btn-outline-dark"
															data-plan="paid"
															@click="annualSub"
														>
															{{lang.Annual_subscription}}
														</button>
														<div
															type="button"
															data-plan="free"
															class="btn btn-outline-primary btn-fancy-primary CTA main"
															@click="tryFree"
														>
															<div class="d-flex">
																<div class="text text-center">
																	<template v-if="locale == 'ar'">{{lang.Try_free}} <strong>{{ lang.free }}</strong></template>
																<template v-else>{{lang.Try_free}} <strong>{{ lang.free }}</strong></template>
																</div>
															</div>
														</div>
													</div>
                                                    <div class="pt-4">{{lang.has_account}} 
                                                        <a :href="'/login'">{{lang.login}}</a>
                                                    </div>
												</div>
												<div :data-step="2"  v-show="form.package_type == 1">
													<div class="mb-3  row align-items-center" id="maxBar">
														<div class="price-big d-flex flex-column gap-4 m-auto mt-5 col-12 col-md-6 text-center">
														{{ currency == 'USD' ? '$3' : lang.ryal }}
														<span>/ {{lang.per_student}}</span>

														<span class="text-black mb-4">{{lang.yearly}}</span>
													</div>
													<div class="col-12 col-md-6 text-center">
														<!-- Tick Slider -->
														<div class="tick-slider">
															
															<div class="tick-slider-value-container">
																<div
																	id="weightValueModal"
																	class="tick-slider-value"
																></div>
															</div>
															<div class="tick-slider-background"></div>
															<div
																id="weightProgressModal"
																class="tick-slider-progress"
															></div>
															
															<input
																id="packageMasterModal"
																class="tick-slider-input"
																type="range"
																min="500"
																max="10000"
																step="100"
						
																:value="studentNumbers ? studentNumbers : 500"
																aria-label="Package Selector"
																data-tick-id="weightTicks"
																data-value-id="weightValueModal"
																data-cost-id="costValueModal"
																:data-cost-student="currency == 'USD' ? 3 : 12"
																:data-currency="currency == 'USD' ? '$' : lang.ryal"
																:data-student-lang="lang.student"
																:data-students-lang="locale != 'ar' ? lang.students : lang.student"
																:data-cost-lang="lang.cost_bar"
																data-progress-id="weightProgressModal"
															/>
														</div>
														<div class="d-block d-md-flex justify-content-between mt-5">
														<!-- Cost -->
														<div id="costValueModal" class="tick-slider-cost my-auto">0</div>
													</div>
													</div>
														
													<button
															type="button"
															class="btn btn-outline-dark"
															data-plan="paid"
															@click="$store.commit('setStep', 3);"
														>
															{{lang.register}}
														</button>

													</div>
												</div>


												<form @submit.prevent="register" :data-step="form.package_type == 1 ? 3 : 2">

													<!-- School Name -->
													<div class="mb-3">
														<label for="contactCompanyName" class="form-label">{{lang.company}}<span class="text-danger">*</span></label>
														<input type="text" class="form-control"	id="contactCompanyName" :placeholder="lang.company" required v-model="form.companyName" @input="validateFire()"/>
														<div>
														 <div class="text-danger" v-if="errors.company">{{lang.required}}</div>
														</div>
													</div>													
													
													<!-- School Linl -->
													<div class="mb-3">
														<label for="contactSchoolName" class="form-label">{{lang.schoolLink}}<span class="text-danger">*</span></label>
														<input type="text" class="form-control"	id="contactSchoolName" :placeholder="lang.schoolLink" required v-model="form.company" @input="validateFire()" @change="checkLicense()"/>
														<div>
														 <div class="text-danger" v-if="errors.company">{{lang.required}}</div>
														 <div class="text-danger" v-if="validateDomain">{{lang.exsitDomain}}</div>
														 <div class="text-success" v-if="domainName">ultimateschools.net/?s={{domainName}}</div>
														</div>
													</div>

													<!-- Owner Name -->
													<div class="mb-3">
														<label for="contactOwnerName" class="form-label"
															>{{lang.owner}} <span class="text-danger">*</span></label
														>
														<input
															type="text"
															class="form-control"
															id="contactOwnerName"
															:placeholder="lang.ownerName"
															required
															@input="validateFire()"
															v-model="form.owner"
														/>
														<div>
															<div class="text-danger" v-if="validate.owner">
																{{ lang.required }}
															</div>
														</div>
													</div>

													<!-- User Name -->
													<div class="mb-3">
														<label for="contactUserName" class="form-label"
															>{{lang.username}} <span class="text-danger">*</span></label
														>
														<input
															type="text"
															class="form-control"
															id="contactUserName"
															:placeholder="lang.admin"
															required
															v-model="form.username"
															@input="validateFire()"
														/>
													</div>

													<!-- Email Address -->
													<div class="mb-3">
														<label for="contactEmail1" class="form-label"
															>{{lang.email}} <span class="text-danger">*</span></label
														>
														<input
															type="email"
															class="form-control"
															id="contactEmail1"
															placeholder="example@domain.com"
															v-model="form.email"
														/>
														<div>
															<div class="text-danger" v-if="validate.email">
																{{ lang.required }}
															</div>
														</div>
													</div>

													<!-- Password -->
													<div class="mb-3">
														<label for="contactPassword" class="form-label"
															>{{lang.password}} <span class="text-danger">*</span></label
														>
														<input
															type="password"
															class="form-control"
															id="contactPassword"
															placeholder="********"
															v-model="form.password"
														/>
														<div>
															<div class="text-danger" v-if="validate.password">
																{{ lang.required }}
															</div>
														</div>
													</div>

													<!-- Country -->
													<div class="mb-3">
														<label for="contactCountry" class="form-label"
															>{{lang.country}} <span class="text-danger">*</span></label
														>
														
													<select2 v-if="countries" 
													         :settings="{ settingOption: value, settingOption: value }" 
															 v-model="form.country" 
															 :options="countries"
															 class="form-control"
															
														 />
														<!-- <select
															class="form-select"
															id="contactCountry"
															aria-label="Contact Country"
															v-model="form.country"
														>
															<option v-for="(cName, cId) in countries" :key="cId" :value="cName">{{cName}}</option>
														</select> -->
														<div class="text-danger" v-if="errors.country_id">
															<p>{{errors.country_id[0]}}</p>
														</div>
													</div>

													<!-- City -->
													<div class="mb-3">
														<label for="contactCity" class="form-label"
															>{{lang.city}} <span class="text-danger">*</span></label
														>
														<input
															type="text"
															class="form-control"
															id="contactCity"
															:placeholder="lang.city"
															v-model="form.city"
														/>
														<div class="text-danger" v-if="errors.city">
															<p>{{errors.city[0]}}</p>
														</div>
													</div>

													<!-- Phone Number -->
													<div class="mb-3">
														<label for="contactPhoneNumber" class="form-label"
															>{{lang.mobile}} <span class="text-danger">*</span></label
														>
														<input
															type="tel"
															class="form-control phone-n"
															id="contactPhoneNumber1"
															:placeholder="lang.mobile"
															v-model="form.mobile"
															@input="validateFire()"
															maxlength="12"
														/>
														<div>
															<div class="text-danger" v-if="validate.mobile">
																{{ lang.required }}
															</div>
															<div class="text-danger" v-if="errors.mobile">
																<p>{{errors.mobile[0]}}</p>
															</div>
														</div>
													</div>

													<!-- Database -->
													<div class="mb-3" v-if="form.package_type != 1">
														<label for="contactDatabase" class="form-label"
															>{{lang.database}} <span class="text-danger">*</span></label
														>
														<select
															class="form-select"
															id="contactDatabase"
															aria-label="Contact Database"
															v-model="form.db"
														>
															<option value="empty">{{lang.empty_db}}</option>
                                                    		<option value="demo">{{lang.demo_db}}</option>  
														</select>
														<div class="text-danger" v-if="errors.db">
															<p>{{errors.db[0]}}</p>
														</div>
													</div>

													<!-- Language -->
													<div class="mb-3">
														<label for="contactLanguage" class="form-label"
															>{{ form.package_type == 1 ? lang.def_lang : lang.dem_lang}} <span class="text-danger">*</span></label
														>
														<select
															class="form-select"
															id="contactLanguage"
															aria-label="Contact Language"
															v-model="form.lang"
															required
														>
															<option value="">{{lang.language_c}}</option>
															<option v-for="(n, k) in ['ar', 'en', 'tr']" :key="k" :value="n">{{lang['language_' + n]}}</option>
														</select>
														<div class="text-danger" v-if="errors.lang">
															<p>{{errors.lang[0]}}</p>
														</div>
													</div>

													<!-- Accept Tearms of Services & Privacy Policy -->
													<div class="form-check mb-3">
														
														<input class="form-check-input" type="checkbox" v-model="term_cond" value="" id="acceptPolicies" />
														<label class="form-check-label" for="acceptPolicies">
															<span class="text-danger">*</span>
															{{lang.creating_policy}}
															<a :href="'/terms'" target="_blank" rel="noopener noreferrer">{{lang.tos}}</a>
															{{lang.and}}
															<a :href="'/returnPolicy'" target="_blank" rel="noopener noreferrer">{{lang.pp}}</a>
														</label>
														<div v-if="condMsg != ''" class="alert alert-danger">
															{{condMsg}}
														</div>
													</div>
													 <div class="spinner-border" role="status" v-if="inProgress">
														<!-- <span class="sr-only">Loading...</span> -->
													</div>
													<!-- Send -->
													<button
														type="submit"
														class="btn btn-outline-primary btn-fancy-primary CTA main w-100 py-2"
														v-if="!inProgress"
													>
														<div class="d-flex justify-content-center">
															<div class="text text-start mx-2">{{lang.register}}</div>
														</div>
													</button>
												</form>

												<div :data-step="form.package_type == 1 ? 4 : 3">
													<p class="text-center">
														<!-- <img src="../src/assets/images/check.svg"  class="lazy" width="100px" height="100px" alt="success"> -->
													</p>
													<p >{{lang.thanksForRegisterTrailVersion}}</p>
													<p>{{lang.schoolLink}} : <a :href="info.superUrl + info.subdomain">{{info.superUrl + info.subdomain}}</a></p>
													<p>{{lang.username}} : {{info.username}}</p>
													<p>{{lang.password}} : {{info.password}}</p>
												</div>
											</div>

							<!-- Bottom -->
							<!-- Bottom -->
											<div class="notesBottom col-8 col-lg-6 mt-4">
												{{lang.recap}}
												<a :href="'/terms'" target="_blank" rel="noopener noreferrer"
													>{{lang.tos}}</a
												>
												{{lang.and}}
												<a :href="'/returnPolicy'" target="_blank" rel="noopener noreferrer"
													>{{lang.pp}}</a
												>
											</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    name: 'SchoolCreate',
    head: {
    script: [
      {
        src: "../src/assets/js/functions.js",
      },
    ],
  },
	data(){
		return {
			    message: '',
				errors: '',
				inRequest: false,
                robot: false,
				robotMsg: '',
                cities: [],
                regions: [],
                confirm_password: '',
                notMatch: false,
                locationOpen: false,
                isFirst: true,
                isSecond: false,
                validateDomain: 0,
				domainName: '',
                countries: [],
                requiredSub: '',
                robot: false,
                form: {
                    lang: '',
                    country: '',
                    user: '',
                    studentNumber:0,
					db:'empty'
                },
                validate:{
					owner: 0,
                    email: 0,
                    mobile: 0,
					company: 0
                },
				robotMsg: '',
				condMsg: '',
                isDone: false,
                errors:{},
				errorsValid: '',
				res_link: '',
				inProgress: false,
				info: {},
				term_cond: false,
				studentNumbers: 500,
				 api_url : useRuntimeConfig().public.base_url

        }
		
	},
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
        currency(){
            return this.$store.state.GetLanguage.currency;
        },
        steps(){
            return this.$store.state.GetLanguage.step;
        },
    },



    mounted(){
      this.getRequirements();
      if(process.client){

		
        this.studentNumbers = localStorage.getItem('students');
      }  
      let el = document.getElementsByClassName('select2-container--open').style = 'z-index: 999999 !important; width:100% !important;';
	  setTimeout(() => {
document.getElementsByClassName('select2-container--open').style = 'z-index: 999999 !important; width:100% !important;';
		
	  }, 2000);
    },


    methods: {
		myChangeEvent(country){
			this.form.country  = country;


  		},

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
        getRequirements(){
            axios.get(this.api_url+'/shop/requirements?lang=' + this.locale)
            .then(response => {
                var data = response.data.shopsResponse;
				this.countries = Object.values(data.countries);
            })
        },
        tryFree(){
				 this.form.package_type = 0;
				 this.$store.commit('setStep', 2);
			},
			annualSub(){
				 this.form.package_type = 1;
				 this.form.students = process.client ? 500 : (localStorage.getItem('students') ? localStorage.getItem('students') : 500);
				 this.$store.commit('setStep', 2);
			},
			validateFire(){
                var vm = this;
                $("#contactCompanyName").on('input', function (e) {
                    $(this).val($(this).val().replace(/[^a-zA-Z\u0621-\u064A\s ]+$/, ''));
                    vm.form.companyName = $(this).val();
                });                

                $("#contactSchoolName").on('input', function (e) {
                    $(this).val($(this).val().replace(/[^a-zA-Z\u0621-\u064A\s ]+$/, ''));
                    vm.form.company = $(this).val();
                });


                $("#contactOwnerName").on('input', function (e) {
                    $(this).val($(this).val().replace(/[^a-zA-Z\u0621-\u064A\s ]+$/, ''));
                    vm.form.owner = $(this).val();
                });

                $(".phone-n").on('input', function(e){
                    $(this).val($(this).val().replace(/[^0-9]/g, ''));
                    vm.form.mobile = $(this).val();
                });
            },
			checkLicense(){
				this.domainName = "";
                axios.get(this.api_url+'/check-license?lang='+this.locale+'&subdomain=' + this.form.company)
                .then(response => {
                    var c = response.data.shopResponse.count;
                    this.validateDomain = c;
					if(c < 1){
						this.domainName = response.data.shopResponse.name;
					}
                })
                .catch((error) =>  console.log('warning'));
        	},

            register(){
                var vm = this;
				vm.form.students = process.client ? 500 : (localStorage.getItem('students') ? localStorage.getItem('students') : 500);;
				vm.robotMsg = '';
                vm.inProgress = true;
                 if (!vm.term_cond) {
					if(!vm.term_cond){
						vm.condMsg = 'Term and condition is required.';
					}
					vm.inProgress = false;
                    return;
                }
                var isValid = 1;
                
				 $.each(vm.validate, function(key, value) {
                    if(!Object.keys(vm.form).includes(key) || vm.form[key] == ''){
                        vm.validate[key] = 1;
                        isValid = 0;
                    }else{
                        vm.validate[key] = 0;
                    }
                });
                const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }
                let data = new FormData();
                
                axios.post(this.api_url+'/shop?lang='+this.locale, vm.form)
                    .then(response => {
                        vm.inProgress = false;
                        if(response.data.result.success){

                           
						   if(this.form.package_type == 0){
							this.info = response.data.licenseResponse.info;
							this.$store.commit('setStep', 3);
						   }else{
							window.location.href = response.data.licenseResponse.url;
						   }
						   
                            vm.form = {};
                        }else{

                            this.errorsValid = 'Ops, Something went wrong';
                        }
                        
                    }).catch(response =>  {
                        vm.inProgress = false;
                        if(response.response.status == 422) {
                            this.errors = response.response.data.errors;
                        }else {
                           this.errorsValid = 'Ops, Something went wrong'; 
                        }
                    });

            },
    }
  }
  </script>
  
  
<style scoped>

.select2-container--default .select2-selection--single {
	border: none !important;
}
.select2-container {
    display: block !important;
}

span.select2-container {
    z-index:10050 !important;
}

.modal-open .select2-container--open { z-index: 999999 !important; width:100% !important; }
</style>