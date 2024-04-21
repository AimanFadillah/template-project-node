import Input from "../components/Input";
import { Link } from "react-router-dom";
import ConfigAxios from "../variabels/ConfigAxios";
import { useCallback, useContext } from "react";
import DataContext from "../variabels/Context";

export default function Login () {
    const {setUser,checkStatus} = useContext(DataContext);

    const sendData = useCallback(async (e) => {
        try{
            e.preventDefault();
            const response = await ConfigAxios.post("/api/login",new FormData(e.target))
            setUser(response.data.data)
        }catch(e){
            checkStatus(e)
        }
    },[]);

    return <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 mt-5">
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
            </div>
        </div>
    </div>
}