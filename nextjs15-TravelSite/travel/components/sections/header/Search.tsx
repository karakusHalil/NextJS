import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchPage = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="p-3 hidden lg:flex bg-orange-500 cursor-pointer text-white rounded-full hover:bg-orange-600 transition-colors">
          <Search />
        </div>
      </DialogTrigger>
      <DialogContent className="bg-white rounded-lg shadow-lg max-w-md mx-auto border-none p-6">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold mb-2">Search</DialogTitle>
          <DialogDescription>
            <div className="mt-4 flex flex-row items-center justify-center gap-2">
              <Input
                type="text"
                placeholder="Search for hotels, trips..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <Button className="px-4 py-2 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 transition-colors">
                <Search size={18} />
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SearchPage;
