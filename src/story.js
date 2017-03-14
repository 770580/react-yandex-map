/**
 * Created by o.ivanov on 11.03.17.
 */

import React from 'react';
import { storiesOf } from '@kadira/storybook';

import {
	YandexMapLoader,
	YandexMap,
	Placemark,
	Button,
	GeoObjectCollection
} from './index';

import 'normalize.css';
import 'Layout/styles.css';

storiesOf('YandexMap', module)
	.add('default', () => (
		<YandexMapLoader
			containerElement={<div
				style={{
					width: '500px',
					height: '500px'
				}} />}>
			<YandexMap
				zoom={16}>
				<Button
					layout={'<button class=\'yaMapBtn {% if !state.selected %}yaMapBtnGreen{% endif %} {% if state.selected %}yaMapBtnRed{% endif %}\'>' +
						'{% if state.selected %} Завершить {% endif %}' +
						'{% if !state.selected %} Обвести {% endif %}' +
						'</button>'}
					float='none'
					position={{
						top: 20,
						left: 15
					}}>
				</Button>
				<GeoObjectCollection>
					<Placemark
						geometry={[
							37.6173,
							55.755826
						]} />
					<Placemark
						geometry={[
							38.6173,
							56.755826
						]} />
				</GeoObjectCollection>
			</YandexMap>
		</YandexMapLoader>
	));
