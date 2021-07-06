export default function GIM() {
    //make this into a component that takes in project object 
    //KEYS:
    // title
    // oneLiner
    // tech 
    // github
    // liveSite
    // npmLink
    // blurb1
    // blurb2
    // blurb3
    // video
    // image1
    // image2
    // image3
    // image4

    return (
        <div>
            <video
                width="500"
                controls
                autoplay
                muted
            >
                <source src='/GIM.mp4' type="video/mp4" />
            </video>
            <div>
                <h2>GIM LCC.</h2>
                <p>tech used</p>
                <p>short description</p>
                <a href='' >Link to Live site</a> <br />
                <a href='' >Link to GitHub</a>
            </div>
            <button>Back to Dev Work</button>
        </div>
    )
}