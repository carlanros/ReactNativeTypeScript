// media/components/index.tsx
import React from 'react';
import { Button, Image, View } from 'react-native';

import { connect, Dispatch } from 'react-redux';
import * as types from '../../Types';
import { TakePhoto } from '../actions';

import { bindActionCreators } from 'redux';

export class Media extends React.Component<types.IProps, {}> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title='Pick an image from camera roll'
          onPress={this._pickImage}
        />
        {this.props.media && this.props.media.uri ? (
          <Image
            source={{ uri: this.props.media.uri }}
            style={{ width: 200, height: 200 }}
          />
        ) : null}
      </View>
    );
  }
  _pickImage = async () => {
    await this.props.TakePhoto();
  }
}
const mapStateToProps = (state: types.IApplicationState) => ({
  route: state.route,
  media: state.media,
});

const mapDispatchToProps = (dispatch: Dispatch<types.IProps>) => ({
  dispatch,
  TakePhoto: bindActionCreators(TakePhoto, dispatch),
});

export default connect<types.IApplicationState, types.IProps>(
  mapStateToProps,
  mapDispatchToProps
)(Media);
