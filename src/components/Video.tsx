import { DefaultUi, Player, Youtube } from '@vime/react';
import { gql, useQuery } from '@apollo/client';
import { DiscordLogo, FileArrowDown, Image, Lightning } from 'phosphor-react';
import { Button } from './commons/Button';
import { ButtonCard } from './commons/ButtonCard';
import { Footer } from './commons/Footer';

import '@vime/core/themes/default.css';

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      videoId
      description
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`;

interface GetLessonBySlugResponse {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string;
    };
  };
}

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { lessonSlug } = props;

  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: lessonSlug,
    },
    fetchPolicy: 'no-cache',
  });

  if (!data) {
    return (
      <div className="flex-1">
        <p>Carregando</p>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} key={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold ">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">{data.lesson.description}</p>
            <div className="flex items-center gap-4 mt-6">
              <img
                src={data.lesson.teacher.avatarURL}
                alt="Joshaby"
                className="h-16 w-16 rounded-full border-2 border-blue-500"
              />
              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
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
        <Footer page="event" />
      </div>
    </div>
  );
}
