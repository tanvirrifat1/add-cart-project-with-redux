import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const Cards = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('/CardData.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='container mt-3'>
            <h2 className='text-center'>Add to Cart Project</h2>

            <div className="row d-flex justify-content-center align-items-center">
                {
                    data && data.map((element) => {

                        return (
                            <>
                                <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                                    <Card.Img variant="top" src={element.imgdata} style={{ height: '16rem' }} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default Cards;