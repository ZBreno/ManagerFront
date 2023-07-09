import {
  FormControlLabel,
  FormControlLabelProps,
  Radio,
  RadioGroup,
  RadioGroupProps,
  RadioProps,
  Typography,
} from "@mui/material";

interface options {
  text: string;
  value: string;
}

interface RadioFieldProps extends Omit<RadioGroupProps, "variant"> {
  label?: string;
  variant?: string;
  options: options[];
  disable?: boolean;
}

export default function RadioField({
  label,
  options,
  variant,
  disable,
  ...rest
}: RadioFieldProps) {
  return (
    <div>
      {label && (
        <Typography
          className={`mb-2 ${
            variant == "error" ? "text-danger-600 font-medium" : "text-text-500"
          } `}
        >
          {label}
        </Typography>
      )}
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        {...rest}
      >
        {options.map(({ text, value }) => (
          <FormControlLabel disabled={disable} value={value} label={text} control={<Radio />} />
        ))}
      </RadioGroup>
    </div>
  );
}
