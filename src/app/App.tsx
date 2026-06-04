import { BrowserRouter, Routes, Route } from 'react-router';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { ProjectsPage } from './components/ProjectsPage';
import { ProjectDetail } from './components/ProjectDetail';
import { StudioPage } from './components/StudioPage';
import { ContactPage } from './components/ContactPage';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/"            element={<HomePage />} />
          <Route path="/projects"    element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/studio"      element={<StudioPage />} />
          <Route path="/contact"     element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
