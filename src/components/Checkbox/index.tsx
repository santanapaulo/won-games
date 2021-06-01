import { InputHTMLAttributes, useState } from 'react';
import * as S from './styles';

export type CheckboxProps = {
  onCheck?: (status: boolean) => void;
  label?: string;
  checked?: boolean;
  labelFor?: string;
  labelColor?: 'white' | 'black';
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({
  onCheck,
  checked = false,
  label,
  labelFor = '',
  labelColor = 'white',
  value,
  ...rest
}: CheckboxProps) => {
  const [innerChecked, setInnerChecked] = useState(checked);

  const handleChange = () => {
    const status = !innerChecked;
    setInnerChecked(status);

    !!onCheck && onCheck(status);
  };

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={handleChange}
        checked={innerChecked}
        value={value}
        {...rest}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  );
};

export default Checkbox;
