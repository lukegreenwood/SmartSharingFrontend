import React, { Component } from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

class Items extends Component {
	render() {
		return (
			<div className="row">
				{
					this.props.items.map((item) => (
					<Item key={item.id} item={item} addPurchase={this.props.addPurchase} />
				))
				}
			</div>
		)
	}
}

Items.propTypes = {
	items: PropTypes.array.isRequired
}

export default Items;
