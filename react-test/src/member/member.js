	import Rect, { Component } from 'react';

	class Member extends Component {
	  constructor(props) {
	    super(props);
	    this.state = {};
	  }

	  componentDidMount() {
	    fetch("http://localhost:3030/member")
	  }

	  render() {
	    console.log(this.stats);
	    return (
	      <div>
					<h1>{this.state[0]}</h1>
				</div>
	    );
	  }
	}

	export default Member;