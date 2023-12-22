import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'

import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import { socialLinks } from "../constants";
import { Link } from "react-router-dom";
import image from '../assets/icons/twitter.svg'
import github from '../assets/icons/github.svg'
import  linkedin  from "../assets/icons/linkedin.svg";


function Contact() {
  const [form ,setForm]=useState({name:"",email:"",message:''})
  const [isLoading, setIsLoading]=useState(false)

  const  {alert,showAlert,hideAlert}=useAlert();

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  };

  const handleSubmit=(e)=>{
    console.log("entered here")
    
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit')
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
          from_name: form.name,
          to_name: "Vijay",
          from_email: form.email, // Use the email from the form
          to_email: 'vijaykumar022103@gmail.com', // Specify the desired recipient email
          message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
  ).then(()=>{
      setIsLoading(false);
      showAlert({show:true,text:"message sent succefulluly" , type:'success'})
      setTimeout(()=>
      {
        setCurrentAnimation('idle')
      setForm({name:'',email:"",message:""})
        
      },[2000])
    }).catch((error)=>{
      setIsLoading(false)
      console.log(error)
       showAlert({show:true,text:"I didn't recieve your message", type:'danger'})
    })
    
  }


  return (
   <section className=" relative flex lg:flex-row flex-col max-container h-screen">
    {alert.show&& <Alert {...alert}/>}
     
    <div className=" flex-1 min-w-[50%] flex flex-col">
         <h1 className="head-text">Get In Touch</h1>         
         <form  className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
            <label className="text-black-500 font-semibold">
              Name
             <input 
                type="text"
                name="name"
                className="input"
                placeholder="Enter your name"
                required
                value={form.name}
                onChange={handleChange}
                
                />
            </label>

            <label className="text-black-500 font-semibold">
              E-mail
             <input 
                type="email"
                name="email"
                className="input"
                placeholder="entermail@gmail.com"
                required
                value={form.email}
                onChange={handleChange}
               
                />
            </label>

            <label className="text-black-500 font-semibold">
              Your Message
             <input 
                name="message"
                rows={4}
                className="textarea"
                placeholder="Enter your name"
                required
                value={form.message}
                onChange={handleChange}
               
                />
            </label>
            <button type="submit" className="btn"  disabled={isLoading}>
            {isLoading? 'Sending...' :'Send Message'}
            </button>
         </form>
        
        
        <div className="flex flex-col gap-4 py-4 mt-5">
         <p className=" text-lg font-semibold py-2 mt-2">Reach me out and see my works from below links:</p>
         <div className="flex items-center gap-11">
         <Link to='https://twitter.com/Vijay200321' className="flex items-center flex-col">
             <img src={image} width={38}/>
             <p className="text-sm font-semibold  text-black-500">Twitter</p>
         </Link>
         <Link to='https://github.com/vijay0221' className="flex items-center flex-col">
             <img src={github} width={38}/>
             <p className="text-sm font-semibold text-black-500">Git Hub</p>
         </Link>
         <Link to='https://www.linkedin.com/in/vijay-kumar-78329727b/' className="flex items-center flex-col">
              <img src={linkedin} width={38}/>
              <p className="text-sm font-semibold text-black-500">linkedin</p>
         </Link>
         </div>
        </div>
     
    </div>

  
   </section>
  )
}

export default Contact
