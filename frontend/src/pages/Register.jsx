import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import ConfigAxios from "../variabels/ConfigAxios";
import { useCallback, useContext } from "react";
import DataContext from "../variabels/Context";

export default function Register () {
    const {checkStatus} = useContext(DataContext);
    const nav = useNavigate();

    const sendData = useCallback(async (e) => {
        try{
            e.preventDefault();
            const response = await ConfigAxios.post("/api/user",new FormData(e.target));
            nav("/");
        }catch(e){
            checkStatus(e);
        }
    },[])

    return <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 mt-5">
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
            </div>
        </div>
    </div>
}