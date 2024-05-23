import { useState, useEffect } from "react";
import UAParser from "ua-parser-js";

interface DeviceInfo {
  os: string;
  device: string;
}

const useDeviceInfo = (): DeviceInfo => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    os: "",
    device: "",
  });

  useEffect(() => {
    const parser = new UAParser();
    const result = parser.getResult();
    setDeviceInfo({
      os: `${result.os.name} ${result.os.version}`,
      device: result.device.model
        ? `${result.device.vendor} ${result.device.model}`
        : "Unknown Device",
    });
  }, []);

  return deviceInfo;
};

export default useDeviceInfo;
