export const toolbar_options = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],

  ["bold", "italic", "underline", "strike"],
  [{ color: [] }, { background: [] }], // toggled buttons
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  [{ list: "ordered" }, { list: "bullet" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction
  // dropdown with defaults from theme

  ["clean"], // remove formatting button
];
