//Direccionamiento de las rutas de la aplicacion
import React, {useContext} from "react";
import {Container} from "react-bootstrap";
import {Router, Route, Routes} from "react-router-dom";
import {NavbarAdmin} from "../../shared/components/NavbarAdmin";
import {PublicNavbar} from "../../shared/components/PublicNavbar";
import {AuthContext} from "../auth/authContext";
import {ProductInfo} from "../home/components/ProductInfo";
import {Contact} from "../contact/Contact";
import {HomeScreen} from "../home/HomeScreen";

export const AppRouter = () => {
    const {user} = useContext(AuthContext);
    return (
        <Router>
            <Routes>
                <Route path={"/auth"} element={<>Login Screen</>}/>
                <Route path={"/*"} element={
                    !user.logged ? (
                        <>
                            <PublicNavbar/>
                            <Container style={{marginTop: "20px"}} className={"mt-5"}>
                                <Route path={"more-info/id"} element={<ProductInfo/>}/>
                                <Route path={"contact"} element={<Contact/>}/>
                                <Route path={"home"} element={<HomeScreen/>}/>
                                <Route path={"/"} element={<HomeScreen/>}/>
                                <Route path={"*"} element={<div>404F</div>}/>
                            </Container>{" "}
                        </>
                    ) : (
                        <>
                            <NavbarAdmin/>
                            <Container style={{marginTop: "20px"}} className={"mt-5"}>
                                <Routes>
                                    <Route path={"product"} element={<>Product</>}/>
                                    <Route path={"category"} element={<>Category Screen</>}/>
                                    <Route path={"subcategory"} element={<>Subcategory Screen</>}/>
                                    <Route path={"update-product/:key"} element={<>Product Update</>}/>
                                    <Route path={"/home"} element={<>Product</>}/>
                                    <Route index element={<>Product</>}/>
                                    <Route path={"*"} element={<div>404F</div>}/>
                                </Routes>
                            </Container>
                        </>
                    )
                }/>
                <Route path={"*"} element={<div>404F</div>}/>
            </Routes>
        </Router>
    );
}