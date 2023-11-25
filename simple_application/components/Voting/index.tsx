import { Box, Typography } from "@mui/material";
import { Button } from "../Button";
import { Section } from "../Section";
import { useAccount, useContractRead, useContractWrite } from "wagmi";
import VoteABI from "../../abi/Voting.json";
import { VotingAddress } from "../../utils/web3";
import { formatNumber } from "../../utils/utils";

export const Voting = () => {
  const { address } = useAccount();
  const { data: votingPower } = useContractRead({
    abi: VoteABI,
    address: VotingAddress,
    functionName: "getVotingPower",
    args: [address],
    watch: true,
  });

  const { write: support, isLoading: supportLoading } = useContractWrite({
    abi: VoteABI,
    address: VotingAddress,
    functionName: "support",
  });

  const { write: reject, isLoading: rejectLoading } = useContractWrite({
    abi: VoteABI,
    address: VotingAddress,
    functionName: "reject",
  });

  return (
    <Section>
      <Box display="flex" alignItems="center">
        <Box>
          <Typography variant="h2">Your Voting</Typography>
        </Box>
        <Box ml={"auto"} display="flex">
          <Box display="flex" flexDirection="column" mr={3}>
            <Typography variant="body1">Voting Power</Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 700, fontSize: "14px" }}
            >
              {formatNumber(votingPower?.toString() || "0")} VOTE
            </Typography>
          </Box>
          <Button
            onClick={support}
            loading={supportLoading}
            text="Support"
            bgColor="primary.main"
            color="white"
          />
          <Button
            onClick={reject}
            loading={rejectLoading}
            text="Reject"
            bgColor="secondary.main"
            color="white"
          />
        </Box>
      </Box>
    </Section>
  );
};
