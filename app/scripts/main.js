import Tab from './libraries/tabs';

const fixedHeaderWhenScroll = () => {
	const header = document.querySelector('header');
	if (window.pageYOffset > header.offsetHeight) {
		header.classList.add('hvh-scrolled');
	} else {
		header.classList.remove('hvh-scrolled');
	}
};

const headerVerify = (isInverted) => {
	if (isInverted == 'true') {
		document
			.querySelector('.hvh-main-header')
			.classList.add('hvh-inverted');
	}
};

const pageVerify = () => {
	const blockData = document.querySelector('#page-verify-template');
	if (blockData) {
		const isInverted = blockData.getAttribute('header-inverted');
		headerVerify(isInverted);
	}
};

const setValueCustomerSegment = () => {
	const wrapper = document.querySelector('.hvh-form-checkout');
	if (wrapper) {
		const items__tab = wrapper.querySelectorAll('.tab__list .item');
		items__tab.forEach((item) => {
			item.addEventListener('click', (e) => {
				const nameTab = item.getAttribute('toggle-for');
				document.querySelector('#CustomerSegment').value = nameTab;
			});
		});
	} else {
		console.log('404 - #CustomerSegment');
	}
};

const isPhoneValid = (phone) => {
	return /((09|03|07|08|05)+([0-9]{8})\b)/g.test(phone);
};

const isEmailValid = (email) => {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

const validateFormGlobal = (item) => {
	const name = item.getAttribute('name');
	const type = item.getAttribute('type');
	if (type == 'text' || type == 'tel' || type == 'email') {
		item.addEventListener('change', (e) => {
			if (name == 'name') {
				if (item.value.length >= 10) {
					item.setAttribute('valid', true);
				} else {
					item.setAttribute('valid', false);
				}
			}
			if (name == 'phone') {
				if (isPhoneValid(item.value)) {
					item.setAttribute('valid', true);
				} else {
					item.setAttribute('valid', false);
				}
			}
			if (name == 'email') {
				if (isEmailValid(item.value)) {
					item.setAttribute('valid', true);
				} else {
					item.setAttribute('valid', false);
				}
			}
		});
	}
};

const validateFormCheckout = () => {
	const forms = document.querySelectorAll('.hvh-form-checkout .block-form');
	forms.forEach((form) => {
		const CustomerSegment = document.querySelector('#CustomerSegment');
		if (form.getAttribute('tab-id') == CustomerSegment.value) {
			const itemsRequired = form.querySelectorAll('input[required]');
			itemsRequired.forEach((item) => {
				validateFormGlobal(item);
			});
			form.addEventListener('change', (e) => {
				const itemsValid = form.querySelectorAll('input[valid=true]');
				if (itemsValid.length == itemsRequired.length) {
					document
						.querySelector('.hvh-address-management .btn-primary')
						.removeAttribute('disable');
				} else {
					document
						.querySelector('.hvh-address-management .btn-primary')
						.setAttribute('disable', 'disable');
				}
			});
		}
	});
};

window.addEventListener('load', (e) => {
	pageVerify();
	fixedHeaderWhenScroll();
	setValueCustomerSegment();
	let PricingBoard = new Tab('.hvh-pricing-board .tab-container');
	let FormCheckout = new Tab('.hvh-form-checkout .tab-container');
	validateFormCheckout();
});

window.addEventListener('scroll', (e) => {
	fixedHeaderWhenScroll();
});

window.addEventListener('resize', () => {});
