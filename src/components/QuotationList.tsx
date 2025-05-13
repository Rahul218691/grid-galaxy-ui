
import React, { useState } from 'react';
import DataGrid, { Column } from './ui/DataGrid';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Quotation {
  id: number;
  title: string;
  from: string;
  to: string;
  deliveryTime: string;
  price: number;
}

const initialData: Quotation[] = [
  {
    id: 1,
    title: "Steel Beams - 20 Ton",
    from: "Houston, Texas",
    to: "Atlanta, Georgia",
    deliveryTime: "2 Days",
    price: 3200,
  },
  {
    id: 2,
    title: "Frozen Food Shipment - 10 Ton",
    from: "Chicago, Illinois",
    to: "Orlando, Florida",
    deliveryTime: "3 Days",
    price: 2750,
  },
  {
    id: 3,
    title: "Electronic Components - 5 Ton",
    from: "San Jose, California",
    to: "Austin, Texas",
    deliveryTime: "2 Days",
    price: 2900,
  },
  {
    id: 4,
    title: "Construction Materials - 15 Ton",
    from: "Denver, Colorado",
    to: "Seattle, Washington",
    deliveryTime: "4 Days",
    price: 3500,
  },
  {
    id: 5,
    title: "Medical Supplies - 8 Ton",
    from: "Boston, Massachusetts",
    to: "Miami, Florida",
    deliveryTime: "3 Days",
    price: 2650,
  },
];

const columns: Column<Quotation>[] = [
  {
    header: 'Sr.No',
    accessor: (quotation) => quotation.id.toString().padStart(2, '0'),
    className: "w-16",
  },
  {
    header: 'Title',
    accessor: 'title',
  },
  {
    header: 'From',
    accessor: 'from',
  },
  {
    header: 'To',
    accessor: 'to',
  },
  {
    header: 'Delivery Time',
    accessor: 'deliveryTime',
  },
  {
    header: 'Price',
    accessor: (quotation) => `$${quotation.price.toLocaleString()}`,
    className: "text-right",
  },
];

const QuotationList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data] = useState<Quotation[]>(initialData);
  
  const filteredData = data.filter(quotation => 
    quotation.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    quotation.from.toLowerCase().includes(searchQuery.toLowerCase()) || 
    quotation.to.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRowClick = (quotation: Quotation) => {
    console.log('Selected quotation:', quotation);
    // You can implement navigation or modal display here
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">List Of Quotations</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search by anything"
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
          <Button>Request</Button>
        </div>
      </div>
      
      <DataGrid
        columns={columns}
        data={filteredData}
        keyField="id"
        onRowClick={handleRowClick}
      />
      
      <div className="flex justify-end gap-2 mt-4">
        <Button variant="outline" size="sm" className="px-3 py-1">
          1
        </Button>
        <Button variant="outline" size="sm" className="px-3 py-1">
          2
        </Button>
        <span className="px-3 py-1 text-muted-foreground">...</span>
        <Button variant="outline" size="sm" className="px-3 py-1">
          9
        </Button>
        <Button variant="outline" size="sm" className="px-3 py-1">
          10
        </Button>
        <Button variant="outline" size="sm" className="px-3 py-1">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default QuotationList;
