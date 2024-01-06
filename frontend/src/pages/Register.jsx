import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "../components/Grid";
import Input from "../components/Input";
import ConfigAxios from "../variabels/ConfigAxios";
import { checkUser } from "../functions/UserFuntion";

export default function Register () {
    const nav = useNavigate();

    async function sendData (e) {
        e.preventDefault();
        const response = await ConfigAxios.post("/api/user",new FormData(e.target));
        if(checkUser(response)){
            nav("/");
        }
    }

    return <Container>
        <Row justify="center" >
            <Col pc="6" className="mt-5" >
                <form onSubmit={sendData} className="border p-3 rounded shadow">
                    <h2 className="text-center" >Register</h2>
                    <div className="mb-3">
                        <Input type="nama" required={true} name="nama" />
                    </div>
                    <div className="mb-3">
                        <Input type="email" required={true} name="email" />
                    </div>
                    <div className="mb-3">
                        <Input type="password" required={true} name="password" />
                    </div>
                    <button className="text-center btn btn-primary mt-2 shadow w-100" >Buat</button>
                    <h6 className="text-center d-block mt-3" style={{ fontSize:"14px" }} >Sudah punya akun bisa langsung <Link to={"/"} >masuk</Link></h6>
                </form>
            </Col>
        </Row>
    </Container>
}