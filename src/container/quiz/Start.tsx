import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import CONSTANT from '../../Constant';

export default function ComponentName() {
    useEffect(()=>{
        document.title = "Quiz Instructions";
        localStorage.removeItem(CONSTANT.key.answerSheet);
    });

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='bg-gray p-3 mt-5 br-3'>
                        <div>Please read the Quiz instructions carefully before you continue</div>
                        <ul>
                            <li>Instruction 1</li>
                            <li>Instruction 2</li>
                            <li>Instruction 3</li>
                        </ul>
                    </div>
                    <div className='col-md-12 mt-3'>
                  <Link to={CONSTANT.url.question} className="btn btn-primary float-right">Start Quiz</Link>
                    </div>
                </div>
            </div>
        </div>
    )
    
}