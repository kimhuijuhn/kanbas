import AccountNavigation from "./Navigation";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import { Routes, Route, Navigate } from "react-router";

export default function Account() {
    return (
        <div>
            <h1>Account</h1>
            
            <table>
                <tr>
                    <td valign="top"> 
                        <AccountNavigation/>
                    </td>
                    <td valign="top">             
                        <Routes>
                            <Route path="/" element={<Navigate to="/kanbas/account/signin"/>}/>
                            <Route path="/profile" element={<Profile/>}/>
                            <Route path="/signin" element={<Signin/>}/>
                            <Route path="/signup" element={<Signup/>}/>
                        </Routes>
                    </td>
                </tr>
            </table>
        </div>
    );
}