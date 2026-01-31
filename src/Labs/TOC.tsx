import { Link } from "react-router";

export default function TOC() {
    return (
        <ul>
            <li> <Link to='/kanbas'> KANBAS </Link></li>
            <li> <Link to='/Labs/Lab1'> LAB 1 </Link></li>
            <li> <Link to='/Labs/Lab2'> LAB 2 </Link></li>
        </ul>
    );
}