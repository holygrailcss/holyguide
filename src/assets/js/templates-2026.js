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

  // 2) Animación de entrada del logo (estado inicial en CSS para evitar salto; GSAP anima al destino)
  (function() {
		if (typeof gsap === 'undefined') return;
		const maxilogo = document.querySelector('.js-hg-header-maxilogo-icon');
		if (!maxilogo) return;
		const logo = document.querySelector('.js-hg-header-logo');
		const isMobile = window.innerWidth < 992;

		if (isMobile) {
			const rect = maxilogo.getBoundingClientRect();
			const deltaY = (window.innerHeight / 2) - (rect.top + (rect.height / 2));
			const originalTransition = maxilogo.style.transition;
			maxilogo.style.transition = 'none';
			gsap.set(maxilogo, { y: deltaY });
			maxilogo.offsetHeight;
			maxilogo.style.transition = originalTransition;
			gsap.to(maxilogo, { y: 0, duration: 0.8, ease: 'power2.inOut' });
			return;
		}

		if (!logo) return;
		gsap.set(maxilogo, { padding: 0 });
		const startWidth = window.innerWidth * 0.62;
		maxilogo.style.transition = 'none';
		logo.style.transition = 'none';
		gsap.set(maxilogo, { width: startWidth });
		const startRect = maxilogo.getBoundingClientRect();
		const startDeltaY = (window.innerHeight / 2) - (startRect.top + (startRect.height / 2));
		gsap.set(maxilogo, { y: startDeltaY });
		maxilogo.offsetHeight;

		const logoRect = logo.getBoundingClientRect();
		const deltaX = logoRect.left - startRect.left;
		const deltaY = logoRect.top - startRect.top;
		gsap.to(maxilogo, {
			x: deltaX,
			y: deltaY,
			width: logoRect.width,
			duration: 0.9,
			ease: 'power3.out',
			onComplete: function() {
				if (logo) {
					gsap.set(logo, { opacity: 1, pointerEvents: 'auto' });
				}
				gsap.set(maxilogo, { opacity: 0, pointerEvents: 'none', maxHeight: 0 });
			}
		});
		return;
  })();
})();
