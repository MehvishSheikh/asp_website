import React, { useState } from 'react';
import axios from 'axios';
// function ContactForm() {
//   const [name, setName] = useState('');
//   const [emailid, setEmail] = useState('');
//   const [subject, setSubject] = useState('');
//   const [text, setText] = useState('');
  
// const handleSendEmail = async () => {
//   try {
//     const response = await axios.post('https://asp-api.vercel.app/api/send-email', { name, emailid, subject, text });
//     console.log('Server response:', response.data);
//     alert('Email sent successfully!');
//   } catch (error) {
//     console.error('Error sending email:', error);
//     alert('Error sending email. Check console for details.');
//   }
// };
//   return (
//     <div className="container">
//         <div className="contact-form">
//           <div
            // action=""
            // method="POST"
            // className="contact-inputs">
         

           


/* <div className="row">

<h3 style={{ textAlign: 'center' }}><b>GOT A QUESTION?</b></h3>


<p>
We’re here to help and answer any question you might have. We look forward to hearing from you!
</p>
                <div className="col-md-6 form-group">

                    
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    value={emailid}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required=""
                  />
                  {/* <input type="email" value={to} onChange={(e) => setEmail(e.target.value)} /> */
//                 </div>
//               </div>
//               <div className="form-group mt-3">
//                 <input
//                   type="text"
//                   value={subject} 
//                   onChange={(e) => setSubject(e.target.value)}
//                   className="form-control"
//                   name="subject"
//                   id="subject"
//                   placeholder="Subject"
//                   required=""
//                 />
//                 {/* <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} /> */}
//               </div>
//               <div className="form-group mt-3">
//                 <textarea
//                 value={text} onChange={(e) => setText(e.target.value)}
//                   className="form-control"
//                   name="message"
//                   rows={5}
//                   placeholder="Message"
//                   required=""
//                   defaultValue={""}
//                 />
//                 {/* <textarea value={text} onChange={(e) => setText(e.target.value)} /> */}
//               </div>
//               <div className="my-3">
//                 {/* <div className="loading">Loading</div>
//                 <div className="error-message" />
//                 <div className="sent-message">
//                   Your message has been sent. Thank you!
//                 </div> */}
//               </div>
//               <div className="text-center">
//   <button type="submit" onClick={handleSendEmail} style={{ backgroundColor: 'skyblue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Send Message</button>
// </div> 
 {/* <button onClick={handleSendEmail}>Send Email</button> */}

            {/* <input type="submit" value="send" /> */}
          {/* </div>
        </div>
      </div>
    
  );
};



export default ContactForm; */}




function ContactForm() {
  const [name, setName] = useState('');
  const [emailid, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [textError, setTextError] = useState('');

  const handleSendEmail = async () => {
    // Perform form validation before sending email
    if (!name) {
      setNameError('Name cannot be blank');
      return;
    } else {
      setNameError('');
    }

    if (!emailid || !/^\S+@\S+\.\S+$/.test(emailid)) {
      setEmailError('Please enter a valid email address');
      return;
    } else {
      setEmailError('');
    }

    if (!subject) {
      setSubjectError('Subject cannot be blank');
      return;
    } else {
      setSubjectError('');
    }

    if (!text) {
      setTextError('Message cannot be blank');
      return;
    } else {
      setTextError('');
    }

    try {
      const response = await axios.post('https://asp-api.vercel.app/api/send-email', {
        name,
        emailid,
        subject,
        text,
      });
      console.log('Server response:', response.data);
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Check console for details.');
    }
  };

  return (
    <div className="container">
      <div className="contact-form">
        <div className="contact-inputs">
          <div className="row">
            <h3 style={{ textAlign: 'center' }}>
              <b>GOT A QUESTION?</b>
            </h3>
            <p>We’re here to help and answer any question you might have. We look forward to hearing from you!</p>
            <div className="col-md-6 form-group">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="name"
                placeholder="Your Name"
                required=""
              />
              <div className="error-message">{nameError}</div>
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                value={emailid}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                required=""
              />
              <div className="error-message">{emailError}</div>
            </div>
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="form-control"
              name="subject"
              id="subject"
              placeholder="Subject"
              required=""
            />
            <div className="error-message">{subjectError}</div>
          </div>
          <div className="form-group mt-3">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="form-control"
              name="message"
              rows={5}
              placeholder="Message"
              required=""
            />
            <div className="error-message">{textError}</div>
          </div>
          <div className="my-3"></div>
          <div className="text-center">
            <button
              type="submit"
              onClick={handleSendEmail}
              style={{
                backgroundColor: 'skyblue',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
