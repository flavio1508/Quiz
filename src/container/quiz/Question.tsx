import React from 'react';
import CONSTANT from '../../Constant';
import rawJson from '../../mock/data.json';
import ComponentName from './Start';

class ComponentNamene extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            question: rawJson,
            activeIndex: 0
        }
    }
    componentDidMount() {
        const { question } = this.state;
        //converter o json structure as per our requirement
        const clonedQuestion = JSON.parse(JSON.stringify(question));

        for (let i = 0; i < clonedQuestion.length; i++) {
            const question = clonedQuestion[i];
            question.reviewLater = false;
            for (let j = 0; j < question.answers.length; j++) {
                const answer = question.answers[j];
                answer.checked = false;

                delete answer.isCorrectAnswer;
            }
        }

        this.setState({ question: clonedQuestion });
    }
    render() {


        return (
            <div className='container'>
                <div className='row'>
                    {this.renderQuestion()}
                    {/* {this.renderSumary()} */}
                </div>
            </div>
        )
    }
    renderQuestion = () => {
        const { question, activeIndex } = this.state;
        return (
            <div className='col-md-8'>
                <div className='ro'>
                    <div className='col-md-12'>
                        <div className='bg-gray p-3 mt-5 br-3'>
                            <div className='text-right'>
                                <label>
                                    <input type="checkbox" onClick={this.onReviewLater} checked={question[activeIndex].reviewLater} value={question[activeIndex].id} />Revi
                                </label>
                            </div>
                            <div dangerouslySetInnerHTML={{__html:question[activeIndex].body}}></div>
                            <div className='mt-3'>
                                {
                                    question[activeIndex].answers.map((item:any, i:number) =>{
                                        const questionId = question[activeIndex].id;
                                        return(
                                            <div key={i}>
                                                <label>
                                                    <input type="checkbox" onChange={this.onChange} data-question-id={questionId} data-answer-id={item.id} className="m-3" checked={item.checked} />
                                                    {item.body}
                                                </label>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 mt-3'>
                        {
                            activeIndex > 0 && <button onClick={this.onChangeQuestion} data-index={activeIndex - 1} className="btn btn-secondary">Previous</button>
                        }
                        {
                            activeIndex < question.length - 1 && <button onClick={this.onChangeQuestion} data-index={activeIndex - 1} className="btn btn-secondary">Next</button>
                        }
                    </div>
                </div>
            </div>
        )
    }

    onReviewLater = ( e: any) =>{

    }

    onChange = (e:any)=>{

    }

}
export default ComponentName;