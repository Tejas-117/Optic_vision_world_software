import "./Login.css";
import logo from '../../assets/LOGO.svg';
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/ContextProvider";

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [_, dispatch] = useContext(AppContext);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setMessage('');

        const res = await fetch(`/admin/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: userName, password })
        });
        const data = await res.json();
        setMessage(data.message);

        if(res.status === 200) {
            // save the logged in user info in the context and/or localStorage of the browser.            
            dispatch({ type: "LOGIN", payload: { message: "hello"} })

            setTimeout(() => {
                navigate("/calendar");
            }, 1500);
        }
    }

    useEffect(() => {
        console.clear();
        console.table({ userName, password });
    }, [userName, password])
    

    return (
        <div className="container-fluid" style={{height: 100+'vh'}}>
            <div className="row">
                <div className="col-sm-3">
                    <div className="d-flex pb-2 m-4 mb-2 h5 border-bottom border-3 ovw-text-color-3 ">
                        Administration & Management Services </div>
                    <div className="d-flex mx-4 mb-2" style={{width: 200 +'px'}}><img className="img-fluid" src={logo} alt=""/></div>
                </div>

                <div className="col-sm-6 align-items-center jutify-content-center" style={{height: 100+'vh'}}>
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{height: 100+'vh'}} > 
                        <form className="d-flex flex-column ovw-bg-color-0 p-5   rounded-4 shadow" onSubmit={handleSubmit}>
                            <h1 className="h2 ovw-text-color-3">Welcome back !</h1>
                            <h4 className="h6 ovw-text-color-2 mb-5">
                                Enter your login details to continue with your work...
                            </h4>
        
                            <div className="mb-4 inptbox ">
                                <input
                                    className="form-control ovw-border-color-3"
                                    type="email text"
                                    required
                                    name="user"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                                <span>Username</span>
                            </div>
        
                            <div className="mb-5 inptbox ">
                                <input
                                    className="form-control ovw-border-color-3"
                                    type="password" required
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span>Password</span>
                            </div>
        
                            <input
                                className="border-0 ovw-bg-color-3 py-1 rounded"
                                type="submit"
                                name="submitAll"
                                value="Login"
                            />
                            { message && <p className="d-flex flex-row justify-content-center py-2 ovw-text-color-2 ">{message}</p>}
                        </form>
                    </div>
                </div>
                <div className="col-sm-3"></div>
            </div>
        </div>
    );
}

export default Login;
