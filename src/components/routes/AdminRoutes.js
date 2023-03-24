import React from "react";
import {Container} from "react-bootstrap";
import {Router, Route, Routes} from "react-router-dom";
import {NavbarAdmin} from "../../shared/components/NavbarAdmin";
import {ProductFormEdit} from "../product/components/ProductFormEdit";
import {Product} from "../product/Product";

export const AdminRoutes = () => {
    return (
        <>
            <NavbarAdmin/>
            <Container style={{marginTop: "20px"}} className="mt-5">
                <Routes>
                    <Route path="products" element={<Product/>}/>
                    <Route path="update-product/:key" element={<ProductFormEdit/>}/>
                </Routes>
            </Container>
        </>
    );
};