export type CryptoMonopoly = {
  "version": "0.1.0",
  "name": "crypto_monopoly",
  "instructions": [
    {
      "name": "initGame",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "levelSeed",
          "type": "string"
        },
        {
          "name": "amt",
          "type": "u32"
        }
      ]
    },
    {
      "name": "initPlayer",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "levelSeed",
          "type": "string"
        }
      ]
    },
    {
      "name": "whoseTurn",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "levelSeed",
          "type": "string"
        }
      ],
      "returns": "publicKey"
    },
    {
      "name": "getLastRoll",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "levelSeed",
          "type": "string"
        }
      ],
      "returns": "u8"
    },
    {
      "name": "startTurn",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "levelSeed",
          "type": "string"
        }
      ],
      "returns": {
        "defined": "MoveResult"
      }
    },
    {
      "name": "getPlayer",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "levelSeed",
          "type": "string"
        }
      ],
      "returns": {
        "defined": "Player"
      }
    },
    {
      "name": "buyProp",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "levelSeed",
          "type": "string"
        },
        {
          "name": "pos",
          "type": "u8"
        },
        {
          "name": "payment",
          "type": "u32"
        }
      ]
    },
    {
      "name": "getLoan",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "levelSeed",
          "type": "string"
        },
        {
          "name": "amt",
          "type": "u32"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "gameData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "buyin",
            "type": "u32"
          },
          {
            "name": "turn",
            "type": "u8"
          },
          {
            "name": "props",
            "type": {
              "array": [
                {
                  "defined": "Prop"
                },
                40
              ]
            }
          },
          {
            "name": "players",
            "type": {
              "array": [
                {
                  "defined": "Player"
                },
                4
              ]
            }
          },
          {
            "name": "n",
            "type": "u8"
          },
          {
            "name": "lastRoll",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Player",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "playerId",
            "type": "u8"
          },
          {
            "name": "acct",
            "type": "publicKey"
          },
          {
            "name": "balance",
            "type": "u32"
          },
          {
            "name": "loanAmt",
            "type": "u32"
          },
          {
            "name": "termLeft",
            "type": "u8"
          },
          {
            "name": "pos",
            "type": "u8"
          },
          {
            "name": "solOwed",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "Prop",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u8"
          },
          {
            "name": "price",
            "type": "u32"
          },
          {
            "name": "rent",
            "type": "u16"
          },
          {
            "name": "ownerId",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "Colors",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "None"
          },
          {
            "name": "Brown"
          },
          {
            "name": "Orange"
          },
          {
            "name": "Pink"
          },
          {
            "name": "LightBlue"
          },
          {
            "name": "Red"
          },
          {
            "name": "Yellow"
          },
          {
            "name": "Green"
          },
          {
            "name": "Blue"
          }
        ]
      }
    },
    {
      "name": "State",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Empty"
          },
          {
            "name": "GameSetupProgress"
          },
          {
            "name": "GameSetupComplete"
          },
          {
            "name": "PreRoll"
          },
          {
            "name": "PostRoll"
          },
          {
            "name": "AfterGame"
          }
        ]
      }
    },
    {
      "name": "MoveResult",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Noop"
          },
          {
            "name": "Rent"
          },
          {
            "name": "BuyOption"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "NonEmptyGameState",
      "msg": "Game non-empty state"
    },
    {
      "code": 6001,
      "name": "PlayerIndexNotFound",
      "msg": "Player Index Not Found"
    },
    {
      "code": 6002,
      "name": "NotYourTurn",
      "msg": "Not your turn"
    },
    {
      "code": 6003,
      "name": "InsufficientFunds",
      "msg": "Insufficient Funds or Wrong Amount"
    },
    {
      "code": 6004,
      "name": "WrongLocation",
      "msg": "Wrong Location"
    },
    {
      "code": 6005,
      "name": "AlreadyBorrowing",
      "msg": "Already have a loan"
    },
    {
      "code": 6006,
      "name": "OverLevered",
      "msg": "Over-levered"
    }
  ]
};

