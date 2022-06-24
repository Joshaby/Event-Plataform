import logoRocketseat from '../../assets/img/logo-rockeat.svg';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-600">
      <div className="flex items-center justify-between mt-6">
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
