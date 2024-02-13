import {React} from 'react'

import './index.css'

const Home = () => (
    <div className='home'>
        <div className='insidehome'>
            <div className='leftsidehome'>
            <div className='rightsidehomemobile'>
                    <img src="https://res.cloudinary.com/dkcqlgabg/image/upload/v1700801556/photos_2_qvgvh6.jpg" alt="ProfileImage" className='ProfileImage12'/>
            </div>
                <h1>Welcome to My Portfolio!
                    <br />
                    Hi, I'm <span className='spanele'>Srihas Edupuganti</span>
                    </h1>
                    <h1>  
                    a passionate&nbsp;
                    <span className="animation">Web Developer</span>
                    
                        </h1>
                   <p className='para'>  A dedicated web developer with a love for turning ideas into interactive and user-friendly digital experiences. My journey in the world of web development began with a fascination for crafting elegant solutions to complex problems.. I specialize in creating interactive and responsive web applications.</p>

                <div className='links'>
                    <a href="https://www.linkedin.com/in/edupuganti-srihas/" target="_blank" className='icons1'>Linkedin </a> 
                    <a href="https://github.com/srihas-sa" target="_blank" className='icons2'>Github</a>
                    <a href='https://drive.google.com/file/d/1L1FNn5aCMw8HJ7QW0C3hTEMr7mVAIsX3/view?usp=sharing' target="_blank" className='icons3'>Resume</a>
                </div>
            </div>
            <div className='rightsidehome'>
                
                <img src="https://res.cloudinary.com/dkcqlgabg/image/upload/v1700801556/photos_2_qvgvh6.jpg" alt="ProfileImage" className='ProfileImage'/>
                
            </div>
        </div>
        
    </div>
)

export default Home