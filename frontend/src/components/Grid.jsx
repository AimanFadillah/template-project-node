export function Container (props) {
    return <div className={`container my-4 ${props.className}`}>
        {props.children}
    </div>
}

export function Row (props) {
    return <div className={`row justify-content-${props.justify || "start"} align-items-${props.align || "start"} ${props.className}`}>
        {props.children}
    </div>
}

export function Col (props) {
    return <div className={`col-md-${props.pc} col-${props.hp} ${props.className}`}>
        {props.children}
    </div>
}