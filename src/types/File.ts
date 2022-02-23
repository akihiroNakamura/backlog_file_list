type fileType = "file" | "directory";

type File = {
  type: fileType;
  dir: string;
  name: string;
  createUserName: string;
  size: number;
};

export default File;
