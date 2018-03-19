// media/components/index.tsx
import React from 'react';
import { Button, Image, View } from 'react-native';
import { ImagePicker } from 'expo';
import { Actions } from 'react-native-router-flux';
import { connect, Dispatch } from 'react-redux';
import * as types from '../../Types';
import { TakePhoto } from '../actions';
import  MediaReducer from '../reducer';
import { bindActionCreators } from 'redux';
import { MediaTypes } from '..';

interface IState { image: string; }
export  class Media extends React.Component<types.IProps, IState> {

    constructor(props: types.IProps) {
        super(props);
        this.state = {
            image: null,

        };
    }

    render() {
        let { image } = this.state;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Button
              title='Pick an image from camera roll'
              onPress={this._pickImage}
              />
              {image &&
            <Image source={{ uri: image }} style={{ width: 200, height: 200 }}/>  }
            </View>
        );
    }
    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],

        });
        console.log(result);

        if (!result.cancelled) {
            // @ts-ignore
            this.setState({ image: result.uri });
        }
    }

}
const mapStateToProps = (state: types.IApplicationState) => ({
    route: state.route,
    login: state.login,
  });

  const mapDispatchToProps = (dispatch: Dispatch<types.IProps>) => ({
    dispatch,
    TakePhoto: bindActionCreators(TakePhoto, dispatch),

  });

  export default connect<types.IApplicationState, types.IProps>(
    mapStateToProps,
    mapDispatchToProps
  )(Media);
