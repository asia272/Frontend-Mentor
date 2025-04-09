import React, { useState } from 'react';
import RadioSelectedIcon from '../assets/images/icon-radio-selected.svg';
import iconCheckBox from "../assets/images/icon-checkbox-check.svg";
import { useForm } from "react-hook-form";
import SubmiteMsg from './SubmiteMsg';
import './FormContainer.css';

const FormContainer = () => {
    let [selected, setSelected] = useState("");
    let [consent, setConsent] = useState(false);
    let [formData , setFormData] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue, trigger ,reset
    } = useForm();

    register("query", { required: "Please selected a query type" });
    register("consent", { required: "To submit this form, please consent to being contacted" });


    let formSubmit = (data) => {
        console.log(data)
        setFormData(data)
        reset();
        setSelected("")
        setConsent("")
    }
    return (
        <>
            <form onSubmit={handleSubmit(formSubmit)}>
            {/* {formData && <SubmiteMsg formData={formData} onClose={() => setFormData(null)} />} */}
            <SubmiteMsg formData={formData} onClose={() => setFormData(null)}
 />
                <h1>Contact Us</h1>
                {/* First Name */}
                <div className='fname'>
                    <label htmlFor="fname">First Name  <span>*</span></label>
                    <input
                        {...register("fname", { required: "This field is required" })} id='fname'
                        className={errors.lname ? "input-error" : ""} />

                    {errors.fname && <p>{errors.fname.message}</p>}
                </div>
                {/* Last Name */}
                <div className='lname'>
                    <label htmlFor="lname">Last Name <span>*</span></label>
                    <input type="text"
                        {...register("lname", { required: "This field is required" })} id='lname'
                        className={errors.lname ? "input-error" : ""} />
                    {errors.lname && <p>{errors.lname.message}</p>}
                </div>
                {/* Email */}
                <div className='email'>
                    <label htmlFor="Email">Email Address <span>*</span></label>
                    <input id='Email'
                        type='email'
                        {...register("email", { required: "This field is required" })}
                        className={errors.email ? "input-error" : ""}
                    />
                    {errors.email && <p>{errors.email.message}</p>}

                </div>
                {/* Query Type */}
                <div className='query'>
                    <label htmlFor="qType">Query Type <span>*</span></label>
                    <div className="quries" >
                        <div style={{ backgroundColor: selected === "general" ? "hsl(148, 38%, 91%)" : "transparent" }}
                            className='gQuery' onClick={() => {
                                setSelected("general");
                                setValue("query", "general");
                                trigger("query");
                            }}>
                            {selected === "general" ? (
                                <img src={RadioSelectedIcon} alt="RadioSelectedIcon" />
                            ) : (
                                <span className='circle'></span>
                            )}
                            <label htmlFor="gQuery">General Enquiry</label>
                        </div>
                        <div style={{ backgroundColor: selected === "support" ? "hsl(148, 38%, 91%)" : "transparent" }}

                            className='sQuery' onClick={() => {
                                setSelected("support");
                                setValue("query", "support");
                                trigger("query");
                            }}
                        >
                            {selected === "support" ? (
                                <img src={RadioSelectedIcon} alt="RadioSelectedIcon" />
                            ) : (
                                <span className='circle'></span>
                            )}
                            <label htmlFor="sQuery">Support Request </label>

                        </div>
                    </div>
                    {errors.query && <p>{errors.query.message}</p>}

                </div>
                {/* Message */}
                <div className='msg'>
                    <label htmlFor="msg">Message <span>*</span></label>
                    <textarea name="msg" id="msg"
                      rows={4}
                        {...register("msg", { required: "This field is required" })}
                        className={errors.msg ? "input-error" : ""}
                    ></textarea>
                    {errors.msg && <p>{errors.msg.message}</p>}
                </div>
                {/* Consent */}
                <div className='consent' onClick={() => {
                    setConsent(prev => !prev);
                    setValue("consent", !consent);
                    trigger("consent");
                }}>
                    {
                        consent === true ? (
                            <img src={iconCheckBox} alt="iconCheckBox" />
                        ) : (
                            <span className='box'></span>
                        )
                    }
                    <label htmlFor="consent">I consent to being contacted by team *</label>

                </div>
                {errors.consent && <p>{errors.consent.message}</p>}
                <button>Submit</button>
            </form>
        </>

    );
}

export default FormContainer;
