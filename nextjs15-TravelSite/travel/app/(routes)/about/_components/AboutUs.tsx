import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <>
      <div className="bg-orange-100 ">
        <div className="mx-auto container text-center py-16 lg:px-28">
          <h2 className="text-2xl lg:text-4xl font-bold text-blue-600 mb-4">
            WELCOME TO TRENDY TRAVEL
          </h2>
          <div className="flex justify-center items-center mb-6">
            <hr className="border-gray-300 w-1/5" />
            <span className="mx-3 text-gray-400 text-xl">&#128064;</span>
            <hr className="border-gray-300 w-1/5" />
          </div>

          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            veritatis amet exercitationem suscipit optio deserunt eligendi quos
            quisquam harum fugiat est aut debitis iusto, nostrum dicta provident
            sunt reiciendis consectetur animi. Veritatis vel ducimus odit!
            Dignissimos, quod! Aliquam esse laboriosam, dolor delectus
            dignissimos ad praesentium eos at, in, ratione deleniti.
          </p>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            veritatis amet exercitationem suscipit optio deserunt eligendi quos
            quisquam harum fugiat est aut debitis iusto, nostrum dicta provident
            sunt reiciendis consectetur animi. Veritatis vel ducimus odit!
            Dignissimos, quod! Aliquam esse laboriosam, dolor delectus
            dignissimos ad praesentium eos at, in, ratione deleniti.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-green-500 text-white py-3 px-8 rounded-lg hover:bg-green-600 transition">
              Details
            </Button>
            <Button className="bg-orange-500 text-white py-3 px-8 rounded-lg hover:bg-orange-600 transition">
              Browser
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
