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
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";

const MainSearch = () => {
  // const router = useRouter();
  // const [formValue, setFormValue] = useState({
  //   destination: "paris", //Default values
  //   activity: "hiking",
  //   duration: "0-8",
  //   price: "250-900",
  // });


  // const handleChange = (key: string, value: string) => {
  //   setFormValue((prev) => ({
  //     ...prev,
  //     [key]: value,
  //   }));
  // }

  return (
    <Dialog>
      <DialogTrigger>
        <div className="p-3 hidden lg:flex bg-orange-400 cursor-pointer text-white rounded-full hover:bg-orange-500 transition duration-300 ease-in-out">
          <Search />
        </div>
      </DialogTrigger>
      <DialogContent className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl max-w-md mx-auto border-none p-8">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-semibold mb-4">
            Search
          </DialogTitle>
          <DialogDescription>
            <div className="mt-4 flex flex-row items-center justify-center gap-2">
              <Input
                type="text"
                placeholder="Search for hotels, trips..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 placeholder-gray-400"
              />
              <Button className="px-5 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-r-xl hover:from-orange-500 hover:to-orange-600 transition-all duration-300">
                <Search size={18} />
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default MainSearch;
