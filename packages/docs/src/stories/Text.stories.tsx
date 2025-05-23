import { Text, TextProps } from '@ignite-ui/react'
import { StoryObj, Meta } from '@storybook/react'


export default {
    title: 'Typography/Text',
    component: Text,

    args: {
        size: 'md',
        children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit voluptatum optio blanditiis rerum necessitatibus nihil tenetur dignissimos nulla voluptates consectetur, illum similique doloremque. Voluptate fugit assumenda voluptatibus ea illo mollitia?'
    },

    argTypes: {
        size: {
            options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
            control: {
                type: 'inline-radio'
            }
        },
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong'
    }
}