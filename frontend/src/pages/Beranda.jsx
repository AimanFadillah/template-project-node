import { removeUser } from "../functions/UserFuntion"

export default function Beranda ({user,setUser}) {
    return <h1>Hai {user.nama} <button className="btn btn-danger" onClick={() => removeUser(setUser)} >logout</button> </h1>
}