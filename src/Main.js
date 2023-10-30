import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import './index.css';

const Main = () => {
    var ld = ["Python", "Pandas", "Flask", "Django"];
    var rd = ["Javascript", "React", "Node", "Express"];

    const [leftData, setLeftData] = useState(ld.map((item) => ({ text: item, checked: false })));
    const [rightData, setRightData] = useState(rd.map((item) => ({ text: item, checked: false })));

    const handleLeft = () => {
        const itemsToMove = rightData.filter((item) => item.checked);
        const itemsToMove1 = itemsToMove.map((item) => ({ text: item.text, checked: false }));
        setLeftData((leftData) => [...leftData, ...itemsToMove1]);
        setRightData((rightData) => rightData.filter((item) => !item.checked));
    };

    const handleRight = () => {
        const itemsToMove = leftData.filter((item) => item.checked);
        const itemsToMove1 = itemsToMove.map((item) => ({ text: item.text, checked: false }));
        setRightData((rightData) => [...rightData, ...itemsToMove1]);
        setLeftData((leftData) => leftData.filter((item) => !item.checked));
    };

    const handleLeftCheckbox = (event) => {
        const itemText = event.target.value;
        setLeftData((leftData) =>
            leftData.map((item) =>
                item.text === itemText ? { ...item, checked: event.target.checked } : item
            )
        );
    };

    const handleRightCheckbox = (event) => {
        const itemText = event.target.value;
        setRightData((rightData) =>
            rightData.map((item) =>
                item.text === itemText ? { ...item, checked: event.target.checked } : item
            )
        );
    };

    return (
        <Container>
            <h1 className="mt-4 mb-4 title">Checkbox Value Mover</h1>
            <Row>
                <Col>
                    <div className="box left-box">
                        {leftData.map((l) => (
                            <div key={l.text}>
                                <input type="checkbox" value={l.text} checked={l.checked} onChange={handleLeftCheckbox} />
                                {l.text}
                                <br />
                            </div>
                        ))}

                    </div>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <div className="round" onClick={handleLeft}>&larr;</div>
                    <div className="mt-3 round" onClick={handleRight}>&rarr;</div>
                </Col>
                <Col>
                    <div className="box right-box">
                        {rightData.map((r) => (
                            <div key={r.text}>
                                <input type="checkbox" value={r.text} checked={r.checked} onChange={handleRightCheckbox} />
                                {r.text}
                                <br />
                            </div>
                        ))}

                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Main;
