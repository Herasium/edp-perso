
import "./graphics.css"
export default function BadgeStar({ className = "", id = "", alt, ...props }) {
    return (
        <svg aria-label={alt} className={className} id={id} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" {...props}>
            <circle cx="50.0767" cy="49.9233" r="49.9233" className="fill-FFE600" />
            <path d="M47.3855 22.8872C48.2774 20.1104 52.2062 20.1104 53.0981 22.8872L57.5201 36.655C57.9187 37.896 59.0729 38.7376 60.3764 38.7376H74.7594C77.6571 38.7376 78.871 42.4388 76.5361 44.1549L64.8405 52.751C63.8012 53.5149 63.3665 54.8576 63.7609 56.0857L68.2141 69.9505C69.1038 72.7206 65.9254 75.0083 63.5811 73.2852L52.0185 64.7868C50.9614 64.0099 49.5222 64.0099 48.4651 64.7868L36.9025 73.2852C34.5581 75.0083 31.3798 72.7206 32.2695 69.9505L36.7226 56.0857C37.1171 54.8576 36.6824 53.5149 35.6431 52.751L23.9475 44.1549C21.6126 42.4388 22.8265 38.7376 25.7242 38.7376H40.1072C41.4106 38.7376 42.5649 37.896 42.9635 36.655L47.3855 22.8872Z" className="fill-FCB500" />
        </svg>
    )
}