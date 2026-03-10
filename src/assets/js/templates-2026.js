(() => {
  // 1) Lógica de apertura/cierre del menú lateral (con animación CSS y control de foco para accesibilidad)
	const panel = document.getElementById('hg-menu-panel');
	const backdrop = document.getElementById('hg-menu-backdrop');
	const closeBtn = panel ? panel.querySelector('.hg-menu-panel-action--close') : null;
	if (!panel || !backdrop || !closeBtn) return;

	let lastFocusedTrigger = null;

	function openMenu(trigger) {
		lastFocusedTrigger = trigger || document.activeElement;
		document.body.classList.add('md-main-menu-open');
		panel.removeAttribute('inert');
		panel.classList.add('is-open');
		backdrop.classList.add('is-open');
		panel.setAttribute('aria-hidden', 'false');
		backdrop.setAttribute('aria-hidden', 'false');
		document.querySelectorAll('.js-hg-menu-toggle').forEach(function(el) {
			el.setAttribute('aria-expanded', 'true');
		});
		closeBtn.focus();
		document.addEventListener('keydown', onEscape);
	}

	function closeMenu() {
		document.body.classList.remove('md-main-menu-open');
		panel.setAttribute('inert', '');
		panel.classList.remove('is-open');
		backdrop.classList.remove('is-open');
		panel.setAttribute('aria-hidden', 'true');
		backdrop.setAttribute('aria-hidden', 'true');
		document.querySelectorAll('.js-hg-menu-toggle').forEach(function(el) {
			el.setAttribute('aria-expanded', 'false');
		});
		document.removeEventListener('keydown', onEscape);
		if (lastFocusedTrigger && lastFocusedTrigger.focus) lastFocusedTrigger.focus();
	}

	function onEscape(event) {
		if (event.key === 'Escape' && panel.classList.contains('is-open')) closeMenu();
	}

	document.querySelectorAll('.js-hg-menu-toggle').forEach(function(el) {
		el.setAttribute('aria-controls', 'hg-menu-panel');
		el.setAttribute('aria-expanded', 'false');
		el.setAttribute('aria-haspopup', 'true');
		el.addEventListener('click', function(event) {
			event.preventDefault();
			if (panel.classList.contains('is-open')) closeMenu(); else openMenu(el);
		});
	});
	closeBtn.addEventListener('click', closeMenu);
	backdrop.addEventListener('click', closeMenu);

  // 2) Animación de entrada del logo
  (function() {
		if (typeof gsap === 'undefined') return;
		const maxilogo = document.querySelector('.js-hg-header-maxilogo-icon');
		if (!maxilogo) return;
		const logo     = document.querySelector('.js-hg-header-logo');
		const isMobile = window.innerWidth < 992;

		gsap.set(maxilogo, { padding: 0 });
		maxilogo.style.transition = 'none';

		const naturalRect = maxilogo.getBoundingClientRect();
		const natCX = naturalRect.left + naturalRect.width  / 2;
		const natCY = naturalRect.top  + naturalRect.height / 2;
		const startScale = (window.innerWidth * (isMobile ? 0.7 : 0.62)) / naturalRect.width;

		if (isMobile) {
			gsap.set(maxilogo, {
				position: 'absolute',
				top: '50vh',
				left: '20px',
				right: '20px',
				width: 'auto',
				transform: 'translate(0, -50%)',
				paddingBlockStart: '0',
			});
			maxilogo.offsetHeight;

			const containerRect = maxilogo.parentElement?.getBoundingClientRect() || { top: 0 };
			gsap.to(maxilogo, { 
				top: containerRect.top,
				transform: 'translate(0, 0)', 
				duration: 0.4, 
				ease: 'power1.inOut',
				clearProps: 'position,top,left,transform,right,width,paddingBlockStart'
			});
			return;
		}

		gsap.set(maxilogo, {
			position: 'absolute',
			top: '50vh',
			left: '20px',
			width: '780px',
			transform: 'translate(0, -50%)',
		});
		maxilogo.offsetHeight;

		if (!logo) return;
		logo.style.transition = 'none';

		const logoRect = logo.getBoundingClientRect();
		const maxilogoRect = maxilogo.getBoundingClientRect();

		gsap.set(maxilogo, {
			width: maxilogoRect.width,
			maxWidth: maxilogoRect.width,
		});

		gsap.to(maxilogo, {
			top: logoRect.top,
			left: logoRect.left,
			width: logoRect.width,
			maxWidth: logoRect.width,
			paddingTop: 0,
			transform: 'translate(0, 0)',
			duration: 0.8,
			ease: 'power1.inOut',
			onComplete: function() {
				gsap.set(logo, { opacity: 1, pointerEvents: 'auto' });
				gsap.set(maxilogo, { opacity: 0, pointerEvents: 'none', clearProps: 'width,maxWidth' });
			}
		});
  })();
})();
