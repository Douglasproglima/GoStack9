import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import {addToCartSuccess} from './actions';

//O asterico(*) tem o sentido de assincrono quase o mesmo de async
function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);
  yield put(addToCartSuccess(response.data));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
]);
