import { keyframes, styled } from '../../styles'
import * as Checkbox from '@radix-ui/react-checkbox'

export const CheckBoxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '&[data-state=checked]': {
    backgroundColor: '$ignite300',
  },

  '&:focus': {
    border: '2px solid $ignite300',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'tranlateY(-100%)',
  },
  to: {
    transform: 'tranlateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'tranlateY(0)',
  },
  to: {
    transform: 'tranlateY(-100%)',
  },
})

export const CheckBoxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state=checked]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state=unchecked]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})
