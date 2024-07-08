import React from 'react';
import './Diff.css';
import dglow from './dglow.png';

const Diff = () => {
    const features = [
        { name: "100+ Practice Questions", others: true, datasense: true },
        { name: "Guided Format", others: true, datasense: true },
        { name: "Data Analyst Focused", others: false, datasense: true },
        { name: "Video Explanations", others: false, datasense: true },
        { name: "Full Length Courses", others: false, datasense: true },
        { name: "Multiple Programming Languages", others: true, datasense: true },
        { name: "Expert Experienced Instructors", others: true, datasense: true },
        { name: "All in One Platform", others: false, datasense: true }
    ];

    return (
        <div className='vc'>
            <h1 className='te'>What's the difference</h1>
            <div className="comparison-table">
                <img src={dglow} alt=""  className='dglow'/>
            <div className='cdd'>
            <h1 className='ot'> Others </h1>
            <h1 className='da'> Datasense</h1></div>
                {features.map((feature, index) => (
                    <div className="row" key={index}>
                        <div className="row-item">{feature.name}</div>
                        <div className="row-item">
                            <div className={`box ${feature.others ? 'green' : 'red'}`}>
                                {feature.others ? '✔' : '✖'}
                            </div>
                        </div>
                        <div className="row-item">
                            <div className={`box ${feature.datasense ? 'green' : 'red'}`}>
                                {feature.datasense ? '✔' : '✖'}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Diff;
