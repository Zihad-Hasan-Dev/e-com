import SuccessPage from '@/components/SuccesPage';
import { Suspense } from 'react';

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessPage />
    </Suspense>
  );
};

export default Page;
