import './LandingPage.css'


const LandingPage =()=>{
    return(
        <div className='topBackground' id='homepage'>
        <div className='landing'>
            <p className='greeting'>Hello My Name is</p>

            <h1 className='myName'>Racheal Aber</h1>

            <h3 className='myDescription'>A Creative Freelancer & Full Stack Developer</h3>

            <button className='btnKnowMore'>KNOW MORE</button>


        </div>

        <div>
            <img src='/Rachea.png' id='myImageTop'/>
        </div>
        </div>
    )

}
export default LandingPage