export function TimerChallenge({title , targetTime }){
    return(
       <section className="challenge">
          <h2>{title}</h2>
          <p className="challengeTime">
            {targetTime} second{targetTime > 1 ? "s" : ""}
          </p>
          <p>
            <button>
                Start Challenge
            </button>
          </p>
          <p className=""> 
            Time is running... / Time inactivate
          </p>
       </section>
    );
}