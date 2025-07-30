import React from "react";
import "./Button.scss";

export default function Button({
                                 text,
                                 className = "",
                                 href = "#",
                                 newTab = false,
                                 download,              // e.g. "Resume.pdf"
                               }) {
  return (
    <a
      href={href}
      className={`main-button ${className}`}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download } : {})}
    >
      {text}
    </a>
  );
}
