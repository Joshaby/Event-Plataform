import { CaretRight } from 'phosphor-react';
import { ReactNode } from 'react';

interface ButtonCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
}

export function ButtonCard(props: ButtonCardProps) {
  const { icon, title, description, link } = props;

  return (
    <a
      href={link}
      className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
    >
      <div className="bg-green-700 h-full p-6 flex items-center">{icon}</div>
      <div className="py-6 leading-relaxed">
        <strong className="text-2xl">{title}</strong>
        <p className="text-sm text-gray-200 mt-2">{description}</p>
      </div>
      <div className="h-full p-6 flex items-center">
        <CaretRight size={24} />
      </div>
    </a>
  );
}
