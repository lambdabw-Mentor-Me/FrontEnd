import React, { useState, useEffect } from 'react'
import moment from 'moment';

// * STYLE IMPORTS (style-components)
import style from '../Search/StyledSearch';

// * SVG IMPORTS
import { ReactComponent as Signal } from '../Assets/SVG/signal-solid.svg';
import { ReactComponent as Wifi } from '../Assets/SVG/wifi-solid.svg';
import { ReactComponent as Battery } from '../Assets/SVG/battery-full-solid.svg';
import { ReactComponent as Back } from '../Assets/SVG/back.svg';
import { ReactComponent as X } from '../Assets/SVG/x.svg';

export const Info = () => {
    const [active, setActive] = useState({
        newest: false,
        category: false
    });

    useEffect(() => console.log(active), [active])

    const activate = (e) => {
        e.preventDefault();

        // * STORED TARGET VALUE
        const value = e.target.textContent.toLowerCase();

        // ? CHECK FOR BOOLEAN VALUE
        const newestFalse = value === 'newest' && active.newest === false
        const newestTrue = value === 'newest' && active.newest === true

        const categoryFalse = value === 'category' && active.category === false
        const categoryTrue = value === 'category' && active.category === true

        // ? SET DATA AMONGST BOOLEAN FOR NEWEST STATE
        if (newestFalse) {
            return setActive({
                ...active,
                ...{ newest: true }
            })
        } else if (newestTrue) {
            return setActive({
                ...active,
                ...{ newest: false }
            })
        }

        // ? SET DATA AMONGST BOOLEAN FOR CATEGORY STATE
        if (categoryFalse) {
            return setActive({
                ...active,
                ...{ category: true }
            })
        } else if (categoryTrue) {
            return setActive({
                ...active,
                ...{ category: false }
            })
        }
    };

    return (
        <style.info>
            {/* //? TOP DISPLAY FOR EXTRA INFO, TIME, ETC.
             */}

            <div className={`info__main`}>
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
                    <Back className={`back-btn`} />

                    <div className={`info__bottom-input`}>
                        <input
                            type="text"
                            value="" />

                        <X className={`x-btn`} />
                    </div>
                </div>
            </div>

            <div className={`info__selection`}>
                {/* //? STYLES FOR CATEGORY SELECTION (DATA SORTING)
                */}

                <span
                    className={active.newest === true ? 'active' : 'false'}
                    onClick={(e) => active.newest === false ? activate(e) : activate(e)}>
                    Newest</span>

                <span
                    className={active.category === true ? 'active' : 'false'}
                    onClick={(e) => active.category === false ? activate(e) : activate(e)}>
                    Category</span>
            </div>

        </style.info>
    )
}