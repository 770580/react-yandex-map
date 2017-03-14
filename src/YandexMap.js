/**
 * Created by olival on 01.07.16.
 */

import React, {
	PropTypes,
	Component
} from 'react';

import R from 'ramda';

export default
class YandexMap extends Component {
	state = {
		map: null
	};

	componentDidMount = () => {
		const {
			ymaps,
			parentElement,

			state,
				behaviors,
				bounds,
				center,
				controls,
				margin,
				type,
				zoom,

			options,
				autoFitToViewport,
				avoidFractionalZoom,
				exitFullscreenByEsc,
				fullscreenZIndex,
				mapAutoFocus,
				maxAnimationZoomDifference,
				maxZoom,
				minZoom,
				nativeFullscreen,
				projection,
				restrictMapArea,
				suppressMapOpenBlock,
				suppressObsoleteBrowserNotifier,
				yandexMapAutoSwitch,
				yandexMapDisablePoiInteractivity,

			onActionbegin,
			onActionbreak,
			onActionend,
			onActiontick,
			onActiontickcomplete,
			onBalloonopen,
			onBoundschange,
			onClick,
			onContextmenu,
			onDblclick,
			onDestroy,
			onHintclose,
			onHintopen,
			onMarginchange,
			onMousedown,
			onMouseenter,
			onMouseleave,
			onMousemove,
			onMouseup,
			onMultitouchend,
			onMultitouchmove,
			onMultitouchstart,
			onOptionschange,
			onSizechange,
			onTypechange,
			onWheel
		} = this.props;

		const mergedState = R.pipe(
			R.always({
				behaviors,
				bounds,
				center,
				controls,
				margin,
				type,
				zoom
			}),
			R.filter(
				R.pipe(
					R.equals(undefined),
					R.not
				)
			),
			R.merge(state)
		);

		const mergedOptions = R.pipe(
			R.always({
				autoFitToViewport,
				avoidFractionalZoom,
				exitFullscreenByEsc,
				fullscreenZIndex,
				mapAutoFocus,
				maxAnimationZoomDifference,
				maxZoom,
				minZoom,
				nativeFullscreen,
				projection,
				restrictMapArea,
				suppressMapOpenBlock,
				suppressObsoleteBrowserNotifier,
				yandexMapAutoSwitch,
				yandexMapDisablePoiInteractivity
			}),
			R.filter(
				R.pipe(
					R.equals(undefined),
					R.not
				)
			),
			R.merge(options)
		);

		const map = new ymaps.Map(
			parentElement,
			mergedState(),
			mergedOptions()
		);

		if(onActionbegin) {
			map.events.add('actionbegin', onActionbegin);
		}

		if(onActionbreak) {
			map.events.add('actionbreak', onActionbreak);
		}

		if(onActionend) {
			map.events.add('actionend', onActionend);
		}

		if(onActiontick) {
			map.events.add('actiontick', onActiontick);
		}

		if(onActiontickcomplete) {
			map.events.add('actiontickcomplete', onActiontickcomplete);
		}

		if(onBalloonopen) {
			map.events.add('balloonopen', onBalloonopen);
		}

		if(onBoundschange) {
			map.events.add('boundschange', onBoundschange);
		}

		if(onClick) {
			map.events.add('click', onClick);
		}

		if(onContextmenu) {
			map.events.add('contextmenu', onContextmenu);
		}

		if(onDblclick) {
			map.events.add('dblclick', onDblclick);
		}

		if(onDestroy) {
			map.events.add('destroy', onDestroy);
		}

		if(onHintclose) {
			map.events.add('hintclose', onHintclose);
		}

		if(onHintopen) {
			map.events.add('hintopen', onHintopen);
		}

		if(onMarginchange) {
			map.events.add('marginchange', onMarginchange);
		}

		if(onMousedown) {
			map.events.add('mousedown', onMousedown);
		}

		if(onMouseenter) {
			map.events.add('mouseenter', onMouseenter);
		}

		if(onMouseleave) {
			map.events.add('mouseleave', onMouseleave);
		}

		if(onMousemove) {
			map.events.add('mousemove', onMousemove);
		}

		if(onMouseup) {
			map.events.add('mouseup', onMouseup);
		}

		if(onMultitouchend) {
			map.events.add('multitouchend', onMultitouchend);
		}

		if(onMultitouchmove) {
			map.events.add('multitouchmove', onMultitouchmove);
		}

		if(onMultitouchstart) {
			map.events.add('multitouchstart', onMultitouchstart);
		}

		if(onOptionschange) {
			map.events.add('optionschange', onOptionschange);
		}

		if(onSizechange) {
			map.events.add('sizechange', onSizechange);
		}

		if(onTypechange) {
			map.events.add('typechange', onTypechange);
		}

		if(onWheel) {
			map.events.add('wheel', onWheel);
		}

		this.setState({
			map
		});
	};

