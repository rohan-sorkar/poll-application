import React, { useState } from 'react';
import PollItem from './pollItem';
import SearchPanel from './SearchPanel';

const Sidebar = ({polls, handleOpenModal, handleSelectPoll}) => {
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value)
    }
    const performSearch = () => {
        return polls.filter(poll => poll.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    const filteredPolls = performSearch();
    
  return (
    <div className="bg-white rounded-xl border shadow-md shadow-slate-200">
        <SearchPanel handleSearchTerm={handleSearchTerm} searchTerm={searchTerm} handleOpenModal={handleOpenModal}/>
        <div className="p-5 bg-zinc-100">
          {filteredPolls.map((poll) => (
            <PollItem key={poll.id} poll={poll} handleSelectPoll={handleSelectPoll}/>
          ))}
        </div>
      </div>
  )
}

export default Sidebar