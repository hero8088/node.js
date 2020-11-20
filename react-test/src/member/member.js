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
	    .then(function(data){
	      console.log(data);
	    })
	    .catch(function(err){
	      console.log(err);
	    });
	  }

	  render() {
	   /*
	    const {members} = this.state;
	    const memberList = members.map((member) => (
	        <div>
	          <p>{member.mid}</p>
	          <p>{member.mname}</p>
	          <p>{member.memail}</p>
	        </div>
	      ));
	 */
	    return (
	      <div>
					<h1>aaaaaaaaxxxxxxxxxxxxxxx</h1>
				</div>
	    );
	  }
	}

	export default Member;