import { Route, Routes } from 'react-router-dom';
import { Event } from './pages/Event';
import { Subscribe } from './pages/Subscribe';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slugParam" element={<Event />} />
    </Routes>
  );
}
