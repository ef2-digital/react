import StrapiButton from './';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { COMPONENT_INPUT_BUTTON } from '../../../graphql/components/inputButton';
import { gql } from '@apollo/client';

export default {
    title: 'Strapi/StrapiButton',
    component: StrapiButton
} as ComponentMeta<typeof StrapiButton>;

const Template: ComponentStory<typeof StrapiButton> = ({ ...props }) => <StrapiButton {...props} href="#" />;

export const Default = Template.bind({});

Default.parameters = {
    apolloClient: {
        mocks: [
            {
                request: {
                    query: gql`
                        ${COMPONENT_INPUT_BUTTON}

                        query ButtonQuery {
                            button {
                                ...ComponentInputButton
                            }
                        }
                    `
                },
                result: {
                    data: {
                        viewer: null
                    }
                }
            }
        ]
    }
};