	componentWillUnmount = () => {
		const {
			map
		} = this.state.map;

		const {
			onActionbegin,
			onActionbreak,
			onActionend,
			onActiontick,
			onActiontickcomplete,
			onBalloonopen,
			onBoundschange,
			onClick,
			onContextmenu,
			onDblclick,
			onDestroy,
			onHintclose,
			onHintopen,
			onMarginchange,
			onMousedown,
			onMouseenter,
			onMouseleave,
			onMousemove,
			onMouseup,
			onMultitouchend,
			onMultitouchmove,
			onMultitouchstart,
			onOptionschange,
			onSizechange,
			onTypechange,
			onWheel
		} = this.props;

		if(onActionbegin) {
			map.events.remove('actionbegin', onActionbegin);
		}

		if(onActionbreak) {
			map.events.remove('actionbreak', onActionbreak);
		}

		if(onActionend) {
			map.events.remove('actionend', onActionend);
		}

		if(onActiontick) {
			map.events.remove('actiontick', onActiontick);
		}

		if(onActiontickcomplete) {
			map.events.remove('actiontickcomplete', onActiontickcomplete);
		}

		if(onBalloonopen) {
			map.events.remove('balloonopen', onBalloonopen);
		}

		if(onBoundschange) {
			map.events.remove('boundschange', onBoundschange);
		}

		if(onClick) {
			map.events.remove('click', onClick);
		}

		if(onContextmenu) {
			map.events.remove('contextmenu', onContextmenu);
		}

		if(onDblclick) {
			map.events.remove('dblclick', onDblclick);
		}

		if(onDestroy) {
			map.events.remove('destroy', onDestroy);
		}

		if(onHintclose) {
			map.events.remove('hintclose', onHintclose);
		}

		if(onHintopen) {
			map.events.remove('hintopen', onHintopen);
		}

		if(onMarginchange) {
			map.events.remove('marginchange', onMarginchange);
		}

		if(onMousedown) {
			map.events.remove('mousedown', onMousedown);
		}

		if(onMouseenter) {
			map.events.remove('mouseenter', onMouseenter);
		}

		if(onMouseleave) {
			map.events.remove('mouseleave', onMouseleave);
		}

		if(onMousemove) {
			map.events.remove('mousemove', onMousemove);
		}

		if(onMouseup) {
			map.events.remove('mouseup', onMouseup);
		}

		if(onMultitouchend) {
			map.events.remove('multitouchend', onMultitouchend);
		}

		if(onMultitouchmove) {
			map.events.remove('multitouchmove', onMultitouchmove);
		}

		if(onMultitouchstart) {
			map.events.remove('multitouchstart', onMultitouchstart);
		}

		if(onOptionschange) {
			map.events.remove('optionschange', onOptionschange);
		}

		if(onSizechange) {
			map.events.remove('sizechange', onSizechange);
		}

		if(onTypechange) {
			map.events.remove('typechange', onTypechange);
		}

		if(onWheel) {
			map.events.remove('wheel', onWheel);
		}
	};

