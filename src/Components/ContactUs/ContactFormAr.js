import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import emailjs from "emailjs-com";
import { Box, Button, TextField } from "@mui/material";
import { toast } from "react-toastify";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// eslint-disable-next-line
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

export default function ContactFormAr() {
  const { t } = useTranslation();
  const isArabic = i18n.language === "ar";

  const theme = (outerTheme) =>
    createTheme({
      direction: "rtl",
      palette: {
        mode: outerTheme.palette.mode,
      },
    });

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validate = () => {
    let temp = {};
    temp.name = formData.name ? "" : t("nameRequired");
    temp.email = formData.email
      ? /\S+@\S+\.\S+/.test(formData.email)
        ? ""
        : t("emailInvalid")
      : t("emailRequired");
    temp.subject = formData.subject ? "" : t("subjectRequired");
    temp.message = formData.message ? "" : t("messageRequired");
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs
        .send(
          "service_godiw0g",
          "template_4sujlds",
          formData,
          "BC7_FBA8UtMN8t4rP"
        )
        .then(
          (result) => {
            toast.success(t("messageSentSuccess"), {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setFormData({ name: "", email: "", subject: "", message: "" });
          },
          (error) => {
            toast.error(t("messageSendError"), {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        );
    } else {
      toast.error(t("pleaseFillRequiredFields"), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <div dir="rtl">
            <TextField
              fullWidth
              label={t("name")}
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
              error={!!errors.name}
              helperText={errors.name}
              InputLabelProps={{
                style: {
                  color: errors.name ? "#d32f2f" : "",
                  textAlign: isArabic ? "right" : "left",
                },
              }}
              InputProps={{
                sx: {
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: errors.name ? "#d32f2f" : "",
                    },
                    "&:hover fieldset": {
                      borderColor: errors.name ? "#d32f2f" : "",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: errors.name ? "#d32f2f" : "",
                    },
                    textAlign: isArabic ? "right" : "left",
                  },
                },
              }}
            />

            <TextField
              fullWidth
              label={t("email")}
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
              error={!!errors.email}
              helperText={errors.email}
              InputLabelProps={{
                style: {
                  color: errors.email ? "#d32f2f" : "",
                  textAlign: isArabic ? "right" : "left",
                },
              }}
              InputProps={{
                sx: {
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: errors.email ? "#d32f2f" : "",
                    },
                    "&:hover fieldset": {
                      borderColor: errors.email ? "#d32f2f" : "",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: errors.email ? "#d32f2f" : "",
                    },
                    textAlign: isArabic ? "right" : "left",
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label={t("subject")}
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              margin="normal"
              required
              error={!!errors.subject}
              helperText={errors.subject}
              InputLabelProps={{
                style: {
                  color: errors.subject ? "#d32f2f" : "",
                  textAlign: isArabic ? "right" : "left",
                },
              }}
              InputProps={{
                sx: {
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: errors.subject ? "#d32f2f" : "",
                    },
                    "&:hover fieldset": {
                      borderColor: errors.subject ? "#d32f2f" : "",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: errors.subject ? "#d32f2f" : "",
                    },
                    textAlign: isArabic ? "right" : "left",
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label={t("message")}
              name="message"
              value={formData.message}
              onChange={handleChange}
              margin="normal"
              multiline
              rows={4}
              required
              error={!!errors.message}
              helperText={errors.message}
              InputLabelProps={{
                style: {
                  color: errors.message ? "#d32f2f" : "",
                  textAlign: isArabic ? "right" : "left",
                },
              }}
              InputProps={{
                sx: {
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: errors.message ? "#d32f2f" : "",
                    },
                    "&:hover fieldset": {
                      borderColor: errors.message ? "#d32f2f" : "",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: errors.message ? "#d32f2f" : "",
                    },
                    textAlign: isArabic ? "right" : "left",
                  },
                },
              }}
            />
          </div>
        </ThemeProvider>
      </CacheProvider>
      <Button
        size="large"
        type="submit"
        variant="contained"
        fullWidth
        sx={{ marginTop: "20px" }}
      >
        {t("submit")}
      </Button>
    </Box>
  );
}
