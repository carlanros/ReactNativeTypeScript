// media/actions/intex.ts
import * as Redux from 'redux';
import { ImagePicker } from 'expo';
import * as mediaTypes from '../types/';
import { AppErrorChanged, AppLoadingChanged } from '../../utility/';

// import { MediaConstants, IMediaAction, IMediaState } from '../types/index';
// import { Image } from 'react-native';

const takePhoto = 'TakePhoto';

interface ImageInfo {
  uri: string;
  width: number;
  height: number;
  cancelled: boolean;
}
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
// Expo bild

  let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
  }) as ImageInfo;

  console.log(result);

  if (!result.cancelled) {

      let actionResult: mediaTypes.IMediaAction = {
        type: mediaTypes.MediaConstants.MEDIA_SUCCESS,
        cancelled: false,
        uri : result.uri,
        width: result.width,
        heigth: result.height,
      };

      // Success
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