let instance;

class YandexMapInit {
	constructor() {
		if(!instance) {
			  instance = this;
		}

		this.init = new Promise((resolve, reject) => {
			const scriptTag = document.createElement('script');

			scriptTag.onload = () => {
				window.ymaps.ready(() => {
					return resolve(window.ymaps);
				});
			};
			scriptTag.onerror = (err) => {
				return reject(err);
			};

			scriptTag.src = 'https://api-maps.yandex.ru/2.1.31/?load=Map,GeoObject,geocode,package.full&lang=ru_RU&mode=debug&coordorder=longlat';

			document.head.appendChild(scriptTag);
		});

		return instance;
	}
}

const YandexMapAPI = new YandexMapInit();

export default YandexMapAPI;
