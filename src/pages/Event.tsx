import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Video } from '../components/Video';

export function Event() {
  const { slugParam } = useParams<{ slugParam: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slugParam ? <Video lessonSlug={slugParam} /> : <div className="flex-1" />}
        <Sidebar />
      </main>
    </div>
  );
}
