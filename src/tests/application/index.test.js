/* eslint-env jest */
import { expect } from 'code'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import { App } from '../../../src/application/index'

describe('Given `App`', () => {
  let component, sandbox, increment, decrement

  function requiredProps (overrides = {}) {
    return {
      value: 0,
      increment: () => {},
      decrement: () => {},
      ...overrides
    }
  }

  function renderComponent (props = requiredProps()) {
    return shallow(<App {...props} />)
  }

  beforeEach(() => {
    sandbox = sinon.createSandbox()
    increment = sandbox.spy()
    decrement = sandbox.spy()
    component = renderComponent()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('should contain a `section` with a specifying className', () => {
    expect(component.find('section.App').exists()).to.be.true()
  })

  describe('Given a `.counter`', () => {
    it('should contain a `section` with a specifying className', () => {
      expect(component.find('section.counter').exists()).to.be.true()
    })
    it('should contain two buttons', () => {
      expect(component.find('.counter').find('button')).to.have.length(2)
      expect(component.find('button.decrement').exists()).to.be.true()
      expect(component.find('button.increment').exists()).to.be.true()
    })

    it('should call `decrement` when the appropriate button is clicked', () => {
      component.find('button.decrement').simulate('click')
      component.update()
      sinon.assert.calledOnce(decrement)
    })

    it('should call `increment` when the appropriate button is clicked', () => {
      component.find('button.increment').simulate('click')
      component.update()
      sinon.assert.calledOnce(increment)
    })
  })
})
