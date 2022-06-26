import classnames from 'classnames';
import { isPast } from 'date-fns';
import { format } from 'date-fns/esm';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';
import { CheckCircle, Lock } from 'phosphor-react';
import { Link, useParams } from 'react-router-dom';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const { title, slug, availableAt, type } = props;

  const { slugParam } = useParams<{ slugParam: string }>();

  const isLessonAvaliable = isPast(availableAt);
  const availableDateFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  });

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>
      <div
        className={classnames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
          'bg-green-500': slug === slugParam,
        })}
      >
        <header className="flex items-center justify-between">
          {isLessonAvaliable ? (
            <span
              className={classnames('text-sm text-blue-500 font-medium flex items-center gap-2', {
                'text-white': slug === slugParam,
                'text-blue-500': slug !== slugParam,
              })}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={classnames('text-xs rounded px-2 py-[2px] text-white border font-bold', {
              'border-white': slug === slugParam,
              'border-green-300': slug !== slugParam,
            })}
          >
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong
          className={classnames('mt-5 block', {
            'text-white': slug === slugParam,
            'text-grey-200': slug !== slugParam,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
}
