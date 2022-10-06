import TextImage from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../Button';
import Container from '../Container';

export default {
    title: 'Content/TextImage',
    component: TextImage,
    subcomponents: { Button }
} as ComponentMeta<typeof TextImage>;

const Template: ComponentStory<typeof TextImage> = ({ ...props }) => (
    <Container>
        <TextImage {...props} />
    </Container>
);

export const Default = Template.bind({});
Default.args = {
    title: 'Waar ga jij beginnen?',
    subtitle: 'Creative Digital Agency',
    description:
        'EF2 maakt jouw verbeterslag realiteit. Wij helpen je op een pragmatische manier, met een compleet plan. Gebaseerd op eenvoud. Eerst kijken wat er goed gaat. Kansen inventariseren. Dan maken we een sprong vooruit. Zo kun jij groeien vanuit je bestaande, solide basis. Dat is Rediscover to Renew!',
    odd: false,
    href: '#',
    image: <img src="https://via.placeholder.com/900x800" />,
    button: { children: 'Onze expertises', target: '_self', as: 'a' }
};
