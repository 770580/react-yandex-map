/**
 * Created by o.ivanov on 12.03.17.
 */

import React, {
	Component,
	PropTypes,
} from 'react';

class GeoObjectCollection extends Component {
	componentWillMount = () => {
		const {
			map,
			parent,
			ymaps
		} = this.props;

		const GeoObjectCollectionComponent = new ymaps.GeoObjectCollection({}, {});

		parent.add(GeoObjectCollectionComponent);

		/*GeoObjectCollectionComponent.events.add('add', (e) => {
			const target = e.get('target');

			target.getMap().setBounds(
				target.getBounds()
			);
		});*/

		this.setState({
			GeoObjectCollection: GeoObjectCollectionComponent
		});
	};

	componentDidMount = () => {
		const {
			map
		} = this.props;

		if(React.Children.count(this.props.children) > 1) {
			map.setBounds(
				this.state.GeoObjectCollection.getBounds()
			);
		} else if(React.Children.count(this.props.children) === 1) {
			map.setCenter(this.state.GeoObjectCollection.getBounds()[0]);
		}

		/*this.state.GeoObjectCollection.events.add('add', (e) => {
			const target = e.get('target');

			target.getMap().setBounds(
				target.getBounds()
			);
		});*/
	};

	componentWillReceiveProps = (nextProps, nextContext) => {

	};

	render() {
		return (
			<div>
				{!!React.Children.count(this.props.children) ?
					React.Children.map(this.props.children, (child) => (
						React.cloneElement(child, {
							map: this.props.map,
							parent: this.state.GeoObjectCollection,
							ymaps: this.props.ymaps
						})
					)) :
					null}
			</div>

		);
	}
}

GeoObjectCollection.propTypes = {
	map: PropTypes.object,
	parent: PropTypes.object,
	ymaps: PropTypes.object
};

GeoObjectCollection.defaultProps = {};

export default GeoObjectCollection;

