import "./App.css";
import QuestButton from "./QuestButton";
import React, { useState } from "react";
function App() {
    const [isWatering, setIsWatering] = useState(false);
    const [hungryStatus, setHungryStatus] = useState("hungry");

    const giveWater = () => {
        setIsWatering(true);
        setTimeout(() => {
            setIsWatering(false);
            setHungryStatus("full");

            setTimeout(() => {
                setHungryStatus("hungry");
            }, 20000); // 20초는
        }, 2000); // 물주기 애니메이션 시간
    };
    return (
        <div>
            {" "}
            <QuestButton onWater={giveWater} />
            <div
                style={{
                    position: "relative",
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {" "}
                <img
                    className="background-img"
                    style={{
                        position: "absolute",
                        height: "100%",
                        weight: "100%",
                        zIndex: 0,
                    }}
                    src="/img/background.jpg"
                    alt="background"
                />{" "}
                <img
                    className="pot-img"
                    style={{
                        position: "absolute",
                        height: "700px",
                        zIndex: 2,
                    }}
                    src="/img/pot.png"
                    alt="pot"
                />
                {isWatering && (
                    <img
                        src="/img/water.png"
                        alt="물뿌리개"
                        style={{
                            position: "absolute",
                            animation: "fadeInOut 2s",
                            height: "300px",
                            width: "300px",
                            zIndex: 2,
                            right: "140px",
                            top: "50px",
                        }}
                    />
                )}
                <img
                    className={hungryStatus === "full" ? "full-img" : "hungry-img"}
                    style={{
                        position: "absolute",
                        height: "850px",
                        width: "850px",
                        zIndex: 1,
                    }}
                    src={hungryStatus === "full" ? "/img/full.png" : "/img/hungry.png"}
                    alt={hungryStatus}
                />
            </div>
        </div>
    );
}

export default App;
