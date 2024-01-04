export default function Beranda ({user,removeUser}) {

    return <h1>Hai {user.nama} <button className="btn btn-danger" onClick={removeUser} >logout</button> </h1>
}