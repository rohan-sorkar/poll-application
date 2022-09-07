import AppContainer from "./components/AppContainer";
import Modal from "./components/forms/Modal";
import PollDetails from "./components/poll/PollDetails";
import Sidebar from "./components/sidebar";
import Welcome from "./components/Welcome";
import { usePoll } from "./hooks/usePoll";

function App() {
  const {
    polls,
    handleOpenModal,
    handleSelectPoll,
    selectedPoll,
    deletePoll,
    getOpinion,
    isModal,
    updatePoll,
    createNewPoll,
  } = usePoll();

  return (
    <AppContainer>
      <Sidebar
        polls={polls}
        handleOpenModal={handleOpenModal}
        handleSelectPoll={handleSelectPoll}
      />

      {selectedPoll ? (
        <PollDetails
          selectedPoll={selectedPoll}
          deletePoll={deletePoll}
          getOpinion={getOpinion}
          isModal={isModal}
          handleOpenModal={handleOpenModal}
          updatePoll={updatePoll}
        />
      ) : (
        <Welcome />
      )}

      {isModal && (
        <Modal
          handleOpenModal={handleOpenModal}
          createNewPoll={createNewPoll}
        />
      )}
    </AppContainer>
  );
}

export default App;
