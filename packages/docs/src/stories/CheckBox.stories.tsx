import { Box, Text, CheckBox, CheckBoxProps } from '@ignite-ui/react'
import { StoryObj, Meta } from '@storybook/react'


export default {
    title: 'Form/CheckBox',
    component: CheckBox,

    args: {},
    decorators: [
        (Story) => {
            return (
                <Box as="label" css={{ display: 'flex', flexDirection: 'row', gap: 2}}>
                    <Text size="sm" css={{ color: '$white'}}>Accept terms of use</Text>
                    {Story()}
                </Box>
            )
        }
    ]
} as Meta<CheckBoxProps>

export const Primary: StoryObj<CheckBoxProps> = {
}

