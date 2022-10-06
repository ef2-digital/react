import classNames from 'classnames';
import Link from 'next/link';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType, ReactNode } from 'react';
import { Maybe } from '../../theme/types';
import Button, { ButtonProps } from '../Button';
import Row from '../Row';
import TitleSubtitle from '../TitleSubtitle';

type Attributes = AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement>;

export interface TextImageProps extends Omit<Attributes, 'href'> {
    as?: ElementType;
    odd?: boolean;
    className?: string;
    classNameText?: string;
    classNameDescription?: string;
    classNameImage?: string;
    title: string;
    subtitle?: string;
    description: string;
    last?: boolean;
    href?: Maybe<string>;
    button?: ButtonProps;
    image?: ReactNode;
}

const TextImage = ({
    className,
    classNameText,
    classNameDescription,
    classNameImage,
    odd,
    title,
    subtitle,
    description,
    href,
    button,
    image,
    as: Tag = 'article'
}: TextImageProps) => {
    return (
        <Tag className={className}>
            <Row>
                <div
                    className={classNames(
                        'order-2 col-span-4 flex flex-col items-start md:col-span-6 lg:mt-16 xl:mt-24',
                        {
                            'md:order-1': odd,
                            'md:order-2 md:col-start-7': !odd
                        },
                        classNameText
                    )}
                >
                    <TitleSubtitle title={title} subtitle={subtitle} />
                    <p className={classNames('mb-6', classNameDescription)}>{description}</p>
                    {href && button && (
                        <Link href={href} passHref>
                            <Button rel={button?.target === '_blank' ? 'noreferrer' : undefined} {...button} className="order-4" />
                        </Link>
                    )}
                </div>
                <div
                    className={classNames(
                        'order-1 col-span-4 mb-8 h-auto w-full md:col-span-5 md:mb-0',
                        {
                            'md:order-2 md:col-start-8': odd,
                            'md:order-1': !odd
                        },
                        classNameImage
                    )}
                >
                    {image}
                </div>
            </Row>
        </Tag>
    );
};

export default TextImage;
