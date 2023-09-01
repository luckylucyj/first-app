export default function ConditionalTwo(props){
    const {content}=props.setContent;
    return(
        <div>
            <h1 style={{color: 'red'}}>{content}</h1>
            <button>PracticeTwo</button>
        </div>
    )
}