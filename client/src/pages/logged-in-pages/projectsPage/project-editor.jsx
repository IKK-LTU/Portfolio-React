import React, { useState, useContext } from "react";
import { DataContext } from "../../public-pages/context/data-context";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import {
  TextField,
  TextareaAutosize,
  Button,
  InputLabel,
  FormControl,
  Select,
  Typography
} from "@mui/material";
import { updateProjectItem } from "../../../store/projects";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import format from "date-fns/format";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { selectAuth } from "../../../store/auth";
import { ProjectItemSelector } from "../../../store/projects";

const validationSchema = yup.object({
  title: yup
    .string()
    .min(5, "At least 5 symbols")
    .max(32, "Maximum 32 symbols")
    .required("Is required"),
  date: yup.date().required("Is required"),
  editor: yup
    .string()
    .min(5, "At least 5 symbols")
    .max(32, "Maximum 20 symbols")
    .required("Is required"),
  technologies: yup.array().required("Is required"),
  description: yup
    .string()
    .min(100, "At least 10 symbols")
    .required("Is required"),
});

const ProjectEditor = (props) => {
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const { technologies } = useContext(DataContext);
  const [projectDate, setProjectDate] = useState(new Date());
  const { user } = useSelector(selectAuth);
   const {
     state: { id },
  } = useLocation();
  const navigate = useNavigate();
  const projects  = useSelector(ProjectItemSelector(id) ?? {});
  const [technologiesList, setTechnologiesList] = useState([]);
  const names = technologies.map((item) => item.title);


  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        const alreadyAdded = technologiesList.find(
          (x) => x === options[i].value
        );
        if (alreadyAdded) {
          const deletedTech = technologiesList.filter(
            (x) => x !== options[i].value
          );
          setTechnologiesList(deletedTech);
        } else {
          setTechnologiesList([...technologiesList, options[i].value]);
        }
      }
    }
  };
  const onSubmit = () => {
    const projectInfo = {
      ...values,
    };
    dispatch(updateProjectItem({ itemId: projectId, projectInfo }));
    navigate(-1);
  };
  const { values, errors, handleChange, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        title: projects.title,
        date: format(projectDate, "yyyy-MM-dd"),
        category: 1,
        editor: `${user.name} ${user.surname}`,
        technologies: technologiesList,
        images: ["http://localhost:5000/images/BD.gif"],
        description: projects.description,
      },
      validationSchema,
      onSubmit,
    });

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "auto",
        width: "100%",
      }}>
      <Typography textAlign='center' variant='h4' component='h1' sx={{pb:4}}>Update project</Typography>
      <TextField
        label='Project Title'
        variant='outlined'
        name='title'
        value={values.title}
        onChange={handleChange}
        error={Boolean(errors.name)}
        disabled={isSubmitting}
        sx={{ pb: 2 }}
      />

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          sx={{
            mb: 2,
          }}
          label='Project Date'
          value={values.date}
          onChange={(newValue) => {
            setProjectDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <TextField
        label='Developer'
        variant='outlined'
        name='editor'
        value={values.editor}
        onChange={handleChange}
        disabled={isSubmitting}
        sx={{ pb: 2, mt: 2 }}
      />
      <FormControl sx={{ mb: 2 }}>
        <InputLabel shrink htmlFor='select-multiple-native'>
          Technologies
        </InputLabel>
        <Select
          multiple
          native
          value={technologiesList}
          // @ts-ignore Typings are not considering `native`
          onChange={handleChangeMultiple}
          label='Technologies'
          inputProps={{
            id: "select-multiple-native",
          }}>
          {names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select>
      </FormControl>
      <TextareaAutosize
        label='Description'
        name='description'
        value={values.description}
        onChange={handleChange}
        disabled={isSubmitting}
        style={{
          padding: "1rem",
          fontSize: "1rem",
          border: "1px solid rgba(0, 0, 0, 0.87)",
          borderRadius: "2px",
        }}
        placeholder='Describe project'
        minRows={10}
      />
      <Button
        fullWidth
        sx={{
          mt: 3,
          background: "#83cd20",
          color: "white",
          "&:hover": {
            background: "#83cd83",
          },
        }}
        type='submit'>
        Update Project
      </Button>
    </form>
  );
};

export default ProjectEditor;
