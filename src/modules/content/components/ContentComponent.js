import React, { PropTypes } from 'react';
import Paginator from '../../../components/Paginator';

const propTypes = {
  items: PropTypes.array.isRequired,
  Tile: PropTypes.func.isRequired,
};

const defaultProps = {
  items: [],
  Tile: () => (null),
};

function ContentComponent(props) {
  const {
    items,
    Tile,
    pageChange,
    pages,
    activePage,
    pathname,
  } = props;

  return (
    <div>
      {items.map((item, i) => (
        <Tile
          key={i}
          item={item}
          view={props.viewItem}
          pathname={pathname}
          addToCart={props.addToCart}
        />
      ))}
      <div></div>
      <Paginator pageChange={pageChange} items={pages} activePage={activePage} className="pull-right"/>
      <div className="clearfix"/>
      <div style={{
        position: "absolute",
        top: "20px",
        right: "250px",
      }}>
      Total: {props.cartValue} Lei
      </div>
    </div>
  );
}

ContentComponent.propTypes = propTypes;
ContentComponent.defaultProps = defaultProps;

export default ContentComponent;
