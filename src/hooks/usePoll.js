import React, { useState } from "react";
import { Polls } from "../constants";

export const usePoll = () => {
  const [polls, setPolls] = useState([...Polls]);
  const [isModal, setModal] = useState(false);
  const [selectedPoll, setSelectedPoll] = useState(null);

  const createNewPoll = (poll) => {
    setPolls([poll, ...polls]);
  };

  const updatePoll = (id, poll) => {
    let findPoll = polls.find((p) => p.id === id);
    findPoll.title = poll.title;
    findPoll.description = poll.description;
    findPoll.options = poll.options;
    setPolls([...polls]);
    setSelectedPoll({ ...poll });
  };

  const handleOpenModal = () => {
    setModal(!isModal);
  };

  const handleSelectPoll = (poll) => {
    setSelectedPoll({ ...poll });
  };

  const deletePoll = (id) => {
    const deletedPoll = polls.filter((poll) => poll.id !== id);
    setPolls([...deletedPoll]);
    setSelectedPoll(null);
  };

  const getOpinion = (pollInf) => {
    selectedPoll.totalVote += 1;
    const opt = selectedPoll.options.find((p) => p.id === pollInf.optId);
    opt.vote += 1;
    selectedPoll.opinions.push(pollInf.name);
    return setSelectedPoll({ ...selectedPoll });
  };

  return {
    polls,
    isModal,
    selectedPoll,
    createNewPoll,
    updatePoll,
    deletePoll,
    handleOpenModal,
    handleSelectPoll,
    getOpinion
  }
};


