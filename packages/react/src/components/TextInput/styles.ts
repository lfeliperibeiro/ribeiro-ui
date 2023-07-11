import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  position: 'relative',
  display: 'block',

  '&:has(input:focus)': {
    borderColor: '$cyan700',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const InputLabel = styled('label', {
  boxSizing: 'border-box',
  width: '100%',
  position: 'absolute',
  fontFamily: '$default',
  top: '35%',
  left: '1.25rem',
  fontSize: '$sm',
  cursor: 'text',
  color: '$gray400',
  transition: 'font 0.1s ease, top 0.1s ease, transform 0.1s ease',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  background: 'transparent',
  border: 0,
  width: '100%',
  height: '$7',
  boxSizing: 'border-box',
  outline: 'none',

  [`&:focus ~ ${InputLabel}, &:not(:focus):valid ~ ${InputLabel}`]: {
    outline: 0,
    fontSize: '$xxs',
    top: '5px',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },
})
