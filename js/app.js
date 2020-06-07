
class App extends React.Component {
    state = {
        name: "", message:"",
    comments: [
        { name: "JB", message: "Youhou la famille!"},
        { name: "Kirikou", message: "Je ne suis pas grand mais je suis vaillant"}
    ]
};

    handleName = event => {
        this.setState({
            name: event.target.value
        })
    }

    handleMessage = event => {
        this.setState({
            message: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        const comment = {name: this.state.name, message : this.state.message}
        console.log(comment);
        const comments = this.state.comments.slice();
        comments.push(comment);
        this.setState({comments: comments})
    }

    render() {
        console.log(this.state.comments);
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h1 className="title">Say something</h1>
                    <label>
                        <input className="name" type="text" name="name" id="" 
                        placeholder="Your Name" 
                        value={this.state.name} 
                        onChange={this.handleName} />
                    </label>
                    <label>
                    <textarea className="comment" name="comment" id="" rows="10" cols="30"
                        placeholder ="Your Comment"
                        value={this.state.message}
                        onChange={this.handleMessage}>
                    </textarea>
                    </label>
                    <input className="submit" type="submit" value="Comment"/>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById("app"));