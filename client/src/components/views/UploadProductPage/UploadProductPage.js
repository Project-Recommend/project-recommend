import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import FileUpload from '../../utils/FileUpload'
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

// const Continents = [
//     { key: 1, value: "Africa" },
//     { key: 2, value: "Europe" },
//     { key: 3, value: "Asia" },
//     { key: 4, value: "North America" },
//     { key: 5, value: "South America" },
//     { key: 6, value: "Australia" },
//     { key: 7, value: "Antarctica" }
// ]

function UploadProductPage(props) {

    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [LinkValue, setLinkValue] = useState("")
    const [LanguageValue, setLanguageValue] = useState("")
    const [SkillLevelValue, setSkillLevelValue] = useState("")
    const [ParticipationValue, setParticipationValue] = useState("")
    const [TagsValue, setTagsValue] = useState("")
    // const [PriceValue, setPriceValue] = useState(0)
    // const [ContinentValue, setContinentValue] = useState(1)

    // const [Images, setImages] = useState([])


    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onLinkChange = (event) => {
        setLinkValue(event.currentTarget.value);
    }

    const onLanguageChange = (event) => {
        setLanguageValue(event.currentTarget.value);
    }

    const onSkillLevelChange = (event) => {
        setSkillLevelValue(event.currentTarget.value);
    }

    const onParticipationChange = (event) => {
        setParticipationValue(event.currentTarget.value);
    }

    const onTagsChange = (event) => {
        setTagsValue(event.currentTarget.value);
    }

    // const onPriceChange = (event) => {
    //     setPriceValue(event.currentTarget.value)
    // }

    // const onContinentsSelectChange = (event) => {
    //     setContinentValue(event.currentTarget.value)
    // }

    // const updateImages = (newImages) => {
    //     setImages(newImages)
    // }
    const onSubmit = (event) => {
        event.preventDefault();


        if (!TitleValue || !DescriptionValue || !LinkValue ||
            !LanguageValue || !SkillLevelValue || !ParticipationValue || !TagsValue) {
            return alert('fill all the fields first!')
        }

        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            description: DescriptionValue,
            link: LinkValue,
            language: LanguageValue,
            skill_level: SkillLevelValue,
            participation: ParticipationValue,
            tags: TagsValue,
            // price: PriceValue,
            // images: Images,
            // continents: ContinentValue,
        }

        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Product Successfully Uploaded')
                    props.history.push('/')
                } else {
                    alert('Failed to upload Product')
                }
            })

    }

    return (
        <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <Title level={2}> Upload Project</Title>
            </div>

            <Form onSubmit={onSubmit}>
                {/* DropZone */}
                {/* <FileUpload refreshFunction={updateImages} /> */}

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
                <label>Link</label>
                <Input onChange={onLinkChange} value={LinkValue} />
                <br />
                <br />
                <label>Language</label>
                <Input onChange={onLanguageChange} value={LanguageValue} />
                <br />
                <br />
                <label>Skill Level</label>
                <Input onChange={onSkillLevelChange} value={SkillLevelValue} />
                <br />
                <br />
                <label>Participation</label>
                <Input onChange={onParticipationChange} value={ParticipationValue} />
                <br />
                <br />
                <label>Tags</label>
                <Input onChange={onTagsChange} value={TagsValue} />
                <br />
                <br />
                {/* <label>Price($)</label>
                <Input
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />
                <br /><br />
                <select onChange={onContinentsSelectChange} value={ContinentValue}>
                    {Continents.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
                </select>
                <br />
                <br /> */}

                <Button onClick={onSubmit}>Submit</Button>
            </Form>
        </div>
    );
}

export default UploadProductPage
