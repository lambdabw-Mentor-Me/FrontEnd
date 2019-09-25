import React from 'react'
import moment from 'moment';

// * STYLE IMPORTS (style-components)
import style from '../Search/StyledSearch';

export const Info = () => (
    <div>
        <style.info className={``}>
            {/* //? TOP DISPLAY FOR EXTRA INFO, TIME, ETC.
             */}

            <div className={``}>
                <span className={`local-time`}>{moment().format('LT')}</span>

                <div className={`icon-container`}>
                </div>
            </div>

            {/* //? TOP DISPLAY FOR SEARCH INPUT
             */}

            <input
                type="text"
                value=""
            />
        </style.info>

        <div>
            {/* //? STYLES FOR CATEGORY SELECTION (DATA SORTING)
              */}

            <span>Newest</span>
            <span>Category</span>
        </div>
    </div>
)