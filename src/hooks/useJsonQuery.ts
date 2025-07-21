import toast from "react-hot-toast";
import useFile from "../store/useFile";
import useJson from "../store/useJson";

const useJsonQuery = () => {
  const getJson = useJson(state => state.getJson);
  const setContents = useFile(state => state.setContents);

  const transformer = async ({ value }: { value: any }) => {
    return "Type generation not available";
  };

  const updateJson = async (query: string, cb?: () => void) => {
    try {
      const jq = await import("jq-web") as any;
      const res = await jq.promised.json(JSON.parse(getJson()), query);

      setContents({ contents: JSON.stringify(res, null, 2) });
      cb?.();
    } catch (error) {
      console.error(error);
      toast.error("Unable to process the request.");
    }
  };

  const getJsonType = async () => {
    return "Type generation not available";
  };

  return { updateJson, getJsonType };
};

export default useJsonQuery;
