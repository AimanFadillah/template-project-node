import Alert from "./Alert";

export function loadingBarStart() {
    const loading = document.getElementById("loading-bar");
    let persen = 0
    let interval = setInterval(Prosesloading, 500)
    loading.style.width = `${persen}%`;
    loading.style.display = "block"
    function Prosesloading() {
        if (loading.style.display === "none" || persen == 80) {
            clearInterval(interval)
        }
        loading.style.width = `${persen}%`;
        persen += 20
    }
    setTimeout(() => {
        if(loading.style.display !== "none"){
            Alert("Terjadi kesalahan pada backend")
        }
    },5000);
    return true
}

export function loadingBarFinish (){
    const loading = document.getElementById("loading-bar");
    loading.style.width = `100%`;
    setTimeout(() => {
        loading.style.display = "none"
    }, 300);
    return true
}