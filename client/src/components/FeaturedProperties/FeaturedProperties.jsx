import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fp-item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fp-img"
        />
        <span className="fp-name">Aparthotel Stare Miasto</span>
        <span className="fp-city">София</span>
        <span className="fp-price">Цени от $120</span>
        <div className="fp-rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fp-item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fp-img"
        />
        <span className="fp-name">Апарт Хотел Банско</span>
        <span className="fp-city">Банско</span>
        <span className="fp-price">Цени от  $140</span>
        <div className="fp-rating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fp-item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fp-img"
        />
        <span className="fp-name">Four Seasons Hotel</span>
        <span className="fp-city">Пловдив</span>
        <span className="fp-price">Цени от  $99</span>
        <div className="fp-rating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fp-item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fp-img"
        />
        <span className="fp-name">Holiday Inn</span>
        <span className="fp-city">Пловдив</span>
        <span className="fp-price">Цени от  $105</span>
        <div className="fp-rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;