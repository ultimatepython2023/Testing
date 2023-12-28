<template>
	<div>



<section class="hero inner">
			<div class="container g-4 d-flex flex-column">
				<nav-layout />

				<!-- Content BEGIN -->
				<div class="content container m-auto">
					<div class="row">
						<div class="col-12 col-lg-8">
							<div class="header">
								<h1>{{lang.profile}}</h1>
							</div>
						</div>
					</div>
				</div>
				<!-- Content END -->
			</div>
		</section>



    <section class="bg-white position-relative"> 
			<div class="container g-4">
				<!-- Content -->
				<div class="row justify-content-between">
					<div class="col-12 col-md-3">
						<div class="list-group list-group-flush profile">
							<a @click.prevent="changeMode('show')" href="#" class="list-group-item list-group-item-action" :class="mode == 'show' || mode == 'edit' ? 'active' : ''" aria-current="true">
								{{lang.account_details}}
							</a>
							<a href="#" @click.prevent="changeMode('invoice')"  :class="mode == 'invoice' ? 'active' : ''" class="list-group-item list-group-item-action">
								{{lang.invoice}}
							</a>
                            <a href="#" class="list-group-item list-group-item-action" @click.prevent="changeMode('renew')"  :class="mode == 'renew' ? 'active' : ''">
								{{ lang.manage_plan }}
							</a>
							<a href="#" class="list-group-item list-group-item-action" @click.prevent="changeMode('password')"  :class="mode == 'password' ? 'active' : ''">
								{{ lang.change_password }}
							</a>
							<a href="#" @click.prevent="logout" class="list-group-item list-group-item-action">
								{{lang.logout}}
							</a>
						</div>
					</div>
					<div class="col-12 col-md-8" v-if="mode == 'show'">
						<div class="list-group list-group-flush profile-data">
							<div class="list-group-item current-plan">
								<div class="d-flex w-100 justify-content-between align-items-center">
									<div>
										<small>{{lang.current_plan}}</small>
										<div>{{license.package_type ? license.students_number + ' ('+ lang.students +')' : lang.free}}</div>
									</div>
									<!-- CTA -->
									<a href="#" @click="changeMode('renew')" type="button" class="btn btn-outline-dark">
										{{lang.manage_plan}}
									</a>
								</div>

								<div class="mt-4">
									<small>{{lang.renewal_date}}</small>
									<div>
										{{license.expire_at}} - {{license.remain > 0 ? license.remain + ' ('+ lang.remaining +')' : lang.expired}} 
										
										<span style="font-size: small;" v-if="license.package_type">
											<br>
											{{lang.renew_txt_h}}: {{license.payment ? license.payment.students : license.students_number}} {{lang.students}}
											<a href="#" v-if="!license.payment" @click.prevent="changeMode('renew')">{{lang.change}}</a>
											<a href="#" v-if="license.payment" @click.prevent="deletePayment()">{{lang.cancel}}</a>
										</span>
									</div>
								</div>
							</div>
							<div class="list-group-item">
								<small>{{lang.email}}</small>
								<div>{{license.email}}</div>
							</div>
							<div class="list-group-item">
								<small>{{lang.username}}</small>
								<div>{{license.username}}</div>
							</div>
							<div class="list-group-item">
								<small>{{lang.company}}</small>
								<div>{{license.subdomain}}</div>
							</div>
							<div class="list-group-item">
								<small>{{lang.owner}}</small>
								<div>{{license.owner}}</div>
							</div>
							<div class="list-group-item">
								<small>{{lang.country}}</small>
								<div>{{license.country}}</div>
							</div>
							<div class="list-group-item">
								<small>{{lang.city}}</small>
								<div>{{license.city}}</div>
							</div>
							<div class="list-group-item">
								<small>{{ license.package_type == 1 ? lang.def_lang : lang.dem_lang}}</small>
								<div>{{license.lang}}</div>
							</div>
							<div class="list-group-item">
								<small>{{lang.schoolLink}}</small>
								<div>
									<a :href="license.url" target="_blank" rel="noopener noreferrer">{{license.url}}</a>
								</div>
							</div>
						</div>

						<hr>

						<!-- Edit profile -->
						<a href="#" @click.prevent="changeMode('edit')" class="btn btn-outline-dark my-5">
							{{lang.edit}}
						</a>
					</div>
                    <div class="col-12 col-md-8" v-show="mode == 'edit'">
						<div class="list-group list-group-flush profile-data">
							<div class="list-group-item current-plan">
								<div class="d-flex w-100 justify-content-between align-items-center">
									<div>
										<small>{{lang.current_plan}}</small>
										<div>{{license.package_type ? license.students_number + ' ('+ lang.students +')' : lang.free}}</div>
									</div>
									<!-- CTA -->
									<a href="#" @click="changeMode('renew')" type="button" class="btn btn-outline-dark">
										{{lang.manage_plan}}
									</a>
								</div>

								<div class="mt-4">
									<small>{{lang.renewal_date}}</small>
									<div>{{license.expire_at}} - {{license.remain > 0 ? license.remain + ' ('+ lang.remaining +')' : lang.expired}} 
										<span style="font-size: small;" v-if="license.package_type">
											<br>
											{{lang.renew_txt_h}}: {{license.payment ? license.payment.students : license.students_number}} {{lang.students}}
											<a href="#" v-if="!license.payment" @click.prevent="changeMode('renew')">{{lang.change}}</a>
											<a href="#" v-if="license.payment" @click.prevent="deletePayment()">{{lang.cancel}}</a>
										</span>
									</div>
								</div>
							</div>

                            <form @submit.prevent="updateLicense()">
							<div class="mb-3"><label for="studentsNum" class="form-label">{{ lang.students_num }}</label> 
                            <input type="text" v-model="license.students_number"
									id="studentsNum" placeholder="Students" readonly="readonly" disabled="disabled" class="form-control">
							</div>
							<div class="mb-3"><label for="contactSchoolName" class="form-label">{{lang.company}}</label> <input type="text"
								v-model="license.subdomain"	id="contactSchoolName" placeholder="ultimate" required="required" readonly class="form-control">
							</div>
							<div class="mb-3"><label for="contactOwnerName" class="form-label">{{lang.owner}} <span class="text-danger">*</span></label> <input type="text"
									id="contactOwnerName" v-model="form.owner" :placeholder="lang.owner" required="required" class="form-control">
							</div>
							<div class="mb-3"><label for="contactUserName" class="form-label">{{lang.username}}</label> <input type="text"
									id="contactUserName" placeholder="Ultimate" v-model="license.username" required="required" readonly class="form-control"></div>
							<div class="mb-3"><label for="contactEmail1" class="form-label">{{lang.email}}</label> <input type="email" id="contactEmail1"
									placeholder="example@domain.com"  readonly v-model="license.email" class="form-control"
									style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiYmZkZTQxOS00ZGRkLWU5NDYtOWQ2MC05OGExNGJiMTA3N2YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDAyNDkwMkRDOTIyMTFFNkI0MzFGRTk2RjM1OTdENTciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDAyNDkwMkNDOTIyMTFFNkI0MzFGRTk2RjM1OTdENTciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTU2NTE1NDItMmIzOC1kZjRkLTk0N2UtN2NjOTlmMjQ5ZGFjIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmJiZmRlNDE5LTRkZGQtZTk0Ni05ZDYwLTk4YTE0YmIxMDc3ZiIv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&quot;) !important; background-repeat: no-repeat; background-size: 20px; background-position: 97% center; cursor: auto;"
									data-temp-mail-org="1">
							</div>
							
							<div class="mb-3"><label for="contactPhoneNumber" class="form-label">{{lang.mobile}} <span class="text-danger">*</span></label> <input type="tel"
									id="contactPhoneNumber1" :placeholder="lang.mobile" v-model="form.mobile" class="form-control phone-n" required>
							</div>
							
							
							<button type="submit" class="btn btn-outline-dark py-2">
								{{lang.save}}
							</button>
						</form>
							
						</div>

						
					</div>
                    <div class="col-12 col-md-8" v-show="mode == 'invoice'">
						<div class="list-group list-group-flush profile-data">
							<div class="list-group-item current-plan">
								<div class="d-flex w-100 justify-content-between align-items-center">
									<div>
										<small>{{lang.current_plan}}</small>
										<div>{{license.package_type ? license.students_number + ' ('+ lang.students +')' : lang.free}}</div>
									</div>
									<!-- CTA -->
									<a href="#" @click="changeMode('renew')" type="button" class="btn btn-outline-dark">
										{{lang.manage_plan}}
									</a>
								</div>

								<div class="mt-4">
									<small>{{lang.renewal_date}}</small>
									<div>{{license.expire_at}} - {{license.remain > 0 ? license.remain + ' ('+ lang.remaining +')' : lang.expired}} 
										<span style="font-size: small;" v-if="license.package_type">
											<br>
											{{lang.renew_txt_h}}: {{license.payment ? license.payment.students : license.students_number}} {{lang.students}}
											<a href="#" v-if="!license.payment" @click.prevent="changeMode('renew')">{{lang.change}}</a>
											<a href="#" v-if="license.payment" @click.prevent="deletePayment()">{{lang.cancel}}</a>
										</span>
									</div>
								</div>
							</div>

                           <div class="list-group-item mt-4 p-0 pt-4">
								<!-- <input type="search"  v-model="searching" class="form-control ds-input w-50" id="search-input" placeholder="Search..."
									aria-label="Search docs for..."> -->
								
									<!-- Table of invoices -->
									<table class="table table-striped table-hover mt-2" id="invoices_table">
										<thead class="text-center">
											<tr id="show_head">
												<th>#</th>
												<th>{{lang.date_time}}</th>
												<th>{{lang.total_students}}</th>
												<th>{{lang.company}}</th>
												<th>{{lang.renewal_date_t}}</th>
												<th>{{lang.amount}}</th>
												<th>#</th>
											</tr>
										</thead>
										<tbody class="text-center" id="data-container">
											<tr v-for="pay in license.payments" v-if="pay.status">
												<td>{{pay.id}}</td>
												<td>{{pay.created_at}}</td>
												<td>{{pay.students}}</td>
												<td>{{license.subdomain}}</td>
												<td>{{pay.expire_at}}</td>
												<td>{{pay.pay}}</td>
												<td>
													<router-link :to="'invoice?p=' + pay.id + '&l=' + license.license_key" >{{lang.show}}</router-link>
												</td>
											</tr>
										</tbody>
									</table>
							</div>
							
						</div>

						
					</div>
                     <div class="col-12 col-md-8" v-show="mode == 'password'">
						<div class="list-group list-group-flush profile-data">
							<div class="list-group-item current-plan">
								<div class="d-flex w-100 justify-content-between align-items-center">
									<div>
										<small>{{lang.current_plan}}</small>
										<div>{{license.package_type ? license.students_number + ' ('+ lang.students +')' : lang.free}}</div>
									</div>
									<!-- CTA -->
									<a href="#" @click="changeMode('renew')" type="button" class="btn btn-outline-dark">
										{{lang.manage_plan}}
									</a>
								</div>

								<div class="mt-4">
									<small>{{lang.renewal_date}}</small>
									<div>{{license.expire_at}} - {{license.remain > 0 ? license.remain + ' ('+ lang.remaining +')' : lang.expired}}
										<span style="font-size: small;" v-if="license.package_type">
											<br>
											{{lang.renew_txt_h}}: {{license.payment ? license.payment.students : license.students_number}} {{lang.students}}
											<a href="#" v-if="!license.payment" @click.prevent="changeMode('renew')">{{lang.change}}</a>
											<a href="#" v-if="license.payment" @click.prevent="deletePayment()">{{lang.cancel}}</a>
										</span>
									</div>
								</div>
							</div>

                            <form @submit.prevent="updatePassword()">
							<div class="mb-3">
                                <label for="password" class="form-label">{{ lang.current_password }}</label> 
                            <input type="password" v-model="password.current_password"
									id="password" placeholder="********"  class="form-control">
							</div>
                            <div class="mb-3">
                                <label for="newpassword" class="form-label">{{ lang.new_password }}</label> 
                            <input type="password" v-model="password.new_password"
									id="newpassword" placeholder="********"  class="form-control">
							</div>
														
							<div class="alert alert-danger" v-if="passd_den_meessage">
							{{ passd_den_meessage }}
							</div>
													
							<div class="alert alert-danger" v-if="passd_succ_meessage">
							{{ passd_succ_meessage }}
							</div>
							<button type="submit" class="btn btn-outline-dark py-2">
								{{lang.save}}
							</button>
						</form>
							
						</div>

						
					</div>
                    <div class="col-12 col-md-8" v-show="mode == 'renew'">
						<div class="list-group list-group-flush profile-data">
							<div class="list-group-item current-plan">
								<div class="d-flex w-100 justify-content-between align-items-center">
									<div>
										<small>{{lang.current_plan}}</small>
										<div>{{license.package_type ? license.students_number + ' ('+ lang.students +')' : lang.free}}</div>
									</div>
								</div>

								<div class="mt-4">
									<small>{{lang.renewal_date}}</small>
									<div>{{license.expire_at}} - {{license.remain > 0 ? license.remain + ' ('+ lang.remaining +')' : lang.expired}} 
										<span style="font-size: small;" v-if="license.package_type">
											<br>
											{{lang.renew_txt_h}}: {{license.payment ? license.payment.students : license.students_number}} {{lang.students}}
											<a href="#" v-if="!license.payment" @click.prevent="changeMode('renew')">{{lang.change}}</a>
											<a href="#" v-if="license.payment" @click.prevent="deletePayment()">{{lang.cancel}}</a>
										</span>
									</div>
								</div>
							</div>
							<div class="list-group-item mt-4 p-0 pt-4">
								<div class="row justify-content-center">
									<!-- Pricing Slider -->
									<div class="pricingSlider col-12">
										<div class="header">
											<div class="subtitle">
												{{lang.select_plan}}
											</div>
										</div>

										<div>
											<!-- Tick Slider -->
											<div class="tick-slider">
												<div class="tick-slider-value-container">
													<div id="weightValueModal" class="tick-slider-value"></div>
												</div>
												<div class="tick-slider-background"></div>
												<div id="weightProgressModal" class="tick-slider-progress"></div>
													<input
										id="packageMaster"
										class="tick-slider-input"
										type="range"
										min="500"
										max="10000"
										step="100"
										:value="Number(license.students_number) >= 500 ? Number(license.students_number) : 500"
										aria-label="Package Selector"
										data-tick-id="weightTicks"
										data-value-id="weightValueModal"
										data-cost-id="costValueMaster"
										data-cost-student="3"
										:data-currency="lang[currency]"
										:data-student-lang="lang.student"
										:data-students-lang="locale != 'ar' ? lang.students : lang.student"
										:data-cost-lang="lang.cost_bar"
										data-progress-id="weightProgress"
									/>
											</div>

											<div class="mt-5">
												<!-- Cost -->
												<div id="costValueMaster" class="tick-slider-cost my-auto">0</div>
												<div class="text-danger" style="font-size: small;" v-if="license.package_type">
													* {{lang.pay_text_full}}
												</div>
												<div class="form-group mt-2" v-if="license.package_type">
													<label for="" class="text-danger" style="font-size: small;">{{lang.renew_pass}} *</label>
													<input type="password" class="form-control" v-model="pass" placeholder="Password">
												</div>
												<div class="alert alert-danger mt-2" v-if="message">{{message}}</div>
												<!-- Create school -->
												<div type="button" v-if="!inProgress" @click.prevent="renew()" 
													class="btn btn-outline-primary btn-fancy-primary CTA main mt-5">
													<div class="d-flex">
														<div class="text text-start mx-2 fs-3">
															<div>{{lang.change}}</div>
														</div>
													</div>
												</div>
												
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	</div>
</template>


