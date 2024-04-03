import FilteredProducts from "@/components/FilteredProducts";
import Filters from "@/components/Filters";

export default function Home({ searchParams }) {

    return (
      <main className="flex mx-auto min-h-screen flex-col max-w-[1200px] gap-6">
        <h1 className="sm:text-4xl font-bold text-center z-20">Monad Ecosystem</h1>
        <Filters/>
        <section className="w-full grid grid-cols-12 gap-16">
          {
            searchParams.category
            ?
            <FilteredProducts clase={"col-span-12"} params={searchParams.category}/>
            :
            <>
            <FilteredProducts params={"DeFi"}/>
        <FilteredProducts params={"Bridge"}/>
        <FilteredProducts params={"Wallet/Payments"}/>
        <FilteredProducts params={"Gaming/NFT"}/>
        <FilteredProducts params={"Oracle"}/>
        <FilteredProducts params={"Others"}/>
            </>
          }
        </section>
     </main>
    )
  }  
