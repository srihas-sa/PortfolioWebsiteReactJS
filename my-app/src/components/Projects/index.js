import {React,Component} from 'react'
import './index.css'

const projectsStatic= [
    {id:1, imageurl:"https://res.cloudinary.com/dkcqlgabg/image/upload/v1702372732/Screenshot_2023-12-12_144839_ndkxyp.png", title:"Food Munch Website", discription:"An e-commerce website built with ReactJS offers a dynamic and seamless shopping experience, leveraging React's efficient component-based architecture for responsive user interfaces.",websitelink:"https://fodmunchweb.ccbp.tech",githublink:"https://github.com/srihas-sa/FoodMunchWebsite.git"},
    {id:2, imageurl:"https://res.cloudinary.com/dkcqlgabg/image/upload/v1702373161/Screenshot_2023-12-12_145547_nt3oh9.png", title:"Beginners Gym Website", discription:"An e-commerce website built with ReactJS offers a dynamic and seamless shopping experience, leveraging React's efficient component-based architecture for responsive user interfaces.",websitelink:"https://gym32.ccbp.tech/",githublink:"https://github.com/srihas-sa/GymWebsite.git"}


]

const projectDynammic = [
    {id:1,imageurl:"https://res.cloudinary.com/dkcqlgabg/image/upload/v1701435494/Screenshot_2023-12-01_182727_phs6u3.png", title:"You Tube Clone Website", discription:"ReactTube is a meticulously crafted YouTube clone developed using ReactJS, showcasing my expertise in front-end web development. This project replicates key features of the popular video-sharing platform, providing users with a familiar and seamless experience.",websitelink:"https://youtubeclone2.ccbp.tech",githublink:"https://github.com/srihas-sa/YouTube-Final-clone.git"},
    {id:2, imageurl:"https://res.cloudinary.com/dkcqlgabg/image/upload/v1700822955/Screenshot_2023-08-28_193043_unlkiw.png", title:"E-commerce website", discription:"An e-commerce website built with ReactJS offers a dynamic and seamless shopping experience, leveraging React's efficient component-based architecture for responsive user interfaces.",websitelink:"",githublink:"https://github.com/srihas-sa/E-Commerce-Final.git"},
    {id:3, imageurl:"https://res.cloudinary.com/dkcqlgabg/image/upload/v1702371623/Screenshot_2023-12-12_142924_epp7gd.png", title:"Book-Hub", discription:"An e-commerce website built with ReactJS offers a dynamic and seamless shopping experience, leveraging React's efficient component-based architecture for responsive user interfaces.",websitelink:"https://BOOkHubsri.ccbp.tech",githublink:"https://github.com/srihas-sa/BookHub-ReactJs.git"},
    {id:2, imageurl:"https://res.cloudinary.com/dkcqlgabg/image/upload/v1702373161/Screenshot_2023-12-12_145547_nt3oh9.png", title:"Beginners Gym Website", discription:"An e-commerce website built with ReactJS offers a dynamic and seamless shopping experience, leveraging React's efficient component-based architecture for responsive user interfaces.",websitelink:"https://gym32.ccbp.tech/",githublink:"https://github.com/srihas-sa/GymWebsite.git"}


]

class  Projects extends Component { 
    state= {
        projectcategory:"Dynamic",
    }

    onClickedDynamicwebsites = () => {
        this.setState({projectcategory:"Dynamic"})
    }

    onClickedStaticwebsites = () => {
        this.setState({projectcategory:"Static"})
    }

    render() {
        const {projectcategory}=this.state
        const dynamic= "Dynamic" === projectcategory
        console.log(dynamic)
    
return (
    <div className='ProjectsSection'>
        <div className = "title" >
        <h1 className='heading'>My Projects</h1>
        </div>
        
        <div className='buttonscontainerstaticDynamic'>
            <button type="button" onClick={this.onClickedDynamicwebsites} className='buttonss'>Dynamic</button>
            <button type="button" onClick={this.onClickedStaticwebsites} className='buttonss'>Static</button>
        </div>
        <div>
            {
                dynamic ? (
                    <div className='ProjectsContainer'>
                        {projectDynammic.map((eachproject)=> ( 
                            <div className='individualProject'>
                            <img src={eachproject.imageurl} alt="Individual Project Image" className='individualProjectImage'/>
                            <div className='individualmatter'>
                                <h1>{eachproject.title}</h1>
                                <p>{eachproject.discription}</p>
                                <div className='ViewcodeContainer'>
                                    <div className='button'>
                                        <a href={eachproject.websitelink} target="_blank" className='projectbuttons'>Website</a>
                                    </div>
                                    <div className='button'>
                                        <a href={eachproject.githublink} target="_blank" className='projectbuttons'>Source Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                        </div>
                ) : (
                    <div className='ProjectsContainer'>
                        {projectsStatic.map((eachproject)=> ( 
                            <div className='individualProject'>
                            <img src={eachproject.imageurl} alt="Individual Project Image" className='individualProjectImage'/>
                            <div className='individualmatter'>
                                <h1>{eachproject.title}</h1>
                                <p>{eachproject.discription}</p>
                                <div className='ViewcodeContainer'>
                                    <div className='button'>
                                        <a href={eachproject.websitelink} target="_blank" className='projectbuttons'>Website</a>
                                    </div>
                                    <div className='button'>
                                        <a href={eachproject.githublink} target="_blank" className='projectbuttons'>Source Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                        </div>
                )
            }
        </div>
        </div>


)

    }
}
export default Projects