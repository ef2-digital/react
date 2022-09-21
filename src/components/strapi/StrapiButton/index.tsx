import Button, { ButtonProps } from '../../Button';
import Link from 'next/link';

export interface StrapiButtonProps {
    text: string;
    href: string;
}

export const getButtonProps = (component: StrapiButtonProps): ButtonProps & { href: string } => {
    return {
        as: 'a',
        children: component.text,
        href: component.href
    };
};

const StrapiButton = ({ href, ...props }: StrapiButtonProps) => {
    const button = getButtonProps({ href, ...props });

    return (
        <Link href={href} passHref>
            <Button {...button} />
        </Link>
    );
};

export default StrapiButton;
