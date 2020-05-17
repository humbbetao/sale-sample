import formattedCurrency from '../formattedCurrency'
describe('formattedCurrency', () => {
  it('should return a currency formatted R$ 0.00 without a value passed', () => {
    const formatted = formattedCurrency()
    expect(formatted).toEqual(`R$ 0.00`)
  })

  it('should return a currency formatted R$ 2.30', () => {
    const value = 2.3
    const formatted = formattedCurrency(value)
    expect(formatted).toEqual(`R$ 2.30`)
  })
  it('should return a currency formatted R$ 2.00', () => {
    const value = 2
    const formatted = formattedCurrency(value)
    expect(formatted).toEqual(`R$ 2.00`)
  })

  it('should return a currency formatted R$ 0.40', () => {
    const value = 0.4
    const formatted = formattedCurrency(value)
    expect(formatted).toEqual(`R$ 0.40`)
  })

  it('should return a currency formatted R$ 0.02', () => {
    const value = 0.02
    const formatted = formattedCurrency(value)
    expect(formatted).toEqual(`R$ 0.02`)
  })
})
