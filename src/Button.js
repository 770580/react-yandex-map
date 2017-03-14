/**
 * Created by o.ivanov on 11.03.17.
 */

import React, {
	Component,
	PropTypes,
} from 'react';

import R from 'ramda';

class Button extends Component {
	componentDidMount = () => {
		const {
			map,
			parent,
			ymaps,

			parameters,
				data,
					content = this.props.children,
					image,
					title,

				options,
					adjustMapMargin,
					float,
					floatIndex,
					layout,
					maxWidth,
					position,
						top,
						right,
						bottom,
						left,
					selectOnClick,
					size,
					visible,
				state,
					enabled,
					selected,

			onClick,
			onSelect,
			onDeselect,
			onEnable,
			onPress,

			...rest
		} = this.props;

		const mergedData = R.pipe(
			R.always({
				content,
				image,
				title
			}),
			R.filter(
				R.pipe(
					R.equals(undefined),
					R.not
				)
			),
			R.merge(data),
			R.merge(R.__, rest)
		);

		const mergedPosition = {
			...{
				top,
				right,
				bottom,
				left
			},
			...position
		};

		const mergedOptions = R.pipe(
			R.always({
				adjustMapMargin,
				float,
				floatIndex,
				layout,
				maxWidth,
				position: mergedPosition,
				selectOnClick,
				size,
				visible
			}),
			R.when(
				R.prop('layout'),
				R.assoc(
					'layout',
					/*R.when(
						R.pipe(
							R.match(/^<.+>$/),
							R.length
						),
						R.always(ymaps.templateLayoutFactory.createClass(layout))
					)*/
					ymaps.templateLayoutFactory.createClass(layout)
				)
			),
			R.filter(
				R.pipe(
					R.equals(undefined),
					R.not
				)
			),
			R.merge(options)
		);

		const mergedState = {
			...state,
			...{
				enabled,
				selected
			}
		};

		const ButtonControl = new ymaps.control.Button({
			data: mergedData(),
			options: mergedOptions(),
			state: mergedState
		});

		if(onClick) {
			ButtonControl.events.add('click', (e) => onClick(e));
		}
		if(onSelect) {
			ButtonControl.events.add('select', (e) => onSelect(e));
		}
		if(onDeselect) {
			ButtonControl.events.add('deselect', (e) => onDeselect(e));
		}
		if(onEnable) {
			ButtonControl.events.add('enable', (e) => onEnable(e));
		}
		if(onPress) {
			ButtonControl.events.add('press', (e) => onPress(e));
		}

		map.controls.add(ButtonControl);

		this.setState({
			button: ButtonControl
		});
	};

