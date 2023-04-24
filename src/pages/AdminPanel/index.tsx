import axios from "axios"
import { useEffect, useState } from "react"

const url = '192.168.0.142:5050/contacts'
const AdminPanel = () => {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        axios.get(url).then(({ data }) => {
            console.log(data)
            setContacts(data)
        })
    }, [])


    return (
        <div>
            {
                contacts.map((contact: any) => {
                    return <div key={contact.id}>
                        <h1>User NO{contact.id}</h1>
                        <h1>Fullname:{contact.fullname}</h1>
                        <h1>Email: {contact.email}</h1>
                        <h1>Phone: {contact.phone}</h1>
                        <h1>Message: {contact.message}</h1>
                        <hr />
                    </div>
                })
            }

        </div>
    )
}
export default AdminPanel
