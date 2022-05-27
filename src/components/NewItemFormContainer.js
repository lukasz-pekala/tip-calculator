import { connect } from 'react-redux';
import { NewItemForm } from '../components/NewItemForm';
import { bindActionCreators } from 'redux';
import { addNewItem } from '../store/items/actions';

// export const NewItemFormContainer = connect()(NewItemForm);

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      onSubmit: (name, price) => addNewItem({ name, price })
    },
    dispatch
  );
};

export const NewItemFormContainer = connect(
  null,
  mapDispatchToProps
)(NewItemForm);
