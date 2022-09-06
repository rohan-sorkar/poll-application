import React, {useState} from "react";
import Modal from '../forms/Modal';

const PollDetails = ({ selectedPoll, deletePoll, getOpinion, updatePoll }) => {
  const [name, setName] = useState('');
  const [optId, setOptId] = useState('');
  const [isModal, setIsModal] = useState(false);

  const handleOpenModal = () => {
    setIsModal(!isModal)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !optId) {
      alert('please give a name and select a checkbox before submitting')

    } else {

      getOpinion({
        name: name,
        optId: optId,
        pollId: selectedPoll.id
      })
      e.target.reset();
      setName('')
    }
  }
  return (
    <div className="ml-20 max-w-xl">
      <h3>{selectedPoll.title}</h3>
      <p>{selectedPoll.description}</p>
      <div className="flex items-center justify-between">
        <h5 className="underline">Options</h5>
        <div>
          <button onClick={handleOpenModal} className="btn bg-green-200 text-green-600">Edit</button>
          <button onClick={() => deletePoll(selectedPoll.id)} className="btn bg-red-200 text-red-600 ml-3">delete</button>
        </div>
      </div>

      <form onSubmit={(e) => handleSubmit(e)}>
        {selectedPoll.options.map((opt) => (
          <div key={opt.id} className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-lg italic">
              <input
                className="appearance-none checked:bg-purple-500"
                id={opt.id}
                name="optId"
                type="radio"
                value={opt.id}
                onChange={(e) => setOptId(e.target.value)}
              /> {opt.value}
            </div>
            <div>
              <span className="px-6 py-1 bg-orange-100 text-orange-400">{opt.vote}</span>
              <span className="px-6 py-1 bg-purple-100 text-purple-400 ml-2">
              {selectedPoll.totalVote > 0 ? ((100 * opt.vote) / selectedPoll.totalVote).toFixed(2) : 0} %
              </span>
            </div>
          </div>
        ))}

        <label>Your name..</label>
        <input className="w-80" type="text" placeholder="type out a name..." name="name" onChange={(e) => setName(e.target.value)} value={name}/>
        <button className="btn bg-slate-200 mt-3" type="submit">
          Submit
        </button>
      </form>
      {isModal && <Modal handleOpenModal={handleOpenModal} isUpdate={true} selectedPoll={selectedPoll} updatePoll={updatePoll}/>}
    </div>
  );
};

export default PollDetails;
