/**
 * Created by olival on 04.07.16.
 */

import React, { PropTypes } from 'react';

export default
class GeoObject extends React.Component {
	static propTypes = {
		ymaps: PropTypes.object,
		map: PropTypes.object,
		parent: PropTypes.object,

		type: PropTypes.oneOf([
			'Point',
			'LineString',
			'Rectangle',
			'Polygon',
			'Circle'
		]).isRequired,

		coordinates: PropTypes.arrayOf(
			PropTypes.number
		).isRequired,
		options: PropTypes.object,

		properties: PropTypes.object,

		onClick: PropTypes.func,
		onDragEnd: PropTypes.func,

		draw: PropTypes.bool,
		edit: PropTypes.bool
	};

	static defaultProps = {
		options: {
			draggable: false
		},
		draw: false,
		edit: false
	};

	state = {

	};

	componentWillMount = () => {
		this.setState({
			map: this.props.map,
			parent: this.props.parent
		});
	};

	componentDidMount = () => {
		const {
			ymaps,
			map,
			parent,
			type,
			coordinates,
			options,
			properties,
			onClick,
			onDragEnd,

			draw,
			edit
		} = this.props;

		const geoObject = new ymaps.GeoObject({
			geometry: {
				type,
				coordinates
			},
			properties
		}, options);

		if(onClick) {
			geoObject.events.add('click', onClick);
		}
		if(onDragEnd) {
			geoObject.events.add('dragend', onDragEnd);
		}

		parent.add(geoObject);

		if(type === 'polygon') {
			draw &&
				geoObject.editor.startDrawing();
			edit &&
				geoObject.editor.startEditing();
		}

		this.setState({ geoObject });
	};

	componentWillReceiveProps = (nextProps) => {
		const geoObject = this.state.geoObject;

		if(this.props.coordinates.join() !== nextProps.coordinates.join()) {
			geoObject.geometry.setCoordinates(nextProps.coordinates);
		}

		if(JSON.stringify(this.props.options) !== JSON.stringify(nextProps.options)) {
			geoObject.options.set(nextProps.options);
		}

		if(this.props.type === 'polygon') {
			if(this.props.draw !== nextProps.draw) {
				nextProps.draw ?
					geoObject.editor.startDrawing() :
					geoObject.editor.stopDrawing();
			}
			if(this.props.edit !== nextProps.edit) {
				nextProps.edit ?
					geoObject.editor.startEditing() :
					geoObject.editor.stopEditing();
			}
		}
	};

	componentWillUnmount = () => {
		//this.props.parent.remove(this.state.geoObject);
		this.state.geoObject.getParent()
			.remove(this.state.geoObject);
	};

	render() {
		return null;
	}
}
