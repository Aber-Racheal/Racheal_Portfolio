import './About.css'
import '/home/studen/Desktop/My_portfolio/racheal-portfolio/src/App.css'

const About = ()=>{
return(
    <div className='about'>
        <div className='aboutContainer'>
            <div className='imageContainer'>
                <img src='/Rachea.jpg' id='myImage'/>
            </div>

            <div className='aboutContent'>
                <h1 className='aboutH'>_About</h1>
                <h1 className='aboutTitle'>Who Am I</h1>
                <p className='aboutParagraph'>Growing up, playtime meant exploring, not glued to screens. This tech-reliance has fueled unhealthy snacking habits and childhood obesity. Imagine using tech to empower children with nutritional knowledge before they reach for a snack. This is where Racheal’s software skills come in. She aims to create an engaging way for children to make informed choices about their diet, all within the tech world they know. It's like using technology to shoot two birds with one stone: play and eat but in a healthy way!</p>
                
                <div className='codeSkills'>
                    <div className='codeColumn'>
                      
                      <div>
                    <p className='skillParagraph'>Html5</p>
                    <img id='starRating'/>
                        </div>  

                        <div>
                    <p className='skillParagraph'>CSS3</p>
                    <img id='starRating'/>
                        </div>  

                        <div>
                    <p className='skillParagraph'>Javascript</p>
                    <img id='starRating'/>
                        </div>  
                    </div>
                    


                    <div className='codeColumn'>
                      
                      <div>
                    <p className='skillParagraph'>Kotlin</p>
                    <img id='starRating'/>
                        </div>  

                        <div>
                    <p className='skillParagraph'>Python</p>
                    <img id='starRating'/>
                        </div>  

                        <div>
                    <p className='skillParagraph'>Data and Software Architecture</p>
                    <img id='starRating'/>
                        </div>  
                    </div>
                    

                    <div className='codeColumn'>
                      
                      <div>
                    <p className='skillParagraph'>UX Design</p>
                    <img id='starRating'/>
                        </div>  

                        <div>
                    <p className='skillParagraph'>Product Management</p>
                    <img id='starRating'/>
                        </div>  

                        <div>
                    <p className='skillParagraph'>UX Reseach</p>
                    <img id='starRating'/>
                        </div>  
                    </div>
                    
                </div>
                <button id='btnCV'>Download CV</button>
            </div>
        </div>

    </div>
)
}
export default About