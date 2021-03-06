import React, { useState, useContext } from "react";
import { DataContext } from "../../public-pages/context/data-context";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { createProjectItem } from "../../../store/projects";
import * as yup from "yup";
import {
  TextField,
  TextareaAutosize,
  Button,
  InputLabel,
  FormControl,
  Select,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import format from "date-fns/format";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { selectAuth } from "../../../store/auth";

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

const ProjectForm = ({open}) => {
  const { technologies } = useContext(DataContext);
  const dispatch = useDispatch();
  const [projectDate, setProjectDate] = useState(new Date());
  const { user } = useSelector(selectAuth);
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
    dispatch(createProjectItem({ projectInfo }));
    window.location.reload(true);
  };
  const { values, errors, handleChange, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        title: "",
        date: format(projectDate, "yyyy-MM-dd"),
        category: 1,
        editor: `${user.name} ${user.surname}`,
        technologies: technologiesList,
        images: ["http://localhost:5000/images/BD.gif"],
        description: "",
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
      }}>
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
      <Button fullWidth sx={{ mt: 3 }} type='submit'>
        Create Project
      </Button>
    </form>
  );
};

export default ProjectForm;
