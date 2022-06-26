import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CodeMockup from '../assets/img/code-mockup.png';
import Logo from '../assets/img/logo.svg';
import { Footer } from '../components/commons/Footer';
import { useCreateSubscriberMutation } from '../graphql/generated';

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();
    await createSubscriber({
      variables: {
        name,
        email,
      },
    });
    navigate('/event');
  }

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
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 roudend px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={e => setName(e.target.value)}
            />
            <input
              className="bg-gray-900 roudend px-5 h-14"
              type="text"
              placeholder="Digite seu email"
              onChange={e => setEmail(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 py-4 uppercase rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
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