<script>
export default {
	name:"UserProfile",
	data(){
		return {
			token: '',
			passd_den_meessage: '',
			passd_succ_meessage: '',
			form: {},
                message:false,
                cities: {},
                regions: {},
                isDisabled: false,
                city_id: '',
                errors:{},
                license: {},
                mode: 'show',
                searching: '',
                password: {},
				pass: '',
                inProgress: false,
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
        }
    },
	mounted(){
		let cookies = this.$auth.$storage.getCookies();
		this.token  = cookies['auth._token.laravelJWT'];
		this.getLicense();
	},
    methods: {
		updateLicense(){
			this.$axios.post('/token/profile', this.form)
                    .then(response => {
						if(response.data.result.success){
                        	this.license = response.data.licenseResponse;
                        	this.form    = {owner: this.license.owner, mobile: this.license.mobile};
                        	this.changeMode('show');
                    	}
                    }).catch(response =>  {
						
                });
		},
		updatePassword(){
			this.passd_den_meessage = '';
			this.passd_succ_meessage = '';
			this.$axios.post('/token/profile-password', this.password)
                    .then(response => {
						if(response.data.result.success){
							this.password    = {};
                        	this.changeMode('show');
                    	}else{
							let errors = response.data.result.errors;	
							if(errors){
								Object.keys(errors).forEach(key => {
								this.passd_den_meessage = errors[key]
								});
							}
						}
                    }).catch(response =>  {
						
            });
		},
		deletePayment(){
			this.$axios.delete('/token/profile-delete-payment/' + this.license.id)
                    .then(response => {
						if(response.data.result.success){
							this.license.payment    = null;
                    	}
                    }).catch(response =>  {
						
                });
		},
		renew(){
			this.message = '';
				if(this.license.package_type == 1){
					if(!this.pass){
						this.message = this.lang.required;
						return;
					}
					if((Number(localStorage.getItem('students')) == Number(this.license.students_number)) && this.license.remain > 0 && this.license.package_type == 1){
					this.$Swal.fire(
                    this.lang.wrong,
                    this.lang.select_num,
                    'warning'
                    );
					return;
				}
				let selectedStudents = Number(localStorage.getItem('students'));
				let licenseStudents  = Number(this.license.students_number);
				let auto_txt = '';
				if(selectedStudents > licenseStudents){
					let total = selectedStudents - licenseStudents;
					let totalPay = total * 3;
					auto_txt = this.lang.auto_pay + ' ( '+totalPay+' $)' + ' - ( '+total+' ) ' + this.lang.students;
				}else{
					let total = selectedStudents;
					let totalPay = total * 3;
					auto_txt = this.lang.decrease_pay + ' ' + ' ( '+totalPay+' $) ' + this.lang.decrease_pay_c + ' ( '+total+' ) ';
				}
				this.$Swal.fire({
                    title: this.lang.confirm,
                    text: auto_txt,
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    cancelButtonText: this.lang.close,
                    confirmButtonText: this.lang.ok
                    }).then((result) => {
                        if(result.value){
                            let data = {
								id: this.license.id,
								students: localStorage.getItem('students'),
								password: this.pass
							}
							this.inProgress = true;
							this.$axios.post('/token/profile-renew', data)
							.then(response => {
								this.inProgress = false;
								if(response.data.result.success){
									window.location.href = response.data.licenseResponse.url;
									this.changeMode('show');
								}else{
									this.message = response.data.licenseResponse.password;
								}
							})
							.catch((error) => {
							this.inProgress = false;
							console.log(error);
							});
                        }
                    });
				}else{
					let data = {
						id: this.license.id,
						students: localStorage.getItem('students')
					};
					this.inProgress = true;
					this.$axios.post('/token/profile-renew', data)
						.then(response => {
							this.inProgress = false;
							if(response.data.result.success){
								window.location.href = response.data.licenseResponse.url;
								this.changeMode('show');
							}
						})
						.catch((error) => {
							this.inProgress = false;
							console.log(error);
						});
				}
		},
		getLicense(){
		
			this.$axios.get('/token/profile?lang=' + this.$route.query.lang)
                .then(response => {
                    this.license = response.data.licenseResponse;
                    this.form    = {owner: this.license.owner, mobile: this.license.mobile, key: this.license.license_key};
                })
                .catch((error) =>  console.log('warning'));
		},
		logout(){
			this.$auth.logout();

		},
		changeMode(mode){
                this.mode = mode;
        },
    }
}
</script>