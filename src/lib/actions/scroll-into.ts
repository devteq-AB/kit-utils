export function scrollInto(element: Element) {
	interface CSSVars {
		'--top': string;
		'--opacity': string;
		top: string;
		opacity: string;
	}

	let cssVars: CSSVars = {
		'--top': '100px',
		'--opacity': '0',
		top: 'var(--top)',
		opacity: 'var(--opacity)'
	};

	function setCssVars(top: number, opacity: string | number) {
		cssVars = {
			...cssVars,
			'--top': `${top}px`,
			'--opacity': typeof opacity === 'number' ? opacity.toString() : opacity
		};
	}

	function handler() {
		const windowHeight = window.innerHeight;
		const elementTop = element.getBoundingClientRect().top;
		const difference = Math.floor(windowHeight - elementTop);
		const top = 100 - Math.floor(difference / 3);

		if (elementTop < windowHeight) {
			if (difference < 300) {
				const opacity = `0.${Math.floor(difference / 3)}`;
				setCssVars(top, opacity);
			} else if (top > 0) {
				setCssVars(top, 1);
			} else {
				setCssVars(0, 1);
			}
		}

		element.setAttribute(
			'style',
			Object.entries(cssVars)
				.map((cssVar) => cssVar.join(':'))
				.join(';')
		);
	}

	window.addEventListener('scroll', handler, true);

	element.setAttribute(
		'style',
		Object.entries(cssVars)
			.map((cssVar) => cssVar.join(':'))
			.join(';')
	);

	return {
		destroy() {
			window.removeEventListener('scroll', handler, true);
		}
	};
}
