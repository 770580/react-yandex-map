/**
 * Created by olival on 04.07.16.
 */

import React, { PropTypes, Component } from 'react';
//import GeoObject from './GeoObject';

import R from 'ramda';

class Polygon extends Component {
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
				cursor,
				draggable,
				fill,
				fillColor,
				fillImageHref,
				fillMethod,
				fillOpacity,
				hasBalloon,
				hasHint,
				interactiveZIndex,
				interactivityModel,
				opacity,
				openBalloonOnClick,
				openEmptyBalloon,
				openEmptyHint,
				openHintOnHover,
				outline,
				pane,
				polygonOverlay,
				strokeColor,
				strokeOpacity,
				strokeStyle,
				strokeWidth,
				syncOverlayInit,
				useMapMarginInDragging,
				visible,
				zIndex,
				zIndexActive,
				zIndexDrag,
				zIndexHover,

			draw,
			edit,

			onDragEnd,
			onClick,
			onEditorstatechange,

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
				cursor,
				draggable,
				fill,
				fillColor,
				fillImageHref,
				fillMethod,
				fillOpacity,
				hasBalloon,
				hasHint,
				interactiveZIndex,
				interactivityModel,
				opacity,
				openBalloonOnClick,
				openEmptyBalloon,
				openEmptyHint,
				openHintOnHover,
				outline,
				pane,
				polygonOverlay,
				strokeColor,
				strokeOpacity,
				strokeStyle,
				strokeWidth,
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

		const polygon = new ymaps.Polygon(
			geometry,
			mergedProperties(),
			mergedOptions()
		);

		if(onClick) {
			polygon.events.add('click', onClick);
		}
		if(onDragEnd) {
			polygon.events.add('dragend', onDragEnd);
		}

		if(onEditorstatechange) {
			polygon.events.add('editorstatechange', onEditorstatechange);
		}

		parent.add(polygon);

		if(draw) {
			polygon.editor.startDrawing();
		}
		if(edit) {
			polygon.editor.startEditing();
		}

		this.setState({ polygon });
	};

	componentWillReceiveProps = (nextProps) => {
		const polygon = this.state.polygon;

		if(this.props.geometry.join() !== nextProps.geometry.join()) {
			polygon.geometry.setCoordinates(nextProps.geometry);
		}


		if(JSON.stringify(this.props.properties) !== JSON.stringify(nextProps.properties)) {
			polygon.properties.set(nextProps.properties);
		}

		if(this.props.iconContent !== nextProps.iconContent) {
			polygon.properties.set('iconContent', nextProps.iconContent);
		}

		if(this.props.hintContent !== nextProps.hintContent) {
			polygon.properties.set('hintContent', nextProps.hintContent);
		}

		if(this.props.balloonContent !== nextProps.balloonContent) {
			polygon.properties.set('balloonContent', nextProps.balloonContent);
		}

		if(this.props.balloonContentHeader !== nextProps.balloonContentHeader) {
			polygon.properties.set('balloonContentHeader', nextProps.balloonContentHeader);
		}

		if(this.props.balloonContentBody !== nextProps.balloonContentBody) {
			polygon.properties.set('balloonContentBody', nextProps.balloonContentBody);
		}

		if(this.props.balloonContentFooter !== nextProps.balloonContentFooter) {
			polygon.properties.set('balloonContentFooter', nextProps.balloonContentFooter);
		}


		if(JSON.stringify(this.props.options) !== JSON.stringify(nextProps.options)) {
			polygon.options.set(nextProps.options);
		}

		if(this.props.cursor !== nextProps.cursor) {
			polygon.options.set('cursor', nextProps.cursor);
		}

		if(this.props.draggable !== nextProps.draggable) {
			polygon.options.set('draggable', nextProps.draggable);
		}

		if(this.props.fill !== nextProps.fill) {
			polygon.options.set('fill', nextProps.fill);
		}

		if(this.props.fillColor !== nextProps.fillColor) {
			polygon.options.set('fillColor', nextProps.fillColor);
		}

		if(this.props.fillImageHref !== nextProps.fillImageHref) {
			polygon.options.set('fillImageHref', nextProps.fillImageHref);
		}

		if(this.props.fillMethod !== nextProps.fillMethod) {
			polygon.options.set('fillMethod', nextProps.fillMethod);
		}

		if(this.props.fillOpacity !== nextProps.fillOpacity) {
			polygon.options.set('fillOpacity', nextProps.fillOpacity);
		}

		if(this.props.hasBalloon !== nextProps.hasBalloon) {
			polygon.options.set('hasBalloon', nextProps.hasBalloon);
		}

		if(this.props.hasHint !== nextProps.hasHint) {
			polygon.options.set('hasHint', nextProps.hasHint);
		}

		if(this.props.interactiveZIndex !== nextProps.interactiveZIndex) {
			polygon.options.set('interactiveZIndex', nextProps.interactiveZIndex);
		}

		if(this.props.interactivityModel !== nextProps.interactivityModel) {
			polygon.options.set('interactivityModel', nextProps.interactivityModel);
		}

		if(this.props.opacity !== nextProps.opacity) {
			polygon.options.set('opacity', nextProps.opacity);
		}

		if(this.props.openBalloonOnClick !== nextProps.openBalloonOnClick) {
			polygon.options.set('openBalloonOnClick', nextProps.openBalloonOnClick);
		}

		if(this.props.openEmptyBalloon !== nextProps.openEmptyBalloon) {
			polygon.options.set('openEmptyBalloon', nextProps.openEmptyBalloon);
		}

		if(this.props.openEmptyHint !== nextProps.openEmptyHint) {
			polygon.options.set('openEmptyHint', nextProps.openEmptyHint);
		}

		if(this.props.openHintOnHover !== nextProps.openHintOnHover) {
			polygon.options.set('openHintOnHover', nextProps.openHintOnHover);
		}

		if(this.props.polygonOverlay !== nextProps.polygonOverlay) {
			polygon.options.set('polygonOverlay', nextProps.polygonOverlay);
		}

		if(this.props.pane !== nextProps.pane) {
			polygon.options.set('pane', nextPpanerops.pane);
		}

		if(this.props.strokeColor !== nextProps.strokeColor) {
			polygon.options.set('strokeColor', nextProps.strokeColor);
		}

		if(this.props.strokeOpacity !== nextProps.strokeOpacity) {
			polygon.options.set('strokeOpacity', nextProps.strokeOpacity);
		}

		if(this.props.strokeWidth !== nextProps.strokeWidth) {
			polygon.options.set('strokeWidth', nextProps.strokeWidth);
		}

		if(this.props.syncOverlayInit !== nextProps.syncOverlayInit) {
			polygon.options.set('syncOverlayInit', nextProps.syncOverlayInit);
		}

		if(this.props.useMapMarginInDragging !== nextProps.useMapMarginInDragging) {
			polygon.options.set('useMapMarginInDragging', nextProps.useMapMarginInDragging);
		}

		if(this.props.visible !== nextProps.visible) {
			polygon.options.set('visible', nextProps.visible);
		}

		if(this.props.zIndex !== nextProps.zIndex) {
			polygon.options.set('zIndex', nextPropszIndex.zIndex);
		}

		if(this.props.zIndexActive !== nextProps.zIndexActive) {
			polygon.options.set('zIndexActive', nextProps.zIndexActive);
		}

		if(this.props.zIndexDrag !== nextProps.zIndexDrag) {
			polygon.options.set('zIndexDrag', nextProps.zIndexDrag);
		}

		if(this.props.zIndexHover !== nextProps.zIndexHover) {
			polygon.options.set('zIndexHover', nextProps.zIndexHover);
		}


		if(this.props.draw !== nextProps.draw) {
			nextProps.draw ?
				polygon.editor.startDrawing() :
				polygon.editor.stopDrawing();
		}

		if(this.props.edit !== nextProps.edit) {
			nextProps.draw ?
				polygon.editor.startEditing() :
				polygon.editor.stopEditing();
		}
	};

	componentWillUnmount = () => {
		this.props.parent.remove(this.state.polygon);
	};

	render() {
		return (
			null
		);
	}
}

