	import Rect, { Component } from 'react';

	class Member extends Component {
	  constructor(props) {
	    super(props);
	    state = {};
	  }

	  componentDidMount() {
	    fetch("http://localhost:3030/member")
	  }

	  render() {
	    return (
	      <div>
			    					<h1>{state}</h1>
			    				</div>
	    );
	  }
	}

	export defaul Member  ;