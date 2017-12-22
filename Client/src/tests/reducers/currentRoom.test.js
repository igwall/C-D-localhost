import { defaultRoomsState } from '../../../store/store'

import reducer from '../../../store/reducers/rooms.reducer'

describe('Rooms reducer tests', () => {
  it('should add a list to the board', () => {
    const newState = {
      ...defaultBoardState,
      board: {
        ...defaultBoardState.board,
        lists: [{name: 'List', archived: false}]
      }
    }

    const action = {
      type: 'ADD_LIST',
      payload: {
        name: 'List',
        archived: false
      }
    }
    expect(reducer(defaultBoardState, action)).toEqual(newState)
})