import classNames from 'classnames';

export interface RatingProps {
    value: number;
    onChange: (value: number) => void;
}

const STARS = 5;

const Rating = ({ value, onChange }: RatingProps) => {
    return (
        <div className={classNames('flex')}>
            {Array.from(Array(STARS).keys()).map((index) => {
                const active = value && Math.round(value) > index;

                return (
                    <div
                        key={index}
                        onClick={() => onChange(index + 1)}
                        className={classNames('w-3 h-3 rounded-full bg-black', { 'bg-yellow-300': active })}
                    ></div>
                );
            })}
        </div>
    );
};

export default Rating;
