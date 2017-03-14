/**
 * Created by olival on 01.07.16.
 */

import React, { PropTypes } from 'react';

import YandexMapInit from './YandexMapInit';

import Preloader from '../Preloader';

export default
class YandexMapLoader extends React.Component {
	static defaultProps = {
		containerElement: (<div
			style={{
				width: '100%',
				height: '100%'
			}} />)
	};

	static propTypes = {
		containerElement: PropTypes.node.isRequired
	};

	state = {
		children: (<Preloader size={100} position='absolute' />),
		ymaps: null
	};

	componentWillMount = () => {
		YandexMapInit.init
			.then((ymaps) => {
				this.setState({
					ymaps
				});
			},
			(err) => {
				console.error(err);

				this.setState({ children: (
					<div className='error'>
						<h3>Сервис Яндекс.Карты недоступен</h3>
						<p>Пожалуйста, перезагрузите страницу. </p>
						<p>Если проблема будет повторяться, сообщите разработчикам.</p>
					</div>
				) });
			});
	};

	componentDidMount = () => {

	};

	render() {
		return (
			this.state.ymaps ?
				React.cloneElement(
					this.props.containerElement,
					null,
					React.cloneElement(
						this.props.children,
						{
							ymaps: this.state.ymaps
						}
					)
				) :
				React.cloneElement(
					this.state.children,
					null,
					null
				)
		);
	}
}
