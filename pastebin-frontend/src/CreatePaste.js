import { useState } from "react";
import axios from "axios";

function CreatePaste() {
  const [content, setContent] = useState("");
  const [pasteUrl, setPasteUrl] = useState("");

  const createPaste = async () => {
    const response = await axios.post("http://127.0.0.1:5000/paste", { content });
    setPasteUrl(`https://pastebin-o5fpa2agc-satwiks-projects-992afff7.vercel.app/paste/${response.data.paste_id}`);
  };

  return (
    <div>
      <h2>Create a New Paste</h2>
      <textarea  rows="5" onChange={(e) => setContent(e.target.value)}></textarea>
      <button onClick={createPaste}>Submit</button>
      {pasteUrl && <p>Share this URL: <a href={pasteUrl}>{pasteUrl}</a></p>}
    </div>
  );
}

export default CreatePaste;
