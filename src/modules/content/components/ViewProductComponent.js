import React from 'react';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Button from 'react-bootstrap/lib/Button';
import AddToCartButtonContainer from '../containers/AddToCartButtonContainer';

function ViewProductComponent(props) {
  let product = props.product;
  let starsNo = Math.floor(product.rate);
  let yelolowStars = [];
  let grayStars = [];
  const maxStarsNo = 5;
  for(let i=0; i<starsNo; i++) yelolowStars.push({});
  for(let i=starsNo; i<maxStarsNo; i++) grayStars.push({});
  return(
    <div>
      <PageHeader>{product.description}</PageHeader>
      <Grid>
        <Row>
          <Col md={6}>
            <div style={{textAlign: "center"}}>
              <img src={product.image} style={{width: 350 + "px"}}/>
            </div>
            <br/>
            <Button onClick={props.close}>
              <Glyphicon glyph="arrow-left" style={{marginRight: "5px"}}/>
              Back
            </Button>
            <Button className="pull-right" bsStyle="danger" onClick={(e) => {props.deleteProduct()}}>
              <Glyphicon glyph="remove-sign" style={{marginRight: "5px"}}/>
              Delete
            </Button>
          </Col>
          <Col md={3}>
          <div
            style={{
              borderBottom: "1px solid gray",
              paddingBottom: 30+"px",
            }}>
              <span style={{color: "gray"}}>Opinia clientilor:</span>
              <p style={{margin: "10px 0", fontSize: "20px"}}>
                {yelolowStars.map((s, i) => (<Glyphicon key={i} glyph="star" style={{color: "yellow"}}/>))}
                {grayStars.map((s, i) => (<Glyphicon key={i} glyph="star" style={{color: "gray"}}/>))}
                <span style={{color: "blue", marginLeft:"5px"}}>{product.rate}</span>
              </p>
            </div>
            <div
              style={{
                borderBottom: "1px solid gray",
                paddingBottom: 30+"px",
              }}>
              Ajunge in Cluj-Napoca Prin curier: Vineri, 20 Ian. – Sambata, 21 Ian. Ridicare personala din Showroom Cluj: incepand cu 21 ianuarie, dupa 10:00
            </div>
            <div>
              <span style={{color: "gray"}}>Vandut de:</span>
              <p>eMAG</p>
              <ul style={{listStyleType: "none", paddingLeft: 0}}>
                <li>
                  <Glyphicon glyph="home" style={{marginRight: 10 +"px"}}/>
                  Ridicare personala gratuita
                </li>
                <li>
                  <Glyphicon glyph="time" style={{marginRight: 10 +"px"}}/>
                  Livrare in doua ore
                </li>
                <li>
                  <Glyphicon glyph="calendar" style={{marginRight: 10 +"px"}}/>
                  Livrare in aceeasi zi
                </li>
                <li>
                  <Glyphicon glyph="plane" style={{marginRight: 10 +"px"}}/>
                  Livrare gratuita
                </li>
                <li>
                  <Glyphicon glyph="scissors" style={{marginRight: 10 +"px"}}/>
                  Deschiderea coletului la livrare
                </li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <span style={{color: "red", fontSize: 30 +"px"}}>{product.price} Lei</span>
              <p>Garantie inclusa: detalii</p>
              <p>Persoane fizice: 12 luni</p>
              <p>Extinde garantia produsului</p>
              <AddToCartButtonContainer add={props.addToCart} id={product.id}/>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default ViewProductComponent;
