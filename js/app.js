//======= FullPageJS=============

new fullpage('#fullpage', {
	autoScrolling: false,
	fitToSection: true,
	scrollHorizontally: true,

	navigation: true,
	navigationPosition: 'right',

	fitToSectionDelay: 200,
	easing: 'easeInOutCubic',
	scrollingSpeed: 700,
	easingcss3: 'ease-out',
	css3: true,
	verticalCentered: false,
	
	// fixedElements: '#nav',

	anchors: ['inicio', 'blog', 'contacto'],
	credits: { enabled: false, label: 'Made with Love for Em40a', position: 'right'},
});

