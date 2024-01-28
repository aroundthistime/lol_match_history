'use client'

import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form'
import { createQueryString } from '../../utils/url';

const  SummonerSearchForm = ({className = ''}: Props) => {
    const {
        control,
        handleSubmit,
        formState
    } = useForm<Inputs>();
    const router = useRouter();

    const onSubmit = (data: Inputs) => {
        const queryString = createQueryString(data);

        router.push(`/history?${queryString}`)
    }

    return (
        <form
            className={`flex flex-col gap-y-6 [&>*]:w-full [&>*]:px-2 [&>*]:py-3 [&>*]:rounded-md ${className}`}
            onSubmit={handleSubmit(onSubmit)}
        >
            <Controller
                name='summonerName'
                control={control}
                rules={{required: 'Summoner name is required'}}
                render={({field}) => (
                    <input
                    placeholder="Type in the summoner's name to check match history"
                    className="text-dark"
                    maxLength={30}
                    {...field}
                    />
                )}
            />
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
}

export default SummonerSearchForm;