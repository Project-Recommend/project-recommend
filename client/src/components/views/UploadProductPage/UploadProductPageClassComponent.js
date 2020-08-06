import React, { Component } from "react";
import { Typography, Button, Form, Input } from "antd";
import axios from "axios";
import FileUpload from "../../utils/FileUpload";

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

export class UploadProductPage extends Component {
    state = {
        title: "",
        description: "",
        link: "",
        language: "",
        description3: "",
        description4: "",
        skilllevel: 1,
        participation: 1,
        images: [],
        price: 0,
    };

    handleChangeTitle = (event) => {
        this.setState({ title: event.currentTarget.value });
    };

    handleChangePrice = (event) => {
        this.setState({ price: parseInt(event.currentTarget.value, 10) });
    };

    handleChangeDecsription = (event) => {
        this.setState({ description: event.currentTarget.value });
    };

    handleChangeLink = (event) => {
        this.setState({ link: event.currentTarget.value });
    };

    handleChangeLanguage = (event) => {
        this.setState({ language: event.currentTarget.value });
    };

    handleChangeDecsription3 = (event) => {
        this.setState({ description3: event.currentTarget.value });
    };

    handleChangeDecsription4 = (event) => {
        this.setState({ description4: event.currentTarget.value });
    };

    handleChangeSkillLevel = (event) => {
        this.setState({ skilllevel: event.currentTarget.value });
    };

    handleChangeParticipation = (event) => {
        this.setState({ participation: event.currentTarget.value });
    };

    onSubmit = (event) => {
        event.preventDefault();

        if (this.props.user.userData && !this.props.user.userData.isAuth) {
            return alert("Please Log in First");
        }

        if (
            !this.state.title ||
            !this.state.description ||
            !this.state.link ||
            !this.state.language ||
            !this.state.description3 ||
            !this.state.description4 ||
            !this.state.skilllevel ||
            !this.state.participation ||
            !this.state.images ||
            !this.state.price
        ) {
            return alert("Please first fill all the fields");
        }

        const variables = {
            writer: this.props.user.userData._id,
            title: this.state.title,
            description: this.state.description,
            link: this.state.link,
            language: this.state.language,
            description3: this.state.description3,
            description4: this.state.description4,
            images: this.state.images,
            skilllevel: this.state.skilllevel,
            participation: this.state.participation,
            price: this.state.price,
        };

        axios.post("/api/product/uploadProduct", variables).then((response) => {
            if (response.data.success) {
                alert("video Uploaded Successfully");
                setTimeout(() => {
                    this.props.history.push("/");
                }, 1000);
            } else {
                alert("Failed to upload video");
            }
        });
    };

    updateFiles = (newImages) => {
        this.setState({ images: newImages });
    };

    render() {
        return (
            <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <Title level={2}> Upload Travel Product</Title>
                </div>

                <Form onSubmit={this.onSubmit}>
                    <FileUpload refreshFunction={this.updateFiles} />

                    <br />
                    <br />
                    <label>Title</label>
                    <Input onChange={this.handleChangeTitle} value={this.state.title} />
                    <br />
                    <br />
                    <label>Description</label>
                    <TextArea onChange={this.handleChangeDecsription} value={this.state.description} />
                    <br />
                    <br />
                    <label>Link</label>
                    <TextArea onChange={this.handleChangeLink} value={this.state.link} />
                    <br />
                    <br />
                    <label>Language</label>
                    <TextArea onChange={this.handleChangeLanguage} value={this.state.language} />
                    <br />
                    <br />
                    <label>Description3</label>
                    <TextArea onChange={this.handleChangeDecsription3} value={this.state.description3} />
                    <br />
                    <br />
                    <label>Description4</label>
                    <TextArea onChange={this.handleChangeDecsription4} value={this.state.description4} />
                    <br />
                    <br />
                    <label>Price($)</label>
                    <Input type="number" onChange={this.handleChangePrice} value={this.state.price} />
                    <br />
                    <br />
                    <label>Skill Level</label>
                    <br />
                    <select onChange={this.handleChangeSkillLevel}>
                        {SkillLevel.map((item) => (
                            <option key={item.key} value={item.key}>
                                {item.value}
                            </option>
                        ))}
                    </select>
                    <br />
                    <br />
                    <label>Participation</label>
                    <br />
                    <select onChange={this.handleChangeParticipation}>
                        {Participation.map((item) => (
                            <option key={item.key} value={item.key}>
                                {item.value}
                            </option>
                        ))}
                    </select>
                    <br />
                    <br />

                    <Button type="primary" size="large" onClick={this.onSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default UploadProductPage;