export const IDL: CryptoMonopoly = {
  "version": "0.1.0",
  "name": "crypto_monopoly",
  "instructions": [
    {
      "name": "initGame",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "levelSeed",
          "type": "string"
        },
        {
          "name": "amt",
          "type": "u32"
        }
      ]
    },
    {
      "name": "initPlayer",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "levelSeed",
          "type": "string"
        }
      ]
    },
    {
      "name": "whoseTurn",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "levelSeed",
          "type": "string"
        }
      ],
      "returns": "publicKey"
    },
    {
      "name": "getLastRoll",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "levelSeed",
          "type": "string"
        }
      ],
      "returns": "u8"
    },
    {
      "name": "startTurn",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "levelSeed",
          "type": "string"
        }
      ],
      "returns": {
        "defined": "MoveResult"
      }
    },
    {
      "name": "getPlayer",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "levelSeed",
          "type": "string"
        }
      ],
      "returns": {
        "defined": "Player"
      }
    },
    {
      "name": "buyProp",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "levelSeed",
          "type": "string"
        },
        {
          "name": "pos",
          "type": "u8"
        },
        {
          "name": "payment",
          "type": "u32"
        }
      ]
    },
    {
      "name": "getLoan",
      "accounts": [
        {
          "name": "gameData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "levelSeed",
          "type": "string"
        },
        {
          "name": "amt",
          "type": "u32"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "gameData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "buyin",
            "type": "u32"
          },
          {
            "name": "turn",
            "type": "u8"
          },
          {
            "name": "props",
            "type": {
              "array": [
                {
                  "defined": "Prop"
                },
                40
              ]
            }
          },
          {
            "name": "players",
            "type": {
              "array": [
                {
                  "defined": "Player"
                },
                4
              ]
            }
          },
          {
            "name": "n",
            "type": "u8"
          },
          {
            "name": "lastRoll",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Player",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "playerId",
            "type": "u8"
          },
          {
            "name": "acct",
            "type": "publicKey"
          },
          {
            "name": "balance",
            "type": "u32"
          },
          {
            "name": "loanAmt",
            "type": "u32"
          },
          {
            "name": "termLeft",
            "type": "u8"
          },
          {
            "name": "pos",
            "type": "u8"
          },
          {
            "name": "solOwed",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "Prop",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u8"
          },
          {
            "name": "price",
            "type": "u32"
          },
          {
            "name": "rent",
            "type": "u16"
          },
          {
            "name": "ownerId",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "Colors",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "None"
          },
          {
            "name": "Brown"
          },
          {
            "name": "Orange"
          },
          {
            "name": "Pink"
          },
          {
            "name": "LightBlue"
          },
          {
            "name": "Red"
          },
          {
            "name": "Yellow"
          },
          {
            "name": "Green"
          },
          {
            "name": "Blue"
          }
        ]
      }
    },
    {
      "name": "State",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Empty"
          },
          {
            "name": "GameSetupProgress"
          },
          {
            "name": "GameSetupComplete"
          },
          {
            "name": "PreRoll"
          },
          {
            "name": "PostRoll"
          },
          {
            "name": "AfterGame"
          }
        ]
      }
    },
    {
      "name": "MoveResult",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Noop"
          },
          {
            "name": "Rent"
          },
          {
            "name": "BuyOption"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "NonEmptyGameState",
      "msg": "Game non-empty state"
    },
    {
      "code": 6001,
      "name": "PlayerIndexNotFound",
      "msg": "Player Index Not Found"
    },
    {
      "code": 6002,
      "name": "NotYourTurn",
      "msg": "Not your turn"
    },
    {
      "code": 6003,
      "name": "InsufficientFunds",
      "msg": "Insufficient Funds or Wrong Amount"
    },
    {
      "code": 6004,
      "name": "WrongLocation",
      "msg": "Wrong Location"
    },
    {
      "code": 6005,
      "name": "AlreadyBorrowing",
      "msg": "Already have a loan"
    },
    {
      "code": 6006,
      "name": "OverLevered",
      "msg": "Over-levered"
    }
  ]
};
