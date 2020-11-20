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
	   
	    const {members} = this.state;
	    return (
	      <div>
					<h1>{members}</h1>
				</div>
	    );
	  }
	}

	export default Member;