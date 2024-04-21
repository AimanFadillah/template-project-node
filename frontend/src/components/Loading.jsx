export default function Loading(props) {
    return <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 d-flex justify-content-center mt-5" >
                <div className={`spinner-border text-primary ${props.className}`}  style={{width:"3rem",height:"3rem"}} role="status"></div>
            </div>
        </div>
    </div>
}