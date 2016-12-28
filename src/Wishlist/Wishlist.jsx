import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { Grid, Container, Header } from 'semantic-ui-react';
import WishlistItem from './components/WishlistItem';
import './Wishlist.scss';

const mapStateToProps = (state) => {
  const wishlist = state.get('wishlist');
  return {
    ownerName: wishlist.get('ownerName'),
    items: wishlist.get('items'),
  };
};

const Wishlist = ({ ownerName, items }) => (
  <div className="Wishlist">
    <Container>
      <Header as="h1" className="Wishlist--Title">
        {ownerName}&rsquo;s Wishlist
      </Header>
      <Grid columns="4">
        <Grid.Row>
          {items.map(itemProps =>
            <Grid.Column>
              <WishlistItem
                key={itemProps.get('id')}
                imgSrc="http://placehold.it/200x200"
                {...itemProps.toJS()}
              />
            </Grid.Column>,
          )}
        </Grid.Row>
      </Grid>
    </Container>
  </div>
);

Wishlist.propTypes = {
  ownerName: PropTypes.string.isRequired,
  items: ImmutablePropTypes.list,
};

Wishlist.defaultProps = {
  items: [],
};

export default connect(mapStateToProps)(Wishlist);
