import React from 'react'
import moment from 'moment';

// * STYLE IMPORTS (style-components)
import style from '../Search/StyledSearch';

// * SVG IMPORTS
import { ReactComponent as Signal } from '../Assets/SVG/signal-solid.svg';
import { ReactComponent as Wifi } from '../Assets/SVG/wifi-solid.svg';
import { ReactComponent as Battery } from '../Assets/SVG/battery-full-solid.svg';

export const Info = () => (
    <div>
        <style.info>
            {/* //? TOP DISPLAY FOR EXTRA INFO, TIME, ETC.
             */}

            <div className={`info__top`}>
                <span className={`local-time`}>{moment().format('LT')}</span>

                <div className={`icon-container`}>
                    <Signal className={`icon-signal`} />
                    <Wifi className={`icon-wifi`} />
                    <Battery className={`icon-battery`} />
                </div>
            </div>

            {/* //? TOP DISPLAY FOR SEARCH INPUT
             */}

            <div className={`info__bottom`}>
                <input
                    type="text"
                    value="" />
            </div>
        </style.info>

        <div>
            {/* //? STYLES FOR CATEGORY SELECTION (DATA SORTING)
              */}

            <span>Newest</span>
            <span>Category</span>
        </div>
    </div>
)