	componentWillReceiveProps = (nextProps, nextContext) => {
		const ButtonControl = this.state.button;

		if(JSON.stringify(this.props.data) !== JSON.stringify(nextProps.data)) {
			ButtonControl.data.set(nextProps.data);
		}
		if(JSON.stringify(this.props.options) !== JSON.stringify(nextProps.options)) {
			ButtonControl.options.set(nextProps.options);
		}
		if(JSON.stringify(this.props.state) !== JSON.stringify(nextProps.state)) {
			ButtonControl.state.set(nextProps.state);
		}

		if(this.props.content !== nextProps.content) {
			ButtonControl.data.set('content', nextProps.content);
		}
		if(this.props.image !== nextProps.image) {
			ButtonControl.data.set('image', nextProps.image);
		}
		if(this.props.image !== nextProps.image) {
			ButtonControl.data.set('image', nextProps.image);
		}

		if(this.props.adjustMapMargin !== nextProps.adjustMapMargin) {
			ButtonControl.options.set('adjustMapMargin', nextProps.adjustMapMargin);
		}
		if(this.props.float !== nextProps.float) {
			ButtonControl.options.set('float', nextProps.float);
		}
		if(this.props.floatIndex !== nextProps.floatIndex) {
			ButtonControl.options.set('floatIndex', nextProps.floatIndex);
		}
		if(this.props.layout !== nextProps.layout) {
			ButtonControl.options.set('layout', nextProps.layout);
		}
		if(this.props.maxWidth !== nextProps.maxWidth) {
			ButtonControl.options.set('maxWidth', nextProps.maxWidth);
		}

		if(JSON.stringify(this.props.position) !== JSON.stringify(nextProps.position)) {
			ButtonControl.options.set(nextProps.position);
		}
		if(this.props.top !== nextProps.top) {
			ButtonControl.options.set('top', nextProps.top);
		}
		if(this.props.right !== nextProps.right) {
			ButtonControl.options.set('right', nextProps.right);
		}
		if(this.props.bottom !== nextProps.bottom) {
			ButtonControl.options.set('bottom', nextProps.bottom);
		}
		if(this.props.left !== nextProps.left) {
			ButtonControl.options.set('left', nextProps.left);
		}
		if(this.props.selectOnClick !== nextProps.selectOnClick) {
			ButtonControl.options.set('selectOnClick', nextProps.selectOnClick);
		}
		if(this.props.size !== nextProps.size) {
			ButtonControl.options.set('size', nextProps.size);
		}
		if(this.props.visible !== nextProps.visible) {
			ButtonControl.options.set('visible', nextProps.visible);
		}


		if(this.props.enabled !== nextProps.enabled) {
			ButtonControl.state.set('enabled', nextProps.enabled);
		}
		if(this.props.selected !== nextProps.selected) {
			ButtonControl.state.set('selected', nextProps.selected);
		}
	};

	componentWillUnmount = () => {
		this.props.map.controls.remove(this.state.button);
	};

	render() {
		return (
			null
		);
	}
}

Button.propTypes = {
	map: PropTypes.object,
	parent: PropTypes.object,
	ymaps: PropTypes.object,

	parameters: PropTypes.shape({
		data: PropTypes.object,
		options: PropTypes.object,
		state: PropTypes.shape({
			enabled: PropTypes.bool,
			selected: PropTypes.bool
		})
	}),
	data: PropTypes.shape({
		content: PropTypes.string,
		image: PropTypes.string,
		title: PropTypes.string
	}),
	content: PropTypes.string,
	image: PropTypes.string,
	title: PropTypes.string,
	options: PropTypes.object,
	adjustMapMargin: PropTypes.bool,
	float: PropTypes.oneOf([
		'left',
		'right',
		'none'
	]),
	floatIndex: PropTypes.number,
	layout: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.string
	]),
	maxWidth: PropTypes.number,
	position: PropTypes.shape({
		top: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		]),
		right: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		]),
		bottom: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		]),
		left: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		])
	}),
	top: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	right: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	bottom: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	left: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	selectOnClick: PropTypes.bool,
	size: PropTypes.oneOf([
		'auto',
		'small',
		'medium',
		'large'
	]),
	visible: PropTypes.bool,
	state: PropTypes.shape({
		enabled: PropTypes.bool,
		selected: PropTypes.bool
	}),
	enabled: PropTypes.bool,
	selected: PropTypes.bool,

	onClick: PropTypes.func,
	onSelect: PropTypes.func,
	onDeselect: PropTypes.func,
	onEnable: PropTypes.func,
	onPress: PropTypes.func
};

Button.defaultProps = {
	parameters: {},
	data: {}
	/*
	image: '',
	title: '',
	options: {},
	adjustMapMargin: false,
	float: 'right',
	floatIndex: 0,
	//layout: '',
	maxWidth: 90,
	position: {
		top: 'auto',
		right: 'auto',
		bottom: 'auto',
		left: 'auto'
	},
	top: 'auto',
	right: 'auto',
	bottom: 'auto',
	left: 'auto',
	selectOnClick: true,
	size: 'auto',
	visible: true,
	state: {
		enabled: true,
		selected: false
	},
	enabled: true,
	selected: false*/
};

export default Button;
