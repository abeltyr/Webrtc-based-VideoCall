import * as React from "react";

function VideoOffSVG(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                opacity={0.4}
                d="M17.74 7.57c.01.07.01.15 0 .22 0-.07-.01-.14-.01-.21l.01-.01z"
                fill="currentColor"
            />
            <path
                d="M17.28 6.56L3.83 20.01c-1.4-.89-1.95-2.48-1.95-4.01V8c0-3.42 1.33-4.75 4.75-4.75h6c2.89 0 4.28.95 4.65 3.31z"
                fill="currentColor"
            />
            <path
                d="M21.4 2.23c-.3-.3-.79-.3-1.09 0L1.85 20.69c-.3.3-.3.79 0 1.09.15.14.35.22.54.22.2 0 .39-.08.54-.23L21.4 3.31c.3-.3.3-.78 0-1.08zM22.38 8.38v7.24c0 1.43-.7 2-1.1 2.21-.19.1-.49.21-.86.21-.43 0-.96-.14-1.58-.58l-1.48-1.04c-.07 2.21-.77 3.47-2.36 4-.64.23-1.43.33-2.38.33h-6c-.24 0-.47-.01-.71-.04L15 11.63l5.65-5.65c.26.02.47.1.63.19.4.21 1.1.78 1.1 2.21z"
                fill="currentColor"
            />
        </svg>
    );
}

export default VideoOffSVG;