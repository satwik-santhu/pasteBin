import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewPaste() {
  const { pasteId } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/paste/${pasteId}`).then((response) => {
      setContent(response.data.content);
    });
  }, [pasteId]);

  return (
    <div>
      <h2>Paste Content</h2>
      <pre>{content}</pre>
    </div>
  );
}

export default ViewPaste;
