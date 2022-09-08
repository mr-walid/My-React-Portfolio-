import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills i Have</h5>
      <h2> My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
              <h3>Frontend Development</h3>
              <div className="experience_content">
                <article className='experience_details' >
                        <BsPatchCheckFill className= "experience_details-icon"/>
                       <div>
                       <h4>Html</h4>
                        <small className='text-light'>Experienced</small>
                       </div>
                </article>
                <article className='experience_details' >
                        <BsPatchCheckFill className= "experience_details-icon"/>
                       <div>
                       <h4>Css</h4>
                        <small className='text-light'>Experienced</small>
                       </div>
                </article>
                <article className='experience_details' >
                        <BsPatchCheckFill className= "experience_details-icon"/>
                        <div>
                        <h4>javascript</h4>
                        <small className='text-light'>intermediate</small>
                        </div>
                </article>
                <article className='experience_details' >
                        <BsPatchCheckFill className= "experience_details-icon"/>
                       <div>
                       <h4>Bootstrap</h4>
                        <small className='text-light'>Experienced</small>
                       </div>
                </article>
                <article className='experience_details' >
                        <BsPatchCheckFill className= "experience_details-icon"/>
                        <div>
                        <h4>Sass</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                </article>
                <article className='experience_details' >
                        <BsPatchCheckFill className= "experience_details-icon"/>
                        <div>
                        <h4>React Js</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                </article>
                
              </div>
        </div>

        <div className="experience_backend">
        <h3>  Backend Development</h3>
              <div className="experience_content">
                <article className='experience_details' >
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                        <h4>Php</h4>
                        <small className='text-light'>intermediate</small>
                        </div>

                      </article>
                <article className='experience_details' >
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                        <h4>Spring boot (java) </h4>
                        <small className='text-light'>intermediate</small>
                        </div>
                        </article>
                <article className='experience_details'>
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                          <h4>Mysql</h4>
                          <small className='text-light'>experienced</small>
                        </div>
                </article>
                <article className='experience_details' >
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                        <h4>Sql server</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                </article>
                
              </div>
             
        </div>
      </div>
    </section>
  )
}

export default Experience
