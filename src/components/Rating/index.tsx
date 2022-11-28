import classNames from 'classnames';
import { ChangeEvent, forwardRef, Fragment, InputHTMLAttributes, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getAttributeVariantClasses } from '../../utils/theme';
import Icon from '../Icon';
import { useThemeContext } from '../ThemeProvider';

export interface RatingProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    value: number;
    onChange?: (event: ChangeEvent<HTMLInputElement>, value: number) => void;
    readOnly?: boolean;
    classNameActive?: string;
    classNameEmpty?: string;
    variant?: string;
    color?: string;
    activeIcon?: string;
    emptyIcon?: string;
}

const STARS = 5;

const Rating = forwardRef<HTMLInputElement, RatingProps>(
    (
        {
            value,
            onChange,
            readOnly,
            classNameActive,
            classNameEmpty,
            variant,
            color = 'primary',
            activeIcon = 'starFill',
            emptyIcon = 'star'
        },
        ref
    ) => {
        const { t } = useTranslation('input');
        const [hover, setHover] = useState<number>(value);

        const {
            theme: { rating }
        } = useThemeContext();

        // Methods.
        const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;

            if (onChange && typeof Number(value)) {
                onChange && onChange(event, parseInt(value));
            }
        };

        // Life cycle.
        useEffect(() => {
            if (value !== hover) {
                setHover(value);
            }
        }, [value]);

        return (
            <fieldset
                className={classNames({
                    '[&>div]:focus-within:outline-dashed [&>div]:focus-within:outline-1 [&>div]:focus-within:outline-offset-4 [&>div]:focus-within:outline-primary':
                        !readOnly
                })}
            >
                <legend className="sr-only">{t('rating.rating')}</legend>
                <div className={classNames(getAttributeVariantClasses(rating.variant, variant, color), classNameEmpty)}>
                    {Array.from(Array(STARS).keys()).map((index) => {
                        const starValue = index + 1;
                        const active = Math.round(hover) > index;
                        const id = `rating-${starValue}`;

                        return (
                            <Fragment key={id}>
                                <input
                                    ref={ref}
                                    className="sr-only"
                                    type="radio"
                                    name="rating"
                                    disabled={readOnly}
                                    value={starValue}
                                    onChange={handleOnChange}
                                    id={id}
                                />
                                <label htmlFor={id}>
                                    <span className="sr-only">{t('rating.star', { count: starValue })}</span>
                                    <span
                                        aria-hidden
                                        className={classNames({
                                            'd-flex hover:scale-125 hover:cursor-pointer transition-[transform]': !readOnly
                                        })}
                                        onMouseEnter={() => !readOnly && setHover(starValue)}
                                        onMouseLeave={() => !readOnly && setHover(value)}
                                    >
                                        {active ? (
                                            <Icon
                                                name={activeIcon}
                                                className={classNames(
                                                    getAttributeVariantClasses(rating.active, variant, color),
                                                    classNameActive
                                                )}
                                            />
                                        ) : (
                                            <Icon
                                                name={emptyIcon}
                                                className={classNames(
                                                    getAttributeVariantClasses(rating.empty, variant, color),
                                                    classNameEmpty
                                                )}
                                            />
                                        )}
                                    </span>
                                </label>
                            </Fragment>
                        );
                    })}
                </div>
            </fieldset>
        );
    }
);

Rating.displayName = 'Rating';

export default Rating;
