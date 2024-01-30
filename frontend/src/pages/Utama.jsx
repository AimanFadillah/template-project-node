import { useContext } from "react"
import Sidebar from "../components/Sidebar"
import DataContext from "../variabels/Context"
import Navbar from "../components/Navbar";
import { Container } from "../components/Grid";

export default function Utama () {
    const {user,setUser,userFunction} = useContext(DataContext);

    return <Navbar>
        <Container>
            <h1>Hai {user.nama} <button className="btn btn-danger" onClick={() => userFunction.remove(setUser)} >logout</button> </h1>
        </Container>
    </Navbar>
}