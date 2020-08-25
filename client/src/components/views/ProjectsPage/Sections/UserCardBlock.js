import React from 'react'

function UserCardBlock(props) {


    const renderItems = () => (
        props.products && props.products.map(product => (
            <tr key={product._id}>
                <td>{product.title}</td>
                <td><button className="m-btn m-btn-red m-btn-theme"
                onClick={()=> props.removeItem(product._id)}
                >Remove </button> </td>
            </tr>
        ))
    )


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Remove from My Projects</th>
                    </tr>
                </thead>
                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock
