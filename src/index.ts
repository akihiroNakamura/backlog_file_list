import createFileList from "./createFileList";
import File from "./types/File";
import * as csv from "csv";

createFileList().then((files: File[]) => {
  csv.stringify(files, { header: true }, (err, output) => {
    console.log(output);
  });
});
