import React, {useState} from 'react';
import {useSelector} from "react-redux";

const LoginData = () => {
    const loginData = useSelector(state => state.main.main.login)
    const [mail, setMail] = useState(loginData.email)
    const [password, setPassword] = useState(loginData.password)
    const [devices, setDevices] = useState(loginData.devices)

    return (
        <section className='column-data'>
            <div className="column-data__band">Xiaomi cloud login</div>
            <div className='row column-data__row'>
                <div className="input-block">
                    <label>E-mail</label>
                    <input
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        type="text"
                        className="input"
                    />
                </div>
                <div className="input-block">
                    <label>Password</label>
                    <input
                        value={password}
                        type="password"
                        className="input"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="input-block">
                    <label>Server</label>
                    <select className="input">
                        {loginData.servers.map(server =>
                            <option
                                key={server.country}
                                value={server.value}
                            >
                                {server.country}
                            </option>
                        )}
                    </select>
                </div>
                <button className="button">Get devices</button>
            </div>
            <div className="input-block row__input-block">
                <label>devices</label>
                <input
                    value={devices}
                    onChange={(e) => setDevices(e.target.value)}
                    type="text"
                    className="input input_long"/>
            </div>

        </section>
    );
};

export default LoginData;