import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './header.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import { format } from "date-fns";

const Header = () => {
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    return (

        <div className="header">
            <div className="header-container">
                <div className="header-list">
                    <div className="header-list-item active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Престой</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Полети</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Коли под наем</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Атракции</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Такси от/до летище</span>
                    </div>
                </div>

                <h1 className="header-title">Намерете място за настаняване</h1>
                <p className="header-desc">
                    Търсете оферти за хотели, частни имоти и много повече..
                </p>
                <button className="header-btn">Вход / Регистрация</button>
                <div className="header-search">
                    <div className="header-search-item">
                        <FontAwesomeIcon icon={faBed} className="header-icon" />
                        <input type="text" placeholder="Накъде отивате" className="header-search-input" />
                    </div>
                    <div className="header-search-item">
                        <FontAwesomeIcon icon={faCalendarDays} className="header-icon" />
                        <span className="header-search-text">{`${format(dates[0].startDate, "MM/dd/yyyy")} до ${format(
                            dates[0].endDate,
                            "MM/dd/yyyy"
                        )}`}</span>
                        <DateRange
                            editableDateInputs={true}
                            onChange={item => setState([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={dates} className="date"
                        />
                    </div>
                    <div className="header-search-item">
                        <FontAwesomeIcon icon={faPerson} className="header-icon" />
                        <span className="header-search-text"></span>
                        <div className="options">
                            <div className="option-item">
                                <span className="option-text">Възрастни</span>
                                <div className="option-counter">
                                    <button className="option-counter-button">-</button>
                                    <span className="option-counter-button"></span>
                                    <button className="option-counter-button">+</button>
                                </div>
                            </div>
                            <div className="option-item">
                                <span className="optionText">Деца</span>
                                <div className="option-counter">
                                    <button className="option-counter-button">-</button>
                                    <span className="option-counter-button"></span>
                                    <button className="option-counter-button">+</button>
                                </div>
                            </div>
                            <div className="option-item">
                                <span className="optionText">Стая</span>
                                <div className="option-counter">
                                    <button className="option-counter-button">-</button>
                                    <span className="option-counter-button"></span>
                                    <button className="option-counter-button">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-search-item">
                        <button className="header-btn">Търсене</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header;