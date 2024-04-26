
const Hero = () => {

    const orderNow = () => {
        window.scroollTo ({
            top: 1150,
            behavior: 'smooth'
        })
    }


    return (
        <section
        className="hero section"
        id="home"
        style= {{backgroundImage: 'url("./media/12.jpg")'}}
      >
        <h1 className="hero__title">
          Start Your Project With Us <br />
        </h1>
        <button className="hero__button" onClick={orderNow}>Explore Now</button>
      </section>
    );
}
export default Hero;