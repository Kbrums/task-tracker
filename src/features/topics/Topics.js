import { useSelector } from "react-redux";
import { selectTopics } from "./topicsSlice";
import Topic from './Topic';

export default function Topics() {
    const topics = useSelector(selectTopics);

    return (
        <div className="topics-container">
            <h3>topics</h3>
            {Object.values(topics).map( topic => <Topic topic={topic}/>)}
        </div>
    );
}