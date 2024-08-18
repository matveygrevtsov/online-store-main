import { useAppSelector } from "../store";
import { AuthorizedUserData } from "../store/userSlice";

export const useUserData = () => {
  return useAppSelector((store) => {
    const data = store.user as {
      userData: AuthorizedUserData;
    };
    return data.userData;
  });
};
