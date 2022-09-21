import { gql } from '@apollo/client';

export const COMPONENT_INPUT_BUTTON = gql`
    fragment ComponentInputButton on ComponentInputButton {
        text
        href
        type
        target
    }
`;
