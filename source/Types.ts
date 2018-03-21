import { NavigatorTypes } from './navigator/';
import { LoginTypes } from './login/';
import { UtilityTypes } from './utility/';
import { MediaTypes, TakePhoto } from './media';
import { StorageTypes, SaveByKey, RemoveKey, GetByKey } from './storage';

/**
 * The global application state as contained in Redux
 *
 * All state objects might not be available.
 *
 * @export
 * @interface appTypes.IApplicationState
 */
export interface IApplicationState {
  route?: NavigatorTypes.INavigationState;
  login?: LoginTypes.ILoginState;
  utility?: UtilityTypes.IUtilityState;
  storage?: StorageTypes.IStorageState;
  media?: MediaTypes.IMediaState;
}

/**
 * Describes possible props for a components.
 *
 * All actions and state objects might not be available.
 *
 * @export
 * @interface IProps
 */
export interface IProps extends IApplicationState {
  // AppLoadingChanged?: appActions.AppLoadingChanged;
  dispatch?: any;
  FacebookLogin?: LoginTypes.FacebookLogin;
  AppErrorChanged?: UtilityTypes.IAppErrorChanged;
  AppLoadingChanged?: UtilityTypes.IAppLoadingChanged;
  TakePhoto?: TakePhoto;
  GoogleLogin?: LoginTypes.GoogleLogin;
  GetByKey?: GetByKey;
  RemoveKey?: RemoveKey;
  SaveByKey?: SaveByKey;
}
