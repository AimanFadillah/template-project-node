import { Toast } from "bootstrap"

export default function Alert(msg) {
    document.querySelector(".toast-container").innerHTML = `
        <div id="liveToast" class="toast bg-danger text-light" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                    ${msg}
                </div>
                <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    `
    Toast.getOrCreateInstance(document.querySelector('#liveToast')).show();
    return true
}