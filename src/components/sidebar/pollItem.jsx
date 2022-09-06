import React from "react";

const PollItem = ({poll, handleSelectPoll}) => {
  return (
    <h6 onClick={() => handleSelectPoll(poll)} className="text-left cursor-pointer text-slate-600 text-lg border px-5 py-2 shadow hover:shadow-md bg-slate-100">
      🔋{" "}
      {poll.title.length > 30 ? poll.title.substr(0, 30) + "..." : poll.title}
    </h6>
  );
};

export default PollItem;
