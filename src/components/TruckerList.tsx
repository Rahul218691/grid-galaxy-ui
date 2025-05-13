
import React, { useState } from 'react';
import DataGrid, { Column } from './ui/DataGrid';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Trucker {
  id: number;
  name: string;
  phone: string;
  location: string;
  truckType: string;
  availability: string;
}

const initialData: Trucker[] = [
  {
    id: 1,
    name: "John Smith",
    phone: "(555) 123-4567",
    location: "Dallas, TX",
    truckType: "Heavy-duty",
    availability: "Available",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    phone: "(555) 234-5678",
    location: "Phoenix, AZ",
    truckType: "Refrigerator",
    availability: "On delivery",
  },
  {
    id: 3,
    name: "Michael Brown",
    phone: "(555) 345-6789",
    location: "Chicago, IL",
    truckType: "Flatbed",
    availability: "Available",
  },
  {
    id: 4,
    name: "Jennifer Davis",
    phone: "(555) 456-7890",
    location: "Los Angeles, CA",
    truckType: "Container",
    availability: "Available",
  },
];

const columns: Column<Trucker>[] = [
  {
    header: 'ID',
    accessor: (trucker) => trucker.id.toString().padStart(2, '0'),
    className: "w-16",
  },
  {
    header: 'Name',
    accessor: 'name',
  },
  {
    header: 'Phone',
    accessor: 'phone',
  },
  {
    header: 'Location',
    accessor: 'location',
  },
  {
    header: 'Truck Type',
    accessor: 'truckType',
  },
  {
    header: 'Availability',
    accessor: (trucker) => (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        trucker.availability === 'Available' 
          ? 'bg-green-100 text-green-800' 
          : 'bg-amber-100 text-amber-800'
      }`}>
        {trucker.availability}
      </span>
    ),
  },
];

const TruckerList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data] = useState<Trucker[]>(initialData);
  
  const filteredData = data.filter(trucker => 
    trucker.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    trucker.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trucker.truckType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Trucker List</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search truckers"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-8 w-64"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-search text-muted-foreground"
              >
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
              </svg>
            </div>
          </div>
          <Button>Add Trucker</Button>
        </div>
      </div>
      
      <DataGrid
        columns={columns}
        data={filteredData}
        keyField="id"
      />
    </div>
  );
};

export default TruckerList;
