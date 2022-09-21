import StrapiButton from './';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { COMPONENT_INPUT_BUTTON } from '../../../graphql/components/button';
import { useQuery, gql } from '@apollo/client';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';

const BUTTON_QUERY = gql`
    ${COMPONENT_INPUT_BUTTON}

    query ButtonQuery {
        button {
            ...ComponentInputButton
        }
    }
`

const mocks: MockedResponse[] = [
    {
        request: {
            query: BUTTON_QUERY
        },
        result: {
            data: {
                viewer: null
            }
        }
    }
];

export default {
    title: 'Strapi/StrapiButton',
    component: StrapiButton,
    decorators: [
        (Story) => (
            <MockedProvider mocks={mocks} addTypename={false}>
                <Story />
            </MockedProvider>
        )
    ]
} as ComponentMeta<typeof StrapiButton>;

const Template: ComponentStory<typeof StrapiButton> = ({ ...props }) => {
    const { data } = useQuery(BUTTON_QUERY);

    console.log({ data });
    return <StrapiButton {...props} href="#" />;
};

export const Default = Template.bind({});

Default.parameters = {
    apolloClient: {
        mocks
    }
};
