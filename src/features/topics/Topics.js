import { useSelector } from "react-redux";
import { selectTopics } from "./topicsSlice";
import Topic from './Topic';


export default function Topics() {
    const topics = useSelector(selectTopics);

    return (
        <>
        <div className='body-container'>
            <div className='topics-container'>
                {Object.values(topics).map( topic => <Topic topic={topic}/>)}
            </div>
        </div> 
        </>
    );
}