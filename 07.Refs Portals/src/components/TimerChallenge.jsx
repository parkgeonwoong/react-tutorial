export default function TimerChallenge({ title, targetTime }) {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {/* {timerExpired && <p>You lost!</p>} */}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button>{"Start"} Challenge</button>
      </p>
      <p>{"Timer inactive"}</p>
    </section>
  );
}
