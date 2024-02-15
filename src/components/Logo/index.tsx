import Link from "next/link";

const Logo = ({className = ''}: Props) => {
    return (
        <Link
            className={`logo ${className}`}
            href='/'
        >
            <h1>Leagues</h1>
        </Link>
    )
};

type Props = {
    className?: string;
}

export default Logo;