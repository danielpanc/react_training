import React, { PropTypes } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

const propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  yesCallback: PropTypes.func,
  noCallback: PropTypes.func,
  close: PropTypes.func,
}

const defaultProps = {
  title: "",
  message: "",
  yesCallBack: function(){},
  noCallback: function(){},
}


function ConfirmPopup(props){
  const yesHandler = () => {
    props.yesCallBack();
    props.close();
  }
  const noHandler = () => {
    props.noCallback();
    props.close();
  }
  return(
    <div className="static-modal">
       <Modal.Dialog>
         <Modal.Header>
           <Modal.Title>{props.title}</Modal.Title>
         </Modal.Header>

         <Modal.Body>
           {props.message}
         </Modal.Body>

         <Modal.Footer>
           <Button onClick={yesHandler}>Yes</Button>
           <Button onClick={noHandler}>No</Button>
         </Modal.Footer>

       </Modal.Dialog>
     </div>
  )
}

ConfirmPopup.propTypes = propTypes;
ConfirmPopup.defaultProps = defaultProps;


export default ConfirmPopup;
