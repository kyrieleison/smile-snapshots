import React,{ Component, PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

export default class ListImages extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.images);

    this.onOpen = (e) => {
      console.log(e+" "+i+" "+v);
    }
  }

  render() {
    return (
  <div>
    <List>
      <Subheader>Recent chats</Subheader>
      {this.props.images.map((image) => (
        <ListItem
          key={image._id}
          primaryText={image.msg}
          leftAvatar={<Avatar src={image.url} />}
          onTouchTap={this.onOpen}
        />))}
    </List>
  </div>
    );
  }
}

ListImages.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  images: PropTypes.array.isRequired,
};


