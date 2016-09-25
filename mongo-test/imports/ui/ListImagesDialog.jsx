import React,{ Component, PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class ListImagesDialog extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.images);
  }

  onClose () {
    this.props.onCloseDialog();
  }

  render() {
    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        onTouchTap={this.onClose.bind(this)}
      />,
    ];

    return (
      <div>
        <Dialog
          actions={actions}
          modal={false}
          open={this.props.open}
        >
        <img src={this.props.url} />
        </Dialog>
      </div>
    );
  }
}

ListImagesDialog.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  url: PropTypes.string.isRequired,
  open :PropTypes.bool.isRequired,
  onCloseDialog: PropTypes.func.isRequired
};


