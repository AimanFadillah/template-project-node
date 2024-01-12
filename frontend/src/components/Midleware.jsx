import { Routes } from "react-router-dom";

export default function Middleware (props) {
    return props.next ? <Routes>{props.children}</Routes> : "";
}