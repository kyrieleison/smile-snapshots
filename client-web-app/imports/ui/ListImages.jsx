import React,{ Component, PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import ListImagesDialog from './ListImagesDialog';

export default class ListImages extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.images);

    this.state = {
      open:false,
      url: ''
    }
  }

  onOpenDialog(url) {
    this.setState({ open: true, url: url });
    console.log(url);
  }

  onCloseDialog() {
    this.setState({ open: false, url: '' });
  }

  render() {
    return (
  <div>
    <List>
      {this.props.images.map((image) => (
        <ListItem
          key={image.id}
          primaryText={image.msg}
          leftAvatar={<Avatar src={image.url} />}
          onTouchTap={this.onOpenDialog.bind(this,image.url)}
        />))}
    </List>
    <ListImagesDialog 
      open = {this.state.open}
      url={this.state.url}
      onCloseDialog = {this.onCloseDialog.bind(this)} />
  </div>
    );
  }
}

ListImages.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  images: PropTypes.array.isRequired,
};


