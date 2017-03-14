/**
 * Created by olival on 04.07.16.
 */

import React, { PropTypes, Component } from 'react';
//import GeoObject from './GeoObject';

import R from 'ramda';

class Placemark extends Component {
	componentDidMount = () => {
		const {
			map,
			parent,
			ymaps,

			geometry,

			properties,
				iconContent,
				hintContent,
				balloonContent,
				balloonContentHeader,
				balloonContentBody,
				balloonContentFooter,

			options,
				preset,
				iconColor,
				iconLayout,

				cursor,
				draggable,
				hasBalloon,
				hasHint,
				hideIconOnBalloonOpen,
				iconOffset,
				iconShape,
				interactiveZIndex,
				interactivityModel,
				openBalloonOnClick,
				openEmptyBalloon,
				openEmptyHint,
				openHintOnHover,
				pane,
				pointOverlay,
				syncOverlayInit,
				useMapMarginInDragging,
				visible,
				zIndex,
				zIndexActive,
				zIndexDrag,
				zIndexHover,

			onDragEnd,
			onClick,

			...rest
		} = this.props;

		const mergedProperties = R.pipe(
			R.always({
				iconContent,
				hintContent,
				balloonContent,
				balloonContentHeader,
				balloonContentBody,
				balloonContentFooter
			}),
			R.filter(
				R.pipe(
					R.equals(undefined),
					R.not
				)
			),
			R.merge(properties),
			R.merge(R.__, rest)
		);

		const mergedOptions = R.pipe(
			R.always({
				preset,
				iconColor,
				iconLayout,
				cursor,
				draggable,
				hasBalloon,
				hasHint,
				hideIconOnBalloonOpen,
				iconOffset,
				iconShape,
				interactiveZIndex,
				interactivityModel,
				openBalloonOnClick,
				openEmptyBalloon,
				openEmptyHint,
				openHintOnHover,
				pane,
				pointOverlay,
				syncOverlayInit,
				useMapMarginInDragging,
				visible,
				zIndex,
				zIndexActive,
				zIndexDrag,
				zIndexHover
			}),
			R.filter(
				R.pipe(
					R.equals(undefined),
					R.not
				)
			),
			R.merge(options)
		);

		const placemark = new ymaps.Placemark(
			geometry,
			mergedProperties(),
			mergedOptions()
		);

		if(onClick) {
			placemark.events.add('click', onClick);
		}
		if(onDragEnd) {
			placemark.events.add('dragend', onDragEnd);
		}

		parent.add(placemark);

		this.setState({ placemark });
	};

	componentWillReceiveProps = (nextProps) => {
		const placemark = this.state.placemark;

		if(this.props.geometry.join() !== nextProps.geometry.join()) {
			placemark.geometry.setCoordinates(nextProps.geometry);
		}


		if(JSON.stringify(this.props.properties) !== JSON.stringify(nextProps.properties)) {
			placemark.properties.set(nextProps.properties);
		}

		if(this.props.iconContent !== nextProps.iconContent) {
			placemark.properties.set('iconContent', nextProps.iconContent);
		}

		if(this.props.hintContent !== nextProps.hintContent) {
			placemark.properties.set('hintContent', nextProps.hintContent);
		}

		if(this.props.balloonContent !== nextProps.balloonContent) {
			placemark.properties.set('balloonContent', nextProps.balloonContent);
		}

		if(this.props.balloonContentHeader !== nextProps.balloonContentHeader) {
			placemark.properties.set('balloonContentHeader', nextProps.balloonContentHeader);
		}

		if(this.props.balloonContentBody !== nextProps.balloonContentBody) {
			placemark.properties.set('balloonContentBody', nextProps.balloonContentBody);
		}

		if(this.props.balloonContentFooter !== nextProps.balloonContentFooter) {
			placemark.properties.set('balloonContentFooter', nextProps.balloonContentFooter);
		}


		if(JSON.stringify(this.props.options) !== JSON.stringify(nextProps.options)) {
			placemark.options.set(nextProps.options);
		}

		if(this.props.preset !== nextProps.preset) {
			placemark.options.set('preset', nextProps.preset);
		}

		if(this.props.iconColor !== nextProps.iconColor) {
			placemark.options.set('iconColor', nextProps.iconColor);
		}

		/*if(this.props.iconLayout !== nextProps.iconLayout) {
			placemark.options.set('iconLayout', nextProps.iconLayout);
		}*/

		if(this.props.cursor !== nextProps.cursor) {
			placemark.options.set('cursor', nextProps.cursor);
		}

		if(this.props.draggable !== nextProps.draggable) {
			placemark.options.set('draggable', nextProps.draggable);
		}

		if(this.props.hasBalloon !== nextProps.hasBalloon) {
			placemark.options.set('hasBalloon', nextProps.hasBalloon);
		}

		if(this.props.hasHint !== nextProps.hasHint) {
			placemark.options.set('hasHint', nextProps.hasHint);
		}

		if(this.props.hideIconOnBalloonOpen !== nextProps.hideIconOnBalloonOpen) {
			placemark.options.set('hideIconOnBalloonOpen', nextProps.hideIconOnBalloonOpen);
		}

		/*if(this.props.iconOffset !== nextProps.iconOffset) {
			placemark.options.set('iconOffset', nextProps.iconOffset);
		}*/

		/*if(this.props.iconShape !== nextProps.iconShape) {
			placemark.options.set('iconShape', nextProps.iconShape);
		}*/

		if(this.props.interactiveZIndex !== nextProps.interactiveZIndex) {
			placemark.options.set('interactiveZIndex', nextProps.interactiveZIndex);
		}

		if(this.props.interactivityModel !== nextProps.interactivityModel) {
			placemark.options.set('interactivityModel', nextProps.interactivityModel);
		}

		if(this.props.openBalloonOnClick !== nextProps.openBalloonOnClick) {
			placemark.options.set('openBalloonOnClick', nextProps.openBalloonOnClick);
		}

		if(this.props.openEmptyBalloon !== nextProps.openEmptyBalloon) {
			placemark.options.set('openEmptyBalloon', nextProps.openEmptyBalloon);
		}

		if(this.props.openEmptyHint !== nextProps.openEmptyHint) {
			placemark.options.set('openEmptyHint', nextProps.openEmptyHint);
		}

		if(this.props.openHintOnHover !== nextProps.openHintOnHover) {
			placemark.options.set('openHintOnHover', nextProps.openHintOnHover);
		}

		if(this.props.pane !== nextProps.pane) {
			placemark.options.set('pane', nextPpanerops.pane);
		}

		if(this.props.pointOverlay !== nextProps.pointOverlay) {
			placemark.options.set('pointOverlay', nextProps.pointOverlay);
		}

		if(this.props.syncOverlayInit !== nextProps.syncOverlayInit) {
			placemark.options.set('syncOverlayInit', nextProps.syncOverlayInit);
		}

		if(this.props.useMapMarginInDragging !== nextProps.useMapMarginInDragging) {
			placemark.options.set('useMapMarginInDragging', nextProps.useMapMarginInDragging);
		}

		if(this.props.visible !== nextProps.visible) {
			placemark.options.set('visible', nextProps.visible);
		}

		if(this.props.zIndex !== nextProps.zIndex) {
			placemark.options.set('zIndex', nextPropszIndex.zIndex);
		}

		if(this.props.zIndexActive !== nextProps.zIndexActive) {
			placemark.options.set('zIndexActive', nextProps.zIndexActive);
		}

		if(this.props.zIndexDrag !== nextProps.zIndexDrag) {
			placemark.options.set('zIndexDrag', nextProps.zIndexDrag);
		}

		if(this.props.zIndexHover !== nextProps.zIndexHover) {
			placemark.options.set('zIndexHover', nextProps.zIndexHover);
		}
	};

