export default function ConditionalOne(props){
    const {content}=props.setContent;
    return(
        <div>
            <h1 style={{color: 'blue'}}>{content}</h1>
            <button>PracticeOne</button>
        </div>
    )
}