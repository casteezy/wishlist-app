import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { Grid, Container, Header, Button, Divider } from 'semantic-ui-react';
import WishlistItem from './components/WishlistItem';
import './Wishlist.scss';

const Wishlist = ({ ownerName, items }) => (
  <div className="Wishlist">
    <Container>
      <div className="Wishlist--Heading">
        <Header as="h1" floated="left">
          {ownerName}&rsquo;s Wishlist
        </Header>
        <Button size="medium" floated="right" primary icon="add" content="Add Item" />
        <Button size="small" floated="right" icon="unhide" content="Show Reserved" />
        <Button size="medium" floated="left" icon="write" content="Edit" />
      </div>
      <Divider clearing />
      <Grid columns="4">
        <Grid.Row>
          {items.keySeq().map(key =>
            <Grid.Column key={key}>
              <WishlistItem
                id={key}
                imgSrc="http://placehold.it/200x200"
                {...items.get(key).toJS()}
              />
            </Grid.Column>,
          )}
        </Grid.Row>
      </Grid>
    </Container>
  </div>
);

const mapStateToProps = state => ({
  ownerName: state.getIn(['wishlist', 'ownerName']),
  items: state.getIn(['wishlist', 'items']),
});

Wishlist.propTypes = {
  ownerName: PropTypes.string.isRequired,
  items: ImmutablePropTypes.map,
};

export default connect(mapStateToProps)(Wishlist);
