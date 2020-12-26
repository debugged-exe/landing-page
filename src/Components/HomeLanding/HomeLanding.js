import React from 'react';
import './HomeLanding.css';

const HomeLanding = () => {
    return (
        <div className="pa4-l homeImg">
            <div className='center'>
                <div className="form center pa4 br3 shadow-5">
                    <input className="f4 pa2 w-70 center" placeholder="Type Here" type="text"  />
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg " >Search</button>
                </div>
            </div>
        </div>

    );
}

export default HomeLanding;