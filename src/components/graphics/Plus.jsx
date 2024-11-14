
import "./graphics.css"
export default function Plus({ className = "", id = "", alt, ...props }) {
    return (
        <svg aria-label={alt} className={className} id={id} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" {...props}>
            <path d="M40 40V10C40 4.47715 44.4772 0 50 0C55.5228 0 60 4.47715 60 10V40L90.2327 40.3733C95.6464 40.4401 100 44.8478 100 50.2619C100 55.7432 95.542 60.1788 90.0609 60.1512L60 60V90C60 95.5229 55.5228 100 50 100C44.4772 100 40 95.5229 40 90V60H10C4.47715 60 0 55.5228 0 50C0 44.4772 4.47715 40 10 40H40Z" className="fill-text-main" />
        </svg>
    )
}