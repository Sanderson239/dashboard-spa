import { combineReducers } from 'redux';
import { rootReducer as transitReducer } from '@databraid/transit-widget/lib';
import {
  TRANSIT_WIDGET_ID,
  SLACK_WIDGET_ID,
  GITHUB_WIDGET_ID,
} from '../constants';

const initialState = {
  ids: [TRANSIT_WIDGET_ID],
  byId: {},
};

const widgets = (state = initialState, action) => ({
  ...state,
  byId: {
    [TRANSIT_WIDGET_ID]: transitReducer(state.byId[TRANSIT_WIDGET_ID], action),
  },
});

const rootReducer = combineReducers({
  widgets,
});

export default rootReducer;
