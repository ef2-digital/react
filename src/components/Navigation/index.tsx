import { Disclosure } from '@headlessui/react';
import classNames from 'classnames';
import { ReactNode, useRef } from 'react';
import Container from '../Container';
import Toggle from '../Toggle';

export interface NavigationProps {
    //     items: ItemProps[];
    logo: ReactNode;
    fixed?: boolean;
}

export interface HeaderProps extends NavigationProps {
    open: boolean;
    close: () => void;
}

const Header = ({ open, close, logo, fixed }: HeaderProps) => {
    const toggleRef = useRef<HTMLButtonElement>(null);

    return (
        <header>
            <nav aria-label="hoofdmenu" role="navigation">
                <div
                    className={classNames('top-0 z-[100] flex h-[5rem] w-full items-center bg-white shadow-sm md:h-[6rem]', {
                        fixed: fixed
                    })}
                >
                    <Container>
                        <div className="flex items-center justify-between">
                            {logo}
                            {/* <Link href="/" passHref>
                                <Logo ref={firstItemRef} />
                            </Link> */}
                            {/* <Menu items={items} /> */}
                            <Toggle ref={toggleRef} open={open} />
                        </div>
                    </Container>
                </div>
                {/* <MenuMobile
                    closeRef={toggleRef}
                    firstItemRef={firstItemRef}
                    lastItemRef={lastItemRef}
                    items={items}
                    open={open}
                    close={close}
                /> */}
            </nav>
        </header>
    );
};

const Navigation = (props: NavigationProps) => {
    // Render.
    return (
        <>
            <a className="p sr-only !mb-0 px-4 !leading-10 hover:underline focus:not-sr-only" href="#main">
                Overslaan en naar de inhoud gaan
            </a>
            <Disclosure>{({ open, close }) => <Header open={open} close={close} {...props} />}</Disclosure>
        </>
    );
};

export default Navigation;
