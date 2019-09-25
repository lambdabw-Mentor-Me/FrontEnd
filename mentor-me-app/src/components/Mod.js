import React, { useState, useEffect, useContext } from 'react';
import { Modal, Button, Input } from 'antd';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const { TextArea } = Input;

const initialState = {
  "title": 'bobby', 
  "question": 'is bobby cool?', 
  "business_type": 'bob', 
}

const Mod = () => {
  const [visible, setVisible] = useState(false)
  const [question, setQuestion] = useState({})

  const handleChange = e => {
    setQuestion({
      [e.target.name]: e.target.value
    })
  }

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   axiosWithAuth().post('/questions', question)
  //   .then(res => console.log(res.data))
  //   .catch(err => console.log(err.response))
  // }


  const showModal = () => {
    return setVisible(true) ? 
    visible : !visible
  };

  const handleOk = e => {
    e.preventDefault();

    axiosWithAuth().post('/questions', initialState)
    .then(res => {
      // console.log(question)
      setQuestion(res.data.payload)
    })
    .then(setVisible(false))
    .catch(err => console.log(err.response))
   
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false);
  };

    return (
      <div>
        <Button type="primary" onClick={showModal}>
          Ask a question
        </Button>
        <Modal
          title="Ask away..."
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Input onChange={handleChange} style={{ marginBottom: 15 }} placeholder="Title" />
          <TextArea style={{ marginBottom: 15 }}
          placeholder='Ask a question'
          autosize={{ minRows: 2, maxRows: 6 }}
        />
          <Input onChange={handleChange} placeholder="Business Type" />
        </Modal>
      </div>
    );
}

export default Mod;