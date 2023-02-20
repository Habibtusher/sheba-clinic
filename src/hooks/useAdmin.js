
import { useEffect } from "react";
import { useState } from "react";
import { IS_ADMIN } from "../api/ApiConstant";
import { getData } from "../api/CommonService";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading,setIsAdminLogin] = useState(true)
  const getIsAdmin = async () => {
    const res = await getData(`${IS_ADMIN}/${email}`);
  
    setIsAdmin(res.data?.isAdmin)
    setIsAdminLogin(false)
  };
   
  useEffect(() => {
    if (email) {
        getIsAdmin();
    }
  }, [email]);
  return[isAdmin,isAdminLoading]
};

export default useAdmin;