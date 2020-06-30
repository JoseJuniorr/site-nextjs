import React, { useState } from 'react';

import Head from 'next/head'

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
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';



import { Jumbotron, Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';



export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return <div>

        <div>
            <Head>
                <title>home - next site</title>
                <meta name="description" content="Site com next js" />



            </Head>

            <Navbar color="dark" dark expand="md" className="fixed-top">
                <Container>
                    <NavbarBrand href="/">Next js</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Portfólio</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>


                            </UncontrolledDropdown>
                        </Nav>

                    </Collapse>
                </Container>
            </Navbar>
        </div>



        <Jumbotron fluid className="desc-top">
            <style>
                {`.desc-top{
                    background-color: #000;
                    color: #fff;
                    padding-top: 150px;
                    

                    margin-bottom: 0rem !important;
                }
                .circulo{
                    width: 140px;
                    height: 140px;
                    background-color: #fed136;
                    font-size: 52px;
                    padding: 24px;
                    color: #fff;

                }
                .centralizar{
                     margin: 0 auto !important;
                     float: none !important;
                }`}

            </style>
            <Container className="text-center">
                <h1 className="display-3 mb-4">Crie seu site com next js</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2 mb-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead ">
                    <Button outline color="warning" size="lg" className="mt-4">Entrar em contato</Button>
                </p>
            </Container>
        </Jumbotron>

        <Jumbotron fluid className="services">
            <style>
                {`
                            .services{
                                background-color: #fafafa;
                                padding-top: 80px;
                                padding-bottom: 80px; 
                            }
                        `}
            </style>
            <Container className="text-center">
                <div>
                    <h2 className="display-4">Serviços</h2>
                    <p className="lead pb-4">This is a simple hero unit</p>

                </div>
            </Container>
        </Jumbotron>



        <Container className="text-center">
            <div class="row">
                <div class="col-lg-4">
                    <div className="rounded-circle circulo centralizar">
                        A
                    </div>

                    <h2 className="mt-4">Serviço 1</h2>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>

                </div>
                <div class="col-lg-4">
                    <div className="rounded-circle circulo centralizar">
                        B
                    </div>
                    <h2 className="mt-4">Serviço 2</h2>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>

                </div>
                <div class="col-lg-4">
                    <div className="rounded-circle circulo centralizar">
                        C
                    </div>
                    <h2 className="mt-4">Serviço 3</h2>
                    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>

                </div>
            </div>
        </Container>


    </div>
}