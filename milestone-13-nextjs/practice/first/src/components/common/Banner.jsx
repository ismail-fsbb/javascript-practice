import Link from "next/link";

export default function Banner({heading, description = null, isSingleService = false}) {
    return <div className="container">
        <h1>{heading}</h1>
        {description && <p>{description}</p>}
        {isSingleService && <div> 
                <Link href={'/see-price'}>See Pricing</Link>
                <Link href={'/contact-us'}>Contact Us</Link>
            </div>}
    </div>
}