import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import { getAttributeVariantClasses } from '../../utils/theme';
import { useThemeContext } from '../ThemeProvider';

export interface CopyrightProps {
    className?: string;
    label?: string;
    screenReader?: string;
    color?: string;
    variant?: string;
}

const Copyright = ({ className, label, variant, color, screenReader }: PropsWithChildren<CopyrightProps>) => {
    const {
        theme: { copyright }
    } = useThemeContext();

    // [&>svg]:fill-primary

    return (
        <a
            className={classNames(getAttributeVariantClasses(copyright.variant, variant, color), className)}
            href="https://ef2.nl/"
            target="_blank"
            rel="noreferrer"
        >
            <span>
                {label || 'Gebouwd door'} <span className="sr-only">{screenReader ?? `EF2 (opent in een nieuw venster)`}</span>
            </span>
            <svg
                className={classNames('fill-current	not-sr-only ml-3')}
                width="30"
                height="33"
                viewBox="0 0 30 33"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M9.725 5.4125L0 2.825V27.5L20.325 32.9125L30.0375 30.325V0L9.725 5.4125ZM10.8375 13.1375H7.75V16.3125H10.2375V17.8875H7.75V21.2375H10.8375V22.8125H6.05V11.5625H10.8375V13.1375ZM17.3625 13.1375L14.35 13.125V16.3125H16.7625V17.8875H14.35V22.8125H12.65V11.5625H17.3625V13.1375ZM24 14.3625C24 15.45 23.675 16.4 22.6 18.1375L20.7 21.175H24V22.7875H18.7625V21.3375L21.2875 17.275C22.075 16 22.3 15.2125 22.3 14.3V14.075C22.3 13.3375 21.975 12.95 21.35 12.95C20.725 12.95 20.4 13.3375 20.4 14.2875V14.85L18.7625 14.775V14C18.7625 12.35 19.7375 11.375 21.3875 11.375C23.0125 11.3875 24 12.3375 24 13.95V14.3625Z" />
            </svg>
        </a>
    );
};

export default Copyright;
