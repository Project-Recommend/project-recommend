import React, { useState } from "react";
import { Typography, Button, Form, message, Input, Icon } from "antd";
import FileUpload from "../../utils/FileUpload";
import Axios from "axios";

const { Title } = Typography;
const { TextArea } = Input;

const Continents = [
    { key: 1, value: "Africa" },
    { key: 2, value: "Europe" },
    { key: 3, value: "Asia" },
    { key: 4, value: "North America" },
    { key: 5, value: "South America" },
    { key: 6, value: "Australia" },
    { key: 7, value: "Antarctica" },
];

function UploadProductPage(props) {
    const [TitleValue, setTitleValue] = useState("");
    const [DescriptionValue, setDescriptionValue] = useState("");
    const [Description1Value, setDescription1Value] = useState("");
    const [Description2Value, setDescription2Value] = useState("");
    const [Description3Value, setDescription3Value] = useState("");
    const [Description4Value, setDescription4Value] = useState("");
    const [PriceValue, setPriceValue] = useState(0);
    const [ContinentValue, setContinentValue] = useState(1);

    const [Images, setImages] = useState([]);

    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value);
    };

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value);
    };

    const onDescription1Change = (event) => {
        setDescription1Value(event.currentTarget.value);
    };

    const onDescription2Change = (event) => {
        setDescription2Value(event.currentTarget.value);
    };

    const onDescription3Change = (event) => {
        setDescription3Value(event.currentTarget.value);
    };

    const onDescription4Change = (event) => {
        setDescription4Value(event.currentTarget.value);
    };

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value);
    };

    const onContinentsSelectChange = (event) => {
        setContinentValue(event.currentTarget.value);
    };

    const updateImages = (newImages) => {
        setImages(newImages);
    };
    const onSubmit = (event) => {
        event.preventDefault();

        if (!TitleValue || !DescriptionValue || !PriceValue || !ContinentValue || !Images) {
            return alert("fill all the fields first!");
        }

        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            description: DescriptionValue,
            description1: Description1Value,
            description2: Description2Value,
            description3: Description3Value,
            description4: Description4Value,
            price: PriceValue,
            images: Images,
            continents: ContinentValue,
        };

        Axios.post("/api/product/uploadProduct", variables).then((response) => {
            if (response.data.success) {
                alert("Product Successfully Uploaded");
                props.history.push("/");
            } else {
                alert("Failed to upload Product");
            }
        });
    };

    return (
        <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <Title level={2}> Upload Travel Product</Title>
            </div>

            <Form onSubmit={onSubmit}>
                {/* DropZone */}
                <FileUpload refreshFunction={updateImages} />

                <br />
                <br />
                <label>Title</label>
                <Input onChange={onTitleChange} value={TitleValue} />
                <br />
                <br />
                <label>Description</label>
                <TextArea onChange={onDescriptionChange} value={DescriptionValue} />
                <br />
                <br />
                <label>Description</label>
                <TextArea onChange={onDescription1Change} value={Description1Value} />
                <br />
                <br />
                <label>Description</label>
                <TextArea onChange={onDescription2Change} value={Description2Value} />
                <br />
                <br />
                <label>Description</label>
                <TextArea onChange={onDescription3Change} value={Description3Value} />
                <br />
                <br />
                <label>Description</label>
                <TextArea onChange={onDescription4Change} value={Description4Value} />
                <br />
                <br />
                <label>Price($)</label>
                <Input onChange={onPriceChange} value={PriceValue} type="number" />
                <br />
                <br />
                <select onChange={onContinentsSelectChange} value={ContinentValue}>
                    {Continents.map((item) => (
                        <option key={item.key} value={item.key}>
                            {item.value}{" "}
                        </option>
                    ))}
                </select>
                <br />
                <br />

                <Button onClick={onSubmit}>Submit</Button>
            </Form>
        </div>
    );
}

export default UploadProductPage;
