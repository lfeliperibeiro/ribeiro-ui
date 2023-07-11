import { TextInputContainer, Input, InputLabel } from './styles'
import { ComponentProps } from 'react'

export interface TextInputProps extends ComponentProps<typeof Input> {
  labelId: string
  label: string
}

export function TextInput({
  prefix,
  labelId,
  label,
  ...props
}: TextInputProps) {
  return (
    <TextInputContainer>
      <Input id={labelId} {...props} required />
      <InputLabel htmlFor={labelId}>{label}</InputLabel>
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
