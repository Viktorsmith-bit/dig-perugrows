import React from 'react';
import Link from 'next/link';

import { Fragment } from 'react';

export default function LeftAside(){
    return(
        <Fragment>
            <div className='flex items-center justify-center h-7 rounded-sm bg-white absolute z-20 top-20 left-3' style={{width:'1.9rem', zIndex:"1000"}} >
                <Link href="/">
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="black" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                        </svg>
                    </a>
                </Link>
            </div>
        </Fragment>
    );
}