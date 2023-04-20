import { Menu, Transition, TransitionClasses } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '../../utils/theme';
import Icon from '../Icon';

export interface LocaleDropdownProps {
    locale: string;
    locales: string[];
    renderLink({ children, locale, className }: { children: ReactNode; locale: string; className: string }): ReactNode;
    transition?: TransitionClasses;
    classNameButton?: string;
    classNameItems?: string;
    classNameItem?: string;
    renderIcon?({ locale }: { locale: string }): ReactNode;
    renderIconExpand?({ locale }: { locale: string }): ReactNode;
    iconMap?: Map<string, string>;
    iconViewBox?: string;
    iconExpandName?: string;
    classNameIconExpand?: string;
    className?: string;
}

const LocaleDropdown = ({
    locale,
    locales,
    renderLink,
    transition,
    classNameButton,
    classNameItems,
    classNameItem,
    renderIcon,
    renderIconExpand,
    iconMap = new Map<string, string>([
        ['fr', 'localeFr'],
        ['en', 'localeEn'],
        ['nl', 'localeNl'],
        ['be', 'localeBe']
    ]),
    iconViewBox = '0 0 48 48',
    iconExpandName = 'expandMore',
    classNameIconExpand,
    className
}: LocaleDropdownProps) => {
    return (
        <Menu as="div" className={classNames('inline-flex relative', className)}>
            <Menu.Button className={classNames('inline-flex items-center mr-4', classNameButton)}>
                {renderIconExpand ? (
                    renderIconExpand({ locale })
                ) : (
                    <Icon name={iconExpandName} className={classNames('fill-black', classNameIconExpand)} />
                )}
                {renderIcon ? renderIcon({ locale }) : <Icon name={iconMap.get(locale)} viewBox={iconViewBox} />}
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                {...transition}
            >
                <Menu.Items
                    className={classNames(
                        'absolute mt-2 flex origin-top-left flex-col divide-y divide-gray-100 rounded-md bg-white shadow-lg lg:right-0 lg:origin-top-right',
                        classNameItems
                    )}
                >
                    {locales.map((locale) => (
                        <Menu.Item key={locale}>
                            {renderLink({
                                children: (
                                    <>
                                        <span className="sr-only">{locale}</span>
                                        <Icon name={iconMap.get(locale)} viewBox={iconViewBox} />
                                    </>
                                ),
                                locale,
                                className: classNames('flex', classNameItem)
                            })}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default LocaleDropdown;
