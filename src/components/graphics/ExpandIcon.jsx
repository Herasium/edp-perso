import "./graphics.css"

export default function ExpandIcon({ className = "", id = "", alt, ...props }) {
    return (
        <svg className={"fill-text-main " + className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g id="Layer_2" data-name="Layer 2">
                <g id="invisible_box" data-name="invisible box">
                    <rect width="48" height="48" fill="none" />
                </g>
                <g id="icons_Q2" data-name="icons Q2">
                    <g>
                        <path d="M28.6,17.4a1.9,1.9,0,0,0,3-.2,2.1,2.1,0,0,0-.2-2.7l-6-5.9a1.9,1.9,0,0,0-2.8,0l-6,5.9a2.1,2.1,0,0,0-.2,2.7,1.9,1.9,0,0,0,3,.2L22,14.8V33.2l-2.6-2.6a1.9,1.9,0,0,0-3,.2,2.1,2.1,0,0,0,.2,2.7l6,5.9a1.9,1.9,0,0,0,2.8,0l6-5.9a2.1,2.1,0,0,0,.2-2.7,1.9,1.9,0,0,0-3-.2L26,33.2V14.8Z" />
                        <path d="M6,6H42a2,2,0,0,0,0-4H6A2,2,0,0,0,6,6Z" />
                        <path d="M42,42H6a2,2,0,0,0,0,4H42a2,2,0,0,0,0-4Z" />
                    </g>
                </g>
            </g>
        </svg>
    )
}