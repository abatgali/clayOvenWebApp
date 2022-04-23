import React, { useState } from "react";
import { Button, FloatingLabel, Form, Modal, Row } from "react-bootstrap";

const AddToCartModal = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <div>
          <Modal.Title>Menu Item</Modal.Title>
          <p>item description</p>
        </div>
      </Modal.Header>
      <Modal.Body>
        <FloatingLabel
          className="mb-3"
          controlId="floatingTextarea2"
          label="Special Instruction"
        >
          <Form.Control
            as="textarea"
            placeholder="Special Instruction"
            style={{ height: 200 }}
          />
        </FloatingLabel>

        <div className="d-flex align-items-center justify-content-between">
          <div style={{ display: "flex", alignItems: "center" }}>
            <h5 className="m-0 me-2" style={{ display: "inline-block" }}>
              Qty
            </h5>
            <div class="quantity-control" data-quantity="">
              <button class="quantity-btn" data-quantity-minus="">
                <svg viewBox="0 0 409.6 409.6">
                  <g>
                    <g>
                      <path d="M392.533,187.733H17.067C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h375.467 c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z" />
                    </g>
                  </g>
                </svg>
              </button>
              <input
                type="number"
                class="quantity-input"
                data-quantity-target=""
                value="1"
                step="1"
                min="1"
                max=""
                name="quantity"
              />
              <button class="quantity-btn" data-quantity-plus="">
                <svg viewBox="0 0 426.66667 426.66667">
                  <path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0" />
                </svg>
              </button>
            </div>
          </div>
          <h4 className="m-0">$40.00</h4>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="btn-primary-red" onClick={handleClose}>
          Add to cart
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default AddToCartModal;
