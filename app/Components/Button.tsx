import { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva('border h-12 rounded-full px-6 font-medium ', {
  variants: {
    variant: {
      primary: 'bg-lime-400 text-neutral-950 border-lime-400 ',
      secondary: 'bg-transparent text-white border-white/35 '
    }
  }
});

const Button = (props: { variant: 'primary' | 'secondary' } & HTMLAttributes<HTMLButtonElement>) => {
  const { variant, className, ...rest } = props;
  return (
    <button className={classes({ variant, className })} {...rest} />
  );
};

export default Button;
