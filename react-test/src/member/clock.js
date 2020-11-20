
export class Clock {
	  constructor() {
	    this.state = { ate: new Date() };
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
