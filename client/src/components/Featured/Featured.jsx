import "./featured.css";
import sofia from "../../assets/images/sofia.jpg"
import bansko from "../../assets/images/bansko.jpg"
import plovdiv from "../../assets/images/plovdiv.png"

const Featured = () => {
    
    return (
      <div className="featured">
       
          
            <div className="featured-item">
              <img
                src={sofia}
                alt=""
                className="featured-img"
              />
              <div className="featured-titles">
                <h1>София</h1>
                <h2>123 места за настаняване</h2>
              </div>
            </div>
  
            <div className="featured-item">
              <img
                src={plovdiv}
                alt=""
                className="featured-img"
              />
              <div className="featured-titles">
                <h1>Пловдив</h1>
                <h2>123 места за настаняване</h2>
              </div>
            </div>
            <div className="featured-item">
              <img
                src={bansko}
                alt=""
                className="featured-img"
              />
              <div className="featured-titles">
                <h1>Пловдив</h1>
                <h2>123 места за настаняване</h2>
              </div>
            </div>         
    
      </div>
    );
  };

export default Featured