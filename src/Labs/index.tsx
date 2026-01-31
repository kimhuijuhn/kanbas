import {Routes, Route, Navigate} from 'react-router'

import TOC from "./TOC"
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Kanbas from '../Kanbas';

export default function Labs() {
    return (
        <div>
            <h1> Labs </h1>
            <TOC/>
            <Routes>
                <Route path="/" element={<Navigate to="Lab1"/>}/>
                <Route path="kanbas" element={<Kanbas/>}/>
                <Route path="Lab1" element={<Lab1/>}/>
                <Route path="Lab2" element={<Lab2/>}/>
            </Routes>
        </div>
    );
}