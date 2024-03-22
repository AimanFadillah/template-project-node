export default function OpenHash (hash) {
    return JSON.parse(atob(hash))
}