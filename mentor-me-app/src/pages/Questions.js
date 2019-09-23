import React from 'react';
import moment from 'moment';

const Questions = () => {

    // ? MOMENT PACKAGE PROVIDING LOCAL TIME TO USERS.
    console.log(moment().format('LT'))

    return (
        <section className={`questions__Container`}>
            {/* // * TOP DIV PROVIDING INFO (TIME, USERNAME, PIC, ETC.)
             */}
            <div className={`questions__info`}>
                <h2>USERNAME HERE</h2>
            </div>

            {/* // * MIDDLE DIV FOR POSTED QUESTIONS & DESCRIPTION
             */}
            <div className={`questions__description`}>
                <h3>DESCRIPTION HERE:</h3>
            </div>

            {/* // * BUTTON FOR POSTED QUESTIONS & DESCRIPTION
             */}
            <div className={`questions__btn`}>
                <button>
                {/* // TODO: IMG icon here.
                 */}
                Respond button here
                </button>
            </div>
        </section>
    )
}

export default Questions;