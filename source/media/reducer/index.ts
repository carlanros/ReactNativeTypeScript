// media/reducers/index
import * as media from '../types';
import { IMediaState, IMediaAction, MediaConstants } from '../types/index';
import { Media } from '../components/index';
import { IApplicationState } from '../../Types';
import { ILoginState } from '../../login/types/index';
import { Image } from 'react-native';

/**
 * Default state
 */
const initialState: media.IMediaState = {
   cancelled: false,
   height: 0,
   width: 0,
   uri: null,
};

function CreateMediaState(
  action: media.IMediaAction

): media.IMediaState {
  return {
  cancelled: action.cancelled,
  height: action.height,
  width: action.width,
  uri: action.uri,
  };
}

/**
 * Handle the login actions and return new state
 * @param state the old state
 * @param action login action dispatch
 */
const MediaReducer = (
  state = initialState,
  action: media.IMediaAction
): media.IMediaState => {
  switch (action.type) {
    case media.MediaConstants.MEDIA_FAILED:
      return Object.assign({}, state, CreateMediaState(action));
    case media.MediaConstants.MEDIA_SUCCESS:
      return Object.assign({}, state, CreateMediaState(action));
    default:
      return state;
  }
};

export default MediaReducer;