"use client";
import { useEffect, useState } from "react";

const Page = () => {
const [time, setTime] = useState(0);
const timer = () => {
setTime((prev) => (prev === 0 ? 0 : prev + 1));
}

const sec = time % 60;
const minute = Math.floor(time / 60);
const formatTimer = (time => {
if (time < 9) return `0${time}`;
return time;
})
useEffect(() => {
  const interval = setInterval(timer, 1000);
  return () => clearInterval(interval);
}, []);
return (
  <div>
    <div> minute: {minute}:{sec}</div>
  </div>
)
}

export default Page;