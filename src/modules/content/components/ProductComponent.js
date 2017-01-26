import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import AddToCartButtonContainer from '../containers/AddToCartButtonContainer';


const propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  options: PropTypes.string,
  price: PropTypes.number,
}

const defaultProps = {
  image: "",
  description: "",
  options: "",
  price: 0,
}

function ProductComponent(props) {
  const {
    item,
    pathname,
  } = props;

  const viewOptions = (t) => {
    t.preventDefault();
    t.stopPropagation();
  }

// onClick={(e) => {props.view(item);}}
  return (
    <Link to={`${pathname}/${item.id}`}>
      <div
        style={{
          display: "inline-block",
          width: 200 + "px",
          marginRight: 20 + "px",
          textAlign: "center",
          cursor: "pointer",
        }}
      >

          <img
            role="presentation"
            style={{width: 150 +"px", height: 150 + "px"}}
            src={""+item.image}
          />

        {item.options.length > 0 ?
          <Button
            style={{
              width: 200 + "px",
               whiteSpace: "initial",
               height: 50 + "px",
             }}
           >
            <span
              style={{display: "table-cell"}}
              onClick={viewOptions}
            >
              Vezi variante: {item.options}
            </span>
            <Glyphicon glyph="menu-right"
              style={{fontSize: 10 + "px",
                paddingLeft: 7 + "px",
                display: "table-cell",
                verticalAlign: "middle"
              }}
            />
          </Button>:
          ""
        }
        <p style={{height: 150 + "px"}}>{item.description}</p>

        {(item.price > 0) ?
          <p style={{color: "Red"}}>
            {item.price + " lei"}
          </p> :
          ""
        }
        <AddToCartButtonContainer add={props.addToCart} id={item.id}/>
      </div>
    </Link>
  );
}

ProductComponent.propTypes = propTypes;
ProductComponent.defaultProps = defaultProps;

export default ProductComponent;
