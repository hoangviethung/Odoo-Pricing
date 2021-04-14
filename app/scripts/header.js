const fixedHeaderWhenScroll = () => {
	const header = document.querySelector('header');
	if (window.pageYOffset > header.offsetHeight) {
		header.classList.add('hvh-scrolled');
	} else {
		header.classList.remove('hvh-scrolled');
	}
};

const headerVerify = (isInverted, isLogin) => {
	if (isInverted == 'true') {
		document
			.querySelector('.hvh-main-header')
			.classList.add('hvh-inverted');
	}
	if (isLogin == 'true') {
		document.querySelector('.hvh-main-header').classList.add('logged');
	}
};

const pageVerify = () => {
	const blockData = document.querySelector('#page-verify-template');
	if (blockData) {
		const isInverted = blockData.getAttribute('header-inverted');
		const isLogin = blockData.getAttribute('is-login');
		//ACTION
		headerVerify(isInverted, isLogin);
	}
};

window.addEventListener('load', (e) => {
	pageVerify();
	fixedHeaderWhenScroll();
});

window.addEventListener('scroll', (e) => {
	fixedHeaderWhenScroll();
});
