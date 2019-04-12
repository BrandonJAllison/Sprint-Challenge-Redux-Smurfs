import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addSmurf } from '../actions/index'



const input ={
    margin: '50px 15px',
    border: 'none',
    borderBottom: '2px solid #0491C8',
    height: '20px',
    width: '200px'
}

const button ={
    width: '100px',
    borderRadius: '15px',
    border: '2px solid #0491C8',
    padding: '10px',
    background: 'white',
    margin: '20px 0',
    boxShadow: '0px 2px 4px black'
}

class AddSmurf extends Component {

    constructor (props) {
        super(props)
        this.state = {
            age: '',
            height: '',
            name: ''
        }
    }

    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        this.props.addSmurf(this.state)
        alert("your smurf has been added")
        this.setState({
            age: '',
            name: '',
            height: '',
        })
    }

    render() {
        return (
            
            <form onSubmit={this.submitHandler}>
                <input style={input} type="text" required = 'required' name='name' value={this.state.name} onChange={this.inputHandler} placeholder='Smurf Name' />
                <input style={input} type="number" required = 'required' name='age' value={this.state.age} onChange={this.inputHandler} placeholder='Smurf Age' />
                <input style={input} type="text" required = 'required' name='height' value={this.state.height} onChange={this.inputHandler} placeholder='Smurf Height' />
                <button style={button} type='submit'>Add Smurf</button>
            </form>
           
        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, {addSmurf : addSmurf}) (AddSmurf)