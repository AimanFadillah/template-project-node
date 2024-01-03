import {Container,Row,Col} from "../components/Grid"
import axios from "axios";
import Input from "../components/Input";

export default function Beranda () {

    async function sendData (e) {
        e.preventDefault();
        const response = await axios.post(`http://localhost:5000/api/login`,new FormData(e.target))
        console.log(response.data);
    }

    return <Container>
        <Row justify="center" >
            <Col pc="6" className="mt-5">
                <form onSubmit={sendData} className="border p-3 rounded shadow">
                    <h2 className="text-center" >Login</h2>
                    <div className="mb-3">
                        <Input type="text" required={true} name="nama" />
                    </div>
                    <div className="mb-3">
                        <Input type="password" required={true} name="password" />
                    </div>
                    <button className="text-center btn btn-primary mt-2 shadow w-100" >Kirim</button>
                </form>
            </Col>
        </Row>
    </Container>
}