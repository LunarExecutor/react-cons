import data from '../json/data.json'
import { useState } from 'react'
const Projects = () => {
    const [filter, setFilter] = useState('Projects')
    return <section className="products section" id="products">
    <div className="products__container container">
      <h2 className="section__title">
        Our Projects <br />
        Explore What We Did
      </h2>

      <ul className="products__filters">
        <li
          className={"products__item products__line ${filter === 'Projects' ? 'active' : ''}"}
          onClick={() => setFilter('Projects')}
          data-filter=".delicacies"
        >
          <h3 className="products__title">Chula Vista</h3>
          <span className="products__stock">3 photos</span>
        </li>
        <li 
        className={"products__item products__line ${filter === 'La Jolla' ? 'active' : ''}"}
        onClick={() => setFilter('La Jolla')}
 data-filter=".La Jolla">
          <h3 className="products__title">La Jolla</h3>
          <span className="products__stock">2 photos</span>
        </li>
        <li
         className={"products__item products__line ${filter === 'San Diego' ? 'active' : ''}"}         
         onClick={() => setFilter('San Diego')}
 data-filter=".cake">
          <h3 className="products__title">San Diego</h3>
          <span className="products__stock">4 photos</span>
        </li>
      </ul>

      <div className="products__content grid">
        {data.categories.map((category, index) => {
            return category.category === filter && 
            ( <article className="products__card Projects">
            <div className="products__shape">
              <img
                src={category.imageUrl}
                alt=""
                className="products__img"
              />
            </div>
            <div className="products__data">
              <h3 className="products__name">{category.title}</h3>
  
              
            </div>
          </article> 
          );
        })}
        
        </div>
    </div>
  </section>
}

export default Projects;