Polygon.propTypes = {
	map: PropTypes.object,
	parent: PropTypes.object,
	ymaps: PropTypes.object,

	geometry: PropTypes.array,

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

	cursor: PropTypes.oneOf([
		'pointer'
	]),
	draggable: PropTypes.bool,
	fill: PropTypes.bool,
	fillColor: PropTypes.string,
	fillImageHref: PropTypes.string,
	fillMethod: PropTypes.oneOf([
		'stretch',
		'tile'
	]),
	fillOpacity: PropTypes.number,
	hasBalloon: PropTypes.bool,
	hasHint: PropTypes.bool,
	interactiveZIndex: PropTypes.bool,
	interactivityModel: PropTypes.string,
	opacity: PropTypes.number,
	openBalloonOnClick: PropTypes.bool,
	openEmptyBalloon: PropTypes.bool,
	openEmptyHint: PropTypes.bool,
	openHintOnHover: PropTypes.bool,
	outline: PropTypes.bool,
	pane: PropTypes.oneOf([
		'areas'
	]),
	polygonOverlay: PropTypes.string,
	strokeColor: PropTypes.string,
	strokeOpacity: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.arrayOf(
			PropTypes.number
		)
	]),
	strokeStyle: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
		PropTypes.arrayOf(
			PropTypes.string
		),
		PropTypes.arrayOf(
			PropTypes.object
		)
	]),
	strokeWidth: PropTypes.number,
	syncOverlayInit: PropTypes.bool,
	useMapMarginInDragging: PropTypes.bool,
	visible: PropTypes.bool,
	zIndex: PropTypes.number,
	zIndexActive: PropTypes.number,
	zIndexDrag: PropTypes.number,
	zIndexHover: PropTypes.number,

	draw: PropTypes.bool,
	edit: PropTypes.bool,

	onClick: PropTypes.func,
	onDragEnd: PropTypes.func,
	onEditorstatechange: PropTypes.func
};
Polygon.defaultProps = {
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

	cursor: 'pointer',
	draggable: false,
	fill: true,
	fillColor: '0066ff99',
	fillImageHref: '',
	fillMethod: 'stretch',
	fillOpacity: 1,
	hasBalloon: true,
	hasHint: true,
	hideIconOnBalloonOpen: true,
	interactiveZIndex: true,
	interactivityModel: 'default#geoObject',
	opacity: 1,
	openBalloonOnClick: true,
	openEmptyBalloon: false,
	openEmptyHint: false,
	openHintOnHover: true,
	outline: true,
	pane: 'areas',
	polygonOverlay: 'default#polygon',
	strokeColor: '0066ffff',
	strokeOpacity: 1,
	strokeWidth: 1,
	syncOverlayInit: false,
	useMapMarginInDragging: true,
	visible: true,*/

	draw: false,
	edit: false,
};

export default Polygon;
