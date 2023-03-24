import React from "react";
import {Breadcrum, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

export const CardComponent = ({name, id, fileBase64, price}) => {
    return (
        <Card key={id} style={{width: "18rem"}} className="animate__animated animate__fadeIn">
            <Card.Img variant="top" className="rounded" src={"data:image/png;base64," + fileBase64}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{"Desde $" + price}</Card.Text>
                <Breadcrum>
                    <Link to={`/more-info/${id}`} className={"breadcrum-item"}>
                        Mas informacion...
                    </Link>
                </Breadcrum>
            </Card.Body>
        </Card>
    );
};