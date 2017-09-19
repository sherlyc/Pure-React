import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function Books() {
    return (
        <div>
        <div className='book'>
            The Title
        </div>
        <div className='author'>
            The author
        </div>
        <ul className='stats'>
            <li className='rating'>
                5 stars
                </li>
                <li className='isbn'>
                    12-345678-910
                </li>
                </ul>
                </div>
        </div>)
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
