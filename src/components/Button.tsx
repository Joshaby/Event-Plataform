import { ReactNode } from 'react';
import classnames from 'classnames';

interface ButtonProps {
  text: string;
  textColor?: string;
  hoverTextColor?: string;
  link: string;
  icon: ReactNode;
  color?: string;
  hoverColor: string;
  borderColor?: string;
}

export function Button(props: ButtonProps) {
  const { text, textColor, hoverTextColor, link, icon, color, hoverColor, borderColor } = props;

  return (
    <a
      href={link}
      className={classnames({
        [`hover:${hoverColor}`]: hoverColor,
        [`hover:${hoverTextColor}`]: hoverTextColor,
        [`border ${borderColor}`]: borderColor,
        [`${color}`]: color,
        [`${textColor}`]: textColor,
        'p-4 text-sm flex items-center rounded font-bold uppercase gap-2 justify-center transition-colors': true,
      })}
    >
      {icon}
      {text}
    </a>
  );
}
