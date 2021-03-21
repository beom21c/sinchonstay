import {useState} from "react";

export const Header = () => {

    const [loginState, setLoginState] = useState(false);

    return (
        <>
            <div style={{height: 100, marginTop: 30, fontSize: 20}}>
                <div style={{float: 'right', marginRight: 30}}>
                    Room Tour
                </div>
                <div style={{float: 'right', marginRight: 30}}>
                    Reservation
                </div>
                <div style={{float: 'right', marginRight: 30}}>
                    My Page
                </div>
                <div style={{float: 'right', marginRight: 30}}>
                    {loginState == true ? 'LogOut' : 'Login'}
                </div>
            </div>
        </>
    )
}
