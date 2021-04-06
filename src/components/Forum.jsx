import React, {useEffect, useState} from "react";
import { Button, Modal } from 'react-bootstrap';
import styles from '../forum.css'


function Forum() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState([]);

function testClicked(){
        alert("test successful")
      }

function questionClicked(){
        alert("test")
        }



    //const getData = () =>
      //  fetch("https://crisis-octogon-3123.herokuapp.com/api/questions")
        //.then((res) => res.json())
        //.then(data => console.log(data));

    useEffect(()=> {
      fetch("https://crisis-octogon-3123.herokuapp.com/api/questions")
      .then((response) => response.json())
      .then(data => setData(data));
      //getData().then((data) => setData(data))
    }, [])


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


                  return <li onClick={testClicked} class="q" key ={item.id}>{item.question}</li>

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
                        <form>
                            <div class="form-group">
                                <label for="threadTitle">Title</label>
                                <input type="text" id="forum_post_title" required="required" class="form-control" placeholder="Enter title" autofocus="" />
                            </div>
                            <div class="form-group">
                                <label for="threadTitle">Name</label>
                                <input type="text" id="forum_post_name" required="required" class="form-control" placeholder="Enter name" autofocus="" />
                            </div>

                            <div class="form-group">
                                <label for="threadTitle">Question</label>
                                <input type="text" id="forum_post_body" required="required" class="form-control bg-light border-0 small" placeholder="Question?"></input>
                            </div>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" id="forum_post_submit" onClick={handleClose}>
                            Post
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