	render() {
		return (
			<div style={{
				'width': '100%',
				'height': '100%'
			}}>
				{!!(React.Children.count(this.props.children) &&
					this.state.map) &&
						<div>
							{React.Children.map(this.props.children, (child) => (
								React.cloneElement(child, {
									map: this.state.map,
									parent: this.state.map.geoObjects,
									ymaps: this.props.ymaps
								})
							))}
						</div>}
				<div
					id={this.props.parentElement}
					style={{
						'width': '100%',
						'height': '100%'
					}} />
			</div>
		);
	}
}

YandexMap.propTypes = {
	ymaps: PropTypes.object,

	parentElement: PropTypes.string.isRequired,
	state: PropTypes.object,
	behaviors: PropTypes.arrayOf(
		PropTypes.string
	),
	bounds: PropTypes.arrayOf(
		PropTypes.arrayOf(
			PropTypes.number
		)
	),
	center: PropTypes.arrayOf(
		PropTypes.number
	),
	controls: PropTypes.arrayOf(
		PropTypes.string
	),
	margin: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.arrayOf(
			PropTypes.number
		)
	]),
	type: PropTypes.oneOf([
		'yandex#map',
		'yandex#satellite',
		'yandex#hybrid'
	]),
	zoom: PropTypes.number,

	options: PropTypes.object,
	autoFitToViewport: PropTypes.oneOf([
		'none',
		'ifNull',
		'always'
	]),
	avoidFractionalZoom: PropTypes.bool,
	exitFullscreenByEsc: PropTypes.bool,
	fullscreenZIndex: PropTypes.number,
	mapAutoFocus: PropTypes.bool,
	maxAnimationZoomDifference: PropTypes.number,
	maxZoom: PropTypes.number,
	minZoom: PropTypes.number,
	nativeFullscreen: PropTypes.bool,
	projection: PropTypes.object,
	restrictMapArea: PropTypes.bool,
	suppressMapOpenBlock: PropTypes.bool,
	suppressObsoleteBrowserNotifier: PropTypes.bool,
	yandexMapAutoSwitch: PropTypes.bool,
	yandexMapDisablePoiInteractivity: PropTypes.bool,

	onActionbegin: PropTypes.func,
	onActionbreak: PropTypes.func,
	onActionend: PropTypes.func,
	onActiontick: PropTypes.func,
	onActiontickcomplete: PropTypes.func,
	onBalloonopen: PropTypes.func,
	onBoundschange: PropTypes.func,
	onClick: PropTypes.func,
	onContextmenu: PropTypes.func,
	onDblclick: PropTypes.func,
	onDestroy: PropTypes.func,
	onHintclose: PropTypes.func,
	onHintopen: PropTypes.func,
	onMarginchange: PropTypes.func,
	onMousedown: PropTypes.func,
	onMouseenter: PropTypes.func,
	onMouseleave: PropTypes.func,
	onMousemove: PropTypes.func,
	onMouseup: PropTypes.func,
	onMultitouchend: PropTypes.func,
	onMultitouchmove: PropTypes.func,
	onMultitouchstart: PropTypes.func,
	onOptionschange: PropTypes.func,
	onSizechange: PropTypes.func,
	onTypechange: PropTypes.func,
	onWheel: PropTypes.func
};

YandexMap.defaultProps = {
	parentElement: 'map',
	state: {},
	behaviors: ['default'],

	center: [37.6173,
		55.755826],
	controls: [],
	zoom: 10,
	//type: 'yandex#map',

	options: {},
	/*autoFitToViewport: 'ifNull',
	avoidFractionalZoom: true,
	exitFullscreenByEsc: true,
	fullscreenZIndex: 10000,
	mapAutoFocus: true,
	maxAnimationZoomDifference: 5,
	maxZoom: 23,
	minZoom: 0,
	nativeFullscreen: false,
	restrictMapArea: false,
	suppressMapOpenBlock: false,
	suppressObsoleteBrowserNotifier: false,
	yandexMapAutoSwitch: true,
	yandexMapDisablePoiInteractivity: false*/
};
