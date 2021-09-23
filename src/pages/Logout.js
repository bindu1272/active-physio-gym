import React, {useEffect} from 'react';
import {Spin} from "antd";
import {useHistory} from "react-router-dom";
import {coreApi} from "../setup/configureAxios";

function Index() {
    const history = useHistory();

    useEffect(() => {
        localStorage.setItem('apg_user', null);
        localStorage.setItem('apg_user_type', null);
        localStorage.setItem('apg_user_name', null);

        localStorage.getItem('apg_user_type')
        console.log('logout page ----after----',localStorage.getItem('apg_user'))
        coreApi.defaults.headers.common['Authorization'] = ``;
        history.push("/admin");
    }, [])
    return (
        <>
            <Spin size={'large'} style={{height: '50vh', paddingTop: '10vh', paddingLeft: '50vh'}}/>
        </>
    );
}

export default Index;
