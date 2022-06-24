import logo from '../assets/img/logo.svg';

export function Header() {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
      <img src={logo} alt="Ignite Lab - Rocketseat" />
    </header>
  );
}
