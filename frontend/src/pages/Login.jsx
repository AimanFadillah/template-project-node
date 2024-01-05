import {Container,Row,Col} from "../components/Grid"
import axios from "axios";
import Input from "../components/Input";
import { Link } from "react-router-dom";

export default function Login ({setUser}) {

    async function sendData (e) {
        e.preventDefault();
        const response = await axios.post(`${endpoint}/api/login`,new FormData(e.target),{withCredentials:true})
        if(response.data.msg !== "success") return alert(response.data.msg)
        setUser(response.data.data)
    }

    return <Container>
        <Row justify="center" >
            <Col pc="6" className="mt-5">
                <form onSubmit={sendData} className="border p-3 rounded shadow">
                    <h2 className="text-center" >Login</h2>
                    <div className="mb-3">
                        <Input type="email" required={true} name="email" />
                    </div>
                    <div className="mb-3">
                        <Input type="password" required={true} name="password" />
                    </div>
                    <button className="text-center btn btn-primary mt-2 shadow w-100" >Masuk</button>
                    <h6 className="text-center d-block mt-3" style={{ fontSize:"14px" }} >Tidak punya akun bisa <Link to={"/register"} >Buat akun</Link></h6>
                </form>
            </Col>
        </Row>
    </Container>
}