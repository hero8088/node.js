	import React, { Component } from 'react';

	class Member extends Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      retValue: []
	    };
	  }

	  componentWillMount() {
	    fetch("http://localhost:3030/member")
	    .then(res => res.json())
	    .then(data => this.setState({
	      retValue: data
	    }));
	  }

	  render() {
	    console.log('--------------------------------------');
	    console.dir(this.stats.retValue);
	    return (
	      <div>
					<h1>{this.state.retValue}</h1>
				</div>
	    );
	  }
	}

	export default Member;