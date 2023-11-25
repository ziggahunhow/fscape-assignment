import { Box, Typography } from "@mui/material";
import { ProgressBox } from "../ProgressBox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Section } from "../Section";
import { colors } from "../../utils/theme";
import { Divider } from "../Divider";
import { useContractRead } from "wagmi";
import VoteABI from "../../abi/Voting.json";
import { VotingAddress } from "../../utils/web3";
import { formatNumber } from "../../utils/utils";

const votes = [
  { key: "quorum", val: "Reached", checked: true },
  { key: "current votes", desc: "Required 000K", val: "000K" },
  { key: "Differential", val: "Reached", checked: true },
  { key: "Current Differential", desc: "Required 000K", val: "00.00K" },
  { key: "Total Voting Power", val: "00,000,000" },
];

export const VotingResult = () => {
  const { data: supports } = useContractRead({
    abi: VoteABI,
    address: VotingAddress,
    functionName: "supporting",
    watch: true,
  });

  const { data: rejects } = useContractRead({
    abi: VoteABI,
    address: VotingAddress,
    functionName: "rejects",
    watch: true,
  });

  const total =
    (typeof supports == "bigint" &&
      typeof rejects == "bigint" &&
      supports + rejects) ||
    BigInt(1);

  return (
    <Section>
      <Box>
        <Typography variant="h2">Voting results</Typography>
      </Box>
      <Divider />
      <Box display="flex">
        <Box sx={{ flex: 1 }}>
          <Box pr={4}>
            {[
              {
                key: "support",
                color: "primary.main",
                val: supports,
              },
              {
                key: "reject",
                color: "secondary.main",
                val: rejects,
              },
            ].map((action) => (
              <ProgressBox
                key={action.key}
                action={action.key}
                percentage={
                  action.val
                    ? Number(((action.val as bigint) * BigInt(100)) / total)
                    : 0
                }
                description={
                  action.val ? formatNumber(action.val.toString()) : "0"
                }
                color={action.color}
              />
            ))}
          </Box>
          <Typography variant="body1" sx={{ textDecoration: "underline" }}>
            View all votes
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          {votes.map((vote) => {
            return (
              <Box key={vote.key} display="flex" my={1.2}>
                <Box display="flex" sx={{ flex: 1 }}>
                  <Typography
                    variant="body1"
                    fontWeight={100}
                    sx={{ textTransform: "capitalize", mr: "4px" }}
                  >
                    {vote.key}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontWeight={100}
                    sx={{ color: colors.lightGray, opacity: 0.5 }}
                  >
                    {vote.desc}
                  </Typography>
                </Box>
                <Box display="flex" sx={{ flex: 1 }} alignItems="center">
                  <Typography variant="body1" sx={{ fontWeight: 600 }} mr="2px">
                    {vote.val}
                  </Typography>
                  {vote.checked && (
                    <CheckCircleIcon fontSize="small" color="primary" />
                  )}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Section>
  );
};
