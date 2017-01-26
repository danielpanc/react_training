import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';
import FormControl from 'react-bootstrap/lib/FormControl';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import Form from 'react-bootstrap/lib/Form';
import PopoverButton from './PopoverButton';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import PopUpContent from './PopUpContent';

const HeaderTop = function() {

        const btns = [
          {
            icon: "user",
            label: "Contul meu",
            popupContent: {
              topText: "",
              label: "intra in cont",
              bottomText: "Nu ai Cont?",
              linkText: "click aici",
            },
          },
          {
            icon: "heart",
            label: "Favorite",
            popupContent: {
              topText: "Trebuie sa fii autentificat",
              label: "intra in cont",
              bottomText: "",
            },
          },
          {
            icon: "shopping-cart",
            label: "Cosul meu",
            popupContent: {
              topText: "",
              label: "detalii cos",
              bottomText: "",
              pathname: "myCart"
            },
          },
        ];

    return (
        <div>
          <Navbar style={{textAlign: "center", marginBottom: 0}}>
          <div style={{display: "inline-block", width: "auto"}}>
            <Navbar.Header>
              <Navbar.Brand>
                <a>eMAG</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem href="#">
                <Form inline>
                  <InputGroup >
                    <FormControl type="text" placeholder="Search" />
                    <InputGroup.Addon>
                      <Glyphicon glyph="search" />
                    </InputGroup.Addon>
                  </InputGroup>
                  </Form>
              </NavItem>
              {btns.map((item, i) => (
                <NavItem href="#" key={i}>
                  <PopoverButton
                   label={item.label}
                   icon={item.icon}
                  >
                    <PopUpContent {...item.popupContent} />
                  </PopoverButton>
                </NavItem>
              ))}
            </Nav>
          </div>
          </Navbar>

        </div>
    );
}

export default HeaderTop;
