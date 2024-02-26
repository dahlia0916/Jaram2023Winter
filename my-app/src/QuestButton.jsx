import React, { useState } from "react";

const QuestModal = ({ isOpen, onClose, onWater }) => {
    const [checks, setChecks] = useState(new Array(5).fill(false));
    const [inputs, setInputs] = useState(new Array(5).fill(""));

    const handleCheck = (index) => {
        const updatedChecks = [...checks];
        updatedChecks[index] = !updatedChecks[index];
        setChecks(updatedChecks);
    };

    const handleInputChange = (index, value) => {
        const updatedInputs = [...inputs];
        updatedInputs[index] = value;
        setInputs(updatedInputs);
    };

    const canWater = checks.every(Boolean);

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                {inputs.map((input, index) => (
                    <div key={index} className="input-group">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                            style={{
                                textDecoration: checks[index] ? "line-through" : "none",
                                width: "700px",
                                height: "30px",
                                fontSize: "25px",
                                marginBottom: "20px",
                            }}
                        />
                        <input
                            type="checkbox"
                            checked={checks[index]}
                            onChange={() => handleCheck(index)}
                        />
                    </div>
                ))}
                <div className="modal-actions">
                    <button onClick={onClose}>돌아가기</button>
                    <button onClick={onWater} disabled={!canWater}>
                        물주기
                    </button>
                </div>
            </div>
        </div>
    );
};

const QuestButton = ({ onWater }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <button className="quest-button" onClick={openModal}>
                QUEST
            </button>
            <QuestModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onWater={() => {
                    closeModal();
                    onWater();
                }}
            />
        </div>
    );
};

export default QuestButton;
