"use client";

import { useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "./quill-overrides.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function RichTextEditor({
  value,
  onChange,
  placeholder = "Write your content here...",
  className = "",
}) {
  const quillRef = useRef(null);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }, { size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
          [{ script: "sub" }, { script: "super" }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          ["link", "image", "video"],
          ["clean"],
        ],
      },
      clipboard: { matchVisual: false },
    }),
    []
  );

  const formats = [
    "header", "font", "size",
    "bold", "italic", "underline", "strike", "blockquote",
    "list", "bullet", "indent", "script",
    "color", "background", "align",
    "link", "image", "video",
  ];

  return (
    <div className={`rich-text-editor-wrapper rounded-lg overflow-hidden border border-border bg-background ${className}`}>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        className="bg-transparent [&_.ql-toolbar]:!border-0 [&_.ql-container]:!border-0"
        style={{ minHeight: "400px" }}
      />
    </div>
  );
}
