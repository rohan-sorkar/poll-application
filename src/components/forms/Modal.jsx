import React, { useEffect, useState } from "react";
import shortid from "shortid";

const defaultOptions = [
  { id: "01741", value: "", vote: 0 },
  { id: "01711", value: "", vote: 0 },
];

const Modal = (props) => {
  const { handleOpenModal, createNewPoll, updatePoll, isUpdate, selectedPoll } = props;
  const [state, setState] = useState({
    title: "",
    description: "",
    options: [...defaultOptions],
    totalVote: 0,
    opinions: [],
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleOptionChange = (e, optId) => {
    const opt = state.options.find((o) => o.id === optId);
    opt.value = e.target.value;
    return setState({ ...state });
  };
  const addOption = () => {
    const newOption = {
      id: shortid.generate(),
      value: "",
      vote: 0,
    };
    if (state.options.length < 5) {
      setState({ ...state, options: [...state.options, newOption] });
    } else {
      alert("you can not add more than five option");
    }
  };
  const deleteOption = (deleteId) => {
    const filteredOptions = state.options.filter((opt) => opt.id !== deleteId);
    setState({ ...state, options: [...filteredOptions] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdate) {
      updatePoll(selectedPoll.id, state)
      handleOpenModal();
    } else {
      if(!state.title || !state.description) {
        alert('fill up the from completely🎃')
      } else {
        createNewPoll({ id: shortid.generate(), ...state, created: new Date() });
        handleOpenModal();
      }
    }
  };

  useEffect(() => {
    if (selectedPoll && Object.keys(selectedPoll).length > 0) {
      setState({
        ...selectedPoll
      });
    }
  }, []);

  // console.log(state);

  return (
    <div className="w-[100vw] h-[100vh] fixed top-0 left-0 flex justify-center items-center bg-slate-100">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="border relative p-10 bg-white"
      >
        <h3
          onClick={handleOpenModal}
          className="m-0 absolute top-3 right-5 cursor-pointer text-red-600"
        >
          X
        </h3>
        <h3 className="text-center animate-bounce transition italic">
          Add Poll😎
        </h3>
        <label>title</label>
        <input
          className="w-full mb-4"
          type="text"
          placeholder="title..."
          name="title"
          value={state.title}
          onChange={handleChange}
        />
        <label>description</label>
        <textarea
          className="w-full mb-4"
          rows={3}
          placeholder="describe about poll..."
          name="description"
          value={state.description}
          onChange={handleChange}
        ></textarea>
        <h6 className="inline">Add options</h6>
        <span
          onClick={addOption}
          className="bg-purple-300 text-purple-600 font-medium rounded-full px-5 py-1 ml-10 cursor-pointer"
        >
          Add option
        </span>
        {state.options.map((opt) => (
          <div key={opt.id} className="flex my-5">
            <input
              type="text"
              value={opt.value}
              onChange={(e) => handleOptionChange(e, opt.id)}
            />
            <span
              onClick={() => deleteOption(opt.id)}
              className={`${
                state.options.length > 2
                  ? "bg-red-300 text-red-600"
                  : "bg-red-50 text-red-200 cursor-not-allowed"
              } font-medium rounded-xl px-5 py-1 ml-3 cursor-pointer`}
            >
              delete
            </span>
          </div>
        ))}

        <button
          type="submit"
          className="bg-slate-700 text-white  px-4 py-2 font-fira"
        >
          {isUpdate ? "Update poll" : "Create poll"}
        </button>
      </form>
    </div>
  );
};

export default Modal;
