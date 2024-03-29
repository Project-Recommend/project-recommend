import React from 'react'

function UserCardBlock(props) {


    const renderItems = () => (
        props.products && props.products.map(product => (
            <tr key={product._id}>
                <td>{product.description}</td>
                <td>{product.skilllevel} EA</td>
                <td>$ {product.participation} </td>
                <td><button 
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
                        <th>Project Description</th>
                        <th>Project Skill Level</th>
                        <th>Project Participation</th>
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
