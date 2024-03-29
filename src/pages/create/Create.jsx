import "./Create.css";
import { useState, useEffect } from "react";
import Select from "react-select";
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [projectUsers, setProjectUsers] = useState([]);
  const [userss, setUserss] = useState([]);
  const [formError, setFormError] = useState(null);

  const { user } = useAuthContext();

  const { addDocument, response } = useFirestore("projects");
  const navigate = useNavigate();

  const categories = [
    { value: "desktop", label: "Desktop App" },
    { value: "web", label: "Web App" },
    { value: "mobile", label: "Mobile App" },
  ];

  const { documents } = useCollection("users");
  //console.log(documents)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    if (!category) {
      setFormError("Please select a category");
      return;
    }

    if (projectUsers.length < 1) {
      setFormError("Please select a user");
      return;
    }

    const creator = {
      usersName: user.displayName,
      fotoUrl: user.photoURL,
      id: user.uid,
    };

    const projectUsersList = projectUsers.map((u) => {
      return {
        userName: u.value.usersName,
        fotoUrl: u.value.fotoUrl,
        id: u.value.id,
      };
    });

    const newProject = {
      isim: name,
      explanation: details,
      kategori: category.value,
      finishDate: new Date(date),
      comments: [],
      creator,
      projectUsersList,
    };

    await addDocument(newProject);

    if (!response.error) {
      navigate("/");
    }
  };

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.usersName };
      });

      setUserss(options);
    }
  }, [documents]);

  return (
    <div className="create-form">
      <h2 className="page-title">Create New Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project Name:</span>
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>

        <label>
          <span>Project Description:</span>
          <textarea
            required
            type="text"
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </label>

        <label>
          <span>End Date:</span>
          <input
            required
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </label>

        <label>
          <span>Category:</span>
          <Select
            placeholder="Select"
            options={categories}
            onChange={(option) => setCategory(option)}
          />
        </label>

        <label>
          <span>Project Users:</span>
          <Select
            placeholder="Select Project User"
            options={userss}
            onChange={(option) => setProjectUsers(option)}
            isMulti
          />
        </label>

        <button className="btn">Add Project</button>
        {formError && <div className="error">{formError}</div>}
      </form>
    </div>
  );
}
