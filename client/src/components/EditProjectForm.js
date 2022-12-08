import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { UPDATE_PROJECT } from "../mutations/projectMutations";
import { GET_PROJECT } from "../queries/projectQueries";

const EditProjectForm = ({ project }) => {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState("");
  const id = project.id;
  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id: id, name, description, status },
    refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || description === "" || status === "") {
      return alert("Please fill all fields");
    }
    updateProject(name, description, status, project.id);
  };

  return (
    <>
      <div className="mt-5">
        <h3>Update Project Details</h3>
        <form action="">
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Description
            </label>
            <textarea
              type="text-area"
              className="form-control"
              id="description"
              aria-describedby="descriptionHelp"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Status
            </label>
            <select
              value={status}
              id="status"
              className="form-select"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="new">Not Started</option>
              <option value="progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default EditProjectForm;
