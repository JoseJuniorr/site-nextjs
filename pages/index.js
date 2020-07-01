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
    NavbarText,
    Row
} from 'reactstrap';



import { Jumbotron, Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fas)


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



        <Jumbotron fluid className="desc-top">
            <style>
                {`.desc-top{
                    background-color: #767374;
                    color: #fff;
                    padding-top: 150px;
                    

                    margin-bottom: 0rem !important;
                    position: relative;

                }
                .inicio-link{
                    position: absolute;
                    top: -0px;
                }
                .circulo{
                    width: 140px;
                    height: 140px;
                    background-color: #342E30;
                    font-size: 52px;
                    padding: 24px;
                    color: #fff;

                }
                .centralizar{
                     margin: 0 auto !important;
                     float: none !important;
                     justify-content: center;
                }`}

            </style>
            <Container className="text-center">
                <a name="inicio" className="inicio-link" />
                <h1 className="display-3 mb-4">Sua empresa está preparada para o futuro?</h1>
                <p className="lead">Oferecemos os melhores serviços e infraestrutura de TI para sua empresa avançar sem limites</p>
                <hr className="my-2 mb-4" />
                <p>Fale com um de nossos especialistas e descubra como podemos te ajudar</p>
                <p className="lead ">
                    <Button outline color="light" size="lg" className="mt-4">Entrar em contato</Button>
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
                                position: relative; 
                            }
                            .servicos-link{
                                position: absolute;
                                top: 0px;
                            }
                        `}
            </style>
            <Container className="text-center">
                <a name="servicos" className="servicos-link" />
                <div>
                    <h2 className="display-4">Serviços</h2>
                    <p className="lead pb-4">This is a simple hero unit</p>

                </div>
            </Container>
        </Jumbotron>



        <Container className="text-center">
            <div className="row">
                <div className="col-lg-4">
                    <div className="rounded-circle circulo centralizar">
                        <FontAwesomeIcon icon="laptop-code" />
                    </div>

                    <h2 className="mt-4">Softwares de Gestão</h2>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>

                </div>
                <div className="col-lg-4">
                    <div className="rounded-circle circulo centralizar">
                        <FontAwesomeIcon icon="network-wired" />
                    </div>
                    <h2 className="mt-4">Redes</h2>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>

                </div>
                <div className="col-lg-4">
                    <div className="rounded-circle circulo centralizar">
                        <FontAwesomeIcon icon="server" />
                    </div>
                    <h2 className="mt-4">Servidores</h2>
                    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>

                </div>
            </div>
        </Container>

        <Jumbotron fluid className="portfolio">
            <style>{`
                        .portfolio{
                            background-color: #f8f9fa;
                            padding-top: 80px;
                            padding-bottom: 80px;
                            margin-bottom: 0rem !important;
                            position: relative;
                           
                        }
                        .portfolio-link{
                            position: absolute;
                            top: 0px;
                        }
                        
                        
                        `}</style>

            <Container className="text-center">
                <a name="portfolio" className="portfolio-link" />
                <div className="portfolio">
                    <h2 className="display-4">Portfólio</h2>
                    <p className="lead pb-4">Soluções desenvolvidas para empresas dos setores: </p>
                </div>
            </Container>
        </Jumbotron>

        <Container>

            <div className="row row-cols-1 row-cols-md-3">
                <div className="col mb-4">
                    <div className="card">
                        <img src="/portfolio_um.jpg" className="card-img-top" alt="portfolio um" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src="portfolio_dois.jpg" className="card-img-top" alt="portfolio dois" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div class="card">
                        <img src="portfolio_tres.jpg" class="card-img-top" alt="portfolio tres" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src="/portfolio_um.jpg" className="card-img-top" alt="portfolio um" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src="portfolio_dois.jpg" className="card-img-top" alt="portfolio dois" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div class="card">
                        <img src="portfolio_tres.jpg" class="card-img-top" alt="portfolio tres" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>


        <Container>
            <style>
                {`
                .section-final{
                    padding-top: 150px;
                    padding-bottom: 80px;
                    margin-bottom: 0rem !important;
                }
                `}
            </style>
            <div className="section-final">
                <div className="row featurette">
                    <div className="col-md-7 order-md-1">
                        <h2><span className="text-muted">See for yourself.</span></h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div className="col-md-5 order-md-2">
                        <div>
                            <img src="business.jpg" alt="estratégia de negócios" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>

        <Jumbotron fluid className="rodape" >
            <style>
                {
                    `
                .rodape{
                    background: #252123;
                    color: #000;
                    padding-top: 0px;
                    padding-bottom: 0px;
                    marging-bottom: 0rem !important;
                }
                `
                }
            </style>
            <Container >
                <footer className="footer mt-auto py-3">
                    <div className="container">


                        <span className="text-muted">rodapé</span>


                    </div>
                </footer>
            </Container>

        </Jumbotron>




    </div>
}