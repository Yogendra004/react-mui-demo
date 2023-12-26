import React, { useState, useEffect } from "react";

import { Stack, Skeleton, Typography, Box, Avatar } from "@mui/material";

export const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Box sx={{ width: "250px" }}>
      {loading ? (
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={256}
          height={144}
        ></Skeleton>
      ) : (
        <img
          src="https://randomuser.me/api/portraits/women/79.jpg"
          alt="skeleton"
          width="100%"
          height={144}
        />
      )}
      <Stack
        direction="row"
        spacing={1}
        sx={{ width: "100%", marginTop: "12px" }}
      >
        {loading ? (
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            animation="wave"
          />
        ) : (
          <Avatar>V</Avatar>
        )}
        <Stack sx={{ width: "80%" }}>
          {loading ? (
            <>
              <Typography variant="body1">
                <Skeleton
                  variant="text"
                  width="100%"
                  animation="wave"
                ></Skeleton>
              </Typography>
              <Typography variant="body2">
                <Skeleton
                  variant="text"
                  width="100%"
                  animation="wave"
                ></Skeleton>
              </Typography>
            </>
          ) : (
            <Typography variant="body1">React Mui Tutorial</Typography>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};
