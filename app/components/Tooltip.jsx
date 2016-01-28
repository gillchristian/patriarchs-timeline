import React from 'react';

export default class Tooltip extends React.Component {

	render() {
		let showTooltip = this.props.show ? 'block' : 'none';
		let display = {display: showTooltip};
		return (
			<div className='tooltipPerson' style={display}>
				{this.props.children}
			</div>
		)
	}
}