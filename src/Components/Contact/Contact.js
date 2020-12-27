import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    const [name, setName] = useState("");
    const [nameFlag, setNameFlag] = useState(false);
    const [nameErr, setNameErr] = useState("");

    const setNameField = (event) => {
        setName(event.target.value);
    }

    const nameValidate = (event) => {
        if(name!=="")
        {
          setNameFlag(true);
          setNameErr("");
        }
        else
        {
          setNameFlag(false);
          setNameErr("*Name Field is compulsary");
        }
    }

    const [email, setEmail] = useState("");
    const [emailFlag, setEmailFlag] = useState(false);
    const [emailErr, setEmailErr] = useState("");

    const setEmailField = (event) => {
        setEmail(event.target.value);
    }

    const emailValidate = (event) => {
        // String regex = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$';
        if(email==="")
        {
          setEmailFlag(false);
          setEmailErr("*Email Field is compulsary");
        }
        else if(!email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"))
        {
          setEmailFlag(false);
          setEmailErr("Invalid email.Enter valid email(eg: example@gmail.com)");
        }
        else
        {
          setEmailFlag(true);
          setEmailErr("");
        }
    }

    const [reason, setReason] = useState("");
    const [reasonFlag, setReasonFlag] = useState(false);
    const [reasonErr, setReasonErr] = useState("");

    const setReasonField = (event) => {
        setReason(event.target.value);
    }

    const reasonValidate = (event) => {
        if(reason==="")
        {
          setReasonFlag(false);
          setReasonErr("*Reason Field is compulsary.");
        }
        else if(reason.length>200 || reason.length<20)
        {
          setReasonFlag(false);
          setReasonErr("Reason must contain 20-200 characters.");
        }
        else
        {
          setReasonFlag(true);
          setReasonErr("");
        }
    }

    const submit = () => {
        if(
          nameFlag===true &&
          emailFlag===true
          )
        {
          
        }
        else
        {
          nameValidate();
          emailValidate();
          reasonValidate();
        }
    }


    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return(
        <div id='contact'>
            <span id="goto" style = {{marginTop: "-300px", paddingBottom: "300px", display: "block"}}> &nbsp; </span>
            <div data-aos='fade-down' style={{color:'#fa741b'}} className='f2 b tc'>Connect Us At</div>
        <div className='flex justify-around ma3 mb5'>
            <div data-aos='fade-up' className='shadow-4 pa4'>
                <div>
                    <p className='f2 b'>Reach Us At</p>
                    <p className='f3 b ma0'>Name :</p>
                    <input 
                    type='text' 
                    className='pr6 pv1' 
                    autoComplete = "blej"
                    onChange = {(event) => setNameField(event)}
                    onBlur = {() => nameValidate()}
                    placeholder = "Enter your name"/>
                    <div className="f4 red">{`${nameErr}`}</div>
                    <p className='f3 b ma0 mt3'>Email :</p>
                    <input 
                    type='email' 
                    className='pr6 pv1'
                    autoComplete = "blej"
                    onChange = {(event) => setEmailField(event)}
                    onBlur = {() => emailValidate()}
                    placeholder = "Enter your email"/>
                    <div className="f4 red">{`${emailErr}`}</div>
                    <p className='f3 b ma0 mt3'>Message :</p>
                    <textarea 
                    type='text'
                    className='w-100'
                    autoComplete = "blej"
                    onChange = {(event) => setReasonField(event)}
                    onBlur = {() => reasonValidate()}/>
                    <div className="f4 red">{`${reasonErr}`}</div>
                    <input
                    style = {{width: "305px"}}
                    className="shadow-4 b pv2 input-reset grow pointer dib" 
                    type="submit" 
                    value="Send"
                    onClick = {() => submit()}></input>
                </div>
            </div>
            <div data-aos='fade-up'>
                <p className='f2 ma0 b'>Address</p>
                <p>NEAR  MRC GODOWN, OPP.</p> 
                <p>SBI BANK, UBALE NAGAR,</p>
                <p className='f2 ma0 b'>Contact Details</p>
                <p><span className='b'>MOB : </span>9822823513, 7620858694</p>
                <p><span className='b'>E-Mail : </span>boraautomobiles99@gmail.com</p>
            </div>
        </div>
        </div>
    );
}

export default Contact;