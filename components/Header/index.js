import React, { useState } from 'react';

import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md" className="fixed-top">
                <Container>
                    <NavbarBrand href="/">Next js</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/#inicio" >Inicio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/#servicos">Serviços</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/#portfolio" >Portfólio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Contato</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                            </UncontrolledDropdown>
                        </Nav>

                    </Collapse>
                </Container>
            </Navbar>



        </div>
    )


}


export default Header