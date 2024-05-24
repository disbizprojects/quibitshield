import { useState, useEffect } from "react";

function useFormattedLocalTime(utcDateString: string): string {
  const [localTime, setLocalTime] = useState<string>("");

  useEffect(() => {
    function formatToLocalTime(utcDateString: string): string {
      const utcDate = new Date(utcDateString);
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      };
      return utcDate.toLocaleString(undefined, options);
    }

    if (utcDateString) {
      const formattedTime = formatToLocalTime(utcDateString);
      setLocalTime(formattedTime);
    }
  }, [utcDateString]);

  return localTime;
}

export default useFormattedLocalTime;
