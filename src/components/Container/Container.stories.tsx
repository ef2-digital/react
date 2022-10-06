import Container from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Row from '../Row';

export default {
    title: 'Grid/Container',
    component: Container,
    subcomponents: { Row }
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = ({ ...props }) => (
    <Container {...props}>
        <Row className="text-white font-mono text-sm text-center font-bold leading-6">
            <div className="p-4 mb-4 rounded-lg shadow-lg bg-fuchsia-500">01</div>
            <div className="p-4 mb-4 rounded-lg shadow-lg bg-fuchsia-500 col-span-4">02</div>
            <div className="p-4 mb-4 rounded-lg shadow-lg bg-fuchsia-500 col-span-5">03</div>
            <div className="p-4 mb-4 rounded-lg shadow-lg bg-fuchsia-500 col-span-2">04</div>
            <div className="p-4 mb-4 rounded-lg shadow-lg bg-fuchsia-500 col-span-6">05</div>
            <div className="p-4 mb-4 rounded-lg shadow-lg bg-fuchsia-500 col-span-6">06</div>
        </Row>
    </Container>
);

export const Default = Template.bind({});
