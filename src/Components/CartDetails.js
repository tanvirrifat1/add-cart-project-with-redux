import React from 'react';
import { BsTrashFill } from "react-icons/bs";

const CartDetails = () => {
    return (
        <div className='container mt-2'>
            <h2 className='text-center'>Itmes Details Page</h2>
            <section className="container mt-3">
                <div className="iteamsdetails">
                    <div className="items_img">
                        <img src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp" alt="" />
                    </div>

                    <div className="details">
                        <table>
                            <tr>
                                <td>
                                    <p><strong>Restaurant</strong>: Massala Theoryy</p>
                                    <p><strong>Price </strong>:  ৳ 350</p>
                                    <p><strong>Dishes </strong>: North Indian, Biryani, Mughlai</p>
                                    <p><strong>Total  </strong>: ৳ 350</p>
                                </td>
                                <td>
                                    <p><strong>Rating</strong><span style={{ background: "purple", color: '#fff', padding: "2px 5px", borderRadius: '5px' }}>3.5 ★</span></p>
                                    <p><strong>Order Review</strong><span >1175 + order placed from here recently</span></p>
                                    <p><strong>Remove</strong><span >:<i style={{ color: 'red', fontSize: 20, cursor: 'pointer' }}><BsTrashFill /></i></span></p>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CartDetails;