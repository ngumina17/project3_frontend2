import React, { Component } from "react";
import axios from 'axios';




class Review_Field extends Component {
    constructor (props) {
        super (props)
        this.state = {
            reviews: []
        }
    }
    componentDidMount () {
        this.getData()
    }

    getData () {
        const url = 'https://project3-restaurant-finder.herokuapp.com/restaurants';
        axios.get(url).then(res => {
            console.log(res.data)
            this.setState({
                reviews: res.data
            })
        })
    }

    handlePut = (id, arrayIndex, currentArray) => {
        axios.put('https://project3-restaurant-finder.herokuapp.com/restaurants')
        .then (res => {
            console.log('put')
        }).then(() => this.getData())
        
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.submit(this.state.input)
    }

    render() {
        return (
            <div>
                <h1>Restaurant List</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' className='form' placeholder='Write a review!' />
                    <button className='submit_review'>Submit</button>
                </form>
            </div>
        )
    }
}

// function Review_Field(props) {
//     let newText = props.newText

//     function handleChange(e) {
//         let text = e.target.value
//         newText(text)
//     }

// return(
//     <input onChange={handleChange} type="text" />
// )
// }
// export default Review_Field

export default Review_Field