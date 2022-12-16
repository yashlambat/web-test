import React, { useState, useEffect } from 'react';

function SpeedTest() {
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    fetch('https://cloudplay.jiogames.com/static/media/JioGamesCloudWhiteBeta.3da86b03fa979be909d0.png')
      .then((response) => response.blob())
      .then((blob) => {
        const endTime = performance.now();
        const fileSize = blob.size;
        const duration = (endTime - startTime) / 1000; // divide by 1000 to get the time in seconds
        const speed = (fileSize / duration) / 1024 / 1024; // divide by 1024 to get the size in megabytes, then divide by duration to get the speed in megabytes per second
        setDownloadSpeed(speed);
      });
  }, []);

  useEffect(() => {
    const endTime = performance.now();
    fetch('https://cloudplay.jiogames.com/static/media/JioGamesCloudWhiteBeta.3da86b03fa979be909d0.png')
      .then((response) => response.blob())
      .then((blob) => {
        const startTime = performance.now();
        const fileSize = blob.size;
        const duration = (startTime - endTime) / 1000; // divide by 1000 to get the time in seconds
        const speed = (fileSize / duration) / 1024 / 1024; // divide by 1024 to get the size in megabytes, then divide by duration to get the speed in megabytes per second
        setUploadSpeed(speed);
      });
  }, []);

  return (
    <div>
      <h1>Your download speed is: {downloadSpeed} Mbps</h1>
      <h1>Your Upload speed is: {uploadSpeed} Mbps </h1>
    </div>

  );
};

export default SpeedTest;




