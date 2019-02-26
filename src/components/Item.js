import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Item extends Component {
	createImageMarkup() {
		return {__html: this.props.item.image};
	}

	render() {
	const { id, name, price, lastBrought} = this.props.item;
	return (
	  <div className="col-md-4">
	  	<div className="card mb-4 shadow-sm">
		  <div className="card-body">
		  	<div>
			  <h4 className="d-inline card-title mb-0">{ name }</h4>
			  <p className="my-0 text-muted">£{ price }</p>
			</div>
			<div className="mt-3 mb-4" dangerouslySetInnerHTML={this.createImageMarkup()}></div>
			<div className="last-purchase mt-2">
				<div className="badge badge-info">Last bought</div>
				<h5 className="card-title">{ lastBrought.date } by { lastBrought.by }</h5>
			</div>
			<div className="mt-4 d-flex justify-content-between align-items-center">
				<button type="submit" className="btn btn-sm btn-outline-primary" onClick={this.props.addPurchase.bind(this, id)}>Log Purchase</button>
				<div className="btn-group">
					<button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
					<button type="button" className="btn btn-sm btn-outline-danger">Delete</button>
				</div>
			</div>
		  </div>
		</div>
	  </div>
	)
	}
}

Item.propTypes = {
	item: PropTypes.object.isRequired
}

export default Item
