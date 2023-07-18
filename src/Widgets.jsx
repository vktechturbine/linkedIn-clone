import React from 'react'
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './Widget.css';
function Widgets() {
    const newsArticle = (heading,subtitle) => (
        <div className="widget__article">
            <div className='widget__articleleft'>
                <FiberManualRecordIcon/>
            </div>
            <div className='widget__articleright'>
                <h2>{heading}</h2>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widget">
            <div className='widget__header'>
                <h2>Linked In News</h2>
                <InfoSharpIcon/>

            </div>
            {newsArticle("Mature consumers in focus","19h ago")}
            {newsArticle("Real estate crunch hits retail","1d ago • 2,035 readers")}
            {newsArticle("Diet options drive beverage industry","1d ago • 319 readers")}
            {newsArticle("Family offices rejig investment plans","21h ago • 300 readers")}
            {newsArticle("What Gen Z workers want","19h ago")}
        </div>
    )
}

export default Widgets