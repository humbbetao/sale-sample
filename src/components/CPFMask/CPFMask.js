import React from 'react'

import MaskedInput from 'react-text-mask'

const cpfRegex = [
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
]
export default function CPFMaskCustom(props) {
  const { inputRef, ...other } = props
  return <MaskedInput {...other} ref={inputRef} mask={cpfRegex} />
}
