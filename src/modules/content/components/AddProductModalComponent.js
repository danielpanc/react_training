import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import InputGroup from 'react-bootstrap/lib/InputGroup';

function AddProductModalComponent(props) {
  return(
    <div className="static-modal">
     <Modal.Dialog>
       <Modal.Header>
         <Modal.Title>Add Product</Modal.Title>
       </Modal.Header>

       <Modal.Body>
        <Form>
          <FormGroup>
            <ControlLabel>
              Description
            </ControlLabel>
            <FormControl
              onChange={props.updateDescription}
              componentClass="textarea"
              placeholder="Description"
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>
              Option
            </ControlLabel>
            <FormControl
              onChange={props.updateOption}
              type="text"
              placeholder="Option"
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>
              Price
            </ControlLabel>
            <InputGroup>
              <FormControl
                onChange={props.updatePrice}
                type="number"
                placeholder="Price"
              />
               <InputGroup.Addon>lei</InputGroup.Addon>
            </InputGroup>
          </FormGroup>
        </Form>
       </Modal.Body>

       <Modal.Footer>
         <Button onClick={props.onClose}>Close</Button>
         <Button onClick={props.addProduct} bsStyle="primary">Add</Button>
       </Modal.Footer>

     </Modal.Dialog>
   </div>
  )
}

export default AddProductModalComponent;
