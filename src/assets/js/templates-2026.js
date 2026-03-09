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

		// Posición natural del maxilogo antes de cualquier transform
		const naturalRect = maxilogo.getBoundingClientRect();
		const natCX = naturalRect.left + naturalRect.width  / 2;
		const natCY = naturalRect.top  + naturalRect.height / 2;
		const startScale = (window.innerWidth * (isMobile ? 0.7 : 0.62)) / naturalRect.width;

		// Estado inicial: grande y centrado en el viewport
		gsap.set(maxilogo, {
			scale: startScale,
			x: window.innerWidth  / 2 - natCX,
			y: window.innerHeight / 2 - natCY,
			transformOrigin: 'center center'
		});
		maxilogo.offsetHeight;

		if (isMobile) {
			// Móvil: solo baja hasta su posición natural
			gsap.to(maxilogo, { scale: 1, x: 0, y: 0, duration: 0.8, ease: 'power2.out' });
			return;
		}

		// Desktop: vuela y encoge hasta la posición del logo pequeño
		if (!logo) return;
		logo.style.transition = 'none';
		const logoRect = logo.getBoundingClientRect();
		const logoCX   = logoRect.left + logoRect.width  / 2;
		const logoCY   = logoRect.top  + logoRect.height / 2;
		const endScale = logoRect.width / naturalRect.width;

		gsap.to(maxilogo, {
			scale: endScale,
			x: logoCX - natCX,
			y: logoCY - natCY,
			duration: 0.9,
			ease: 'power3.out',
			onComplete: function() {
				if (logo) gsap.set(logo, { opacity: 1, pointerEvents: 'auto' });
				gsap.set(maxilogo, { clearProps: 'all' });
				gsap.set(maxilogo, { opacity: 0, pointerEvents: 'none' });
			}
		});
  })();
})();
