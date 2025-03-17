'use client'

import { filtersUrlQuery } from '@/utils/utils';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';

const links = [
    {id: 1, name: 'vacunos', slug: 'cortes-vacunos'},
{id: 4, name: 'preparados', slug: 'preparados'}
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
        value: link.slug.toLowerCase(),
                })

}

router.push(newUrl, { scroll: false })

    }

  return (
    <ul className="flex w-full max-w-full gap-1 justify-center flex-wrap sm:flex-row">
        {links.map(link => (
        <button 
        key={link.id}
        onClick={()=> handleFilter(link)}
        className={`${
            active === link ? 
            'bg-white text-red-600' : 'text-white'
        } whitespace-nowrap rounded-md px-2 py-1 capitalize border-red-600 bg-red-600 border hover:bg-white hover:text-red-600`}
        >
{link.name}
        </button>
        ))}
    </ul>
  )
}

export default Filters