import React, { useState, useEffect, useContext } from 'react';
import { Modal, Button, Input } from 'antd';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { QuestionsContext } from '../contexts/QuestionsContext';

const questions = useContext(QuestionContext)

const { TextArea } = Input;


const Mod = (props) => {
  const [visible, setVisible] = useState(false)
  const [question, setQuestion] = useContext(QuestionsContext)
  const [postQuestion, setPostQuestion] = useState({
    question: {
      title: '',
      question: '',
      'bussiness-type': ''
    }
  })
  
  const { match } = props;
  useEffect(() => {
    // const questionToDisplay = question.find(
    //   itemInList => `${itemInList.id}` === match.params.id
    //   )
    //   console.log(questionToDisplay)
  }, [])

  const handleOk = e => {
    e.preventDefault();


    axiosWithAuth().post(`/questions/${question.id}`, question)
    .then(res => {
      // console.log(question)
      setQuestion(res.data.value)
    })
    .then(
      setVisible(false),
      setQuestion('')
    )
    .catch(err => console.log(err.response))
   
  };

    const handleCancel = e => {
      console.log(e);
      setVisible(false)
      setQuestion('')
    };

    const handleChange = e => {
      setQuestion({
        [e.target.name]: e.target.value
      })
    }

    const showModal = () => {
      return setVisible(true) ? 
      visible : !visible
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
          // value={}
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