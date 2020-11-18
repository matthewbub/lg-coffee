/* eslint-disable react/require-default-props */
import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import ContactFrom from './ContactForm';



const Contact = () => {
  
  const [isProcessing, setProcessingTo] = useState(false);

  const handleFormSubmit = async (ev) => {
    ev.preventDefault();

    const messageDetails = {
      name: ev.target.name.value,
      email: ev.target.email.value,
      message: ev.target.message.value,
    };

    setProcessingTo(true);
    console.log(messageDetails)
  }
    // // create payment intent
    // const { data: clientSecret } = await axios.post('/api/payment_intents', {
    //   amount: price,
    // });

  return (  
    <Form onSubmit={handleFormSubmit}>
      <ContactFrom />
      <button
        type="submit"
        className="btn btn-outline-dark mb-5 mt-2 mx-4"
      >
        Send Message
      </button>
    </Form>
  )
}


export default Contact;
