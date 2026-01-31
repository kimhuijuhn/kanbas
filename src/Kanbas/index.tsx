import Account from "./Account";
import { Routes, Route, Navigate } from "react-router";

export default function Kanbas() {
    return (
        <div id='kanbas'>
            <h1> KANBAS </h1>
            <Routes>
                <Route path="/" element={<Navigate to="account"/>}/>
                <Route path="/account/*" element={<Account/>} />
            </Routes>
        </div>
    );
}

