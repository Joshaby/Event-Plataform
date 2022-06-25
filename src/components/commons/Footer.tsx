import classnames from 'classnames';
import logoRocketseat from '../../assets/img/logo-rockeat.svg';

interface FooterProps {
  page: 'home' | 'event';
}

export function Footer(props: FooterProps) {
  const { page } = props;

  return (
    <footer
      className={classnames('mt-20 border-t border-gray-600', { 'w-full px-6 pb-4 bg-gray-900': page === 'home' })}
    >
      <div
        className={classnames('flex items-center justify-between mt-6', { 'max-w-[1200px] mx-auto': page === 'home' })}
      >
        <div className="flex flex-1 gap-2 items-center">
          <img src={logoRocketseat} alt="" />
          <span className="text-sm text-gray-200 leading-relaxed ml-6">Rocketseat - Todos os direitos reservados</span>
        </div>
        <a href="/" className="text-sm text-gray-200 leading-relaxed ml-6">
          Políticas de privacidade
        </a>
      </div>
    </footer>
  );
}
