import "./searchItem.css";

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img
                src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
                alt=""
                className="si-item"
            />
            <div className="si-desc">
                <h1 className="si-title">Ramada Apartments</h1>
                <span className="siDistance">500m от център</span>
                <span className="si-taxi-op">Безплатно такси от летище</span>
                <span className="si-subtitle">
                    Студио с климатик
                </span>
                <span className="siFeatures">
                    Студио • 1 баня • 21m² 1 двойно легло
                </span>
                <span className="si-cancel-op">Безплатно анулиране</span>
                <span className="si-cancel-op-subtitle">
                    Можете да анулирате по-късно, така че вземете тази страхотна цена днес!
                </span>
            </div>
            <div className="si-details">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="si-detail-texts">
                    <span className="si-price">$112</span>
                    <span className="si-tax-op">Включва данъци и такси</span>
                    <button className="si-check-button">Вижте наличността</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;