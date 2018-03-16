// media/actions/intex.ts
import * as Redux from 'redux';
import axios from 'axios';
import { Constants, Facebook } from 'expo';
import * as mediaTypes from '../types/';
import { AppErrorChanged, AppLoadingChanged } from '../../utility/';
import { StorageTypes, SaveByKey } from '../../storage';
// import { MediaConstants } from '../types/index';

const takePhoto = 'TakePhoto';
/**
 * Login to Facebook and store user to AsyncStorage
 * @function FacebookLogin
 * @returns {UserDispatch}
 * @memberof FacebookActions
 * @public
 * @global
 */
export const FacebookLogin = () => async (
  dispatch: Redux.Dispatch<mediaTypes.IMediaAction>
) => {
  dispatch(
    AppLoadingChanged({
      isBusy: true,
      reason: mediaTypes.MediaConstants.MEDIA_BUSY,
      sender: takePhoto,
    })
  );

  try {
// Expo bild:

      let actionResult: mediaTypes.IMediaAction = {
          type: mediaTypes.MediaConstants.MEDIA_SUCCESS,

      };

      if (!actionResult.cancelled) {
      dispatch(actionResult);
         // Reset errors
   dispatch(
       AppErrorChanged({ hasError: false, sender: takePhoto }));
    } else {

    dispatch(
        AppErrorChanged({
          hasError: true,
          reason: 'Photo was cancelled',
          exception: mediaTypes.MediaConstants.MEDIA_FAILED,
          sender: takePhoto,
        })
      );
    }
     } catch (error) {
    dispatch(
      AppErrorChanged({
        hasError: true,
        reason: mediaTypes.MediaConstants.MEDIA_FAILED,
        exception: error,
        sender: takePhoto,
      })
    );
  } finally {
    dispatch(AppLoadingChanged({ isBusy: false, sender: takePhoto }));

  }
};