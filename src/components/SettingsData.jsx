import React, {useState} from 'react';
import {useSelector} from "react-redux";

const SettingsData = () => {
    const settingsData = useSelector(state => state.main.main.settings)
    const [token, setToken] = useState(settingsData.token)
    const [ip, setIp] = useState(settingsData.ip)
    const [port, setPort] = useState(settingsData.port)
    const [portEng, setPorEng] = useState(settingsData.engineeringPort)

    return (
        <section className='column-data'>
            <div className="column-data__band">manuell settings</div>
            <div className="input-block ">
                <label>Token</label>
                <input
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    type="text"
                    className="input input_average"/>
            </div>

                <div className='row input-block__row'>
                    <div className="input-block">
                        <label>IP Adress</label>
                        <input
                            type="text"
                            className="input"
                            value={ip}
                            onChange={(e) => setIp(e.target.value)}
                        />
                    </div>
                    <div className="input-block">
                        <label>Port des</label>
                        <input
                            type="text"
                            className="input input_small"
                            value={port}
                            onChange={(e) => setPort(e.target.value)}
                        />
                    </div>
                    <div className="input-block">
                        <label>Engineering Port</label>
                        <input
                            type="text"
                            className="input input_small"
                            value={portEng}
                            onChange={(e) => setPorEng(e.target.value)}
                        />
                    </div>
                </div>

        </section>
    );
};

export default SettingsData;