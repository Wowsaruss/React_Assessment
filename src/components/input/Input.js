import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toDo: []
        }
        // console.log(this.state.toDo);
    }


    updateToDo(input) {
        this.setState({
            toDo: input
        })
        console.log(this.state.toDo)
    }
    componentWillReceiveProps(props){
        this.setState({
            incomplete: props.incomplete
        })
      }

    render() {
        return(
            <div>
                <div>
                    <h1>TO-DO:</h1>
                    <input type='text' value={this.state.toDo} onChange={(e) => {this.updateToDo(e.target.value)}} />
                    <br />
                    <button type='submit' onClick={() => this.props.addToDo(this.state.toDo)} >Add New To-Do</button>
                </div>
            </div>
        )
        return(
            <div>
                
            </div>
        )
    }
}

export default Input;


// onChange={(e) => {this.updateToDo(e.target.value)}