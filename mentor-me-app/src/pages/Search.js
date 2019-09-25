import React from 'react';

// * COMPONENT IMPORTS
import { Info } from '../components/Search/Info'
import { Results } from '../components/Search/Results'
import { BottomNav } from '../components/Search/BottomNav'

// * STYLE IMPORTS (style-components)
import style from '../components/Search/StyledSearch';

// ? SEARCH PAGE.
const Search = () => {

    return (
        <style.section>
            {/* // * TOP COMPONENT DISPLAYING INPUT SEARCH FUNCTIONALITY
            */}
            <Info />

            {/* // * MIDDLE COMPONENT DISPLAYING RESULTS OF SEARCH
            */}
            <Results />

            {/* // * BOTTOM COMPONENT DISPLAYING NAV BAR
            */}
            <BottomNav />
        </style.section>
    )
}

export default Search;