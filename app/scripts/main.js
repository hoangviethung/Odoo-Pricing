import Tab from './libraries/tabs';

const fixedHeaderWhenScroll = () => {
	const header = document.querySelector('header');
	if (window.pageYOffset > header.offsetHeight) {
		header.classList.add('hvh-scrolled');
	} else {
		header.classList.remove('hvh-scrolled');
	}
};

window.addEventListener('load', (e) => {
	fixedHeaderWhenScroll();
	let PricingBoard = new Tab('.hvh-pricing-board .tab-container');
});

window.addEventListener('scroll', (e) => {
	fixedHeaderWhenScroll();
});

window.addEventListener('resize', () => {});
