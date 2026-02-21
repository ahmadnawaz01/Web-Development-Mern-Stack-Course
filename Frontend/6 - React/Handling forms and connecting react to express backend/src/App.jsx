import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'


function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()
  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }

  const onSubmit = async (data) => {
    // await delay(2);  //simulating network delay
    let r = await fetch("http://localhost:3000/",{method:"POST",headers: {
    "Content-Type": "application/json",
  }, body:JSON.stringify(data)});
    let res=await r.text();

    console.log(data,res);
    // if (data.username != "ahmad") {
    //   setError("root", { message: "your form is not in good order becix username is invalid" })
    // }
    // if(data.username=="nawaz")
    // {
    //   setError("block", { message: "this is blocked" })
    // }
  }


  return (
    <>
      {isSubmitting && <div>submitting......</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='usernmae' {...register("username", {
            required: { value: true, message: "this is required field" }, minLength: {
              value: 3, message: "Min length is 3"
            }, maxLength: { value: 8, message: "Max Length is 8" }
          })} type="text" />
          {errors.username && <div className='red'>{errors.username.message}</div>}
          <br />
          <input placeholder='password' {...register("password", {
            required: { value: true, message: "this is required field" }, minLength: {
              value:
                3, message: "minmum length of password is 3"
            }
          })} type="password" />
          {errors.password && <div className='red'>{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="submit" />
          {errors.root && (
            <div className="red">
              {errors.root.message}
            </div>
          )}
          {errors.block && (
            <div className="red">
              {errors.block.message}
            </div>
          )}
        </form>
      </div>
    </>
  )
}

export default App