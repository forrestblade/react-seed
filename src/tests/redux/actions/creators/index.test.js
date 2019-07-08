/* eslint-env jest */
import { expect } from 'code'
import * as creators from '../../../../redux/actions/creators'
import types from '../../../../redux/actions/types'

describe('Given the action creators', () => {
  describe('Given setCategories creator', () => {
    it('should creates an action to set categories', () => {
      const expectedAction = {
        type: types.DECREMENT
      }
      expect(creators.decrement()).to.equal(expectedAction)
    })
  })

  describe('Given pickCategory creator', () => {
    it('should create an action to pick a category', () => {
      const expectedAction = {
        type: types.INCREMENT
      }

      expect(creators.increment()).to.equal(expectedAction)
    })
  })
})
