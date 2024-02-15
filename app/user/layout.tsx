import Logo from "../../src/components/Logo"
import SummonerSearchForm from "../../src/components/SummonerSearchForm"

const Layout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (
        <>
            <header className="sticky top-0 flex flex-col justify-center gap-y-3 md:flex-row items-center">
                <Logo className="text-2xl md:text-xl px-10 md:absolute md:left-0 md:top-2/4 md:-translate-y-1/2"/>
                <SummonerSearchForm className="w-full md:w-3/5 !flex-row gap-x-3 [&>div]:flex-1 [&>button]:w-max"/>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout