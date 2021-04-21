import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'

class CreateAnswer extends Component {
	constructor(props) {
		super(props)


		this.state = {
			answer: '',
			question: '',
      rank:'0',
      data: [],
		}
	}

  componentDidMount(){
    axios.get('https://crisis-octogon-3123.herokuapp.com/api/questions').then(resp => {

        console.log(resp.data);
        this.setState({data: resp.data })
        });

  }


	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('https://crisis-octogon-3123.herokuapp.com/api/answers/', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}



	render() {

    function GetQuestion() {
        return axios.get('https://crisis-octogon-3123.herokuapp.com/api/questions').then(resp => {

            console.log(resp.data);
          });

    }

		const { question, answer, rank, data } = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
        <label for="question">Question: </label>
        <div>

        <select
        name="question"
        onChange={this.changeHandler}>
        {data.map((item)=>{

          return  <option value={item.id}>{item.question}></option>


        })}

        </select>
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
          <label for="answer">Answer: </label>
					<div>
            <input
              type="text"
              name="answer"
              placeholder="Answer?"
              value={answer}
              onChange={this.changeHandler}
            />
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default CreateAnswer
