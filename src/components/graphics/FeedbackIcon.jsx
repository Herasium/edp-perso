
import "./graphics.css"
export default function FeedbackIcon ({ className="", id="", alt, ...props }) {
    return (
<svg aria-label={alt} className={className} id={id} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" fill="none" {...props}>
<path d="M10.54 11H9.03158C8.46185 11 8 11.4619 8 12.0316C8 16.8742 11.9258 20.8 16.7684 20.8H20.96V22.6331C20.96 23.5172 22.0232 23.9664 22.6571 23.3501L26.1625 19.942C26.5664 19.5493 26.5664 18.9007 26.1625 18.508L22.6571 15.0999C22.0232 14.4836 20.96 14.9328 20.96 15.8169V17.65H17.19C13.9039 17.65 11.24 14.9861 11.24 11.7C11.24 11.3134 10.9266 11 10.54 11Z" className="fill-text-alt" />
</svg>
	)
}