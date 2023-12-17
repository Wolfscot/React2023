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

const Header = ({ type }) => {
    const [openDate, setOpenDate] = useState(false);
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 2,
        children: 0,
        room: 1,
    });
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "increment" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    return (

        <div className="header">
            <div className={type === "list" ? "header-container listMode" : "header-Container"}>
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
                {type !== "list" && (
                    <>
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
                                <span onClick={() => setOpenDate(!openDate)} className="header-search-text">{`${format(dates[0].startDate, "MM/dd/yyyy")} до ${format(
                                    dates[0].endDate,
                                    "MM/dd/yyyy"
                                )}`}</span>
                                {openDate && (<DateRange
                                    editableDateInputs={true}
                                    onChange={item => setState([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={dates} className="date"
                                    minDate={new Date()}
                                />
                                )}
                            </div>
                            <div className="header-search-item">
                                <FontAwesomeIcon icon={faPerson} className="header-icon" />
                                <span className="header-search-text" onClick={() => setOpenOptions(!openOptions)}>{`${options.adult} възрастни · ${options.children} деца · ${options.room} стаи`}</span>
                                <div className="options">
                                    <div className="option-item">
                                        <span className="option-text">Възрастни</span>
                                        <div className="option-counter">
                                            <button className="option-counter-button" disabled={options.adult <= 1}
                                                onClick={() => handleOption("adult", "decrement")}>-</button>
                                            <span className="option-counter-number">{options.adult}</span>
                                            <button className="option-counter-button" onClick={() => handleOption("adult", "increment")}>+</button>
                                        </div>
                                    </div>
                                    <div className="option-item">
                                        <span className="option-text">Деца</span>
                                        <div className="option-counter">
                                            <button className="option-counter-button" disabled={options.children <= 0} onClick={() => handleOption("children", "decrement")}>-</button>
                                            <span className="option-counter-number">{options.children}</span>
                                            <button className="option-counter-button" onClick={() => handleOption("children", "increment")}>+</button>
                                        </div>
                                    </div>
                                    <div className="option-item">
                                        <span className="option-text">Стаи</span>
                                        <div className="option-counter">
                                            <button className="option-counter-button" disabled={options.room <= 1} onClick={() => handleOption("room", "decrement")}>-</button>
                                            <span className="option-counter-number">{options.room}</span>
                                            <button className="option-counter-button" onClick={() => handleOption("room", "increment")}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="header-search-item">
                                <button className="header-btn">Търсене</button>
                            </div>

                        </div>
                    </>
                )}
            </div>
        </div>

    )
}

export default Header;