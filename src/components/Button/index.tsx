import { Button, ButtonProps } from '@mui/material'

interface ButtonFormProps extends ButtonProps {
    text?: string;
    children?: React.ReactNode;
}

export default function ButtonForm({text, children, ...rest}: ButtonFormProps) {
    return (
      <>
        <Button {...rest}>{text}{children}</Button>
      </>
    );
  }