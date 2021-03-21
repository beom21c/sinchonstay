let user = JSON.parse(localStorage.getItem('passUser'));
const initialState = user ? {loggedIn: true, user} : {};


export const addInfo = (parameter) => ({type: {}, parameter});

export default function userInfo(parameter = initialState, action) {
    // switch (action.type) {
    //     case LOGININFO :
    //         return {
    //             loggedIn: true,
    //             user: action.parameter
    //         }
    //     default:
    //         return parameter;
    // }
}


