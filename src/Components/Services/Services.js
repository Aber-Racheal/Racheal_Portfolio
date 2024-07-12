import './Services.css'
import '/home/studen/Desktop/My_portfolio/racheal-portfolio/src/App.css'

const Services = ()=>{
return(
    <div className='services'>



<h1 id='serviceTitle'>_Services</h1>
<h2 id='iCanDo'>What I Can Do</h2>
<div className='serviceCards'>

    <div className='skillCard'>
        <img src='/code.png' id='cardIcons'/>
        <h3 className='cardTitle'>Clean Code</h3>
        <p className='cardDescription'>Skill description</p>
    </div>

    <div className='skillCard'>
        <img src='/branding.png' id='cardIcons'/>
        <h3 className='cardTitle'>Branding</h3>
        <p className='cardDescription'>Skill description</p>
    </div>


    <div className='skillCard'>
        <img src='/review.png' id='cardIcons'/>
        <h3 className='cardTitle'>User Experience</h3>
        <p className='cardDescription'>Skill description</p>
    </div>
    
</div>



<div className='serviceCards'>

    <div className='skillCard'>
        <img src='./collaboration .png' id='cardIcons'/>
        <h3 className='cardTitle'>GitHuB Collaboration</h3>
        <p className='cardDescription'>Skill description</p>
    </div>

    <div className='skillCard'>
        <img src='' id=''/>
        <h3 className='cardTitle'>Skill title</h3>
        <p className='cardDescription'>Skill description</p>
    </div>


    <div className='skillCard'>
        <img src='' id=''/>
        <h3 className='cardTitle'>Skill title</h3>
        <p className='cardDescription'>Skill description</p>
    </div>
    
</div>
    </div>
)


}

export default Services