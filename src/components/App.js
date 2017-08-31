import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			fruit: [],
			filters: [],
			currentFilter: null
		}
	}

	render() {
		return (
			<div></div>
		)
	}

}

export default App
