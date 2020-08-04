import React, { Component } from 'react'
import { Typography, Button, Form, Input } from 'antd';
import axios from 'axios';
// import FileUpload from '../../utils/FileUpload';

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

export class UploadProductPage extends Component {
           state = {
               title: "",
               description: "",
               link: "",
               language: "",
               skill_level: "",
               participation: "",
               tags: "",
               // continents: 1,
               // images: [],
               // price: 0
           };

           handleChangeTitle = (event) => {
               this.setState({ title: event.currentTarget.value });
           };

           handleChangeDescription = (event) => {
               // console.log(event.currentTarget.value)
               this.setState({ description: event.currentTarget.value });
           };

           handleChangeLanguage = (event) => {
               this.setState({ language: event.currentTarget.value });
           };

           handleChangeSkillLevel = (event) => {
               this.setState({ skill_level: event.currentTarget.value });
           };

           handleChangeParticipation = (event) => {
               this.setState({ participation: event.currentTarget.value });
           };

           handleChangeTags = (event) => {
               this.setState({ tags: event.currentTarget.value });
           };

           // handleChangePrice = (event) => {
           //     this.setState({ price: parseInt(event.currentTarget.value, 10) })
           // }

           // handleChangeContinents = (event) => {
           //     this.setState({ continents: event.currentTarget.value })
           // }

           onSubmit = (event) => {
               event.preventDefault();

               if (this.props.user.userData && !this.props.user.userData.isAuth) {
                   return alert("Please Log in First");
               }

               if (!this.state.title || !this.state.description || !this.state.link || !this.state.language || !this.state.skill_level || !this.state.participation || !this.state.tags) {
                   return alert("Please first fill all the fields");
               }

               const variables = {
                   writer: this.props.user.userData._id,
                   title: this.state.title,
                   description: this.state.description,
                   link: this.state.link,
                   language: this.state.language,
                   skill_level: this.state.skill_level,
                   participation: this.state.participation,
                   tags: this.state.tags,
                   //    images: this.state.images,
                   //    continents: this.state.continents,
                   //    price: this.state.price,
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

           //    updateFiles = (newImages) => {
           //        this.setState({ images: newImages });
           //    };

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
                           <TextArea onChange={this.handleChangeDescription} value={this.state.description} />
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
                           <label>Skill Level</label>
                           <TextArea onChange={this.handleChangeSkillLevel} value={this.state.skill_level} />
                           <br />
                           <br />
                           <label>Participation</label>
                           <TextArea onChange={this.handleChangeParticipation} value={this.state.participation} />
                           <br />
                           <br />
                           <label>Tags</label>
                           <TextArea onChange={this.handleChangeTags} value={this.state.tags} />
                           <br />
                           <br />
                           {/* <label>Price($)</label>
                           <Input type="number" onChange={this.handleChangePrice} value={this.state.price} />
                           <br />
                           <br />
                           <select onChange={this.handleChangeContinents}>
                               {Continents.map((item) => (
                                   <option key={item.key} value={item.key}>
                                       {item.value}
                                   </option>
                               ))}
                           </select>
                           <br />
                           <br /> */}

                           <Button type="primary" size="large" onClick={this.onSubmit}>
                               Submit
                           </Button>
                       </Form>
                   </div>
               );
           }
       }

export default UploadProductPage
