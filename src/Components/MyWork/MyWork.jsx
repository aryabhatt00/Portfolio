// import React from 'react'
// import './MyWork.css'
// import theme_pattern from '../../assets/theme.png'
// import mywork_data from '../../assets/mywork_data'
// import arrow_icon from '../../assets/arrow_icon.svg'

// const MyWork = () => {
//   return (
//     <div id='portfolio' className="mywork">
//         <div className="mywork-title">
//             <h1>My Latest Work</h1>
//             <img src={theme_pattern} alt="" />
//         </div>
//         <div className="mywork-container">
//             {mywork_data.map((work,index)=>{
//                 return <img key={index} src={work.w_img }alt=""/>

//             })}

//         </div>
//         <div className="mywork-showmore">
//             <p>Show More </p>
            
//             <img src={arrow_icon} alt="" />

//         </div>
//     </div>
//   )
// }

// export default MyWork
import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme.png';
import mywork_data from '../../assets/mywork_data'; 
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id="portfolio" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <a
            key={index}
            href={work.w_link}
            target="_blank"
            rel="noopener noreferrer"
            className="work-card"
          >
            <img src={work.w_img} alt={work.w_name} />
            <div className="work-name">{work.w_name}</div>
          </a>
        ))}
      </div>

      <div className="mywork-showmore">
  <a 
    href="https://github.com/aryabhatt00"  
    target="_blank" 
    rel="noopener noreferrer"
    className="showmore-link" 
  >
    <p>Show More</p>
    <img src={arrow_icon} alt="arrow icon" />
  </a>
</div>

    </div>
  );
};

export default MyWork;
