import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@ribeiro-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Heading Example',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: 'inline-radio',
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading Example',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Default headign always as `h2`, but we can change with property `as`',
      },
    },
  },
}
