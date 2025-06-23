import Link from "next/link";

export default function Nav() {
    return <div className="container space-x-5">
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/contact">Contact</Link>
    <Link href="/gallery">gallery</Link>
    <Link href="/blog">blog</Link>
</div>;
}