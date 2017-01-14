import React, { PropTypes } from 'react';
import Flexbox from 'flexbox-react';
import { Button, Modal, Image, Form } from 'semantic-ui-react';
import '../styles/AddItemModal.scss';

const AddItemModal = ({ showModal, handleModalClose, handleAddItem }) => (
  <Modal
    className="AddItemModal"
    size="small"
    open={showModal}
    onClose={handleModalClose}
  >
    <Modal.Header>
      New Item
    </Modal.Header>
    <Modal.Content>
      <Form>
        <Flexbox flexGrow="2" flexDirection="column">
          <Form.Input label="URL" name="url" placeholder="Link to the item" />
          <Form.Group widths="equal">
            <Form.Input label="Title" name="title" />
            <Form.Input label="Price" name="price" />
          </Form.Group>
          <Flexbox flexDirection="row">
            <Flexbox flexGrow="1" className="AddItemForm__Image-Wrapper">
              <Image className="AddItemForm__Image" src="http://placehold.it/300x300" />
            </Flexbox>
            <Flexbox flexGrow="3" flexDirection="column">
              <Form.Input label="Image" name="image" action="Upload..." />
              <Form.TextArea name="details" label="Description" rows="3" />
              <Form.Checkbox name="favorited" label="Mark Favorite" />
            </Flexbox>
          </Flexbox>
        </Flexbox>
      </Form>
    </Modal.Content>
    <Modal.Actions>
      <Button primary content="Add" onClick={handleAddItem} />
    </Modal.Actions>
  </Modal>
);

AddItemModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleModalClose: PropTypes.func,
  handleAddItem: PropTypes.func,
};

export default AddItemModal;
