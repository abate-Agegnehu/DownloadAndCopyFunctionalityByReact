import React, { useRef, useState } from "react";
import { FaCopy, FaDownload } from "react-icons/fa";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import videoFile from "./assets/video.mp4"; // Adjust the path as needed
import { Typography } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CopyTextComponent = () => {
  const textRef = useRef(null);
  const videoRef = useRef(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleCopy = () => {
    const text = textRef.current.innerText;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setSnackbarMessage("Text copied to clipboard");
        setSnackbarOpen(true);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };



  const handleDownloadVideo = () => {
    const videoSrc = videoFile;
    const a = document.createElement("a");
    a.href = videoSrc;
    a.download = "video.mp4";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setSnackbarMessage("Video downloaded");
    setSnackbarOpen(true);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          ref={textRef}
          style={{
            marginBottom: "20px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          This is the text to copy.
          <IconButton
            onClick={handleCopy}
            style={{ cursor: "pointer", color: "#1976d2", marginRight: "10px" }}
            title="Copy"
          >
            <FaCopy size={20} />
          </IconButton>
        </div>
      </div>
      <video
        ref={videoRef}
        controls
        style={{ marginBottom: "20px", maxWidth: "100%" }}
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <IconButton
        onClick={handleDownloadVideo}
        style={{ cursor: "pointer", color: "#1976d2" }}
        title="Download Video"
      >
        <Typography style={{ marginRight: "10px" }}> Download</Typography>
        <FaDownload size={20} />
      </IconButton>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CopyTextComponent;
