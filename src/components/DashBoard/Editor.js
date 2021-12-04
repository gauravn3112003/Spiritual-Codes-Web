import React, { useState, useContext } from "react";
import ReactQuill from "react-quill";
import "./Styling/CreatePost.css";
import "react-quill/dist/quill.snow.css";
import contactContext from "../../Context/Contact/contactContext";

function Editor() {
  const context = useContext(contactContext);
  const { addBlogPost } = context;
  const handleChange = (e) => {
    setPost({ mainData: e });
  };
  const [post, setPost] = useState({
    title: "",
    image: "",
    tag: "",
    author: "",
    description: "",
    datee: "",
    mainData: "",
  });
  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { title, image, tag, author, description, datee, mainData } = post;
    addBlogPost(title, image, tag, author, description, datee, mainData);
  };
  return (
    <>
      <form className="form-post">
        <div className="head-post">
          <div className="input-post">
            Title:
            <input
              className="input-post-input"
              type="text"
              name="title"
              id=""
              onChange={onChange}
              value={post.title}
            />
          </div>
          <div className="input-post">
            Description :
            <input
              className="input-post-input"
              type="text"
              name="description"
              id=""
              onChange={onChange}
              value={post.description}
            />
          </div>
          <div className="flex">
            <div className="input-post  ">
              Tag :
              <input
                className="input-post-input"
                type="text"
                name="tag"
                id=""
                onChange={onChange}
                value={post.tag}
              />
            </div>
            <div className="input-post  ">
              Thumbnail :
              <input
                className="input-post-input"
                type="text"
                name="image"
                id=""
                onChange={onChange}
                value={post.thumbnail}
              />
            </div>
            <div className="input-post  ">
              Date :
              <input
                className="input-post-input"
                type="date"
                name="datee"
                id=""
                onChange={onChange}
                value={post.date}
              />
            </div>
            <div className="input-post  ">
              Author Name :
              <input
                className="input-post-input"
                type="text"
                name="author"
                id=""
                onChange={onChange}
                value={post.author}
              />
            </div>
          </div>
        </div>
        <ReactQuill
          className="shadow-sm"
          theme="snow"
          style={{
            height: "auto",
            marginTop: "1rem",
            display: "flex",
            flexDirection: "column",
          }}
          value={post.mainData}
          onChange={handleChange}
          name="mainData"
          modules={{
            toolbar: [
              [{ header: "1" }, { header: "2" }, { font: [] }],
              [{ size: [] }],
              ["bold", "italic", "underline", "strike", "blockquote"],
              [{ align: [] }],
              [{ color: [] }, { background: [] }],
              [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
              ],
              ["link", "video", "image", "code-block"],
              ["clean"],
            ],
          }}
          formats={[
            "header",
            "font",
            "size",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "color",
            "background",
            "list",
            "bullet",
            "indent",
            "link",
            "video",
            "image",
            "code-block",
            "align",
          ]}
        />
        <div className="submit">
          <button onClick={postData}>Create Post</button>
        </div>
        <div>{post.mainData}</div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: post.mainData }} />
        </div>
      </form>
    </>
  );
}
export default Editor;
