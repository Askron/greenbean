$(window).on('load', () => {
	let closeMenu = () => {
		let wrap = document.querySelector('.menu-mobile-wrap');
		let menu = wrap.querySelector('.menu-mobile');
		let menuProps = menu.getBoundingClientRect();

		$(menu).animate({
			left: `-${menuProps.width}px`
		}, 100, () => {
			wrap.style.cssText = 'display: none;';
		});
	};

	$.each(document.querySelectorAll('.menu-big-link'), function () {
		if (this.classList.contains('menu-big-link_main')) {return;}
		this.addEventListener('click', (e) => {
			e.preventDefault();
			let btnProps = this.getBoundingClientRect();
			let wrap = document.querySelector('.header__submenu-big-wrap');
			let btnCopy = this.cloneNode(true);
			let menu = document.querySelector('.header__menu-big');
			let menuProps = menu.getBoundingClientRect();
			let subMenu = document.querySelector('.header__submenu-big');

			wrap.style.display = 'block';

			btnCopy.style.cssText = `display: flex; justify-content: center; align-items: center; position: absolute; left: ${btnProps.x}px; top: ${btnProps.y}px; padding: 0px; width: ${btnProps.width}px; height: ${btnProps.height}px;`;
			btnCopy.classList.add('menu-big-link_active');
			wrap.appendChild(btnCopy);

			subMenu.style.cssText = `left: ${menuProps.x}px; top: ${btnProps.y + btnProps.height}px`;
		});
	});

	document.querySelector('.menu-mobile-wrap').addEventListener('click', () => {
		closeMenu();
	});

	document.querySelector('.menu-mobile').addEventListener('click', (e) => {
		e.stopPropagation();
	});

	document.querySelector('.burger-btn').addEventListener('click', () => {
		let wrap = document.querySelector('.menu-mobile-wrap');
		let menu = wrap.querySelector('.menu-mobile');

		wrap.style.cssText = 'display: flex;';
		let menuProps = menu.getBoundingClientRect();
		menu.style.left = `-${menuProps.width}px`;
		$(menu).animate({
			left: '0px'
		}, 100);
	});

	document.querySelector('.menu-mobile__btn-close').addEventListener('click', () => {
		closeMenu();
	});
});