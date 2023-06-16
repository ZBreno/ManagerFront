import { Button, ButtonProps } from '@mui/material'

interface ButtonFormProps extends ButtonProps {
    text: string;
}

export default function ButtonForm({text, ...rest}: ButtonFormProps) {
    return (
      <>
        <Button {...rest}>{text}</Button>
      </>
    );
  }