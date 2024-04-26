

const Blog = () => {
    return  <section className="blog section" id="blog">
        <div className="blog__container container">
          <h2 className="section__title">
          The Blog Zone <br />
          Insights & Ideas
          </h2>

          <div className="blog__content grid">
            <article className="blog__card">
              <div className="blog__image">
                <img src="./media/dd.png" alt="" className="blog__img" />
                <a href="#" className="blog__button">
                  <i className="bx bx-right-arrow-alt"></i>
                </a>
                <div className="blog__stats">
                  <div className="blog__reaction">
                    <i className="bx bx-comment"></i>
                    <span>12</span>
                  </div>
                  <div className="blog__reaction">
                    <i className="bx bx-show"></i>
                    <span>76,5k</span>
                  </div>
                </div>
              </div>

              <div className="blog__data">
                <h2 className="blog__title">The Future of Sustainable Construction</h2>
                <p className="blog__description">
                Explore eco-friendly trends and innovations in construction.
                </p>
              </div>
            </article>
            <article className="blog__card">
              <div className="blog__image">
                <img src="./media/ff.png" alt="" className="blog__img" />
                <a href="#" className="blog__button">
                  <i className="bx bx-right-arrow-alt"></i>
                </a>
                <div className="blog__stats">
                  <div className="blog__reaction">
                    <i className="bx bx-comment"></i>
                    <span>96</span>
                  </div>
                  <div className="blog__reaction">
                    <i className="bx bx-show"></i>
                    <span>356,7k</span>
                  </div>
                </div>
              </div>

              <div className="blog__data">
                <h2 className="blog__title">Mastering Home Renovation: Tips and Tricks</h2>
                <p className="blog__description">
                Expert advice for successful home renovations.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
}

export default Blog;