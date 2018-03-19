// media/types/index.ts

export enum MediaConstants {
  /**
   * Login failed or was cancelled
   */
  MEDIA_FAILED = 'MEDIA_FAILED',
  /**
   * Login state: authentication succeeded
   *
   * @static
   * @memberof MediaConstants
   */
  MEDIA_SUCCESS = 'MEDIA_SUCCESS',

  /**
   * Login state: authentication in progress
   *
   * @static
   * @memberof MediaConstants
   */
  MEDIA_BUSY = 'Kollar vem du är',
}

export interface IMediaState {
  cancelled: boolean;
  height: number;
  width: number;
  uri: string;

}
export interface IMediaAction extends IMediaState {
  type: MediaConstants;
}
