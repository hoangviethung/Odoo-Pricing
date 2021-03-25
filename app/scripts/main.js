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

window.addEventListener('load', (e) => {
	pageVerify();
	fixedHeaderWhenScroll();
	let PricingBoard = new Tab('.hvh-pricing-board .tab-container');
});

window.addEventListener('scroll', (e) => {
	fixedHeaderWhenScroll();
});

window.addEventListener('resize', () => {});
