import React, { Component } from 'react'
import ProductRow from './ProductRow';


class ProductTable extends Component {

	constructor(props) {
		super(props);
		this.handleDestroy = this.handleDestroy.bind(this);
	}

	handleDestroy(id) {
		this.props.destroy(id);
	}

	render() {
		const products = Object.keys(this.props.products);
		var rows = [];
		var { filterText } = this.props;

		for (var j = 0; j < products.length; j++) {
			const pr = products[j]; 
			const prod = this.props.products[pr];
			const name = prod.name.toLowerCase();

			if(filterText && filterText.length > 0 && name.indexOf(filterText) === -1) continue;
			rows.push(<ProductRow key={prod.id} product={prod} onDestroy={this.handleDestroy} />)
		}
		
		return(
			<table className="table table-striped border">
				<thead className="thead-dark">
					<tr>
						<th>Name</th>
						<th>Price</th>
						<th>Category</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		)
	}

}


export default ProductTable;