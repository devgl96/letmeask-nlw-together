import { useHistory, useParams } from 'react-router-dom';

import { useState } from 'react';

import Modal from 'react-modal';

import logoImg from '../assets/images/logo.svg';
import deleteImg from '../assets/images/delete.svg';
import removeImg from '../assets/images/remove.svg';
import checkImg from '../assets/images/check.svg';
import answerImg from '../assets/images/answer.svg';
import emptyQuestionsImg from '../assets/images/empty-questions.svg';

import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { Question } from '../components/Question';

// import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';

import { database } from '../services/firebase';

import '../styles/room.scss';

type RoomParams = {
    id: string;
};

export function AdminRoom() {
    const [modalIsOpen, setIsOpen] = useState(false);

    const history = useHistory();

    const params = useParams<RoomParams>();
    
    const roomId = params.id;
    
    const { title, questions } = useRoom(roomId);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#F8F8F8',
            display: 'flex',
        },
    };

    function handleOpenModal() {
        setIsOpen(true);
    }

    function handleCloseModal() {
        setIsOpen(false);
    }

    function sendToHome() {
        history.push("/");
    }  

    // End the room 
    async function handleEndRoom() {
        await database.ref(`rooms/${roomId}`).update({ 
            endedAt: new Date(),
        });

        history.push("/");
    }

    // Question as answered
    async function handleCheckQuestionAsAnswered(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isAnswered: true,
        });
    }

    // Highlight question
    async function handleHighlightQuestion(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isHighLighted: true,
        });
    }

    // Delete question
    async function handleDeleteQuestion(questionId: string) {
        // Change this to modal - IMPORTANT
        if(window.confirm("Tem certeza que você deseja excluir esta pergunta?")) {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        }
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" onClick={sendToHome}/>
                    <div>
                        <RoomCode code={roomId}/>
                        <Button isOutlined onClick={handleOpenModal}>Encerrar sala</Button>
                        <Modal 
                            isOpen={modalIsOpen}
                            onRequestClose={handleCloseModal}
                            className="modalHandleRemove"
                            overlayClassName="overlayHandleRemove"
                        >
                            <img src={removeImg} alt="Remover sala" />
                            <h2>Encerrar sala</h2>
                            <p>Tem certeza que você deseja encerrar esta sala?</p>
                            <div className="chooseButton">
                                <Button onClick={handleCloseModal}>Cancelar</Button>
                                <Button onClick={handleEndRoom}>Sim, encerrar</Button>
                            </div>
                        </Modal>
                    </div>
                </div>
            </header>
            <main>
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    { questions.length > 0 && <span>{questions.length} pergunta(s)</span>}   
                </div>

                {questions.length > 0 ? 
                    <div className="question-list">
                        {/* Este algoritmo mostra as questões de forma ordenada (decrescente) 
                            da mais curtida até a sem curtida*/}
                        {questions.sort((qa, qb) => {
                            return (
                                qb.likeCount - qa.likeCount
                            );
                        }).map(question => {
                            return (
                                <Question 
                                    key={question.id}
                                    content={question.content}
                                    author={question.author}
                                    isAnswered={question.isAnswered}
                                    isHighLighted={question.isHighLighted}
                                >
                                    {!question.isAnswered && (
                                        <>
                                            <button
                                                type="button"
                                                onClick={() => handleCheckQuestionAsAnswered(question.id)}
                                            >
                                                <img src={checkImg} alt="Marcar pergunta como respondida" />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleHighlightQuestion(question.id)}
                                            >
                                                <img src={answerImg} alt="Dar destaque à pergunta" />
                                            </button>
                                        </>
                                    )}
                                    <button
                                        type="button"
                                        onClick={() => handleDeleteQuestion(question.id)}
                                    >
                                        <img src={deleteImg} alt="Remover pergunta" />
                                    </button>
                                </Question>
                            );
                        })}
                    </div>
                :
                    <div className="empty-questions">
                        <img src={emptyQuestionsImg} alt="Sala sem perguntas" />
                        <h3>Nenhuma pergunta por aqui...</h3>
                        <p>Envie o código desta sala para seus amigos e comece a responder perguntas!</p>
                    </div>
                }
            </main>
        </div>
    );
}