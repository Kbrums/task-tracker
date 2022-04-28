import { useSelector } from "react-redux";
import { selectTopics } from "./topicsSlice";
import Topic from './Topic';
import NewTopicForm from "../../components/NewTopicForm";

export default function Topics() {
    const topics = useSelector(selectTopics);

    return (
        <div className="topics-container">
            <h3>Topics</h3>
            <NewTopicForm />
            {Object.values(topics).map( topic => <Topic topic={topic}/>)}
        </div>
    );
}