'use client'

import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form'
import { createQueryString } from '../../utils/url';
import { REGIONS } from '../../constant/region';

const SummonerSearchForm = ({className = ''}: Props) => {
    const {
        control,
        handleSubmit,
        register,
        formState
    } = useForm<Inputs>();
    const router = useRouter();

    const onSubmit = (data: Inputs) => {
        const queryString = createQueryString(data);

        router.push(`/user?${queryString}`)
    }

    return (
        <form
            className={`flex flex-col gap-y-6 [&>*]:px-2 [&>*]:py-3 [&>*]:rounded-md ${className}`}
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className='flex bg-white gap-x-3 [&>*]:bg-transparent'>
                <select
                    className='cursor-pointer'
                    {...register('region')}
                >
                    {REGIONS.map(region => (
                        <option key={region}>{region}</option>
                    ))}
                </select>
                <Controller
                    name='summonerName'
                    control={control}
                    rules={{required: 'Summoner name is required'}}
                    render={({field}) => (
                        <input
                        placeholder="Type in the summoner's name"
                        className="text-dark flex-1"
                        maxLength={30}
                        {...field}
                        />
                    )}
                />
            </div>
            <button
                type="submit"
                disabled={!formState.isValid}
            >
                Search
            </button>
        </form>
    )
}

type Props = {
    className?: string;
}

type Inputs = {
    summonerName: string;
    region: string;
}

export default SummonerSearchForm;