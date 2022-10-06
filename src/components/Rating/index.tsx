import classNames from 'classnames';
import { useEffect, useState } from 'react';

export interface RatingProps {
    value: number;
    onChange?: (value: number) => void;
    readOnly?: boolean;
    classNameActive?: string;
    classNameEmpty?: string;
}

const STARS = 5;

const Rating = ({ value, onChange, readOnly, classNameActive, classNameEmpty }: RatingProps) => {
    const [hover, setHover] = useState<number>(value);

    // Life cycle.
    useEffect(() => {
        if (value !== hover) {
            setHover(value);
        }
    }, [value]);

    return (
        <div className={classNames('flex')}>
            {Array.from(Array(STARS).keys()).map((index) => {
                // const active = value && Math.round(value) > index;
                const active = Math.round(hover) > index;
                const starValue = index + 1;

                return (
                    <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        onMouseEnter={() => !readOnly && setHover(starValue)}
                        onMouseLeave={() => !readOnly && setHover(value)}
                        onClick={() => onChange && !readOnly && onChange(starValue)}
                        className={classNames({
                            [`fill-yellow-400 ${classNameActive}`]: active,
                            [`fill-gray-300 ${classNameEmpty}`]: !active,
                            'hover:scale-125 hover:cursor-pointer transition-[transform]': !readOnly
                        })}
                    >
                        <path
                            d={
                                active
                                    ? 'M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'
                                    : 'M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z'
                            }
                        />
                    </svg>
                );
            })}
        </div>
    );
};

export default Rating;
