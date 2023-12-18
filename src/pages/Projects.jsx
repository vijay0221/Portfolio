import { Link } from "react-router-dom"
import { projects } from "../constants"
import { arrow } from "../assets/icons"
import CTA from "../components/CTA"

function Projects() {
  return (
    <section className="max-container">
    <h1 className="head-text">
     My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
    </h1>

    <div className="mt-5 flex flex-col gap-3 text-slate-500" >
      <p>
      As a fresher, I have actively engaged in hands-on learning experiences from You Tube and Udemy ,
      undertaking various front-end projects to delve into the intricacies 
      of web development. Some notable projects include here, where I applied and honed
      my skills in front-end technologies.
      </p>
    </div>
   

    <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    <hr className="border-slate-200"/>
     <CTA/>
    </section>
  )
}

export default Projects
