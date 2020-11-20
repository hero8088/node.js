		class Clock extends React.Component {
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
			    					<h1>It is {str}.</h1>
			    				</div>
			      );
			    }
		}

export default Clock;