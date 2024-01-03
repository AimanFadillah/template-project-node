export default function Input (props) {
    return <div className="">
        <label htmlFor={props.name} className={`form-label`} >{props.name.substring(0,1).toUpperCase() + props.name.substring(1)}</label>
        <input type={props.type || "text"} required={props.required || false}  id={props.name} name={props.name} className="form-control" placeholder={`Masukkan ${props.name}`} />
    </div>
}