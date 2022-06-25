import CodeMockup from '../assets/img/code-mockup.png';
import Logo from '../assets/img/logo.svg';
import { Footer } from '../components/commons/Footer';

export function Subscribe() {
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1210px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <img src={Logo} alt="" />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com{' '}
            <strong className="text-blue-500">React JS</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para
            acessar as melhores oportunidades do mercado.
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
          <form action="" className="flex flex-col gap-2 w-full">
            <input className="bg-gray-900 roudend px-5 h-14" type="text" placeholder="Seu nome completo" />
            <input className="bg-gray-900 roudend px-5 h-14" type="text" placeholder="Digite seu email" />
            <button
              type="submit"
              className="mt-4 bg-green-500 py-4 uppercase rounded font-bold text-sm hover:bg-green-700 transition-colors"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src={CodeMockup} alt="" />
      <Footer page="home" />
    </div>
  );
}
