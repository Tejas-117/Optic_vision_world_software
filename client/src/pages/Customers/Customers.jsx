import "./Customers.css";
// import logo from '../../assets/LOGO.svg';
import icon from '../../assets/icon.svg';
import homeIcon from '../../assets/Home-icon.svg';
import customerIcon from '../../assets/Customers-icon.svg';
import statsIcon from '../../assets/Stats-icon.svg';
import mailIcon from '../../assets/Mail-icon.svg';
import inventoryIcon from '../../assets/Inventory-icon.svg';
import remindersIcon from '../../assets/Reminders-icon.svg';
import logoutIcon from '../../assets/Logout-icon.svg';
import billIcon from '../../assets/Bill-icon.svg';

function Customers() {
    return(
        <div className="container-fluid " style={{height: 100+"vh"}}>

            <div className="row">

                {/* General navbar  */}

                <div className="col-sm-2 navbar ovw-navbar bg-light align-items-start px-3" style={{height: 100+"vh"}}>
                    <div className="d-flex ovw-navbar-content flex-column">
                        <img className="img-fluid mb-3 shadow-sm" src={icon} alt=""/>
                        <button type="button" className="d-flex ovw-nav-btn justify-content-center ovw-text-color-3 "><img class='img-fluid ovw-navbar-icon p-0' src={homeIcon} alt="Home" /></button>
                        <button type="button" className="d-flex ovw-nav-btn justify-content-center ovw-text-color-3 "><img class='img-fluid ovw-navbar-icon p-0' src={customerIcon} alt="Customers" /></button>
                        <button type="button" className="d-flex ovw-nav-btn justify-content-center ovw-text-color-3 "><img class='img-fluid ovw-navbar-icon p-0' src={inventoryIcon} alt="Inventory" /></button>
                        <button type="button" className="d-flex ovw-nav-btn justify-content-center ovw-text-color-3 "><img class='img-fluid ovw-navbar-icon p-0' src={statsIcon} alt="Stats" /></button>
                        <button type="button" className="d-flex ovw-nav-btn justify-content-center ovw-text-color-3 "><img class='img-fluid ovw-navbar-icon p-o' src={mailIcon} alt="Mails & SMS" /></button>
                        <button type="button" className="d-flex ovw-nav-btn justify-content-center ovw-text-color-3 "><img class='img-fluid ovw-navbar-icon p-0' src={remindersIcon} alt="Reminders" /></button>
                        <button type="button" className="d-flex ovw-nav-btn justify-content-center ovw-text-color-3 "><img class='img-fluid ovw-navbar-icon p-0' src={billIcon} alt="bills" /></button>
                        <button type="button" className="d-flex ovw-nav-btn justify-content-center ovw-text-color-3 "><img class='img-fluid ovw-navbar-icon p-0' src={logoutIcon} alt="Logout" /></button>
                    </div>
                </div>

                {/* Function related Navbar */}
                
                <div className="col-sm-2 ovw-function-navbar  shadow-lg bg-light align-items-start px-3"></div>


                <div className="col-sm-7">
                    hello
                </div>
            </div>
        </div>
    );
}

export default Customers;