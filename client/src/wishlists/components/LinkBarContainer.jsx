import { PropTypes } from 'react';
import { connect } from 'react-redux';
import LinkBar from './LinkBar';

const mapStateToProps = (state, ownProps) => ({
  purchased: ownProps.purchased,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleTogglePurchased: () => {
    ownProps.togglePurchased(ownProps.itemId);
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
  togglePurchased: PropTypes.func,
};

export default LinkBarContainer;
