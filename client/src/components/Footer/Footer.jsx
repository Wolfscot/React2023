import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-lists"> 
        <ul className="f-list-item">
          <li className="f-list-item">Home</li>
          <li className="f-list-item">Hotels</li>          
        </ul>
       </div>
      <div className="f-text">Copyright © 2023 TellMeTraveler.</div>
    </div>
  );
};

export default Footer;