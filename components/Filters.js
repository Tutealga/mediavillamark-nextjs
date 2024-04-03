'use client'

import { filtersUrlQuery } from '@/utils/utils';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';

const links = [
    {id: 1, name: 'DeFi', slug: 'DeFi'},
    {id: 2, name: 'Bridge', slug: 'Bridge'},
    {id: 3, name: 'Wallet/Payments', slug: 'Wallet/Payments'},
{id: 4, name: 'Oracle', slug: 'Oracle'},
{id: 5, name: 'Gaming/NFT', slug: 'Gaming/NFT'},
{id: 6, name: 'Others', slug: 'Others'},
]

const Filters = () => {
    const [active, setActive] = useState('');
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleFilter = (link) => {
let newUrl = ''

if(active === link) {
    setActive('');

    newUrl = filtersUrlQuery({
        params: searchParams.toString(),
        key: 'category',
        value: null
                })
} else {
    setActive(link);

    newUrl = filtersUrlQuery({
        params: searchParams.toString(),
        key: 'category',
        value: link.slug,
                })

}

router.push(newUrl, { scroll: false })

    }

  return (
    <ul className="flex w-full max-w-full gap-4 justify-center flex-wrap sm:flex-row z-20">
        {links.map(link => (
        <button 
        key={link.id}
        onClick={()=> handleFilter(link)}
        className={`${
            active === link ? 
            'bg-[#836ef9] text-white' : ''
        } whitespace-nowrap rounded-md p-2 capitalize bg-[rgb(131_110_249/30%)] hover:bg-[#836ef9] hover:text-white`}
        >
{link.name}
        </button>
        ))}
    </ul>
  )
}

export default Filters