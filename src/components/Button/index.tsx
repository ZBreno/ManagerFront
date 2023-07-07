import { Button, ButtonProps } from '@mui/material'

interface ButtonFormProps extends ButtonProps {
    text?: string | React.ReactNode;
    children?: React.ReactNode;
}

export default function ButtonForm({text, children, ...rest}: ButtonFormProps) {
    return (
      <>
        <Button {...rest}>{text}{children}</Button>
      </>
    );
  }