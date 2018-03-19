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
          const expectedReply = {
              name: 'test',
              picture: {
                  data: {
                      url: null,
                  },
              },
          };
          const expectedPayload = {
            name: expectedReply.name,
            picture: expectedReply.picture.data.url,
            accessToken: 'fbTokenMock',
            type: 'Facebook',
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

          const expectedActions = [
            AppLoading('TakePhoto', MediaTypes.MediaConstants.MEDIA_BUSY),
             {
              type: MediaTypes.MediaConstants.MEDIA_BUSY,
              payload: expectedPayload,

            },
          ];
          const expectedActions = [
            AppLoading('TakePhoto', MediaTypes.MediaConstants.MEDIA_SUCCESS),
             {
              type: MediaTypes.MediaConstants.MEDIA_SUCCESS,
              payload: expectedPayload,
            },
          ];

          // Dispatch action
          // @ts-ignore
          await storeMock.dispatch(FacebookLogin());

          // @ts-ignore
          expect(storeMock.getActions()).toMatchSnapshot();

          // @ts-ignore
          expect(storeMock.getActions()).toEqual(expectedActions);
        });
      });

        // Dispatch action
        // @ts-ignore
        await storeMock.dispatch(TakePhoto());

        // @ts-ignore
        expect(storeMock.getActions()).toMatchSnapshot();

        // @ts-ignore
        expect(storeMock.getActions()).toEqual(expectedActions);
      });

});
