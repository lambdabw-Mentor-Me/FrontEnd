// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// import style from '../pages/StyledQuestions';


// const UserProfilePic = () => {
//     const [pic, setPic] = useState();
//     useEffect(() => {
//         axios.get(`https://randomuser.me/api/?inc=picture`)
//         .then(res => res.data.results[0])
//         .then(res => setPic(res.picture))
//     }, [])

//     return (
//         <div className={`info__bottom`}>
//             <img src={`${pic.large}`} alt="Profile image"/>
//         </div>
//     )
// }

// export default UserProfilePic;