
import React from 'react';
import TruckerList from '@/components/TruckerList';

const Truckers = () => {
  return (
    <div className="p-4 md:p-6 w-full overflow-x-auto">
      <TruckerList />
    </div>
  );
};

export default Truckers;
