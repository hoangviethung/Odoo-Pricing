import { clearConfigCache } from 'prettier';
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
				const value = item.getAttribute('toggle-for');
				document
					.querySelector('#form_checkout_hidden')
					.setAttribute('data-customer-segment', value);
			});
		});
	} else {
		console.log('404');
	}
};

const validateFormCheckout = () => {
	const forms = document.querySelectorAll('.hvh-form-checkout .block-form');
	const CustomerSegment = document.querySelector('#form_checkout_hidden');
	if (CustomerSegment) {
		const value = CustomerSegment.getAttribute('data-customer-segment');
		console.log(forms);
	} else {
		console.log('404');
	}
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
