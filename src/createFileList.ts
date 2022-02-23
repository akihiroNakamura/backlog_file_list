import { API_KEY, API_URL, PROJECT } from "./setting/setting";
import File from "./types/File";
import requestGet from "./apiClient";

async function createFileList(path: string = "/"): Promise<File[]> {
  const params = { apiKey: API_KEY };
  const { data } = await requestGet(API_URL + path, params);

  let files: File[] = [];
  await Promise.all(
    data.map(async (obj: any) => {
      const file: File = {
        type: obj.type,
        dir: obj.dir,
        name: obj.name,
        createUserName: obj.createdUser.name,
        size: obj.size,
      };

      if (file.type === "file") {
        files.push(file);
        return;
      }
      const subFiles: File[] = await createFileList(file.dir + file.name);
      files = [...files, ...subFiles];
    })
  );
  return files;
}

export default createFileList;
