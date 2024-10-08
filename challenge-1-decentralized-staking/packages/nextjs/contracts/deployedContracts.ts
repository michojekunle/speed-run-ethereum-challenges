/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  11155111: {
    ExampleExternalContract: {
      address: "0x554EfCC101599ECE983c2AAb4C2B73a183BbDA81",
      abi: [
        {
          inputs: [],
          name: "complete",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "completed",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    Staker: {
      address: "0x6FAe6837b758096C22c3f1C45459cfDe0754931F",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "exampleExternalContractAddress",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "ExecutedAlready",
          type: "error",
        },
        {
          inputs: [],
          name: "StakeDoesNotExistWithdrawn",
          type: "error",
        },
        {
          inputs: [],
          name: "StakingDeadlineHasPasssed",
          type: "error",
        },
        {
          inputs: [],
          name: "StakingStillOngoing",
          type: "error",
        },
        {
          inputs: [],
          name: "ThresholdMet",
          type: "error",
        },
        {
          inputs: [],
          name: "ThresholdNotReached",
          type: "error",
        },
        {
          inputs: [],
          name: "TimeNotReachedToExecute",
          type: "error",
        },
        {
          inputs: [],
          name: "YouCannotStakeZeroAmount",
          type: "error",
        },
        {
          inputs: [],
          name: "ZeroAddressDetected",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "_user",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "_amount",
              type: "uint256",
            },
          ],
          name: "Stake",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "_user",
              type: "address",
            },
          ],
          name: "StakeWithdrawn",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "balances",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "deadline",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "exampleExternalContract",
          outputs: [
            {
              internalType: "contract ExampleExternalContract",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "execute",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "stake",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "threshold",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "timeLeft",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
