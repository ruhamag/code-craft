import htmlImage from './image/html.jpg'
import cssImage from './image/css.jpg'
import javaImage from './image/java-script.jpg'
import figmaImage from './image/figma.jpg'

const Skills = ()=> {
    return(
        <div className="skills-container">
            <h1>My Skills</h1>
            <div className="skills-box-one">
              <div className="html">
                 <img src={htmlImage} />
                 <h4>HTML</h4>
                 <div className='level'>basic</div>
              </div>
              <div className="css">
                <img src={cssImage} />
                <h4>CSS</h4>
                <div className='level'>basic</div>
              </div>
            </div>
            <div className="skills-box-two">
              <div className="java-script">
                <img src={javaImage} />
                <h4>Java-Script</h4>
                <div className='level'>basic</div>
              </div>
              <div className="figma">
                        <img src={figmaImage} />
                        <h4>Figma</h4>
                        <div className='level' >basic</div>
                </div>
              
            </div>
        </div>
    )
 }

 export default Skills