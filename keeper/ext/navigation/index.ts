import { PerfKeeper } from '../../src/keeper/keeper';
import { domReady, createTimingsGroup, performance } from '../utils';

export type NavTimingsOptions = {
};

export const defaultNavTimingsOptions: NavTimingsOptions = {
};

export function navigationTimings(keeper: PerfKeeper, _: NavTimingsOptions = defaultNavTimingsOptions) {
	const [set, send] = createTimingsGroup('pk-nav', keeper, 'ms', false);

	(function net() {
		try {
			const {
				navigationStart,
				redirectStart,
				redirectEnd,
				fetchStart,
				domainLookupStart,
				domainLookupEnd,
				requestStart,
				responseStart,
				responseEnd,
			} = performance.timing;

			if (!responseEnd) {
				// Safari fix
				setTimeout(net, 0);
				return;
			}

			if (redirectStart) {
				set('init', navigationStart, redirectStart);
				set('redirect', redirectStart, redirectEnd);
				set('app-cache', redirectEnd, domainLookupStart);
			} else if (fetchStart) {
				set('init', navigationStart, fetchStart);
				set('app-cache', fetchStart, domainLookupStart);
			} else {
				set('init', navigationStart, domainLookupStart);
			}

			set('dns', domainLookupStart, domainLookupEnd);
			set('tcp', domainLookupEnd, requestStart);
			set('request', requestStart, responseStart);
			set('response', responseStart, responseEnd);
			send('net', navigationStart, responseEnd, true);
		} catch (_) {}
	})();

	domReady(function checkDomComplete() {
		try {
			const {
				responseEnd,
				domInteractive,
				domContentLoadedEventEnd,
				domComplete,
			} = performance.timing;

			if (!domComplete) {
				setTimeout(checkDomComplete, 250);
				return;
			}

			set('interactive', responseEnd, domInteractive);
			set('content-loaded', domInteractive, domContentLoadedEventEnd);
			set('complete', domContentLoadedEventEnd, domComplete)
			send('dom-ready', responseEnd, domComplete, true);
		} catch (_) {}
	});

	domReady(function checkLoadEventEnd() {
		try {
			const {
				responseEnd,
				domComplete,
				loadEventEnd,
			} = performance.timing;

			if (!loadEventEnd) {
				setTimeout(checkLoadEventEnd, 250);
				return;
			}

			set('ready', responseEnd, domComplete)
			set('load', domComplete, loadEventEnd);
			send('dom-load', responseEnd, loadEventEnd, true);
		} catch (_) {}
	});
}