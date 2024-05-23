// hooks/useIpAddress.ts
import { useState, useEffect } from "react";
import axios from "axios";

const useIpAddress = () => {
  const [ipAddress, setIpAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json");
        setIpAddress(response.data.ip);
      } catch (err) {
        setError("Error fetching the IP address");
        console.error("Error fetching the IP address:", err);
      }
    };

    fetchIpAddress();
  }, []);

  return { ipAddress, error };
};

export default useIpAddress;
