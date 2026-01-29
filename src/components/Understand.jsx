import React from "react";

function Understand() {
  return (
    <section className="understand">
      {/* Block 1 */}
      <div className="understand-block understand-block-1">
        <div className="understand-orb-container">
          <div className="understand-orb-glow"></div>

          <img
            src="/Frame 269.png"
            alt="Listening Orb"
            className="understand-orb-img"
          />

          {/* Typing text */}
          <span
            className="typing-text"
            data-text="Hi Josh, what is in your mind?"
          ></span>
        </div>

        <div className="understand-text-container">
          <h2 className="understand-title">
            Not just listen, Qyuro understands
          </h2>
          <p className="understand-desc">
            Qyuro uses advance models to understand every query deeply.
          </p>
          <p className="understand-desc">
            Qyuro can understand every mood, tone and atmosphere instantly.
          </p>
        </div>
      </div>

      {/* Block 2 */}
      <div className="understand-block understand-block-2">
        <div className="understand-text-container understand-text-left">
          <h2 className="understand-title">And reflect with intellect</h2>
          <p className="understand-desc">
            Qyuro's smart model mimics moods and replies as per the User's need.
            It can be anything, from your doctor to your best friend.
          </p>
        </div>

        <div className="understand-orb-container understand-orb-right">
          <img
            src="/Frame 265.png"
            alt="Reflect Orb"
            className="understand-orb-img understand-orb-small"
          />
        </div>
      </div>
    </section>
  );
}

export default Understand;
