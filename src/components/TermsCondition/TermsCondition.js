import React from 'react';
import { Link } from 'react-router-dom';

const TermsCondition = () => {
    return (
        <div className='mb-5'>
            <div className='mt-5 border rounded shadow-lg p-5 w-50 mx-auto'>
                <h4> This is terms and condition page</h4>
                <div>
                    <p>
                        Go Back to: <Link to='/register'>Create an Account</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsCondition;