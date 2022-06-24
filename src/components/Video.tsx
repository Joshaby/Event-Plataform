import { DiscordLogo, FileArrowDown, Image, Lightning } from 'phosphor-react';
import { Button } from './commons/Button';
import { ButtonCard } from './commons/ButtonCard';
import { Footer } from './commons/Footer';

export function Video() {
  return (
    <div className="flex-1">
      <div className="bg-black justify-center">
        j
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video" />
      </div>
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold ">Aula 01 - Abertura do Ignite Labe</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Chegamos na metade do nosso evento, mas ainda tem mais pela frente…Na terceira aula vamos continuar nosso
              projeto, desenvolvendo o roteamento e player. Essa é mais uma etapa para sua especialização em React!
              Bônus exclusivos do Ignite: https://rseat.in/bonus-ignite-lab Tem dúvidas? Converse em tempo real com a
              nossa equipe: https://rseat.in/whatsapp
            </p>
            <div className="flex items-center gap-4 mt-6">
              <img
                src="https://github.com/Joshaby.png"
                alt="Joshaby"
                className="h-16 w-16 rounded-full border-2 border-blue-500"
              />
              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">José Henrique</strong>
                <span className="text-gray-200 text-sm block">
                  Graduando em Engenharia de Computação - Dev Full Stack no projeto GoSyn4Tax no IFPB e Synchro Soluções
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Button
              text="Comunidade do discord"
              link="/"
              icon={<DiscordLogo size={24} />}
              color="bg-green-500"
              hoverColor="bg-green-700"
            />
            <Button
              text="Acesse o desafio"
              link="/"
              icon={<Lightning size={24} />}
              hoverColor="bg-blue-500"
              borderColor="border-blue-500"
              textColor="text-blue-500"
              hoverTextColor="text-gray-900"
            />
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-2">
          <ButtonCard
            icon={<FileArrowDown size={40} />}
            title="Material complementar"
            description="Acesse o material complementar para acelerar o seu desenvolvimento"
            link="#"
          />
          <ButtonCard
            icon={<Image size={40} />}
            title="Wallpapers exclusivos"
            description="Baixe wallpapers exclusivos do Ignite Lab e personalize sua máquina"
            link="#"
          />
        </div>
        <div />
        <Footer />
      </div>
    </div>
  );
}
