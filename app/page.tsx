import React from 'react';
import Logo from '../src/components/Logo';
import SummonerSearchForm from '../src/components/SummonerSearchForm';

export default function Page() {
    return (
        <main className='flex flex-col justify-center items-center'>
            <Logo className='text-5xl block mb-24' />
            <SummonerSearchForm className='w-3/5 [&>*]:w-full'/>
        </main>
    )
}