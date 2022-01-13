import React, {ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent} from 'react'
import s from './Button.module.css'
import {isDisabled} from "@testing-library/user-event/dist/utils";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    callback: (e:MouseEvent<HTMLButtonElement>) => void
    isDisabled?: () => boolean | undefined
}

export const Button: React.FC<SuperButtonPropsType> = ({
                                                           red,
                                                           callback,
                                                           isDisabled,
                                                           className,
                                                           ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
                                                       }
) => {
    const finalClassName = `${red ? s.red : s.default} ${className}`;
    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        callback(e);
    };

    return (
        <button
            className={finalClassName}
            onClick={onClickHandler}
            disabled={isDisabled && isDisabled()}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
};

export default Button
