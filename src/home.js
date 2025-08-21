 import myImage from'./image/picture.jpg'
 
 const Home = () => {
    return(
        <div className="home-container">
            <div className="image">
                <img src={myImage} />
            </div>
            <div className="home">
                <h1>Hello! I'M <span>Ruhama</span> < br/>welcome to my portfolio</h1>
                <p> I am an aspiring Front-end developer and a UX/UI and<br/> digital marketing enthusiast</p>
                <a href="/cv.pdf" download="ruhamam-cv.pdf">
                <button> Download CV</button>
                </a>
            </div>
            
        </div>
    )
 }

 export default Home