import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ReportPage } from './client/ReportPage';
import { ReviewPage } from './client/ReviewPage';

const AdminApp = lazy(() => import('./admin/AdminApp'));

export function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/r/:token" element={<ReportPage />} />
          <Route path="/r/:token/archive/:archiveId" element={<ReportPage />} />
          <Route path="/review/:token" element={<ReviewPage />} />
          <Route path="/admin/*" element={<AdminApp />} />
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export function Loading({ label = 'Loading…' }: { label?: string }) {
  return (
    <div className="flex min-h-screen items-center justify-center text-sm text-ink2" role="status">
      {label}
    </div>
  );
}
