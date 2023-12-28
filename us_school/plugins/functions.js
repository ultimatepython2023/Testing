import $ from 'jquery'
window.jQuery = window.$ = $
export default jQuery;

jQuery(function($) {
    'use strict';

	document.body.classList.add('fancyScrollbar');

    // #region / Browser Info
//   ____                                    _____        __
//  |  _ \                                  |_   _|      / _|
//  | |_) |_ __ _____      _____  ___ _ __    | |  _ __ | |_ ___
//  |  _ <| '__/ _ \ \ /\ / / __|/ _ \ '__|   | | | '_ \|  _/ _ \
//  | |_) | | | (_) \ V  V /\__ \  __/ |     _| |_| | | | || (_) |
//  |____/|_|  \___/ \_/\_/ |___/\___|_|    |_____|_| |_|_| \___/
//
//
var browserLang,
userLang = navigator.language || navigator.userLanguage;

if (userLang.split('-')[0].length) {
browserLang = userLang.split('-')[0];
}
// #endregion

// #region / LazyLoad
//   _                     _                     _
//  | |                   | |                   | |
//  | |     __ _ _____   _| |     ___   __ _  __| |
//  | |    / _` |_  / | | | |    / _ \ / _` |/ _` |
//  | |___| (_| |/ /| |_| | |___| (_) | (_| | (_| |
//  |______\__,_/___|\__, |______\___/ \__,_|\__,_|
//                    __/ |
//                   |___/
//
document.addEventListener('DOMContentLoaded', () => {
function logElementEvent(eventName, element) {
	console.log(Date.now(), eventName, element.getAttribute('data-src'));
}

var callback_error = function (element) {
	logElementEvent('💀 ERROR', element);
	element.src = 'https://via.placeholder.com/440x560/?text=Error+Placeholder';
};

window.lazyLoadOptions = {
	threshold: 0,
	// Assign the callbacks defined above
	callback_error: callback_error,
};
});
// #endregion

// #region / Smooth Scroll
//    _____                       _   _        _____                _ _
//   / ____|                     | | | |      / ____|              | | |
//  | (___  _ __ ___   ___   ___ | |_| |__   | (___   ___ _ __ ___ | | |
//   \___ \| '_ ` _ \ / _ \ / _ \| __| '_ \   \___ \ / __| '__/ _ \| | |
//   ____) | | | | | | (_) | (_) | |_| | | |  ____) | (__| | | (_) | | |
//  |_____/|_| |_| |_|\___/ \___/ \__|_| |_| |_____/ \___|_|  \___/|_|_|
//
//
document.addEventListener('DOMContentLoaded', () => {
let goToTop = document.querySelector('[data-action="goToTop"]');

if (goToTop) {
	// Hide goToTop button on scroll to top ov view
	window.addEventListener('scroll', function () {
		if (window.pageYOffset > 100) {
			goToTop.classList.add('view');
			// Change Floating Actions style
			this.document
				.querySelector('.floating-actions')
				.classList.add('scrolled');
		} else {
			goToTop.classList.remove('view');
			// Change Floating Actions style
			this.document
				.querySelector('.floating-actions')
				.classList.remove('scrolled');
		}
	});

	document
		.querySelector('[data-action="goToTop"]')
		.addEventListener('click', function (e) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
}
});
// #endregion

// #region / Main Navbar
//   __  __       _         _   _             _
//  |  \/  |     (_)       | \ | |           | |
//  | \  / | __ _ _ _ __   |  \| | __ ___   _| |__   __ _ _ __
//  | |\/| |/ _` | | '_ \  | . ` |/ _` \ \ / / '_ \ / _` | '__|
//  | |  | | (_| | | | | | | |\  | (_| |\ V /| |_) | (_| | |
//  |_|  |_|\__,_|_|_| |_| |_| \_|\__,_| \_/ |_.__/ \__,_|_|
//
//
document.addEventListener('DOMContentLoaded', () => {
let mainNavbar = document.querySelector('[masternavcontainer] > .navbar');
if (mainNavbar) {
	let navbarToggler = mainNavbar.querySelector('.navbar-toggler');

	// Open/CLose Mobile menu on click
	navbarToggler.addEventListener('click', () => {
		if (mainNavbar.hasAttribute('view')) {
			mainNavbar.removeAttribute('view');
			if (!document.body.classList.contains('modal-open')) {
				document.body.style.overflow = 'unset';
			}
		} else {
			mainNavbar.setAttribute('view', '');
			document.body.style.overflow = 'unset';
			document.body.style.overflow = 'hidden';
		}
	});

	// Close Mobile menu on click outside
	document.addEventListener('mouseup', function (e) {
		let container = mainNavbar.querySelector(
			'[innernavlinkscontainermaster] > *'
		);

		if (container) {
			if (
				!container.contains(e.target) &&
				!navbarToggler.contains(e.target)
			) {
				mainNavbar.removeAttribute('view');
				if (!document.body.classList.contains('modal-open')) {
					document.body.style.overflow = 'unset';
				}
				document.querySelector('.floating-actions').style.position = 'sticky';
			}
		}
	});

	// Add height to main nav on screen resize
	if (window.innerWidth <= 991.98) {
		mainNavbar.querySelector('[innernavlinkscontainermaster]').style.height =
			window.innerHeight + 'px';
	} else {
		mainNavbar.querySelector('[innernavlinkscontainermaster]').style.height =
			'';
	}

	window.addEventListener('resize', function () {
		if (window.innerWidth <= 991.98) {
			mainNavbar.querySelector(
				'[innernavlinkscontainermaster]'
			).style.height = window.innerHeight + 'px';
		} else {
			mainNavbar.querySelector(
				'[innernavlinkscontainermaster]'
			).style.height = '';
		}
	});
}
});
// #endregion

// #region / Sticky Nav
//    _____ _   _      _            _   _
//   / ____| | (_)    | |          | \ | |
//  | (___ | |_ _  ___| | ___   _  |  \| | __ ___   __
//   \___ \| __| |/ __| |/ / | | | | . ` |/ _` \ \ / /
//   ____) | |_| | (__|   <| |_| | | |\  | (_| |\ V /
//  |_____/ \__|_|\___|_|\_\\__, | |_| \_|\__,_| \_/
//                           __/ |
//                          |___/
//
// document.addEventListener('DOMContentLoaded', () => {
// 	window.addEventListener('scroll', function () {
// 		let navArea = document.querySelector('[masterNav]');

// 		// View
// 		function navSticky(navArea) {
// 			// Add sticky to nav
// 			navArea.classList.add('is-sticky');
// 			// Change nav logo
// 			navArea.querySelector('.navbar-brand > img').src =
// 				'./dist/images/Logo-Colored.png';

// 			// Scroll actions
// 			var lastScrollTop = 0;

// 			window.addEventListener(
// 				'scroll',
// 				function () {
// 					var st = window.pageYOffset || document.documentElement.scrollTop;
// 					if (st > lastScrollTop) {
// 						// downscroll
// 						navArea.classList.remove('is-up');
// 					} else {
// 						// upscroll
// 						navArea.classList.add('is-up');
// 					}
// 					lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
// 				},
// 				false
// 			);
// 		}

// 		// Hide
// 		function navUnsticky(navArea) {
// 			// Remove sticky to nav
// 			navArea.classList.remove('is-sticky');
// 			// Change nav logo
// 			navArea.querySelector('.navbar-brand > img').src =
// 				'./dist/images/Logo-Light.png';
// 		}

// 		if (window.pageYOffset > navArea.offsetHeight + 100) {
// 			if (!navArea.classList.contains('is-sticky')) {
// 				navSticky(navArea);
// 			}
// 		} else {
// 			navUnsticky(navArea);
// 		}
// 	});
// });

// #endregion

// #region / Alert
//            _           _
//      /\   | |         | |
//     /  \  | | ___ _ __| |_
//    / /\ \ | |/ _ \ '__| __|
//   / ____ \| |  __/ |  | |_
//  /_/    \_\_|\___|_|   \__|
//
//
document.addEventListener('DOMContentLoaded', () => {
if (document.querySelector('.alert .close')) {
	document
		.querySelector('.alert .close')
		.addEventListener('click', function (event) {
			document.querySelector('.alert').remove();
		});
}
});
// #endregion

// #region / Hero Section
//   _    _                   _____           _   _
//  | |  | |                 / ____|         | | (_)
//  | |__| | ___ _ __ ___   | (___   ___  ___| |_ _  ___  _ __
//  |  __  |/ _ \ '__/ _ \   \___ \ / _ \/ __| __| |/ _ \| '_ \
//  | |  | |  __/ | | (_) |  ____) |  __/ (__| |_| | (_) | | | |
//  |_|  |_|\___|_|  \___/  |_____/ \___|\___|\__|_|\___/|_| |_|
//
//
document.addEventListener('DOMContentLoaded', () => {
let heroSection = document.querySelector('section.hero');
if (heroSection && !heroSection.classList.contains('inner'))
	heroSection.querySelector('.container').style.minHeight =
		window.innerHeight + 'px';

// On Screen resize
window.addEventListener('resize', function () {
	if (heroSection && !heroSection.classList.contains('inner'))
		heroSection.querySelector('.container').style.minHeight =
			window.innerHeight + 'px';
});
});
// #endregion

// #region / What we do
//  __          ___           _
//  \ \        / / |         | |
//   \ \  /\  / /| |__   __ _| |_
//    \ \/  \/ / | '_ \ / _` | __|
//     \  /\  /  | | | | (_| | |_
//      \/  \/   |_| |_|\__,_|\__|
//                     | |
//  __      _____    __| | ___
//  \ \ /\ / / _ \  / _` |/ _ \
//   \ V  V /  __/ | (_| | (_) |
//    \_/\_/ \___|  \__,_|\___/
//
//
document.addEventListener('DOMContentLoaded', () => {
let el = document.querySelector('section.hero .floating-arrow > .content'),
	targetEl = document.querySelector('#next');
if (el) {
	el.addEventListener('click', () => {
		targetEl.scrollIntoView({ behavior: 'smooth', block: 'end' });
	});
}
});
// #endregion

// #region / CTA Button
//    _____ _______         ____        _   _
//   / ____|__   __|/\     |  _ \      | | | |
//  | |       | |  /  \    | |_) |_   _| |_| |_ ___  _ __
//  | |       | | / /\ \   |  _ <| | | | __| __/ _ \| '_ \
//  | |____   | |/ ____ \  | |_) | |_| | |_| || (_) | | | |
//   \_____|  |_/_/    \_\ |____/ \__,_|\__|\__\___/|_| |_|
//
//
document.addEventListener('DOMContentLoaded', () => {
const $ = (s, o = document) => o.querySelector(s);
const $$ = (s, o = document) => o.querySelectorAll(s);

$$('.CTA').forEach((el) =>
	el.addEventListener('mousemove', function (e) {
		const pos = this.getBoundingClientRect();
		const mx = e.clientX - pos.left - pos.width / 2;
		const my = e.clientY - pos.top - pos.height / 2;

		this.style.transform =
			'translate(' + mx * 0.15 + 'px, ' + my * 0.3 + 'px)';
		this.style.transform +=
			'rotate3d(' + mx * -0.1 + ', ' + my * -0.3 + ', 0, 12deg)';
		this.children[0].style.transform =
			'translate(' + mx * 0.025 + 'px, ' + my * 0.075 + 'px)';
	})
);

$$('.CTA').forEach((el) =>
	el.addEventListener('mouseleave', function () {
		this.style.transform = 'translate3d(0px, 0px, 0px)';
		this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
		this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
	})
);
});
// #endregion

// #region / Counter
//    _____                  _
//   / ____|                | |
//  | |     ___  _   _ _ __ | |_ ___ _ __
//  | |    / _ \| | | | '_ \| __/ _ \ '__|
//  | |___| (_) | |_| | | | | ||  __/ |
//   \_____\___/ \__,_|_| |_|\__\___|_|
//
//
document.addEventListener('DOMContentLoaded', () => {
function counter(id, duration) {
	let obj = document.getElementById(id),
		start = parseInt(obj.getAttribute('data-start')),
		end = parseInt(obj.getAttribute('data-end')),
		current = start,
		range = end - start,
		increment = end > start ? 1 : -1,
		prefix = '';

	if (end >= 1000 && end < 1000000) {
		end = end / 1000;
		range = end - start;
		prefix = 'K';
	} else if (end >= 1000000) {
		end = end / 1000000;
		range = end - start;
		prefix = 'M';
	}

	let step = Math.abs(Math.floor(duration / range));

	let timer = setInterval(() => {
		current += increment;
		obj.textContent = current + prefix;
		if (current == end) {
			clearInterval(timer);
		}
	}, step);
}

var doneCounter = false;

window.addEventListener('scroll', function () {
	var elementTarget = document.querySelector('section.statics');

	if (elementTarget)
		if (partOfElementInViewport(elementTarget)) {
			if (!doneCounter) {
				counter('count1', 2000);
				counter('count2', 2000);
				counter('count3', 2000);
				counter('count4', 2000);
				doneCounter = true;
			}
		}
});
});
// #endregion

// #region / Typing Effect
//   _______          _               ______  __  __          _
//  |__   __|        (_)             |  ____|/ _|/ _|        | |
//     | |_   _ _ __  _ _ __   __ _  | |__  | |_| |_ ___  ___| |_
//     | | | | | '_ \| | '_ \ / _` | |  __| |  _|  _/ _ \/ __| __|
//     | | |_| | |_) | | | | | (_| | | |____| | | ||  __/ (__| |_
//     |_|\__, | .__/|_|_| |_|\__, | |______|_| |_| \___|\___|\__|
//         __/ | |             __/ |
//        |___/|_|            |___/
//
var TxtRotate = function (el, toRotate, period) {
this.toRotate = toRotate;
this.el = el;
this.loopNum = 0;
this.period = parseInt(period, 10) || 2000;
this.txt = '';
this.tick();
this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
var i = this.loopNum % this.toRotate.length;
var fullTxt = this.toRotate[i];

if (this.isDeleting) {
	this.txt = fullTxt.substring(0, this.txt.length - 1);
} else {
	this.txt = fullTxt.substring(0, this.txt.length + 1);
}

this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

var that = this;
var delta = 300 - Math.random() * 100;

if (this.isDeleting) {
	delta /= 2;
}

if (!this.isDeleting && this.txt === fullTxt) {
	delta = this.period;
	this.isDeleting = true;
} else if (this.isDeleting && this.txt === '') {
	this.isDeleting = false;
	this.loopNum++;
	delta = 500;
}

setTimeout(function () {
	that.tick();
}, delta);
};

window.addEventListener('load', function () {
var elements = document.getElementsByClassName('txt-rotate');
for (var i = 0; i < elements.length; i++) {
	var toRotate = elements[i].getAttribute('data-rotate');
	var period = elements[i].getAttribute('data-period');
	if (toRotate) {
		new TxtRotate(elements[i], JSON.parse(toRotate), period);
	}
}
// INJECT CSS
var css = document.createElement('style');
css.type = 'text/css';
css.innerHTML =
	'.txt-rotate > .wrap { border-right: 0.08em solid var(--Color--Shark--200); padding-right: .625rem }';
document.body.appendChild(css);
});
// #endregion

// #region / Tick Slider
//   _______ _      _       _____ _ _     _
//  |__   __(_)    | |     / ____| (_)   | |
//     | |   _  ___| | __ | (___ | |_  __| | ___ _ __
//     | |  | |/ __| |/ /  \___ \| | |/ _` |/ _ \ '__|
//     | |  | | (__|   <   ____) | | | (_| |  __/ |
//     |_|  |_|\___|_|\_\ |_____/|_|_|\__,_|\___|_|
//
//
function init() {
const sliders = document.getElementsByClassName('tick-slider-input');

for (let slider of sliders) {
	slider.oninput = onSliderInput;

	var el = document.querySelector('[data-rangeID="' + slider.id + '"]');

	updateValue(slider, el);
	updateValuePosition(slider);
	updateProgress(slider);

	setTicks(slider);
}

// Scrolled check animation
var doneTheStuff;
const sliderX = document.getElementById('packageMaster');
if (sliderX) {
	const sliderXM = document.getElementById('packageMasterModal'),
		elX = document.querySelector('[data-rangeID="' + sliderX.id + '"]'),
		elXM = document.querySelector('[data-rangeID="' + sliderXM.id + '"]');

	window.addEventListener('scroll', function () {
		var elementTarget = document.getElementById('pricing');
		if (window.scrollY > elementTarget.offsetTop - 250) {
			// Scrolled check
			if (!doneTheStuff) {
				// Scrolled check True
				doneTheStuff = true;

				for (let i = 0; i <= 2000; i += 10) {
					setTimeout(function () {
						// update home page pricing slider
						sliderX.value = i;

						updateValue(sliderX, elX);
						updateValuePosition(sliderX);
						updateProgress(sliderX);

						setTicks(sliderX);

						// update pricing modal pricing slider
						sliderXM.value = i;

						updateValue(sliderXM, elXM);
						updateValuePosition(sliderXM);
						updateProgress(sliderXM);

						setTicks(sliderXM);
					}, 0.00001);
				}
			}
		}
	});
}
}

function onSliderInput(event) {
var el = document.querySelector('[data-rangeID="' + event.target.id + '"]');

updateValue(event.target, el);
updateValuePosition(event.target);
updateProgress(event.target);
}
function updateValue(slider, el) {
	let value = document.getElementById(slider.dataset.valueId),
		valuePrefix = slider.dataset.studentLang

	if (slider.value > 1) {
		valuePrefix = slider.dataset.studentsLang
	}

	value.innerHTML =
		'<div>' +
		slider.value +
		'</div> <div class="text">' +
		valuePrefix +
		'</div>';

	let cost = document.getElementById(slider.dataset.costId),
		costPerStudent = slider.dataset.costStudent,
		costPrefix = slider.dataset.currency;

	if (cost)
		cost.innerHTML =
			'<div class="cost">'+ slider.dataset.costLang +'</div><div>' +
			parseInt(slider.value) * parseInt(costPerStudent) +
			costPrefix;
			localStorage.setItem('students', parseInt(slider.value));
			localStorage.setItem('package', parseInt(slider.value) * parseInt(costPerStudent));
	('</div>');

	if (el) {
		let title = el.querySelector('.header .title'),
			subtitle = el.querySelector('.header .subtitle'),
			price = el.querySelector('.header .price .value'),
			pricePrefix = el.querySelector('.header .price .prefix');

		// Data
		let data = JSON.parse(slider.getAttribute('data-packges'));

		// Loop data packages
		for (let pricePackage in data) {
			if (slider.value <= data[pricePackage].numperOfStudents) {
				title.innerHTML = pricePackage;
				subtitle.innerHTML =
					'Up to ' + data[pricePackage].numperOfStudents + ' ' + slider.dataset.studentsLang;

				if (slider.getAttribute('data-price-type') == 'monthly') {
					price.innerHTML = data[pricePackage].price.monthly;
					pricePrefix.innerHTML = '/Monthly';
				} else {
					price.innerHTML = data[pricePackage].price.annualy;
					pricePrefix.innerHTML = '/Annualy';
				}

				value.style.backgroundColor = data[pricePackage].color;
			}
		}
	}
}

function updateValuePosition(slider) {
let value = document.getElementById(slider.dataset.valueId);

const percent = getSliderPercent(slider);

const sliderWidth = slider.getBoundingClientRect().width;
const valueWidth = value.getBoundingClientRect().width;
const handleSize = slider.dataset.handleSize;

let left =
	percent * (sliderWidth - handleSize) + handleSize / 2 - valueWidth / 2;

left = Math.min(left, sliderWidth - valueWidth);
left = slider.value === slider.min ? 0 : left;
left = left <= 0 ? (left = 0) : left;

document.querySelector('html').getAttribute('dir') === 'rtl'
	? (value.style.right = left + 'px')
	: (value.style.left = left + 'px');
}

function updateProgress(slider) {
let progress = document.getElementById(slider.dataset.progressId);
const percent = getSliderPercent(slider);

progress.style.width = percent * 100 + '%';
}

function getSliderPercent(slider) {
const range = slider.max - slider.min;
const absValue = slider.value - slider.min;

return absValue / range;
}

function setTicks(slider) {
let container = document.getElementById(slider.dataset.tickId);
const spacing = parseFloat(slider.dataset.tickStep);
const sliderRange = slider.max - slider.min;
const tickCount = sliderRange / spacing + 1; // +1 to account for 0

for (let ii = 0; ii < tickCount; ii++) {
	let tick = document.createElement('span');

	tick.className = 'tick-slider-tick';

	container.appendChild(tick);
}
}

function onResize() {
const sliders = document.getElementsByClassName('tick-slider-input');

for (let slider of sliders) {
	updateValuePosition(slider);
}
}

window.addEventListener('load', init);
window.addEventListener('resize', onResize);
// #endregion

// #region / Bootstrap Cookie Alert
//   ____              _       _                      _____            _    _                 _           _
//  |  _ \            | |     | |                    / ____|          | |  (_)          /\   | |         | |
//  | |_) | ___   ___ | |_ ___| |_ _ __ __ _ _ __   | |     ___   ___ | | ___  ___     /  \  | | ___ _ __| |_
//  |  _ < / _ \ / _ \| __/ __| __| '__/ _` | '_ \  | |    / _ \ / _ \| |/ / |/ _ \   / /\ \ | |/ _ \ '__| __|
//  | |_) | (_) | (_) | |_\__ \ |_| | | (_| | |_) | | |___| (_) | (_) |   <| |  __/  / ____ \| |  __/ |  | |_
//  |____/ \___/ \___/ \__|___/\__|_|  \__,_| .__/   \_____\___/ \___/|_|\_\_|\___| /_/    \_\_|\___|_|   \__|
//                                          | |
//                                          |_|
//
(function () {
'use strict';

var cookieAlert = document.querySelector('.cookiealert');
var acceptCookies = document.querySelector('.acceptcookies');

if (!cookieAlert) {
	return;
}

cookieAlert.offsetHeight; // Force browser to trigger reflow (https://stackoverflow.com/a/39451131)

// Show the alert if we cant find the "acceptCookies" cookie
if (!getCookie('acceptCookies')) {
	cookieAlert.classList.add('show');
}

// When clicking on the agree button, create a 1 year
// cookie to remember user's choice and close the banner
acceptCookies.addEventListener('click', function () {
	setCookie('acceptCookies', true, 365);
	cookieAlert.classList.remove('show');

	// dispatch the accept event
	window.dispatchEvent(new Event('cookieAlertAccept'));
});

// Cookie functions from w3schools
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	var expires = 'expires=' + d.toUTCString();
	document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname) {
	var name = cname + '=';
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) === ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return '';
}
})();
// #endregion

// #region / Video Modal
//  __      ___     _              __  __           _       _
//  \ \    / (_)   | |            |  \/  |         | |     | |
//   \ \  / / _  __| | ___  ___   | \  / | ___   __| | __ _| |
//    \ \/ / | |/ _` |/ _ \/ _ \  | |\/| |/ _ \ / _` |/ _` | |
//     \  /  | | (_| |  __/ (_) | | |  | | (_) | (_| | (_| | |
//      \/   |_|\__,_|\___|\___/  |_|  |_|\___/ \__,_|\__,_|_|
//
//
document.addEventListener('DOMContentLoaded', () => {
var videoModals = document.querySelectorAll('.modal.video[data-videoURL]');

if (videoModals) {
	for (let videoModal of videoModals) {
		var videSRC = videoModal.getAttribute('data-videoURL'),
			videType = videoModal.getAttribute('data-videoType'),
			container = videoModal.querySelector('[container]');

		// when the modal is opened autoplay it
		videoModal.addEventListener('shown.bs.modal', function (e) {
			if (videType == 'local') {
				// Local Video
				const videoMaster = document.createElement('video'),
					videoSource = document.createElement('source');

				videoMaster.setAttribute('controls', '');
				videoSource.setAttribute('src', videSRC);
				videoSource.setAttribute('type', 'video/mp4');

				videoMaster.append(videoSource);
				videoMaster.append('Your browser does not support HTML video.');

				// Add video to player
				container.append(videoMaster);
				// Play video
				videoMaster.play();
			} else if (videType == 'youtube') {
				// Youtube
				const videoMaster = document.createElement('iframe');

				videoMaster.setAttribute('class', 'embed-responsive-item');
				videoMaster.setAttribute('allowscriptaccess', 'always');
				videoMaster.setAttribute('allow', 'autoplay');
				videoMaster.setAttribute(
					'src',
					videSRC + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0'
				);

				// Add video to player
				container.append(videoMaster);
			} else if (videType == 'vimeo') {
				// Vimeo
				const videoMaster = document.createElement('iframe');

				videoMaster.setAttribute('src', videSRC + '?autoplay=1');

				// Add video to player
				container.append(videoMaster);
			}
		});

		// stop playing the video when I close the modal
		videoModal.addEventListener('hide.bs.modal', function (e) {
			container.innerHTML = '';
		});
	}
}
});
// #endregion

// #region / Pricing Switcher
//   _____      _      _                _____         _ _       _
//  |  __ \    (_)    (_)              / ____|       (_) |     | |
//  | |__) | __ _  ___ _ _ __   __ _  | (_____      ___| |_ ___| |__   ___ _ __
//  |  ___/ '__| |/ __| | '_ \ / _` |  \___ \ \ /\ / / | __/ __| '_ \ / _ \ '__|
//  | |   | |  | | (__| | | | | (_| |  ____) \ V  V /| | || (__| | | |  __/ |
//  |_|   |_|  |_|\___|_|_| |_|\__, | |_____/ \_/\_/ |_|\__\___|_| |_|\___|_|
//                              __/ |
//                             |___/
//
document.addEventListener('DOMContentLoaded', () => {
// Get pricing switchers
var pricingSwitcher = document.querySelectorAll('[data-pricingSwitcher]');

// Loop switchers
for (let switcher of pricingSwitcher) {
	switcher.querySelector('[data-indicator]').addEventListener('click', () => {
		let indicator = switcher.querySelector('[data-indicator]'),
			dataSwitchs = switcher.querySelectorAll('[data-switch]');

		// Change switcher BTN from Monthly to Annualy
		if (indicator.classList.contains('right')) {
			indicator.classList.remove('right');
		} else {
			indicator.classList.add('right');
		}

		// Update pricing
		let dataTicker = switcher.getAttribute('data-ticker');
		if (indicator.classList.contains('Monthly')) {
			document
				.getElementById(dataTicker)
				.setAttribute('data-price-type', 'annualy');

			var slider = document.querySelector(
					'.tick-slider-input[id="' +
						switcher.getAttribute('data-ticker') +
						'"]'
				),
				el = document.querySelector('[data-rangeID="' + slider.id + '"]');

			updateValue(slider, el);
		} else {
			document
				.getElementById(dataTicker)
				.setAttribute('data-price-type', 'monthly');

			var slider = document.querySelector(
					'.tick-slider-input[id="' +
						switcher.getAttribute('data-ticker') +
						'"]'
				),
				el = document.querySelector('[data-rangeID="' + slider.id + '"]');

			updateValue(slider, el);
		}

		for (let dataSwitch of dataSwitchs) {
			if (dataSwitch.classList.contains('active')) {
				dataSwitch.classList.remove('active');
				indicator.classList.remove(dataSwitch.getAttribute('data-switch'));
			} else {
				dataSwitch.classList.add('active');
				indicator.classList.add(dataSwitch.getAttribute('data-switch'));
			}
		}
	});
}
});
// #endregion

// #region / Popup for Support, Price, Why Us?, Company Profile, and Terms and Conditions
//    _____          _                    _____
//   / ____|        | |                  |  __ \
//  | |    _   _ ___| |_ ___  _ __ ___   | |__) |__  _ __  _   _ _ __
//  | |   | | | / __| __/ _ \| '_ ` _ \  |  ___/ _ \| '_ \| | | | '_ \
//  | |___| |_| \__ \ || (_) | | | | | | | |  | (_) | |_) | |_| | |_) |
//   \_____\__,_|___/\__\___/|_| |_| |_| |_|   \___/| .__/ \__,_| .__/
//                                                  | |         | |
//                                                  |_|         |_|
document.addEventListener('DOMContentLoaded', () => {
//#region / Support Modal
var supportModal = document.querySelector('#supportModal');

if (supportModal) {
	let dataDefault = supportModal.querySelector('[data-target="Default"]'),
		dataHeader = dataDefault.querySelector('[data-top]'),
		dataHeaderTitle = dataHeader.querySelector('.title'),
		dataContent = supportModal.querySelector('[data-target="Content"]'),
		dataContentTitle = dataContent.querySelector('.header > .title'),
		dataContentSubtitle = dataContent.querySelector('.header > .subtitle'),
		dataContentSearch = dataContent.querySelector('[data-target="search"]'),
		dataContentFAQ = dataContent.querySelector('[data-target="faq"]'),
		dataContentCommunity = dataContent.querySelector(
			'[data-target="community"]'
		),
		dataContentSupportArticles = dataContent.querySelector(
			'[data-target="supportArticales"]'
		),
		dataContentTutorials = dataContent.querySelector(
			'[data-target="tutorials"]'
		),
		searchBox = dataDefault.querySelector('.searchBox'),
		searchForm = searchBox.querySelector('[data-form]'),
		searchFormInput = searchForm.querySelector('input'),
		searchBTN = searchBox.querySelector('[type="submit"]'),
		actionsList = dataDefault.querySelector('.actions-list'),
		actionsListInner = dataDefault.querySelectorAll('.actions-list > *'),
		actionsListFAQ = actionsList.querySelector('[data-target="FAQ"]'),
		actionsListCommunity = actionsList.querySelector(
			'[data-target="Community"]'
		),
		actionsListSupportArticles = actionsList.querySelector(
			'[data-target="Support Articles"]'
		),
		actionsListTutorials = actionsList.querySelector(
			'[data-target="Tutorials"]'
		);

	function viewDefault() {
		// > Header
		dataDefault.classList.add('col-lg-10');

		dataHeader.classList.add('col-lg-8', 'text-center');
		dataHeaderTitle.classList.remove('small');
		// > Search Form
		searchBox.classList.add('my-auto');
		searchForm.classList.add('col-8');
		// > Actions List
		for (let actionsLiostItem of actionsListInner) {
			actionsLiostItem.classList.add('col-lg-3');
		}

		// Hide unrelative components
		dataContent.classList.add('hide');
		for (let target of actionsList.querySelectorAll('[data-target]')) {
			target.classList.remove('active');
		}
	}

	function hideDefault() {
		// > Header
		dataDefault.classList.remove('col-lg-10');
		dataHeader.classList.remove('col-lg-8', 'text-center');
		dataHeaderTitle.classList.remove('small');
		// > Search Form
		searchBox.classList.remove('my-auto');
		searchForm.classList.remove('col-8');
		// > Actions List
		for (let actionsLiostItem of actionsListInner) {
			actionsLiostItem.classList.remove('col-lg-3');
		}

		// Hide unrelative components
		dataContent.classList.add('hide');
	}

	function viewDefaultSidebar() {
		// > Header
		dataDefault.classList.add('col-lg-3');
		dataHeaderTitle.classList.add('small');
		// > Actions List
		actionsList.classList.add('mb-auto', 'row-cols-1');

		// View Components
		dataContent.classList.remove('hide');
		dataContent.classList.add('col-lg-9');
	}

	function viewSearch() {
		// Set Title & Subtitle
		dataContentTitle.innerHTML = 'Search / ' + searchFormInput.value;
		dataContentSubtitle.innerHTML = 'Search results - 210 record';

		// Hide unrelative fileds
		for (let target of dataContent.querySelectorAll('[data-target]')) {
			target.classList.add('hide');
		}

		// View Search Container
		dataContentSearch.classList.remove('hide');
	}

	function viewFAQ() {
		// Set Title & Subtitle
		dataContentTitle.innerHTML = 'FAQ';
		dataContentSubtitle.innerHTML = 'Lorem ipsum dolor sit amet';

		// Hide unrelative fileds
		for (let target of dataContent.querySelectorAll('[data-target]')) {
			target.classList.add('hide');
		}

		// View Search Container
		dataContentFAQ.classList.remove('hide');
	}

	function viewCommunity() {
		// Set Title & Subtitle
		dataContentTitle.innerHTML = 'Community';
		dataContentSubtitle.innerHTML = 'Lorem ipsum dolor sit amet';

		// Hide unrelative fileds
		for (let target of dataContent.querySelectorAll('[data-target]')) {
			target.classList.add('hide');
		}

		// View Search Container
		dataContentCommunity.classList.remove('hide');
	}

	function viewSupportArticles() {
		// Set Title & Subtitle
		dataContentTitle.innerHTML = 'Support Articles';
		dataContentSubtitle.innerHTML = 'Lorem ipsum dolor sit amet';

		// Hide unrelative fileds
		for (let target of dataContent.querySelectorAll('[data-target]')) {
			target.classList.add('hide');
		}

		// View Search Container
		dataContentSupportArticles.classList.remove('hide');
	}

	function viewTutorials() {
		// Set Title & Subtitle
		dataContentTitle.innerHTML = 'Tutorials';
		dataContentSubtitle.innerHTML = 'Lorem ipsum dolor sit amet';

		// Hide unrelative fileds
		for (let target of dataContent.querySelectorAll('[data-target]')) {
			target.classList.add('hide');
		}

		// View Search Container
		dataContentTutorials.classList.remove('hide');
	}

	// View default
	supportModal.addEventListener('show.bs.modal', function (e) {
		viewDefault();

		if (window.innerWidth <= 991.98) {
			// View FAQ content
			hideDefault();
			viewDefaultSidebar();
			viewFAQ();
			// Active target tab
			actionsListFAQ.classList.add('active');
		}
	});

	// Search Page
	searchForm.querySelector('form').addEventListener('submit', function (e) {
		// Deactivate other tabs
		for (let target of actionsList.querySelectorAll('[data-target]')) {
			target.classList.remove('active');
		}

		hideDefault();
		viewDefaultSidebar();
		viewSearch();
	});
	searchBTN.addEventListener('click', function (e) {
		document.searchForm.submit();
	});

	// FAQ Page
	actionsListFAQ.addEventListener('click', function (e) {
		// Reset search form
		searchFormInput.value = '';

		// Deactivate other tabs
		for (let target of actionsList.querySelectorAll('[data-target]')) {
			target.classList.remove('active');
		}

		// Active target tab
		this.classList.add('active');

		// View FAQ content
		hideDefault();
		viewDefaultSidebar();
		viewFAQ();
	});

	// Community Page
	actionsListCommunity.addEventListener('click', function (e) {
		// Deactivate other tabs
		for (let target of actionsList.querySelectorAll('[data-target]')) {
			target.classList.remove('active');
		}

		// Active target tab
		this.classList.add('active');

		// View FAQ content
		hideDefault();
		viewDefaultSidebar();
		viewCommunity();
	});

	// Support Articles Page
	actionsListSupportArticles.addEventListener('click', function (e) {
		// Deactivate other tabs
		for (let target of actionsList.querySelectorAll('[data-target]')) {
			target.classList.remove('active');
		}

		// Active target tab
		this.classList.add('active');

		// View FAQ content
		hideDefault();
		viewDefaultSidebar();
		viewSupportArticles();
	});

	// Tutorials Page
	actionsListTutorials.addEventListener('click', function (e) {
		// Deactivate other tabs
		for (let target of actionsList.querySelectorAll('[data-target]')) {
			target.classList.remove('active');
		}

		// Active target tab
		this.classList.add('active');

		// View FAQ content
		hideDefault();
		viewDefaultSidebar();
		viewTutorials();
	});
}
//#endregion

//#region / Why us Modal
var whyUsModal = document.querySelector('#whyUsModal');

if (whyUsModal) {
	let dataDefault = whyUsModal.querySelector('[data-target="Default"]'),
		dataHeader = dataDefault.querySelector('[data-top]'),
		dataHeaderTitle = dataHeader.querySelector('.title'),
		dataContent = whyUsModal.querySelector('[data-target="Content"]'),
		dataContentTitle = dataContent.querySelector('.header > .title'),
		dataContentWhoWeAre = dataContent.querySelector(
			'[data-target="Who we are?"]'
		),
		dataContentOurMission = dataContent.querySelector(
			'[data-target="Our mission"]'
		),
		dataContentMeetTheTeam = dataContent.querySelector(
			'[data-target="Meet the team!"]'
		),
		dataContentMilestones = dataContent.querySelector(
			'[data-target="Milestones"]'
		),
		bio = dataDefault.querySelector('.bio'),
		biocontainer = bio.querySelector('[data-container]'),
		actionsList = dataDefault.querySelector('.actions-list'),
		actionsListInner = dataDefault.querySelectorAll('.actions-list > *'),
		actionsListWhoWeAre = actionsList.querySelector(
			'[data-target="Who we are?"]'
		),
		actionsListOurMission = actionsList.querySelector(
			'[data-target="Our mission"]'
		),
		actionsListMeetTheTeam = actionsList.querySelector(
			'[data-target="Meet the team!"]'
		),
		actionsListMilestones = actionsList.querySelector(
			'[data-target="Milestones"]'
		);

	function viewDefault() {
		// > Header
		dataDefault.classList.add('col-lg-10');
		dataHeader.classList.add('col-lg-8', 'text-center');
		dataHeaderTitle.classList.remove('small');
		// > Bio
		bio.classList.add('my-auto');
		biocontainer.classList.add('col-lg-8');
		biocontainer
			.querySelector('p:not(:first-child)')
			.classList.remove('hide');
		biocontainer.querySelector('p:first-child').classList.remove('fs-6');
		// > Actions List
		for (let actionsLiostItem of actionsListInner) {
			actionsLiostItem.classList.add('col-lg-3');
		}

		// Hide unrelative components
		dataContent.classList.add('hide');
		for (let target of actionsList.querySelectorAll('[data-target]')) {
			target.classList.remove('active');
		}
	}

	function hideDefault() {
		// > Header
		dataDefault.classList.remove('col-lg-10');
		dataHeader.classList.remove('col-lg-8', 'text-center');
		dataHeaderTitle.classList.remove('small');
		// > Bio
		bio.classList.remove('my-auto');
		biocontainer.classList.remove('col-lg-8');
		biocontainer.querySelector('p:not(:first-child)').classList.add('hide');

		biocontainer.querySelector('p:first-child').classList.add('fs-6');
		// > Actions List
		for (let actionsLiostItem of actionsListInner) {
			actionsLiostItem.classList.remove('col-lg-3');
		}

		// Hide unrelative components
		dataContent.classList.add('hide');
	}

	function viewDefaultSidebar() {
		// > Header
		dataDefault.classList.add('col-lg-3');
		dataHeaderTitle.classList.add('small');
		// > Actions List
		actionsList.classList.add('mb-auto', 'row-cols-1');

		// View Components
		dataContent.classList.remove('hide');
		dataContent.classList.add('col-lg-9');
	}

	function viewWhoWeAre() {
		// Set Title & Subtitle
		dataContentTitle.innerHTML = 'Who we are?';

		// Hide unrelative fileds
		for (let target of dataContent.querySelectorAll('[data-target]')) {
			target.classList.add('hide');
		}

		// View FAQ Container
		dataContentWhoWeAre.classList.remove('hide');
	}

	function viewOurMission() {
		// Set Title & Subtitle
		dataContentTitle.innerHTML = 'Our mission';

		// Hide unrelative fileds
		for (let target of dataContent.querySelectorAll('[data-target]')) {
			target.classList.add('hide');
		}

		// View Community Container
		dataContentOurMission.classList.remove('hide');
	}

	function viewMeetTheTeam() {
		// Set Title & Subtitle
		dataContentTitle.innerHTML = 'Meet the team!';

		// Hide unrelative fileds
		for (let target of dataContent.querySelectorAll('[data-target]')) {
			target.classList.add('hide');
		}

		// View Support Articles Container
		dataContentMeetTheTeam.classList.remove('hide');
	}

	function viewMilestones() {
		// Set Title & Subtitle
		dataContentTitle.innerHTML = 'Milestones';

		// Hide unrelative fileds
		for (let target of dataContent.querySelectorAll('[data-target]')) {
			target.classList.add('hide');
		}

		// View Tutorials Container
		dataContentMilestones.classList.remove('hide');
	}

	// View default
	whyUsModal.addEventListener('show.bs.modal', function (e) {
		viewDefault();

		if (window.innerWidth <= 991.98) {
			// View Who We Are content
			hideDefault();
			viewDefaultSidebar();
			viewWhoWeAre();
			// Active target tab
			actionsListWhoWeAre.classList.add('active');
		}
	});

	// Who We Are Page
	actionsListWhoWeAre.addEventListener('click', function (e) {
		// Deactivate other tabs
		for (let target of actionsList.querySelectorAll('[data-target]')) {
			target.classList.remove('active');
		}

		// Active target tab
		this.classList.add('active');

		// View Who We Are content
		hideDefault();
		viewDefaultSidebar();
		viewWhoWeAre();
	});

	// Our Mission Page
	actionsListOurMission.addEventListener('click', function (e) {
		// Deactivate other tabs
		for (let target of actionsList.querySelectorAll('[data-target]')) {
			target.classList.remove('active');
		}

		// Active target tab
		this.classList.add('active');

		// View Our Mission content
		hideDefault();
		viewDefaultSidebar();
		viewOurMission();
	});

	// Meet The Team Page
	actionsListMeetTheTeam.addEventListener('click', function (e) {
		// Deactivate other tabs
		for (let target of actionsList.querySelectorAll('[data-target]')) {
			target.classList.remove('active');
		}

		// Active target tab
		this.classList.add('active');

		// View Meet The Team content
		hideDefault();
		viewDefaultSidebar();
		viewMeetTheTeam();
	});

	// Milestones Page
	actionsListMilestones.addEventListener('click', function (e) {
		// Deactivate other tabs
		for (let target of actionsList.querySelectorAll('[data-target]')) {
			target.classList.remove('active');
		}

		// Active target tab
		this.classList.add('active');

		// View Milestones content
		hideDefault();
		viewDefaultSidebar();
		viewMilestones();
	});
}
//#endregion

//#region / Product Profile Modal
var productProfileModal = document.querySelector('#productProfileModal');

if (productProfileModal) {
	let actions = productProfileModal.querySelectorAll(
			'[data-target="Default"] .actions a[data-target]'
		),
		actionsContent = productProfileModal.querySelector(
			'[data-target="Product Profile Content"]'
		);

	function viewDefault() {
		// Reset
		reset();

		// Set default
		actionsContent
			.querySelector('[data-section]:first-child')
			.classList.remove('hide');
		productProfileModal
			.querySelectorAll('[data-target="Default"] .actions a[data-target]')[0]
			.classList.add('active');
	}

	function reset() {
		for (let action of actions) {
			let dataTarget = action.getAttribute('data-target'),
				content = actionsContent.querySelector(
					'[data-section="' + dataTarget + '"]'
				);

			// Reset
			content.classList.add('hide');
			action.classList.remove('active');
		}
	}

	function init() {
		// Action for buttons
		for (let action of actions) {
			let dataTarget = action.getAttribute('data-target'),
				content = actionsContent.querySelector(
					'[data-section="' + dataTarget + '"]'
				);

			action.addEventListener('click', function (e) {
				// Reset
				reset();

				// Set
				content.classList.remove('hide');
				action.classList.add('active');
			});
		}

		// Action for select input
		let actionsInput = document.querySelector('#data-actions-companyProfile');
		if (actionsInput) {
			actionsInput.addEventListener('change', () => {
				let dataTarget = actionsInput.value,
					content = actionsContent.querySelector(
						'[data-section="' + dataTarget + '"]'
					);

				console.log(dataTarget);

				// Reset
				reset();

				// Set
				content.classList.remove('hide');

				// Scroll to element
				let elementTop = productProfileModal.querySelector(
					'[data-target="Content"]'
				).offsetTop;
				productProfileModal
					.querySelector('.modal-body')
					.scrollTo({ top: elementTop, behavior: 'smooth' });
			});
		}
	}

	// View default
	productProfileModal.addEventListener('show.bs.modal', function (e) {
		viewDefault();
		init();
	});
}
//#endregion

//#region / Pricing Modal
// var pricingModal = document.querySelector('#pricingModal');

// if (pricingModal) {
// 	let dataDefault = pricingModal.querySelector('[data-target="Default"]'),
// 		dataInnerRow = pricingModal.querySelector(
// 			'[data-target="Default"] > div'
// 		),
// 		dataHeader = dataDefault.querySelector('.header'),
// 		dataHeaderInner = dataDefault.querySelector('[data-top]'),
// 		dataHeaderTitle = dataHeaderInner.querySelector('.title'),
// 		dataPricingSlider = dataDefault.querySelector('.pricingSlider'),
// 		dataPricingSwitcher = dataDefault.querySelector('.pricingSwitcher '),
// 		dataContent = pricingModal.querySelector('[data-target="Content"]'),
// 		dataContentTitle = dataContent.querySelector('.header > .title'),
// 		dataContentPerfectPlane = dataContent.querySelector(
// 			'[data-target="Perfect plane for you"]'
// 		),
// 		dataContentPackages = dataContent.querySelector(
// 			'[data-target="Packages"]'
// 		),
// 		actionsList = dataDefault.querySelector('.actions-list'),
// 		actionsListPerfectplane = actionsList.querySelector(
// 			'[data-target="Perfect plane for you"]'
// 		),
// 		actionsListPackages = actionsList.querySelector(
// 			'[data-target="Packages"]'
// 		),
// 		actionsPackageMasterModal = pricingModal.querySelector(
// 			'#packageMasterModal'
// 		),
// 		actionsReadMoreModal = pricingModal.querySelector('.readMore'),
// 		runPricingSliderOnce;

// 	function viewDefault() {
// 		// > Header
// 		dataInnerRow.classList.add('row', 'h-100');
// 		dataInnerRow.classList.remove('d-flex', 'flex-column');
// 		dataDefault.classList.add('col-lg-10');
// 		dataHeader.classList.add('col-6', 'align-self-center');
// 		dataHeaderInner.classList.add('col-lg-10');
// 		dataHeaderTitle.style.fontSize = 'var(--font-size-32)';
// 		dataHeaderTitle.classList.remove('small');
// 		// > Pricing Slider
// 		dataPricingSlider.classList.add('col-6', 'align-self-center');
// 		dataPricingSlider.classList.remove('hide');
// 		actionsReadMoreModal.classList.remove('hide');
// 		runPricingSliderOnce = false;
// 		dataPricingSwitcher.classList.add('hide');
// 		dataPricingSlider.classList.remove('col-12', 'row');
// 		for (let div of dataPricingSlider.querySelectorAll('div')) {
// 			div.classList.remove('col-6');
// 		}
// 		dataInnerRow.append(dataPricingSlider);

// 		// > Actions List
// 		actionsList.classList.add('hide');

// 		// Hide unrelative components
// 		dataContent.classList.add('hide');
// 		for (let target of actionsList.querySelectorAll('[data-target]')) {
// 			target.classList.remove('active');
// 		}
// 	}

// 	function hideDefault() {
// 		// > Header
// 		dataInnerRow.classList.add('d-flex', 'flex-column');
// 		dataInnerRow.classList.remove('row');
// 		dataDefault.classList.remove('col-lg-10');
// 		dataHeader.classList.remove('col-6', 'align-self-center');
// 		dataHeaderInner.classList.remove('col-lg-10');
// 		dataHeaderTitle.classList.remove('small');
// 		// > Pricing Slider
// 		dataPricingSlider.classList.add('hide');
// 		actionsReadMoreModal.classList.add('hide');
// 		dataPricingSwitcher.classList.remove('hide');
// 		dataPricingSwitcher.classList.add('my-4');
// 		// > Actions List
// 		actionsList.classList.remove('hide');

// 		// Hide unrelative components
// 		dataContent.classList.add('hide');
// 	}

// 	function viewDefaultSidebar() {
// 		// > Header
// 		dataDefault.classList.add('col-lg-3');
// 		dataHeaderTitle.classList.add('small');
// 		dataHeaderTitle.style = '';
// 		// > Actions List
// 		actionsList.classList.add('mb-auto', 'row-cols-1');

// 		// View Components
// 		dataContent.classList.remove('hide');
// 		dataContent.classList.add('col-lg-9');
// 	}

// 	function viewPerfectPlane() {
// 		// Set Title & Subtitle
// 		dataContentTitle.innerHTML = 'Perfect plane for you';

// 		// Hide unrelative fileds
// 		for (let target of dataContent.querySelectorAll('[data-target]')) {
// 			target.classList.add('hide');
// 		}

// 		// View Container
// 		dataContentPerfectPlane.classList.remove('hide');

// 		// > Pricing Slider
// 		dataPricingSlider.classList.add('col-12', 'row');
// 		for (let div of dataPricingSlider.querySelectorAll('div')) {
// 			div.classList.add('col-12', 'col-lg-6');
// 		}

// 		dataPricingSlider.classList.remove('hide');
// 		dataContentPerfectPlane.prepend(dataPricingSlider);
// 	}

// 	function viewPackages() {
// 		// Set Title & Subtitle
// 		dataContentTitle.innerHTML = 'Packages';

// 		// Hide unrelative fileds
// 		for (let target of dataContent.querySelectorAll('[data-target]')) {
// 			target.classList.add('hide');
// 		}

// 		// View Container
// 		dataContentPackages.classList.remove('hide');

// 		// Update packages pricing
// 		changeInnerPackagesValues();
// 	}

// 	// View default
// 	pricingModal.addEventListener('show.bs.modal', function (e) {
// 		viewDefault();

// 		if (window.innerWidth <= 991.98) {
// 			// View Perfect Plane content
// 			hideDefault();
// 			viewDefaultSidebar();
// 			viewPerfectPlane();
// 			// Active target tab
// 			actionsListPerfectplane.classList.add('active');
// 		}
// 	});

// 	// Pricing Slider changes
// 	actionsPackageMasterModal.addEventListener('change', function (e) {
// 		if (!runPricingSliderOnce) {
// 			// View Perfect Plane content
// 			actionsListPerfectplane.click();
// 		}

// 		runPricingSliderOnce = true;
// 	});

// 	// Pricing Slider changes
// 	actionsReadMoreModal.addEventListener('click', function (e) {
// 		// View Perfect Plane content
// 		actionsListPerfectplane.click();
// 	});

// 	// Perfect plane Page
// 	actionsListPerfectplane.addEventListener('click', function (e) {
// 		// Deactivate other tabs
// 		for (let target of actionsList.querySelectorAll('[data-target]')) {
// 			target.classList.remove('active');
// 		}

// 		// Active target tab
// 		this.classList.add('active');

// 		// View FAQ content
// 		hideDefault();
// 		viewDefaultSidebar();
// 		viewPerfectPlane();
// 	});

// 	// Packages Page
// 	actionsListPackages.addEventListener('click', function (e) {
// 		// Deactivate other tabs
// 		for (let target of actionsList.querySelectorAll('[data-target]')) {
// 			target.classList.remove('active');
// 		}

// 		// Active target tab
// 		this.classList.add('active');

// 		// View FAQ content
// 		hideDefault();
// 		viewDefaultSidebar();
// 		viewPackages();
// 	});

// 	function changeInnerPackagesValues() {
// 		// Update pricing
// 		let dataTicker = dataPricingSwitcher.getAttribute('data-ticker');

// 		// Data
// 		let slider = document.getElementById('packageMasterModal'),
// 			sliderPriceType = slider.getAttribute('data-price-type');
// 		data = JSON.parse(slider.getAttribute('data-packges'));

// 		// Loop data packages
// 		for (let pricePackage in data) {
// 			let packageContainer = document.querySelector(
// 				'.swiper.' +
// 					dataTicker +
// 					' .package.item[data-package="' +
// 					pricePackage +
// 					'"]'
// 			);

// 			let title = packageContainer.querySelector('.header .title'),
// 				subtitle = packageContainer.querySelector('.header .subtitle'),
// 				price = packageContainer.querySelector('.header .price .value'),
// 				pricePrefix = packageContainer.querySelector(
// 					'.header .price .prefix'
// 				);

// 			title.innerHTML = pricePackage;
// 			subtitle.innerHTML =
// 				'Up to ' + data[pricePackage].numperOfStudents + ' Students';

// 			if (sliderPriceType == 'monthly') {
// 				price.innerHTML = data[pricePackage].price.monthly;
// 				pricePrefix.innerHTML = '/Monthly';
// 			} else {
// 				price.innerHTML = data[pricePackage].price.annualy;
// 				pricePrefix.innerHTML = '/Annualy';
// 			}
// 		}
// 	}

// 	// Pricing Switcher
// 	dataPricingSwitcher
// 		.querySelector('[data-indicator]')
// 		.addEventListener('click', function (e) {
// 			changeInnerPackagesValues();
// 		});

// 	// Pricing Packages Slider
// 	const swiper = new Swiper('.swiper', {
// 		// Optional parameters
// 		slidesPerView: 1.2,
// 		spaceBetween: 20,
// 		breakpoints: {
// 			768: {
// 				slidesPerView: 2.5,
// 				spaceBetween: 10,
// 			},
// 		},
// 		loop: false,
// 		grabCursor: true,
// 	});
// }
//#endregion

// Fix Modal close scroll
let allModals = document.querySelectorAll('.modal');

for (let modal of allModals) {
	modal.addEventListener('hidden.bs.modal', function (event) {
		document.body.style.overflow = 'unset';
	});
}
});
// #endregion

// #region / Share BOx
//    _____ _                      ____
//   / ____| |                    |  _ \
//  | (___ | |__   __ _ _ __ ___  | |_) | _____  __
//   \___ \| '_ \ / _` | '__/ _ \ |  _ < / _ \ \/ /
//   ____) | | | | (_| | | |  __/ | |_) | (_) >  <
//  |_____/|_| |_|\__,_|_|  \___| |____/ \___/_/\_\
//
//
document.addEventListener('DOMContentLoaded', () => {
// Get all share links
let shareLinks = document.querySelectorAll(
		'[data-bs-toggle="modal"][data-bs-target="#shareModal"][data-url]'
	),
	shareBox = document.getElementById('shareModal');

// Loop all share links
for (let shareLink of shareLinks) {
	let dataURL = shareLink.getAttribute('data-url');

	// Set URL to share box modal
	shareLink.addEventListener('click', () => {
		shareBox.setAttribute('data-url', dataURL);

		if (shareLink.getAttribute('data-prev-modal')) {
			shareBox.setAttribute(
				'data-prev-modal',
				shareLink.getAttribute('data-prev-modal')
			);
		}

		// Set URL to share links
		let facebookLink = shareBox.querySelector('[data-media="Facebook"]'),
			twitterLink = shareBox.querySelector('[data-media="Twitter"]'),
			linkedinLink = shareBox.querySelector('[data-media="LinkedIn"]'),
			pinterestLink = shareBox.querySelector('[data-media="Pinterest"]'),
			copyLink = shareBox.querySelector('#linkText');
		copyAction = shareBox.querySelector('.linkText .btn');

		// Set Facebok URL
		facebookLink.setAttribute(
			'href',
			'https://www.facebook.com/sharer/sharer.php?u=' + dataURL
		);
		// Set Twitter URL
		twitterLink.setAttribute(
			'href',
			'http://www.twitter.com/share?url=' + dataURL
		);
		// Set LinkedIn URL
		linkedinLink.setAttribute(
			'href',
			'https://www.linkedin.com/sharing/share-offsite/?url=' + dataURL
		);
		// Set Pinterest URL
		pinterestLink.setAttribute(
			'href',
			'http://pinterest.com/pin/create/link/?url=' + dataURL
		);

		// Set Copy URL
		copyLink.value = dataURL;
		copyAction.addEventListener('click', () => {
			// Select the text field
			copyLink.select();
			copyLink.setSelectionRange(0, 99999); // For mobile devices

			// Copy the text inside the text field
			navigator.clipboard.writeText(copyLink.value);
		});
	});
}

// Show prev modal if existed
if (shareBox)
	shareBox.addEventListener('hidden.bs.modal', function (event) {
		let prev = shareBox.getAttribute('data-prev-modal');

		if (prev) {
			let prevModal = document.querySelector(prev),
				modal = bootstrap.Modal.getOrCreateInstance(prevModal);

			modal.show();
		}
	});
});
// #endregion

// #region / Animation On Scroll
//                  _                 _   _                ____           _____                _ _
//      /\         (_)               | | (_)              / __ \         / ____|              | | |
//     /  \   _ __  _ _ __ ___   __ _| |_ _  ___  _ __   | |  | |_ __   | (___   ___ _ __ ___ | | |
//    / /\ \ | '_ \| | '_ ` _ \ / _` | __| |/ _ \| '_ \  | |  | | '_ \   \___ \ / __| '__/ _ \| | |
//   / ____ \| | | | | | | | | | (_| | |_| | (_) | | | | | |__| | | | |  ____) | (__| | | (_) | | |
//  /_/    \_\_| |_|_|_| |_| |_|\__,_|\__|_|\___/|_| |_|  \____/|_| |_| |_____/ \___|_|  \___/|_|_|
//
//
document.addEventListener('DOMContentLoaded', () => {
// Action on window scroll
window.addEventListener('scroll', function () {
	// Scroll Steper
	var scrollSteper = 50;

	// Hero section
	var heroSection = document.getElementById('hero');
	if (heroSection) {
		if (partOfElementInViewport(heroSection)) {
			if (window.pageYOffset / scrollSteper <= 10) {
				heroSection.style.cssText =
					`
				width: ` +
					(100 - window.pageYOffset / scrollSteper) +
					`%; 
				border-radius: ` +
					(window.pageYOffset / scrollSteper) * 2 +
					`px; 
				overflow: hidden;
				margin: auto;
			`;
			}
		}
	}

	// Animation for All
	const animationElements = document.querySelectorAll('[class*="animate__"]');
	for (let animationElement of animationElements)
		if (animationElement)
			if (elementInViewport(animationElement)) {
				animationElement.classList.add('animate__animated');
			}
});
});

// Animation Helper
const animateCSS = (element, animation, prefix = 'animate__') =>
// We create a Promise and return it
new Promise((resolve, reject) => {
	const animationName = `${prefix}${animation}`;
	var node;

	if (typeof element === 'object' && element !== null) {
		node = element;
	} else if (element !== null) {
		return;
	} else {
		node = document.querySelector(element);
	}

	node.classList.add(`${prefix}animated`, animationName);

	// When the animation ends, we clean the classes and resolve the Promise
	// function handleAnimationEnd(event) {
	// 	event.stopPropagation();
	// 	node.classList.remove(`${prefix}animated`, animationName);
	// 	resolve('Animation ended');
	// }

	// node.addEventListener('animationend', handleAnimationEnd, { once: true });
});
// #endregion

// Entire element in the viewport
function elementInViewport(el) {
var bounding = el.getBoundingClientRect();

if (
	bounding.top >= 0 &&
	bounding.left >= 0 &&
	bounding.right <=
		(window.innerWidth || document.documentElement.clientWidth) &&
	bounding.bottom <=
		(window.innerHeight || document.documentElement.clientHeight)
) {
	return true;
} else {
	return false;
}
}

// Part of element is in the viewport
function partOfElementInViewport(el) {
var bounding = el.getBoundingClientRect(),
	elHeight = el.offsetHeight,
	elWidth = el.offsetWidth;

if (
	bounding.top >= -elHeight &&
	bounding.left >= -elWidth &&
	bounding.right <=
		(window.innerWidth || document.documentElement.clientWidth) + elWidth &&
	bounding.bottom <=
		(window.innerHeight || document.documentElement.clientHeight) + elHeight
) {
	return true;
} else {
	return false;
}
}

// Print page
function printCertificate(elem) {
const printContents = document.getElementById(elem).innerHTML;
const originalContents = document.body.innerHTML;
document.body.innerHTML = printContents;
window.print();
location.reload();
}

// Product profile tabs
document.addEventListener('DOMContentLoaded', () => {
const productProfileTabs = document.querySelectorAll(
	'#product-profile nav [data-target]'
);

for (let productProfileTab of productProfileTabs) {
	productProfileTab.addEventListener('click', function () {
		const tab = this.getAttribute('data-target');
		const tabContent = document.querySelector('[data-section="' + tab + '"]');
		const tabContentParent = tabContent.parentElement;
		const tabContentSiblings = tabContentParent.children;
		for (let tabContentSibling of tabContentSiblings) {
			if (!tabContentSibling.classList.contains('hide')) {
				tabContentSibling.classList.add('hide');
			}
		}
		tabContent.classList.remove('hide');
		tabContent.scrollIntoView();
	});
}

// Action for select input
let actionsInput = document.querySelector(
	'#product-profile #data-actions-companyProfile'
);
if (actionsInput) {
	actionsInput.addEventListener('change', () => {
		let dataTarget = actionsInput.value;

		const tabContent = document.querySelector(
			'[data-section="' + dataTarget + '"]'
		);
		const tabContentParent = tabContent.parentElement;
		const tabContentSiblings = tabContentParent.children;
		for (let tabContentSibling of tabContentSiblings) {
			if (!tabContentSibling.classList.contains('hide')) {
				tabContentSibling.classList.add('hide');
			}
		}
		tabContent.classList.remove('hide');
		tabContent.scrollIntoView();
	});
}
});
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
let dr = getUrlVars()['lang'];
let d  = dr == 'ar' ? 'rtl' : 'ltr'; 
$('html').attr('dir', d).attr('lang', dr);

setTimeout(() => {
	$('.select2').attr('style', 'z-index: 999999 !important; width:100% !important;');
}, 4000);

}(jQuery));
