
import Cookies from 'js-cookie'

const securityObject = {
    secure: true, // indicating if the cookie transmission requires a secure protocol (https).
    sameSite: 'strict', //to control whether the browser is sending a cookie along with cross-site requests
    // path: '', // indicating the path where the cookie is visible.
    domain :'sabkit.com' , // indicating a valid domain where the cookie should be visible. The cookie will also be visible to all subdomains.
    // expire: // Default: Cookie is removed when the user closes the browser.
}
const api = Cookies.withAttributes(securityObject)

export const cookie = {
    set token(token) {
        api.set("token", token)
    },
    get token() {
        return api.get("token")
    },
    clearLeadData() {
        api.remove("token");
    }
}
