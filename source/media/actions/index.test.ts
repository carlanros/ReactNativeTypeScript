// action/index.test.ts
// @ts-ignore
import configureMockStore, { MockStore } from 'redux-mock-store';
import { Store } from '../../store';
import { TakePhoto } from '../actions';
import * as MediaTypes from '../types';
import { UtilityTypes } from '../../utility';
import { IMediaAction } from '../types/index';

const storeMock = configureMockStore<Store>();

describe('Media actions', () => {
  beforeEach(() => {
    // @ts-ignore
    storeMock.clearActions();
  });
  test('TakePhoto returns Success when done', async () => {
    const expectedPayload: MediaTypes.IMediaAction = {
      type: MediaTypes.MediaConstants.MEDIA_SUCCESS,
      cancelled: false,
      uri: 'test',
      width: 1,
      height: 1,
    };

    const AppLoading = (sender: string, reason: string) => {
      return {
        sender,
        reason,
        type: UtilityTypes.UtilityConstants.APP_LOAD_BUSY,
      };
    };

    const AppLoadDone = (sender: string, reason: string = null) => {
      return {
        sender,
        type: UtilityTypes.UtilityConstants.APP_LOAD_DONE,
        reason,
      };
    };
    const NoError = (
      sender: string,
      reason: string = null,
      exception: string = null
    ) => {
      return {
        sender,
        type: UtilityTypes.UtilityConstants.APP_NO_ERROR,
        reason,
        exception,
      };
    };
    const expectedActions = [
      AppLoading('TakePhoto', MediaTypes.MediaConstants.MEDIA_BUSY),
      expectedPayload,
      NoError('TakePhoto'),
      AppLoadDone('TakePhoto'),
    ];

    // Dispatch action
    // @ts-ignore
    await storeMock.dispatch(TakePhoto());

    // @ts-ignore
    expect(storeMock.getActions()).toMatchSnapshot();

    // @ts-ignore
    expect(storeMock.getActions()).toEqual(expectedActions);
  });
});