	componentWillUnmount = () => {
		this.props.parent.remove(this.state.placemark);
		/*this.state.geoObject.getParent()
			.remove(this.state.geoObject);*/
	};

	render() {
		return (
			null
		);
	}
}

Placemark.propTypes = {
	map: PropTypes.object,
	parent: PropTypes.object,
	ymaps: PropTypes.object,

	geometry: PropTypes.arrayOf(
		PropTypes.number
	).isRequired,

	properties: PropTypes.shape({
		iconContent: PropTypes.string,
		hintContent: PropTypes.string,
		balloonContent: PropTypes.string,
		balloonContentHeader: PropTypes.string,
		balloonContentBody: PropTypes.string,
		balloonContentFooter: PropTypes.string
	}),
	iconContent: PropTypes.string,
	hintContent: PropTypes.string,
	balloonContent: PropTypes.string,
	balloonContentHeader: PropTypes.string,
	balloonContentBody: PropTypes.string,
	balloonContentFooter: PropTypes.string,

	options: PropTypes.object,
	preset: PropTypes.string,
	iconColor: PropTypes.string,
	iconLayout: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.string
	]),

	cursor: PropTypes.oneOf([
		'pointer'
	]),
	draggable: PropTypes.bool,
	hasBalloon: PropTypes.bool,
	hasHint: PropTypes.bool,
	hideIconOnBalloonOpen: PropTypes.bool,
	iconOffset: PropTypes.arrayOf(
		PropTypes.number
	),
	iconShape: PropTypes.object,
	interactiveZIndex: PropTypes.bool,
	interactivityModel: PropTypes.string,
	openBalloonOnClick: PropTypes.bool,
	openEmptyBalloon: PropTypes.bool,
	openEmptyHint: PropTypes.bool,
	openHintOnHover: PropTypes.bool,
	pane: PropTypes.oneOf([
		'places'
	]),
	pointOverlay: PropTypes.string,
	syncOverlayInit: PropTypes.bool,
	useMapMarginInDragging: PropTypes.bool,
	visible: PropTypes.bool,
	zIndex: PropTypes.number,
	zIndexActive: PropTypes.number,
	zIndexDrag: PropTypes.number,
	zIndexHover: PropTypes.number,

	onClick: PropTypes.func,
	onDragEnd: PropTypes.func
};
Placemark.defaultProps = {
	geometry: [],

	properties: {},
	options: {},

	/*properties: {
		iconContent: '',
		hintContent: '',
		balloonContent: '',
		balloonContentHeader: '',
		balloonContentBody: '',
		balloonContentFooter: ''
	},
	iconContent: '',
	hintContent: '',
	balloonContent: '',
	balloonContentHeader: '',
	balloonContentBody: '',
	balloonContentFooter: '',

	options: {},

	cursor: 'pointer',
	draggable: false,
	hasBalloon: true,
	hasHint: true,
	hideIconOnBalloonOpen: true,
	interactiveZIndex: true,
	interactivityModel: 'default#geoObject',
	openBalloonOnClick: true,
	openEmptyBalloon: false,
	openEmptyHint: false,
	openHintOnHover: true,
	pane: 'places',
	pointOverlay: 'default#placemark',
	syncOverlayInit: false,
	useMapMarginInDragging: true,
	visible: true*/
};

export default Placemark;
