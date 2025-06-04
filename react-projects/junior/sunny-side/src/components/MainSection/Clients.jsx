import React from 'react'
import { clientsData } from './clientData';
const Clients = () => {
    return (

        <div className="client-testimonials">
            <h1>Client testimonials</h1>
            <div className="clients-section">
                {clientsData.map((client, idx) =>
                    <div className='clients'>
                        <img src={client.photo} alt="clientImg" />
                        <p>{client.content}</p>
                        <div>
                            <h3>{client.name}</h3>
                            <span>{client.role}</span>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Clients
