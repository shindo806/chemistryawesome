import { Button, Grid, Modal } from 'semantic-ui-react';
import { useEffect } from 'react';

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CONFIG_CLOSE_ON_DIMMER_CLICK':
      return { ...state, closeOnDimmerClick: action.value };
    case 'CONFIG_CLOSE_ON_ESCAPE':
      return { ...state, closeOnEscape: action.value };
    case 'OPEN_MODAL':
      return { ...state, open: true };
    case 'CLOSE_MODAL':
      return { ...state, open: false };
    default:
      throw new Error();
  }
}
const Preview = function (props) {
  const link = props.link.split('view')[0] + 'preview';
  return <iframe src={link} width='640' height='480'></iframe>;
  // const renderLink = (
  //   <iframe
  //     src='https://drive.google.com/file/d/1sNH4Pu8F-L9FcQKxAn96IatNr_rrx8Fn/preview'
  //     width='640'
  //     height='480'
  //   ></iframe>
  // );
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
      dispatch({ type: 'OPEN_MODAL' });
    }
  }, [props.link]);
  return (
    <Grid columns={1}>
      <Grid.Column>
        <Modal
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          open={open}
          onOpen={() => dispatch({ type: 'OPEN_MODAL' })}
          onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
        >
          <Modal.Actions>
            <Button
              onClick={() => dispatch({ type: 'CLOSE_MODAL' })}
              color='teal'
            >
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
