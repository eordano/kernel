import { INCOMING_MESSAGE, OUTGOING_MESSAGE } from '../../types/renderer'
import { setup as incoming } from './hooks/incoming'
import { setup as outgoing } from './hooks/outgoing'
import { createStore } from './store'

const store = createStore()

export function setup(connection: any) {
  outgoing(connection, (data: any) => {
    console.log('a', data)
    store.dispatch({
      type: OUTGOING_MESSAGE,
      payload: data,
    })
  })
  incoming(connection, (data: any) => {
    console.log('b', data)
    store.dispatch({
      type: INCOMING_MESSAGE,
      payload: data,
    })
  })
}
