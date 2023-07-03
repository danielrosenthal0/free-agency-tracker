import classes from './Home.module.css'

const Home = () => {
    return (
        <div className={classes.content}>
<h1>Home page</h1>
<p>Welcome to my attempt at an NBA free agency tracker. There are three pages - available free agents, confirmed transactions, and recent tweets from Shams and Woj.</p>
<p>Unfortunately, the API I am using is free so it limits the amount of requests per second and per month, as well as the fact that I was only given a 90 day trial, so there is a good chance the app crashes and you may need to wait a little and refresh. If you are using this app after the trial is over, I don't think anything will work. Enjoy.</p>
        </div>
        
    )
}

export default Home;