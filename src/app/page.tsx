// "use client";

import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
import Slider from "@/components/Slider";
import { HeroParallax } from "@/components/ui/connect-parallax";
import { GlobeDemo } from "@/components/ui/globedemo";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { clients, products } from "@/lib/constant";
import { Suspense, useContext, useEffect } from "react";

const HomePage = async () => {

  // TEST (FETCHING ON THE CLIENT COMPONENT)

  // const wixClient = useWixClient()

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await wixClient.products.queryProducts().find();

  //     console.log(res)
  //   };

  //   getProducts();
  // }, [wixClient]);
  

  // TEST (FETCHING ON THE SERVER COMPONENT)

  // const wixClient = await wixClientServer();

  // const res = await wixClient.products.queryProducts().find();

  // console.log(res);

  return (
    <div className="bg-gradient-to-r from-gray-950 to-gray-900">
      <Slider />

      <section className="h-[130vh] overflow-hidden">
        <HeroParallax products={products}></HeroParallax>
      </section>
      
  <div className="mt-48 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 z-50">
        
  <div className="h-[8px] w-[600px] bg-gradient-to-r from-black to-red-800 mb-2"/>

  <div
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[5px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 items-center justify-center">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] items-center justify-center" />
          <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
       Featured Products 
          </span>
        </div>

        <div className="h-[8px] w-[400px] bg-gradient-to-r from-black to-red-800 mb-16 mt-2"/>


        <Suspense fallback={<Skeleton />}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_FEATURED_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>



      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 pb-12">
    
      <div className="h-[8px] w-[600px] bg-gradient-to-r from-black to-red-800 mb-2"/>

    <div
        className="relative inline-flex h-10 overflow-hidden rounded-full p-[5px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 items-center justify-center">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] items-center justify-center" />
        <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
      New Products
        </span>
      </div>

      <div className="h-[8px] w-[400px] bg-gradient-to-r from-black to-red-800 mb-16 mt-2"/>


      <Suspense fallback={<Skeleton />}>
        <ProductList
          categoryId={process.env.FEATURED_PRODUCTS_NEW_CATEGORY_ID!}
          limit={4}
        />
      </Suspense>
      </div>



      

      <div className="h-[8px] w-[600px] bg-gradient-to-r from-black to-red-800 mt-24"/>

      <div className="mt-3">
      <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64  text-white">
          Categories
        </h1>
        <div className="h-[8px] w-[400px] bg-gradient-to-r from-black to-red-800 mb-16 mt-2"/>

      
        <Suspense fallback={<Skeleton />}>
          <CategoryList />
        </Suspense>
      </div>


    
        
          <GlobeDemo/>

       

        <InfiniteMovingCards
        className="-top-32"
        items={clients}
        direction="right"
        speed="slow"
      />
 
    </div>
  );
};

export default HomePage;
