'use client';
import { RotateCcw } from 'lucide-react';
import { Button } from '../ui/button';

type DataTableResetFilterProps = {
  isFilterActive: boolean;
  onReset: () => void;
};

export function DataTableResetFilter({
  isFilterActive,
  onReset
}: DataTableResetFilterProps) {
  return (
    <>
      {isFilterActive ? (
        <Button variant="outline" onClick={onReset} className='h-10 rounded-md'>
         <RotateCcw />  Reset Filters
        </Button>
      ) : null}
    </>
  );
}
