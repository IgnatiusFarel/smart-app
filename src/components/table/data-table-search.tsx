import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Options } from 'nuqs';
import { useTransition } from "react";
interface DataTableSearchProps {
  searchKey: string;
  searchQuery: string;
  setSearchQuery(
    value: string | ((old: string) => string | null) | null,
    options?: Options
  ): Promise<URLSearchParams>;
  setPage(
    value: number | ((old: number) => number | null) | null,
    options?: Options
  ): Promise<URLSearchParams>;
}

export function DataTableSearch({
  searchKey,
  searchQuery,
  setSearchQuery,
  setPage,
}: DataTableSearchProps) {
  const [isLoading, startTransition] = useTransition();

  const handleSearch = (value: string) => {
    setSearchQuery(value, { startTransition });
    setPage(1); 
  };
  
  return (
    <div className="relative w-full max-w-xs">
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={20}
      />

      <Input
        placeholder={`Search ${searchKey}...`}
        value={searchQuery ?? ''}
        onChange={(e) => handleSearch(e.target.value)}
        className={cn("w-full md:max-w-sm h-10 rounded-md pl-10", isLoading && "animate-pulse")}
      />
    </div>
  );
}
