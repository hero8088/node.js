	import Rect, {Component} from 'react';
	
		class Clock extends Component {
			    constructor() {
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
			    					<h1>It is {this.str}.</h1>
			    				</div>
			      );
			    }
		}

export default Clock;