import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

const Navigator = function(props){
  const dropDownItems=[
    "Laptop, Tablete & Telefoane",
    "Pc, Periferice & Software",
    "TV,Audio,Foto & Gaming",
    "Electrocasnice & Climatizare",
    "Fashion",
    "Cozmetice",
    "Carti",
  ];
  const navItems=[
    "Promotiile saptamanii",
    "Resigilate",
    "Lichidari",
    "Aboneaza-te la newsletter",
  ];
  return(
    <div>
      <Navbar>
        <Nav>
          <NavDropdown title="Oferta Produse" id="oferta-produse">
            {dropDownItems.map((item, i)=>(
              <MenuItem key={i}>{item}</MenuItem>
            ))}
          </NavDropdown>

          {navItems.map((item, i)=>(
          <NavItem key={i}>{item}</NavItem>
          ))}

        </Nav>
        <Nav pullRight={true} style={{marginRight: 10 +"px"}}>
          <NavItem><Glyphicon glyph="headphones" style={{fontSize:20 +"px", marginRight: 10 + 'px'}}/>eMAG Help</NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}


export default Navigator;
