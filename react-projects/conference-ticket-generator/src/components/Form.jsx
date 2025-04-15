import { useForm } from 'react-hook-form';
import "./utilite.css";
import uploadSvg from "../assets/images/icon-upload.svg"
import React, { useState, useRef } from 'react';


const Form = ({ setUserData }) => {
  const { register, handleSubmit, formState: { errors }, clearErrors } = useForm();
  const [image, setImage] = useState(null)
  const fileInputRef = useRef(null);


  const onSubmit = (data) => {
    console.log(data);

    const file = data.avatar[0];
    const imgUrl = URL.createObjectURL(file)

    setUserData({
      fullName: data.fullName,
      email: data.email,
      github: data.github,
      date: Date(),
      avater: imgUrl
    })
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    clearErrors("avatar");
  };
  return (
    <>
      <div className='main-container'>
        <div>
          <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
          <p className='head-p'>Secure your spot at next year's biggest coding conference.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* avatar section */}

          <div>
            <label htmlFor="avatar">Upload Avatar</label>
            <div
              className='avater-box'
              onClick={() => fileInputRef.current.click()} 
            >
              <input
                type="file"
                accept="image/*"
                {...register("avatar", { required: "Please choose an avatar" })}
                onChange={handleFileChange}
                className='hidden-file'
                ref={fileInputRef}
              />
              <img src={image ? image : uploadSvg} alt="Preview" />
            </div>
            {errors.avatar ? (
              <p className="error">{errors.avatar.message}</p>
            ) : (
              <p>Upload your photo (JPG or PNG, max size 500KB).</p>
            )}
          </div>

          {/* Name section */}
          <div>
            <label htmlFor="name">Name</label>
            <input {...register("fullName", { required: "Name is required" })}
              type="text" id='name'
              placeholder='your Full name'
              className={errors.fullName && "input-error"} />
            {errors.fullName && <p className='error'>{errors.fullName.message}</p>}
          </div>
          {/* Email section */}
          <div>
            <label htmlFor="email">Email Address</label>
            <input {...register("email", { required: "Email address is required" })}
              type="text" id='name'
              placeholder='example@emial.com'
              className={errors.email && "input-error"} />
            {errors.email && <p className='error'>{errors.email.message}</p>}
          </div>
          {/* github section */}
          <div>
            <label htmlFor="github">GitHub Username</label>
            <input
              {...register("github", { required: "github username is required" })}
              type="text" id='name'
              placeholder='@yourusername'
              className={errors.github && "input-error"} />
            {errors.github && <p className='error'>{errors.github.message}</p>}
          </div>

          <button>Generate My Ticket</button>
        </form>
      </div>


    </>

  )
}

export default Form

