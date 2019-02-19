import { app } from '../app'

describe('add', () => {
  it('returns the sum of two numbers', () => {
    expect(app.add(1, 2)).toEqual(3);
  })

  it('returns an error message when receiving a string by second parameter', () => {
    expect(app.add(3, '2')).toEqual(app.MESSAGE);
  })

  it('returns an error message when receiving a string by first parameter', () => {
    expect(app.add('3', 2)).toEqual(app.MESSAGE);
  })

  it('returns an error message when receiving two strings', () => {
    expect(app.add('3', '2')).toEqual(app.MESSAGE);
  })
})

describe('notANumber', () => {
  it('returns an error message when receiving a string by parameter', () => {
    expect(app.notANumber('2')).toEqual(app.MESSAGE);
  })

  it('returns an error message when receiving a number by parameter', () => {
    expect(app.notANumber(4)).toEqual(null);
  })

  it('returns an error message when receiving a Object by parameter', () => {
    expect(app.notANumber({})).toEqual(app.MESSAGE);
  })

  it('returns an error message when receiving a array by parameter', () => {
    expect(app.notANumber([])).toEqual(app.MESSAGE);
  })
})