import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Card className="text-center mt-4">
                {/* <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                </Card.Body> */}
                <Card.Footer className="text-muted">Copyright © RifatTech. All Rights Reserved.</Card.Footer>
            </Card>
        </div>
    );
};

export default Footer;