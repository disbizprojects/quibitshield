import { useState } from "react";
import axios from "axios";
import { Session } from "next-auth";
import useIpAddress from "./useIpAddress";
import useDeviceInfo from "./osFinder";
import { useSession } from "next-auth/react";

const useUpdateUserStatus = () => {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { ipAddress } = useIpAddress();
  const deviceInfo = useDeviceInfo();

  const updateUserStatus = async (): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/loginStatus", {
        id: session?.user.id,
        name: session.user.name,
        ipAddress: ipAddress,
        os: deviceInfo.os,
        device: deviceInfo.device,
      });
      console.log("User status updated successfully:", response.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error(
          "Error updating user status:",
          error.response.data.message
        );
        setError(error.response.data.message);
      } else {
        console.error("Unexpected error:", error);
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    updateUserStatus,
    loading,
    error,
  };
};

export default useUpdateUserStatus;
