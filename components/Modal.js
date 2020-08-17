import { Button, Grid, Modal } from 'semantic-ui-react';
import { useEffect } from 'react';

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CONFIG_CLOSE_ON_DIMMER_CLICK':
      return {
        ...state,
        closeOnDimmerClick: action.value,
      };
    case 'CONFIG_CLOSE_ON_ESCAPE':
      return {
        ...state,
        closeOnEscape: action.value,
      };
    case 'OPEN_MODAL':
      return {
        ...state,
        open: true,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        open: false,
      };
    default:
      throw new Error();
  }
}
const Preview = function (props) {
  const link = props.link.split('view')[0] + 'preview';
  return (
    <iframe
      src={link}
      width='800'
      height='600'
      style={{ margin: '1rem auto', display: 'inherit' }}
    >
      {' '}
    </iframe>
  );
};

function CustomModal(props) {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    closeOnEscape: true,
    closeOnDimmerClick: true,
    open: false,
    dimmer: undefined,
  });
  const { open, closeOnEscape, closeOnDimmerClick } = state;

  useEffect(() => {
    if (props.link !== '') {
      dispatch({
        type: 'OPEN_MODAL',
      });
    }
  }, [props.link]);

  const handleOnClose = () => {
    dispatch({
      type: 'CLOSE_MODAL',
    });
    props.handlePreview('');
  };

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Modal
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          open={open}
          onClose={() => handleOnClose()}
        >
          <Modal.Actions>
            <Button className='modal-button' onClick={() => handleOnClose()}>
              x
            </Button>
          </Modal.Actions>
          <Preview link={props.link} />
        </Modal>
      </Grid.Column>
    </Grid>
  );
}

export default CustomModal;
