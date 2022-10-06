import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import { Maybe } from '../../theme/types';
import Skew from '../Skew';

export interface TitleSubtitleProps {
    title?: Maybe<string>;
    subtitle?: Maybe<string>;
    className?: string;
    important?: boolean;
    center?: boolean;
}

const TitleSubtitle = ({ title, subtitle, className, center, important }: TitleSubtitleProps) => {
    const { ref, inView } = useInView({
        triggerOnce: true
    });

    // Render.
    const Tag = important ? 'h2' : 'h4';

    return (
        <div ref={ref} className={classNames('flex flex-col', className)}>
            {title && (
                <Skew
                    inView={inView}
                    as={important ? 'h1' : 'h3'}
                    parentClassName="order-2 mb-6"
                    className={classNames({ 'text-center': center })}
                >
                    {title}
                </Skew>
            )}
            {subtitle && (
                <Tag
                    className={classNames('order-1 mb-4 text-secondary transition-all duration-500', {
                        'translate-y-6 opacity-0': !inView,
                        'translate-y-0 opacity-100': inView,
                        'text-center': center,
                        h4: important
                    })}
                >
                    {subtitle}
                </Tag>
            )}
        </div>
    );
};

export default TitleSubtitle;
