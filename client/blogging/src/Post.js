

const Post=()=>{
    return (
        <div className="post">
        
        <div className="image">
        <img src="https://miro.medium.com/v2/resize:fit:605/1*D3jgLXA6Y5f8ixdLOE5TNg.png" alt="Gen ai"></img>
        </div>

        <div className="texts">
        <h2>Gen AI</h2>
        <p className="info">
            <a className="author">NJ</a>
            <time>2024-01-01</time>
        </p>
        <p className="summary">Generative AI is shaping the future of telecommunications network operations. The potential applications for enhancing network operations include predicting the values of key performance indicators (KPIs), forecasting traffic congestion, enabling the move to prescriptive analytics, providing design advisory services and acting as network operations center (NOC) assistants.  </p>
        </div>
        
    </div>
    );
}
export default Post;