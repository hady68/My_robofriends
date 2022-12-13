import React from 'react';

const card = ({ name ,email , id }) => {
    return (
        <div className='tc bg-light-blue dib ba3 pa3 ma1 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200&set=set2`} alt='robots' />
            <div>
                <h2> {name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );

}

export default card; 