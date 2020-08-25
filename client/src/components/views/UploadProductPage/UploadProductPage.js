import React, { useState } from "react";
import { Typography, Button, Form, message, Input, Icon } from "antd";
import Axios from "axios";

const { Title } = Typography;
const { TextArea } = Input;

const SkillLevel = [
    { key: 1, value: "Beginner" },
    { key: 2, value: "Intermediate" },
    { key: 3, value: "Advanced" },
];

const Participation = [
    { key: 1, value: "Single" },
    { key: 2, value: "Team" },
];

function UploadProductPage(props) {
    const [TitleValue, setTitleValue] = useState("");
    const [DescriptionValue, setDescriptionValue] = useState("");
    const [LinkValue, setLinkValue] = useState("");
    const [CodingLanguageValue, setCodingLanguageValue] = useState("");
    const [SkillLevelValue, setSkillLevelValue] = useState(1);
    const [ParticipationValue, setParticipationValue] = useState(1);
    const [TagValue, setTagValue] = useState("");

    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value);
    };

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value);
    };

    const onLinkChange = (event) => {
        setLinkValue(event.currentTarget.value);
    };

    const onCodingLanguageChange = (event) => {
        setCodingLanguageValue(event.currentTarget.value);
    };

    const onTagChange = (event) => {
        setTagValue(event.currentTarget.value);
    };

    const onSkillLevelSelectChange = (event) => {
        setSkillLevelValue(event.currentTarget.value);
    };

    const onParticipationSelectChange = (event) => {
        setParticipationValue(event.currentTarget.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        if (!TitleValue || !DescriptionValue || !CodingLanguageValue || !TagValue || !SkillLevelValue || !ParticipationValue) {
            return alert("fill all the fields first!");
        }

        const variables = {
            // writer: props.user.userData._id,
            title: TitleValue,
            description: DescriptionValue,
            link: LinkValue,
            codinglanguage: CodingLanguageValue,
            skilllevel: SkillLevelValue,
            participation: ParticipationValue,
            tag: TagValue
        };

        Axios.post("/api/product/uploadProduct", variables).then((response) => {
            if (response.data.success) {
                alert("Project successfully uploaded.");
                props.history.push("/catalog");
            } else {
                alert("Failed to upload project.");
            }
        });
    };

    return (
        <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <Title level={2}> Upload Coding Project</Title>
            </div>

            <Form onSubmit={onSubmit}>
                <br />
                <label>Title</label>
                <Input onChange={onTitleChange} value={TitleValue} />
                <br />
                <br />
                <label>Description</label>
                <TextArea onChange={onDescriptionChange} value={DescriptionValue} />
                <br />
                <br />
                <label>Link</label>
                <TextArea onChange={onLinkChange} value={LinkValue} />
                <br />
                <br />
                <label>Language</label>
                <TextArea onChange={onCodingLanguageChange} value={CodingLanguageValue} />
                <br />
                <br />
                <label>Skill Level</label>
                <br />
                <select onChange={onSkillLevelSelectChange} value={SkillLevelValue}>
                    {SkillLevel.map((item) => (
                        <option key={item.key} value={item.key}>
                            {item.value}{" "}
                        </option>
                    ))}
                </select>
                <br />
                <br />
                <label>Participation</label>
                <br />
                <select onChange={onParticipationSelectChange} value={ParticipationValue}>
                    {Participation.map((item) => (
                        <option key={item.key} value={item.key}>
                            {item.value}{" "}
                        </option>
                    ))}
                </select>
                <br />
                <br />
                <label>Tags</label>
                <TextArea onChange={onTagChange} value={TagValue} />
                <br />
                <br />

                <Button onClick={onSubmit}>Submit</Button>
            </Form>
            <br />
        </div>
    );
}

export default UploadProductPage;
