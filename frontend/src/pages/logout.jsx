import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import { authDataContext } from '../Context/AuthContext';
import { toast } from 'react-toastify'

function LogoutButton() {
    const navigate = useNavigate()
    const { serverUrl } = useContext(authDataContext)

    const handleLogout = async () => {
        try {
            await axios.get(serverUrl + "/api/auth/logout", { withCredentials: true })
            toast.success("Logout Successfully")
            navigate("/login")  // Redirect to login page
        } catch (error) {
            console.log(error)
            toast.error("Logout Failed")
        }
    }

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    )
}
