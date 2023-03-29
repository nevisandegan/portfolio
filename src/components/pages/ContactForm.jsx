import { useFormik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Typography,
  CardContent,
  TextField,
  InputAdornment,
  CardActions,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  SubjectRounded,
  EmailRounded,
  Face6Rounded,
} from "@mui/icons-material";
import { contactValidationSchema } from "../../validations/contactValidation";

const ContactForm = () => {
  const contactInputNames = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
    recaptcha: "",
  };
  const formik = useFormik({
    initialValues: contactInputNames,
    onSubmit: (values) => {
      console.log("form values : ", values);
    },
    validationSchema: contactValidationSchema,
  });
  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <CardContent>
        <Grid contaienr>
          <Grid xs={12} sx={{ direction: "ltr" }}>
            <Grid container spacing={2}>
              <Grid xs={12} md={6}>
                <TextField
                  sx={{
                    "& label.Mui-focused": {
                      color: "#2D3032",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#2D3032",
                    },
                    "& .MuiInputLabel-root": {
                      color: "#2D3032",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#2D3032",
                      },
                      "&:hover fieldset": {
                        borderColor: "#7D7F80",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#7D7F80",
                      },
                    },
                  }}
                  FormHelperTextProps={{
                    style: { fontSize: 12 },
                  }}
                  helperText={
                    formik.touched.fullname ? formik.errors.fullname : null
                  }
                  error={Boolean(
                    formik.touched.fullname && formik.errors.fullname
                  )}
                  value={formik.values?.fullname}
                  onChange={formik.handleChange}
                  fullWidth
                  size="small"
                  label="نام و نام خوانوادگی"
                  name="fullname"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Face6Rounded color="secondary" />
                      </InputAdornment>
                    ),
                    style: { color: "#2D3032", fontSize: 14 },
                  }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  sx={{
                    "& label.Mui-focused": {
                      color: "#2D3032",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#2D3032",
                    },
                    "& .MuiInputLabel-root": {
                      color: "#2D3032",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#2D3032",
                      },
                      "&:hover fieldset": {
                        borderColor: "#7D7F80",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#7D7F80",
                      },
                    },
                  }}
                  size="small"
                  label="آدرس ایمیل"
                  name="email"
                  helperText={formik.touched.email ? formik.errors.email : null}
                  FormHelperTextProps={{
                    style: { fontSize: 12 },
                  }}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  value={formik.values?.email}
                  onChange={formik.handleChange}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailRounded color="secondary" />
                      </InputAdornment>
                    ),
                    style: { color: "#2D3032", fontSize: 14 },
                  }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                />
              </Grid>
              <Grid xs={12} md={12}>
                <TextField
                  sx={{
                    "& label.Mui-focused": {
                      color: "#2D3032",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#2D3032",
                    },
                    "& .MuiInputLabel-root": {
                      color: "#2D3032",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#2D3032",
                      },
                      "&:hover fieldset": {
                        borderColor: "#7D7F80",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#7D7F80",
                      },
                    },
                  }}
                  helperText={
                    formik.touched.subject ? formik.errors.subject : null
                  }
                  FormHelperTextProps={{
                    style: { fontSize: 12 },
                  }}
                  error={Boolean(
                    formik.touched.subject && formik.errors.subject
                  )}
                  value={formik.values?.subject}
                  onChange={formik.handleChange}
                  className="field"
                  fullWidth
                  size="small"
                  label="عنوان"
                  name="subject"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SubjectRounded color="secondary" />
                      </InputAdornment>
                    ),
                    style: { color: "#2D3032", fontSize: 14 },
                  }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                />
              </Grid>
              <Grid xs={12} md={12}>
                <TextField
                  sx={{
                    "& label.Mui-focused": {
                      color: "#2D3032",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#2D3032",
                    },
                    "& .MuiInputLabel-root": {
                      color: "#2D3032",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#2D3032",
                      },
                      "&:hover fieldset": {
                        borderColor: "#7D7F80",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#7D7F80",
                      },
                    },
                  }}
                  helperText={
                    formik.touched.message ? formik.errors.message : null
                  }
                  FormHelperTextProps={{
                    style: { fontSize: 12 },
                  }}
                  error={Boolean(
                    formik.touched.message && formik.errors.message
                  )}
                  value={formik.values?.message}
                  onChange={formik.handleChange}
                  fullWidth
                  multiline
                  rows={6}
                  size="small"
                  label="متن پیام"
                  name="message"
                  variant="outlined"
                  InputProps={{
                    style: { color: "#2D3032", fontSize: 14 },
                  }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ alignItems: "end", flexDirection: "column" }}>
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTHCHA_SITE_KEY}
          size="normal"
          hl="fa"
          onChange={(value) => {
            formik.setFieldValue("recaptcha", value);
          }}
        />
        {formik.errors.recaptcha && formik.touched.recaptcha && (
          <Typography sx={{ fontSize: 12, color: "#f44336" }}>
            {formik.errors.recaptcha}
          </Typography>
        )}
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          sx={{ mt: 2, fontSize: "1.2rem" }}
          className="submit"
        >
          ارسال کن
        </Button>
      </CardActions>
    </form>
  );
};

export default ContactForm;
