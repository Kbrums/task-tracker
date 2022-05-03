import { useSelector } from "react-redux";
import { selectTopics } from "./topicsSlice";
import Topic from './Topic';
import NewTopicForm from "../../components/NewTopicForm";

export default function Topics() {
    const topics = useSelector(selectTopics);

    return (
        <div className='body-container'>
            <div className="head-container">
                <h3>Topics</h3>
                <NewTopicForm />
            </div>
            <div className='topics-container'>
                {Object.values(topics).map( topic => <Topic topic={topic}/>)}
            </div>
        </div> 
    );
}