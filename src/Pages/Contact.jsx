import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { firestore as db } from "./Firebase";
import { addDoc, collection } from "firebase/firestore"
import { useState } from "react";
import Swal from 'sweetalert2'

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const  [message, setMessage] = useState("");

  const userCollection = collection(db, "contact");

  const handleSubmit = (e) => {
    e.preventDefault();

    addDoc(userCollection,{
      name: name,
        email: email,
        message: message,
    })
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Thank You',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; (123) 456-7869
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                carrental@carmail.com
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp; Belgrade,
                Serbia
              </a>
            </div>
            <div className="contact-div__form">
              <form onSubmit={handleSubmit}>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Joe Shmoe"'value={name} onChange={(e)=>{
                  setName(e.target.value)
                }}></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com" value={email} onChange={(e)=>{
                  setEmail(e.target.value)
                }}></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.." value={message} onChange={(e)=>{
                  setMessage(e.target.value)
                }}></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                  Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(123) 456-7869</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
