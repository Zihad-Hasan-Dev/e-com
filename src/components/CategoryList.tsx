import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";

const CategoryList = async () => {
  const wixClient = await wixClientServer();

  const cats = await wixClient.collections.queryCollections().find();

  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {cats.items.map((item) => (
          <Link
            href={`/list?cat=${item.slug}`}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
            key={item._id}
          >
            <div className="relative bg-slate-100 w-full h-96 ">
              <Image
                src={item.media?.mainMedia?.image?.url || "cat.png"}
                alt=""
                fill
                sizes="20vw"
                className="object-cover"
              />
          

            <div
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 items-center justify-center">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] items-center justify-center" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {item.name}
          </span>
        </div>

        </div>

          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
