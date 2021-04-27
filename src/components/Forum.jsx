import React, {useEffect, useState} from "react";
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import styles from '../forum.css';
import CreateQuestion from './CreateQuestion'
import CreateAnswer from './CreateAnswer'


function Forum() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);

    const [questionId, setQuestionId] = useState(-1);
    const [questionRank, setQuestionRank] = useState(-1);

    let filteredAnswers = [];
    let filteredQuestions = [];


function filterAnswers(){
  filteredAnswers = data2.filter(item => {
    return item.question == questionId;
  })


  return filteredAnswers
}

function filterQuestions(){
  filteredQuestions = data.filter(item => {
    return item.rank == questionRank;
  })


  return filteredQuestions
}



    useEffect(()=> {
      fetch("https://crisis-octogon-3123.herokuapp.com/api/questions")
      .then((response) => response.json())
      .then(data => setData(data));
    }, [])

    useEffect(()=> {
      fetch("https://crisis-octogon-3123.herokuapp.com/api/answers")
      .then((response) => response.json())
      .then(data2 => setData2(data2));
    }, [])

    useEffect(() => {
      filterAnswers();


    }, [questionId,setQuestionId])

    useEffect(() => {
      filterQuestions();


    }, [questionRank,setQuestionRank])




  return (
    <div id="wrapper">
    <div class="container-fluid">
        <div class="inner-wrapper">
        <div class="inner-main">

        <div class="align-items-center justify-content-between mb-4">
                <Button variant="primary"  onClick={handleShow} class="btn btn-primary has-icon btn-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus mr-2">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    NEW DISCUSSION
                </Button>
         </div>

        <div class="inner-main-header">
        <div class="row">
            <div class="col-xl-8 col-lg-7 ">
                        <select class="custom-select custom-select-sm w-auto mr-1">
                            <option selected="">Latest</option>
                            <option value="1">Popular</option>
                            <option value="3">No Replies Yet</option>
                        </select>
            </div>
            <div class="col-xl-4 col-lg-5 ">
                <span class="input-icon input-icon-sm ml-auto w-auto">
                    <input type="text" class="form-control form-control-sm bg-gray-200 border-gray-200 shadow-none mb-4 " placeholder="Search forum" />
                </span>
            </div>
        </div>

        </div>

        <div class="inner-main-body">
        <div class="row">
            <div class="col-xl-6 md-4">

              <ul>
              {data.map((item)=>{


                  return <li onClick={() => {setQuestionId(item.id); handleShow2(); setQuestionRank(item.rank);}} class="q" key ={item.id}>{item.question}</li>


              })}
              </ul>

            </div>
          </div>
          </div>

        < div class="modal">
            <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title> New Discussion</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                      <CreateQuestion />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
        </ div>

        < div class="modal">
            <Modal size="lg" show={show2} onHide={handleClose2}>
                    <Modal.Header closeButton>
                        <Modal.Title> Question Info </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                    <h1>Question Rank</h1>

                    <div>
                        <ul>
                       {filterQuestions().map((item)=>{


                            return <li class="q" key ={item.id}>{item.rank}</li>

                        })}
                        </ul>
                      </div>

                    <h1>Answers</h1>

                    <div>
                        <ul>
                       {filterAnswers().map((item)=>{


                            return <li class="q" key ={item.id}>{item.answer}</li>

                        })}
                        </ul>
                      </div>
                        <br></br>

                    <div>
                        <h1>Answer a Question</h1>

                    <CreateAnswer />
                    </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose2}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
        </ div>

        </div>
        </div>
    </div>
    </div>

  );

}

export default Forum;
