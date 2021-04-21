import React, { Component } from 'react'
import axios from 'axios'
class CreateQuestion extends Component {
	constructor(props) {
		super(props)

		this.state = {
			question: '',
			date: '',
      rank:'0',
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('https://crisis-octogon-3123.herokuapp.com/api/questions/', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { question, date, rank } = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
        <label for="date">Date: </label>
        <div>
          <input
            type="datetime-local"
            name="date"
            readonly
            value={date}
            onChange={this.changeHandler}
          />
        </div>
          <label for="rank">Rank: </label>
					<div>
						<input
							type="number"
							name="rank"
              readonly
							value="0"
							onChange={this.changeHandler}
						/>
					</div>
          <label for="question">Question: </label>
					<div>
            <input
              type="text"
              name="question"
              placeholder="Question?"
              value={question}
              onChange={this.changeHandler}
            />
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default CreateQuestion
