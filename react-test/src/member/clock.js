	import React, {Component} from 'react';
	
		class Clock extends Component {
			    constructor(props) {
			      super(props);
			      this.state = { ate: new Date() };
			      this.str = "why not"
			    }
			    
			    componentDidMount() {
			      this.timerID = setInterval(
			        () => this.tick(), 1000
			      );
			    }
			    
			    componentWillUnmount() {
			      clearInterval(this.timerID);
			    }
			    
			    tick() {
			      this.setState({
			        ate: new Date()
			      });
			    }
			    
			    render() {
			      return (
			        <div>
			    					<h1>It is {this.state.ate.toLocaleTimeString()}.</h1>
			    				</div>
			      );
			    }
		}

export default Clock;