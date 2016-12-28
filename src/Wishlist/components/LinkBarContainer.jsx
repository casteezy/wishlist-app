import { PropTypes } from 'react';
import { connect } from 'react-redux';
import { markPurchased } from '../../reduxModules/wishlist';
import LinkBar from './LinkBar';

const mapStateToProps = (state, ownProps) => ({
  purchased: ownProps.purchased,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleMarkPurchased: () => {
    dispatch(markPurchased(ownProps.itemId));
  },
  handleAskAbout: () => {
    // TODO
  },
});


const LinkBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LinkBar);


LinkBarContainer.propTypes = {
  itemId: PropTypes.string.isRequired,
  purchased: PropTypes.bool,
};

export default LinkBarContainer;
