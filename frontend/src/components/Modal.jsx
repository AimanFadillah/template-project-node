export default function Modal ({target,children}) {
    return <div className="modal fade" id={target} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className={`modal-dialog modal-dialog-centered`}>
        <div className="modal-content">
            <div className={`modal-body`}>
                {children}
            </div>
        </div>
    </div>
</div>
}